/**
 * Shared helpers for every email template. Plain JavaScript that returns
 * HTML strings, so Vercel functions can run it with no JSX/compile step.
 * Everything a visitor typed goes through esc() before it touches the HTML.
 */

export const colors = {
  page: "#F3F1EC",
  card: "#ffffff",
  cardBorder: "#E6E2D6",
  navy: "#19143E",
  text: "#3A3A3A",
  value: "#1F1F1F",
  label: "#8A8578",
  rule: "#EEEBE2",
  footerBg: "#FAF9F5",
  footerText: "#9C9788",
};

export const esc = (v) =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// For email subjects: no line breaks allowed
export const oneLine = (v) => String(v ?? "").replace(/[\r\n]+/g, " ").trim();

export const isEmail = (v) =>
  typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

export const show = (v) =>
  v === undefined || v === null || String(v).trim() === ""
    ? "Not provided"
    : String(v);

export const yesNo = (v) => {
  if (v === true || v === "true") return "Yes";
  if (v === false || v === "false") return "No";
  return show(v);
};

export const emailLink = (email) =>
  isEmail(email)
    ? `<a href="mailto:${esc(email)}" style="color:${colors.navy};font-size:15px;text-decoration:none;">${esc(email)}</a>`
    : "Not provided";

const labelStyle = `padding:10px 12px 10px 0;border-bottom:1px solid ${colors.rule};color:${colors.label};font-size:12px;text-transform:uppercase;letter-spacing:0.05em;width:130px;vertical-align:top;`;
const valueStyle = `padding:10px 0;border-bottom:1px solid ${colors.rule};color:${colors.value};font-size:15px;line-height:1.6;vertical-align:top;white-space:pre-line;word-break:break-word;`;

// row(): plain text value (escaped).  rowHtml(): value that is already safe HTML.
export const rowHtml = (label, html) =>
  `<tr><td style="${labelStyle}">${esc(label)}</td><td style="${valueStyle}">${html}</td></tr>`;
export const row = (label, value) => rowHtml(label, esc(value));

export const section = (title) =>
  `<tr><td colspan="2" style="padding:22px 0 6px;border-bottom:2px solid ${colors.navy};color:${colors.navy};font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">${esc(title)}</td></tr>`;

export const table = (rows) =>
  `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;"><tbody>${rows.join("")}</tbody></table>`;

export function layout({
  siteName,
  title,
  preview,
  intro,
  formName,
  replyTo,
  replyName,
  content,
}) {
  const replyButton = isEmail(replyTo)
    ? `<tr><td style="padding:24px 32px 32px;"><a href="mailto:${esc(replyTo)}" style="display:inline-block;background-color:${colors.navy};color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;padding:12px 22px;border-radius:8px;">Reply to ${esc(show(replyName))}</a></td></tr>`
    : "";

  const previewBlock = preview
    ? `<div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0;">${esc(preview)}</div>`
    : "";

  const introBlock = intro
    ? `<tr><td style="padding:28px 32px 8px;"><p style="margin:0;color:${colors.text};font-size:15px;line-height:1.6;">${esc(intro)}</p></td></tr>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
</head>
<body style="margin:0;padding:0;background-color:${colors.page};font-family:Arial,Helvetica,sans-serif;">
${previewBlock}
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${colors.page};padding:32px 16px;">
<tbody><tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:${colors.card};border-radius:12px;overflow:hidden;border:1px solid ${colors.cardBorder};">
<tbody>
<tr><td style="background-color:${colors.navy};padding:28px 32px;">
<p style="margin:0;color:#ffffff;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;opacity:0.7;">${esc(siteName)}</p>
<h1 style="margin:8px 0 0;color:#ffffff;font-size:22px;font-weight:700;">${esc(title)}</h1>
</td></tr>
${introBlock}
<tr><td style="padding:16px 32px 8px;">${content}</td></tr>
${replyButton}
<tr><td style="padding:18px 32px;background-color:${colors.footerBg};border-top:1px solid ${colors.rule};">
<p style="margin:0;color:${colors.footerText};font-size:12px;line-height:1.5;">Sent automatically from the "${esc(formName)}" form on the ${esc(siteName)} website.</p>
</td></tr>
</tbody>
</table>
</td></tr></tbody>
</table>
</body>
</html>`;
}
