import { Resend } from "resend";
import { isEmail } from "../emails/layout.js";
import { contactFormSubmission } from "../emails/contactFormSubmission.js";
import { newFirstTimerSubmission } from "../emails/newFirstTimerSubmission.js";

const resend = new Resend(process.env.RESEND_API_KEY);

const templates = {
  contact: contactFormSubmission,
  firstTimer: newFirstTimerSubmission,
};

const required = {
  contact: ["fromName", "fromEmail", "message"],
  firstTimer: ["fromName", "fromEmail"],
  ministry: ["full_name", "signature"],
};

// Trim strings and cap lengths so nobody can post a huge payload
const clean = (value) => {
  if (typeof value === "string") return value.trim().slice(0, 5000);
  if (Array.isArray(value)) return value.slice(0, 30).map(clean);
  return value;
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { type, data } = req.body || {};
  const build = templates[type];

  if (!build || typeof data !== "object" || data === null) {
    return res.status(400).json({ error: "Invalid request" });
  }

  const cleaned = Object.fromEntries(
    Object.entries(data).map(([key, value]) => [key, clean(value)]),
  );

  const missing = required[type].filter((key) => !cleaned[key]);
  if (missing.length) {
    return res.status(400).json({ error: `Missing: ${missing.join(", ")}` });
  }
  if (type === "ministry" && cleaned.consent !== true) {
    return res.status(400).json({ error: "Consent is required" });
  }

  const { subject, html, replyTo } = build(
    cleaned,
    process.env.SITE_NAME || "RCN Manchester",
  );

  const { error } = await resend.emails.send({
    from: (process.env.FORM_FROM_EMAIL || "")
      .trim()
      .replace(/^["']|["']$/g, ""),
    to: [process.env.FORM_TO_EMAIL],
    ...(isEmail(replyTo) ? { replyTo } : {}),
    subject,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    // TEMPORARY while testing: change back to "Email failed to send" once it works
    return res.status(502).json({ error: error.message });
  }

  return res.status(200).json({ ok: true });
}
