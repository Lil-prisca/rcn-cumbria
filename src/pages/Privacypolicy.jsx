import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const INTRO = [
  "Remnant Christian Network Manchester (“RCN Manchester”, “we”, “us” or “our”) respects your privacy and is committed to protecting your personal information.",
  "This Privacy Policy explains how we collect, use, store and protect personal data when you visit our website, contact us, sign up to receive information, attend or express an interest in our activities, submit a prayer request, or otherwise interact with RCN Manchester.",
  "This policy should be read alongside any additional privacy information we may provide when collecting personal data for a specific purpose.",
];

const SECTIONS = [
  {
    id: "who-we-are",
    title: "1. Who we are",
    blocks: [
      {
        type: "p",
        text: "Remnant Christian Network Manchester is a Christian ministry operating in the United Kingdom.",
      },
      {
        type: "p",
        text: "For the purposes of UK data protection law, RCN Manchester is responsible for the personal data covered by this Privacy Policy where we determine how and why that information is processed.",
      },
      {
        type: "p",
        text: "If you have any questions about this policy or how we use your personal data, please contact:",
      },
      { type: "p", text: "**Email:** rcnmanchester2024@gmail.com" },
    ],
  },
  {
    id: "data-we-collect",
    title: "2. Personal data we may collect",
    blocks: [
      {
        type: "p",
        text: "The personal information we collect depends on how you interact with us and may include:",
      },
      {
        type: "ul",
        items: [
          "Your name",
          "Email address",
          "Telephone or WhatsApp number",
          "Postcode or general location",
          "Information you provide when registering for or enquiring about an event or activity",
          "Your communication preferences",
          "Areas of ministry or activities in which you have expressed an interest",
          "Messages, enquiries, feedback or prayer requests you send to us",
          "Photographs or video recordings taken at our events, where applicable",
          "Technical information necessary for the operation and security of our website",
        ],
      },
      {
        type: "p",
        text: "We aim to collect only information that is reasonably necessary for the relevant purpose.",
      },
      { type: "h3", text: "Special category data" },
      {
        type: "p",
        text: "Because we are a Christian ministry, some information you provide to us may reveal your religious beliefs. Prayer requests may also sometimes contain information concerning health or other sensitive personal circumstances.",
      },
      {
        type: "p",
        text: "Such information may constitute **special category personal data** under UK data protection law.",
      },
      {
        type: "p",
        text: "Where we process special category data, we will ensure that an appropriate legal basis and additional condition for processing applies. We will treat prayer requests and other sensitive information with particular care and limit access to those who reasonably need it for the relevant ministry purpose.",
      },
      {
        type: "p",
        text: "Please avoid including unnecessary sensitive personal information about yourself or another person when submitting a prayer request or enquiry.",
      },
    ],
  },
  {
    id: "how-we-collect",
    title: "3. How we collect your personal data",
    blocks: [
      { type: "p", text: "We may collect information:" },
      {
        type: "ul",
        items: [
          "Directly from you when you complete a form on our website",
          "When you contact us by email, telephone, WhatsApp or another communication channel",
          "When you register for or participate in one of our gatherings, Bible studies, prayer meetings, outreach activities or other events",
          "When you subscribe to ministry updates",
          "When you voluntarily submit a prayer request or enquiry",
          "Through essential technologies required for our website to operate properly",
        ],
      },
      {
        type: "p",
        text: "Where third-party services or platforms are used, those providers may also process personal information in accordance with their own privacy policies.",
      },
    ],
  },
  {
    id: "how-we-use",
    title: "4. How and why we use your personal data",
    blocks: [
      { type: "p", text: "We may use your personal information to:" },
      {
        type: "ul",
        items: [
          "Respond to enquiries and messages",
          "Respond appropriately to prayer requests",
          "Manage registrations for meetings, events and ministry activities",
          "Communicate important information about activities for which you have registered",
          "Send ministry news and updates where we have an appropriate lawful basis",
          "Manage our relationship with members, attendees, volunteers and supporters",
          "Maintain the security and proper operation of our website",
          "Comply with legal and regulatory obligations",
          "Protect the rights, safety and legitimate interests of RCN Manchester and those who interact with us",
        ],
      },
      {
        type: "p",
        text: "Depending on the circumstances, our lawful basis for processing personal data may include:",
      },
      {
        type: "p",
        text: "**Consent** – where you have given us clear permission to use your information for a particular purpose.",
      },
      {
        type: "p",
        text: "**Legitimate interests** – where processing is reasonably necessary for the operation and administration of our ministry and those interests are not overridden by your rights and interests.",
      },
      {
        type: "p",
        text: "**Legal obligation** – where we need to process information to comply with the law.",
      },
      {
        type: "p",
        text: "**Contract** – where processing is necessary in connection with an agreement or arrangement with you.",
      },
      {
        type: "p",
        text: "Where special category data is involved, we will also identify an appropriate condition for processing it as required by UK data protection law.",
      },
      {
        type: "p",
        text: "Where we rely on consent, you may withdraw your consent at any time.",
      },
      {
        type: "p",
        text: "We do not sell your personal information or provide it to third parties for their own commercial marketing purposes.",
      },
    ],
  },
  {
    id: "ministry-communications",
    title: "5. Ministry communications and updates",
    blocks: [
      {
        type: "p",
        text: "If you sign up to receive ministry news or updates, we may use the contact details you provide to send you information about relevant meetings, Bible studies, prayer gatherings, outreach activities and other RCN Manchester activities.",
      },
      {
        type: "p",
        text: "Where consent is required, we will only send these communications where you have chosen to receive them.",
      },
      {
        type: "p",
        text: "You may unsubscribe or change your communication preferences at any time by using any unsubscribe facility provided or by contacting us at **rcnmanchester2024@gmail.com**.",
      },
    ],
  },
  {
    id: "prayer-requests",
    title: "6. Prayer requests",
    blocks: [
      {
        type: "p",
        text: "Information submitted through a prayer request may contain personal or sensitive information.",
      },
      {
        type: "p",
        text: "Prayer requests will only be used for appropriate ministry and pastoral purposes and will be accessible only to people who reasonably need access for those purposes.",
      },
      {
        type: "p",
        text: "Please do not provide sensitive information about another identifiable person unless you have an appropriate reason or permission to do so.",
      },
      {
        type: "p",
        text: "Where you ask us to share a prayer request more widely, we will take reasonable steps to respect the preferences you have communicated to us.",
      },
    ],
  },
  {
    id: "photographs",
    title: "7. Photographs and recordings",
    blocks: [
      {
        type: "p",
        text: "Photographs or video recordings may occasionally be taken during RCN Manchester gatherings and events for ministry communications, historical records or appropriate promotional purposes.",
      },
      {
        type: "p",
        text: "Where appropriate, we will provide notice that photography or filming is taking place and will take reasonable steps to respect requests from individuals who do not wish to be photographed or recorded.",
      },
      {
        type: "p",
        text: "Where consent is legally required for a particular use, we will seek that consent.",
      },
      {
        type: "p",
        text: "We take additional care regarding photographs and recordings involving children and young people.",
      },
    ],
  },
  {
    id: "children",
    title: "8. Children and young people",
    blocks: [
      {
        type: "p",
        text: "Some RCN Manchester activities may involve children and young people.",
      },
      {
        type: "p",
        text: "Where we collect personal information relating to children, we will take additional care to ensure that the information is collected and used appropriately, securely and in accordance with applicable data protection and safeguarding requirements.",
      },
      {
        type: "p",
        text: "Where necessary, information will be collected from or with the involvement of a parent, guardian or other person with appropriate responsibility for the child.",
      },
    ],
  },
  {
    id: "sharing",
    title: "9. Who we share your personal data with",
    blocks: [
      { type: "p", text: "We do not sell your personal information." },
      {
        type: "p",
        text: "We may share personal data where reasonably necessary with:",
      },
      {
        type: "ul",
        items: [
          "Authorised RCN Manchester leaders, volunteers or ministry personnel who require access for their responsibilities",
          "Trusted service providers that help us operate our website, communications, registration systems or other administrative functions",
          "Professional advisers where necessary",
          "Government authorities, regulators, courts or law-enforcement bodies where disclosure is required by law or is otherwise legally permitted",
        ],
      },
      {
        type: "p",
        text: "Where service providers process personal data on our behalf, we take reasonable steps to ensure appropriate data protection arrangements are in place.",
      },
    ],
  },
  {
    id: "international-transfers",
    title: "10. International transfers",
    blocks: [
      {
        type: "p",
        text: "Some technology and communication providers we use may process or store information outside the United Kingdom.",
      },
      {
        type: "p",
        text: "Where personal data is transferred internationally, we will take reasonable steps to ensure that the transfer is made in accordance with applicable UK data protection requirements and that appropriate safeguards are used where required.",
      },
    ],
  },
  {
    id: "retention",
    title: "11. How long we keep your personal data",
    blocks: [
      {
        type: "p",
        text: "We keep personal data only for as long as reasonably necessary for the purpose for which it was collected, including any legal, accounting, safeguarding or administrative requirements.",
      },
      {
        type: "p",
        text: "Retention periods will vary depending on the type of information and why it is held.",
      },
      { type: "p", text: "For example:" },
      {
        type: "ul",
        items: [
          "General enquiries may normally be retained for up to 12 months after the matter has been concluded, unless there is a reason to keep them longer.",
          "Mailing-list information may be retained until you unsubscribe or we determine that it is no longer required.",
          "Event registration information will be retained only for as long as reasonably necessary for the event and any associated administrative requirements.",
          "Prayer requests will not be retained longer than reasonably necessary for the purpose for which they were provided.",
        ],
      },
      {
        type: "p",
        text: "When information is no longer required, we will securely delete or anonymise it where appropriate.",
      },
    ],
  },
  {
    id: "cookies",
    title: "12. Cookies and website technologies",
    blocks: [
      {
        type: "p",
        text: "Our website may use cookies or similar technologies that are necessary for it to function properly.",
      },
      {
        type: "p",
        text: "Where we use non-essential cookies, such as analytics or other tracking technologies, we will provide appropriate information and obtain consent where required by law.",
      },
      {
        type: "p",
        text: "Further information about the cookies used on our website may be provided through our cookie notice or consent mechanism.",
      },
    ],
  },
  {
    id: "security",
    title: "13. How we protect your information",
    blocks: [
      {
        type: "p",
        text: "We take reasonable technical and organisational measures to protect personal data against accidental loss, misuse, unauthorised access, alteration or disclosure.",
      },
      {
        type: "p",
        text: "These measures may include restricting access to personal information, using appropriate security controls and limiting the amount of personal information we collect and retain.",
      },
      {
        type: "p",
        text: "Although we take reasonable precautions, no internet-based system can be guaranteed to be completely secure.",
      },
    ],
  },
  {
    id: "your-rights",
    title: "14. Your data protection rights",
    blocks: [
      {
        type: "p",
        text: "Depending on the circumstances, you may have the right to:",
      },
      {
        type: "ul",
        items: [
          "Request access to the personal data we hold about you",
          "Ask us to correct inaccurate or incomplete information",
          "Ask us to delete your personal information",
          "Ask us to restrict how your information is used",
          "Object to certain types of processing",
          "Request the transfer of your information in certain circumstances",
          "Withdraw consent where we rely on consent",
          "Complain about how your personal information has been handled",
        ],
      },
      { type: "p", text: "Not all rights apply in every circumstance." },
      {
        type: "p",
        text: "To exercise any of these rights, please contact us at **rcnmanchester2024@gmail.com**.",
      },
      {
        type: "p",
        text: "We will normally respond to a valid request within one month, in accordance with applicable data protection law.",
      },
      {
        type: "p",
        text: "You also have the right to complain to the **Information Commissioner's Office (ICO)**, the UK's data protection regulator.",
      },
    ],
  },
  {
    id: "third-party",
    title: "15. Third-party websites and services",
    blocks: [
      {
        type: "p",
        text: "Our website may contain links to external websites, social media platforms or other third-party services.",
      },
      {
        type: "p",
        text: "We are not responsible for the privacy practices of external organisations. We encourage you to review their privacy information before providing personal data through their services.",
      },
    ],
  },
  {
    id: "changes",
    title: "16. Changes to this Privacy Policy",
    blocks: [
      {
        type: "p",
        text: "We may update this Privacy Policy from time to time to reflect changes to our activities, website, technology or legal obligations.",
      },
      {
        type: "p",
        text: "The latest version will be published on this page and the “Last updated” date will be amended accordingly.",
      },
    ],
  },
  {
    id: "contact",
    title: "17. Contact us",
    blocks: [
      {
        type: "p",
        text: "If you have any questions, concerns or requests relating to this Privacy Policy or the way we handle your personal information, please contact:",
      },
      {
        type: "p",
        text: "**Remnant Christian Network Manchester**\n**Email:** rcnmanchester2024@gmail.com",
      },
    ],
  },
];

const INLINE_PATTERN =
  /(\*\*[^*]+\*\*|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g;
const EMAIL_PATTERN = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

/** Renders **bold**, auto-linked emails, and line breaks (\n) inside text. */
function renderInline(text) {
  return text.split("\n").flatMap((line, lineIndex, lines) => {
    const parts = line.split(INLINE_PATTERN).filter(Boolean);
    const nodes = parts.map((part, i) => {
      const key = `${lineIndex}-${i}`;
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={key}>{renderInline(part.slice(2, -2))}</strong>;
      }
      if (EMAIL_PATTERN.test(part)) {
        return (
          <a
            key={key}
            href={`mailto:${part}`}
            className="font-medium underline underline-offset-2"
            style={{ color: "var(--pp-accent, #7a3b2e)" }}
          >
            {part}
          </a>
        );
      }
      return part;
    });
    if (lineIndex < lines.length - 1)
      nodes.push(<br key={`br-${lineIndex}`} />);
    return nodes;
  });
}

function PrivacyPolicy({ lastUpdated = "September 2026" }) {
  const soft = { color: "var(--pp-ink-soft, #4a4a4a)" };

  return (
    <>
      <Navbar />
      <div
        className="mx-auto mt-10 max-w-3xl px-4 py-16 sm:py-20"
        style={{ color: "var(--pp-ink, #1c1c1c)" }}
      >
        <header
          className="mb-12 border-b pb-8"
          style={{ borderColor: "var(--pp-line, #e2e2e2)" }}
        >
          <h1 className="font-serif text-3xl font-semibold sm:text-4xl">
            Privacy Policy
          </h1>
          {lastUpdated && (
            <p
              className="mt-2 text-sm font-semibold"
              style={{ color: "var(--pp-ink-soft, #6b6b6b)" }}
            >
              Last updated: {lastUpdated}
            </p>
          )}
          <div
            className="mt-5 space-y-4 leading-relaxed"
            style={{ color: "var(--pp-ink-soft, #6b6b6b)" }}
          >
            {INTRO.map((text, i) => (
              <p key={i}>{renderInline(text)}</p>
            ))}
          </div>
        </header>

        <div className="space-y-10">
          {SECTIONS.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-8">
              <h2 className="font-serif text-lg font-semibold">
                {section.title}
              </h2>

              {section.blocks.map((block, i) => {
                if (block.type === "h3") {
                  return (
                    <h3
                      key={i}
                      className="mt-6 font-serif text-base font-semibold"
                    >
                      {block.text}
                    </h3>
                  );
                }
                if (block.type === "ul") {
                  return (
                    <ul
                      key={i}
                      className="mt-3 list-disc space-y-2 pl-5 leading-relaxed"
                      style={soft}
                    >
                      {block.items.map((item, j) => (
                        <li key={j}>{renderInline(item)}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="mt-3 leading-relaxed" style={soft}>
                    {renderInline(block.text)}
                  </p>
                );
              })}
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
