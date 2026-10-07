import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const INTRO = [
  "Welcome to the website of **Remnant Christian Network Manchester (“RCN Manchester”, “we”, “us” or “our”)**.",
  "These Terms of Use explain the conditions that apply when you access or use our website.",
  "By using this website, you agree to these Terms. If you do not agree with them, please do not use the website.",
];

const SECTIONS = [
  {
    id: "about-us",
    title: "1. About us",
    blocks: [
      {
        type: "p",
        text: "Remnant Christian Network Manchester is a Christian ministry operating in the United Kingdom.",
      },
      {
        type: "p",
        text: "This website provides information about our ministry, gatherings, prayer meetings, Bible studies, outreach activities and other events and allows visitors to contact or interact with us through available forms and features.",
      },
      {
        type: "p",
        text: "If you have questions about these Terms, you can contact us at:",
      },
      { type: "p", text: "**Email:** rcnmanchester2024@gmail.com" },
    ],
  },
  {
    id: "using-our-website",
    title: "2. Using our website",
    blocks: [
      {
        type: "p",
        text: "You may use this website for lawful personal and informational purposes.",
      },
      { type: "p", text: "You must not:" },
      {
        type: "ul",
        items: [
          "Use the website in a way that violates applicable law or regulation",
          "Attempt to gain unauthorised access to the website, its servers or connected systems",
          "Introduce viruses, malware or other harmful technology",
          "Interfere with or disrupt the operation or security of the website",
          "Impersonate another person or provide deliberately false or misleading information",
          "Use our forms or communication facilities to send unlawful, abusive, threatening, discriminatory or harmful material",
          "Use information obtained through the website for fraudulent, unlawful or unauthorised commercial purposes",
        ],
      },
      {
        type: "p",
        text: "We may restrict or prevent access to the website where reasonably necessary to protect the website, our ministry or other users.",
      },
    ],
  },
  {
    id: "website-content",
    title: "3. Website content",
    blocks: [
      {
        type: "p",
        text: "We aim to ensure that information published on our website is useful and reasonably accurate. However, website content is provided primarily for general information and ministry purposes.",
      },
      {
        type: "p",
        text: "We may update, correct, remove or change content at any time.",
      },
      {
        type: "p",
        text: "While we take reasonable care with information published on the website, we cannot guarantee that all information will always be complete, accurate or up to date.",
      },
    ],
  },
  {
    id: "spiritual-information",
    title: "4. Spiritual information and professional advice",
    blocks: [
      {
        type: "p",
        text: "The website may contain Bible teaching, Christian resources, testimonies, prayer information and other spiritual or ministry-related content.",
      },
      {
        type: "p",
        text: "Such content is provided for Christian ministry and general informational purposes.",
      },
      {
        type: "p",
        text: "Nothing on this website is intended to substitute for professional medical, legal, financial, psychological or other regulated professional advice.",
      },
      {
        type: "p",
        text: "Where you require professional assistance, you should seek advice from an appropriately qualified professional.",
      },
    ],
  },
  {
    id: "prayer-requests",
    title: "5. Prayer requests and pastoral communications",
    blocks: [
      {
        type: "p",
        text: "Our website may allow you to submit prayer requests, enquiries or other communications.",
      },
      {
        type: "p",
        text: "Prayer requests and pastoral communications will be handled in accordance with our Privacy Policy and our applicable ministry practices.",
      },
      {
        type: "p",
        text: "Please avoid including unnecessary sensitive personal information about yourself or another person.",
      },
      {
        type: "p",
        text: "Submitting a prayer request does not guarantee a particular response, outcome or timeframe. Prayer and spiritual support offered through RCN Manchester should not be treated as a substitute for emergency, medical, mental-health or other professional services where these are required.",
      },
      {
        type: "p",
        text: "If you believe that you or another person is in immediate danger, you should contact the appropriate emergency services.",
      },
    ],
  },
  {
    id: "events-and-gatherings",
    title: "6. Events and gatherings",
    blocks: [
      {
        type: "p",
        text: "Information about prayer meetings, Bible studies, services, conferences, outreach activities and other gatherings may be published on this website.",
      },
      {
        type: "p",
        text: "Event details, including dates, times, speakers, venues and programmes, may occasionally change.",
      },
      {
        type: "p",
        text: "We will take reasonable steps to provide accurate and updated information, but events may be amended, postponed or cancelled where circumstances require.",
      },
      {
        type: "p",
        text: "Registration for an event does not necessarily guarantee admission where capacity, safeguarding, safety or other reasonable restrictions apply.",
      },
      {
        type: "p",
        text: "Anyone attending an RCN Manchester activity is expected to behave respectfully and to comply with reasonable venue, safety and safeguarding requirements.",
      },
      {
        type: "p",
        text: "Additional terms may apply to particular events, where appropriate.",
      },
    ],
  },
  {
    id: "children-and-safeguarding",
    title: "7. Children and safeguarding",
    blocks: [
      {
        type: "p",
        text: "RCN Manchester is committed to providing an appropriate and safe environment for children, young people and vulnerable individuals participating in our activities.",
      },
      {
        type: "p",
        text: "Where an activity involves children or young people, additional registration, consent, supervision or safeguarding requirements may apply.",
      },
      {
        type: "p",
        text: "Information provided through this website should not be used to bypass any safeguarding procedures or requirements applicable to an RCN Manchester activity.",
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "8. Intellectual property",
    blocks: [
      {
        type: "p",
        text: "Unless otherwise stated, the content created for this website, including original text, graphics, photographs, logos, branding and website materials, belongs to RCN Manchester, Remnant Christian Network, or the relevant copyright owner and is protected by applicable intellectual property laws.",
      },
      {
        type: "p",
        text: "You may view, download or print reasonable extracts from the website for your own personal, non-commercial use.",
      },
      {
        type: "p",
        text: "You must not reproduce, modify, republish, distribute, sell or commercially exploit our original website content without appropriate permission.",
      },
      { type: "h3", text: "Bible quotations and third-party material" },
      {
        type: "p",
        text: "Bible translations, photographs, videos, music, logos and other third-party materials appearing on the website may belong to their respective copyright owners and may be subject to separate licence terms.",
      },
      {
        type: "p",
        text: "Nothing in these Terms transfers ownership of third-party intellectual property to RCN Manchester.",
      },
    ],
  },
  {
    id: "information-you-submit",
    title: "9. Information you submit",
    blocks: [
      {
        type: "p",
        text: "Where you submit an enquiry, prayer request, feedback or other information through our website, you remain responsible for the information you provide.",
      },
      { type: "p", text: "You should not knowingly submit content that:" },
      {
        type: "ul",
        items: [
          "Is unlawful, threatening or abusive",
          "Infringes another person's intellectual property or privacy rights",
          "Contains malicious software or harmful code",
          "Deliberately provides false or misleading information",
          "Contains another person's sensitive personal information without an appropriate reason for providing it",
        ],
      },
      {
        type: "p",
        text: "We will use personal information submitted through the website in accordance with our Privacy Policy.",
      },
      {
        type: "p",
        text: "Submitting a prayer request, enquiry or other personal communication does **not** give us unrestricted permission to publish or publicly display it.",
      },
    ],
  },
  {
    id: "links-to-other-websites",
    title: "10. Links to other websites",
    blocks: [
      {
        type: "p",
        text: "Our website may contain links to websites, social media platforms or services operated by other organisations.",
      },
      {
        type: "p",
        text: "These links may be provided for information or convenience. Unless expressly stated otherwise, we do not control third-party websites and are not responsible for their content, availability, security or privacy practices.",
      },
      {
        type: "p",
        text: "You should review the applicable terms and privacy information of any external service you choose to use.",
      },
    ],
  },
  {
    id: "availability-and-security",
    title: "11. Website availability and security",
    blocks: [
      {
        type: "p",
        text: "We aim to keep the website available and secure but cannot guarantee that it will always be available without interruption or error.",
      },
      {
        type: "p",
        text: "We may temporarily suspend, restrict or change access to all or part of the website for maintenance, security, technical or operational reasons.",
      },
      {
        type: "p",
        text: "You are responsible for using appropriate security measures on your own device when accessing the internet.",
      },
    ],
  },
  {
    id: "our-responsibility",
    title: "12. Our responsibility to you",
    blocks: [
      {
        type: "p",
        text: "Nothing in these Terms excludes or limits liability where it would be unlawful for us to do so, including liability that cannot legally be excluded under the laws of England and Wales.",
      },
      {
        type: "p",
        text: "To the extent permitted by law, RCN Manchester will not be responsible for losses that were not reasonably foreseeable as a result of your use of this website or for losses arising from circumstances outside our reasonable control.",
      },
      {
        type: "p",
        text: "The website is provided primarily for personal, non-commercial and ministry-related use. We are not responsible for business losses resulting from reliance on this website.",
      },
      {
        type: "p",
        text: "Nothing in these Terms affects any statutory rights you may have under applicable law.",
      },
    ],
  },
  {
    id: "privacy",
    title: "13. Privacy",
    blocks: [
      {
        type: "p",
        text: "Your use of the website may involve the collection and processing of personal information.",
      },
      {
        type: "p",
        text: "Please read our **Privacy Policy** for information about what personal data we collect, why we collect it, how it is used and your rights under UK data protection law.",
      },
    ],
  },
  {
    id: "changes",
    title: "14. Changes to these Terms",
    blocks: [
      {
        type: "p",
        text: "We may update these Terms from time to time, including where our website, ministry activities or legal requirements change.",
      },
      {
        type: "p",
        text: "The latest version will be published on this page and the “Last updated” date will be amended accordingly.",
      },
      {
        type: "p",
        text: "Your continued use of the website following an update will be subject to the Terms in force at the time of your use.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "15. Governing law",
    blocks: [
      {
        type: "p",
        text: "These Terms and your use of this website are governed by the laws of England and Wales.",
      },
      {
        type: "p",
        text: "The courts of England and Wales will have jurisdiction in relation to disputes arising from these Terms, subject to any rights you may have under applicable law to bring proceedings elsewhere.",
      },
    ],
  },
  {
    id: "contact",
    title: "16. Contact us",
    blocks: [
      {
        type: "p",
        text: "If you have any questions about these Terms or the website, please contact:",
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
            style={{ color: "var(--tou-accent, #7a3b2e)" }}
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

function TermsOfUse() {
  const lastUpdated = "September 2026";
  const soft = { color: "var(--tou-ink-soft, #4a4a4a)" };

  return (
    <>
      <Navbar />
      <div
        className="mt-10 mx-auto max-w-3xl px-4 py-16 sm:py-20"
        style={{ color: "var(--tou-ink, #1c1c1c)" }}
      >
        <header
          className="mb-12 border-b pb-8"
          style={{ borderColor: "var(--tou-line, #e2e2e2)" }}
        >
          <h1 className="font-serif text-3xl font-semibold sm:text-4xl">
            Website Terms of Use
          </h1>
          <p
            className="mt-2 text-sm font-semibold"
            style={{ color: "var(--tou-ink-soft, #6b6b6b)" }}
          >
            Last updated: {lastUpdated}
          </p>
          {INTRO.map((text, i) => (
            <p
              key={i}
              className="mt-4 leading-relaxed"
              style={{ color: "var(--tou-ink-soft, #6b6b6b)" }}
            >
              {renderInline(text)}
            </p>
          ))}
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

export default TermsOfUse;
