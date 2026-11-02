import { layout, table, row, rowHtml, emailLink, show, yesNo, oneLine } from "./layout.js";

/**
 * "I'm New" form email.
 * d = { fromName, fromEmail, phone, message, contactConsent }
 */
export function newFirstTimerSubmission(d, siteName) {
  return {
    subject: `New first-timer: ${oneLine(show(d.fromName))}`,
    replyTo: d.fromEmail,
    html: layout({
      siteName,
      title: "New First-Timer Submission",
      preview: `${show(d.fromName)} just filled in the "I'm New" form`,
      intro: `Someone just filled in the "I'm New" form on the website. Here are their details:`,
      formName: "I'm New",
      replyTo: d.fromEmail,
      replyName: d.fromName,
      content: table([
        row("Name", show(d.fromName)),
        rowHtml("Email", emailLink(d.fromEmail)),
        row("Phone", show(d.phone)),
        row("Message", show(d.message)),
        row("Contact Consent", yesNo(d.contactConsent)),
      ]),
    }),
  };
}
