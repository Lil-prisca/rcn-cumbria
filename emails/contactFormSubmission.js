import { layout, table, row, rowHtml, emailLink, show, yesNo, oneLine } from "./layout.js";

/**
 * "Contact" form email.
 * d = { fromName, fromEmail, phone, subject, message, contactConsent }
 */
export function contactFormSubmission(d, siteName) {
  return {
    subject: `Contact form: ${oneLine(show(d.subject))} - ${oneLine(show(d.fromName))}`,
    replyTo: d.fromEmail,
    html: layout({
      siteName,
      title: "Contact Form Submission",
      preview: `${show(d.fromName)} sent a message: ${show(d.subject)}`,
      intro:
        'Someone just filled in the "Contact" form on the website. Here are their details and what they request:',
      formName: "Contact",
      replyTo: d.fromEmail,
      replyName: d.fromName,
      content: table([
        row("Name", show(d.fromName)),
        rowHtml("Email", emailLink(d.fromEmail)),
        row("Phone", show(d.phone)),
        row("Subject", show(d.subject)),
        row("Message", show(d.message)),
        row("Contact Consent", yesNo(d.contactConsent)),
      ]),
    }),
  };
}
