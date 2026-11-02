import {
  layout,
  table,
  row,
  rowHtml,
  section,
  emailLink,
  show,
  yesNo,
  oneLine,
} from "./layout.js";

/**
 * Ministry Information Form email.
 * d = the form's state object (full_name, gender, date_of_birth,
 * serve_interests as an array, consent as a boolean, and so on).
 */
export function ministryInformation(d, siteName) {
  const interests = [
    ...(Array.isArray(d.serve_interests) ? d.serve_interests : []),
    d.serve_other && `Other: ${d.serve_other}`,
  ]
    .filter(Boolean)
    .join(", ");

  const heardAbout =
    d.heard_about === "Other" && d.heard_about_other
      ? `Other: ${d.heard_about_other}`
      : d.heard_about;

  return {
    subject: `New Ministry Information Form - ${oneLine(show(d.full_name))}`,
    replyTo: d.email,
    html: layout({
      siteName,
      title: "Ministry Information Form",
      preview: `New ministry information form from ${show(d.full_name)}`,
      intro:
        "Someone just completed the Ministry Information Form on the website. Here is what they shared:",
      formName: "Ministry Information",
      replyTo: d.email,
      replyName: d.full_name,
      content: table([
        section("Personal Information"),
        row("Full Name", show(d.full_name)),
        row("Gender", show(d.gender)),
        row("Date of Birth", show(d.date_of_birth)),
        row("Marital Status", show(d.marital_status)),
        row("Nationality", show(d.nationality)),
        row("Occupation", show(d.occupation)),

        section("Contact Details"),
        row("Home Address", show(d.home_address)),
        row("Phone", show(d.phone)),
        rowHtml("Email", emailLink(d.email)),

        section("Church / Ministry Information"),
        row("Status", show(d.member_type)),
        row("Date Joined", show(d.date_joined)),
        row("Previous Church", show(d.previous_church)),
        row("Heard About Us", show(heardAbout)),

        section("Ministry Interests"),
        row("Would Like To Serve In", interests || "None selected"),

        section("Spiritual Information"),
        row("Accepted Jesus Christ", yesNo(d.accepted_christ)),
        row("Wants Counselling", yesNo(d.wants_counselling)),
        row("Prayer Requests", show(d.prayer_requests)),

        section("Emergency Contact"),
        row("Name", show(d.emergency_name)),
        row("Relationship", show(d.emergency_relationship)),
        row("Phone", show(d.emergency_phone)),

        section("Consent"),
        row("Consent Given", yesNo(d.consent)),
        row("Signature", show(d.signature)),
        row("Date", show(d.signed_on)),
      ]),
    }),
  };
}
