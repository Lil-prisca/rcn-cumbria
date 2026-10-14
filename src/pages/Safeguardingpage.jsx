import { useEffect } from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { useSection } from "../content/useSection";
import { parseBody } from "../content/legalBlocks";
import RichText from "../content/RichText";
import { safeHref } from "../content/safeHref";

const soft = { color: "var(--sg-ink-soft)" };

function Body({ text }) {
  return parseBody(text).map((block, i) => {
    if (block.type === "h3") {
      return (
        <h3 key={i} className="font-serif font-semibold mb-2">
          {block.text}
        </h3>
      );
    }
    if (block.type === "ul") {
      return (
        <ul
          key={i}
          className="list-disc pl-5 space-y-2 mb-3 leading-relaxed"
          style={soft}
        >
          {block.items.map((item, j) => (
            <li key={j}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p key={i} className="leading-relaxed mb-3 last:mb-0" style={soft}>
        <RichText text={block.text} />
      </p>
    );
  });
}

export default function SafeguardingPage() {
  const intro = useSection("safeguarding.intro");
  const urgent = useSection("safeguarding.urgent");
  const commit = useSection("safeguarding.commitments");
  const report = useSection("safeguarding.report");
  const more = useSection("safeguarding.more");
  const policy = useSection("safeguarding.policy");
  const policyHref = safeHref(policy.file);

  useEffect(() => {
    document.title = `${intro.title} — RCN Cumbria`;
  }, [intro.title]);

  return (
    <main
      style={{
        "--sg-ink": "#20293A",
        "--sg-ink-soft": "#5C6577",
        "--sg-bg": "#FBFAF6",
        "--sg-line": "#E3DFD2",
        "--sg-accent": "#8B6A32",
        "--sg-accent-soft": "#F2EAD8",
        "--sg-urgent": "#A23B2E",
        "--sg-urgent-bg": "#FBEDEA",
      }}
      className="min-h-screen"
    >
      <div
        className="max-w-2xl mx-auto px-6 py-25 md:py-24"
        style={{ color: "var(--sg-ink)", backgroundColor: "var(--sg-bg)" }}
      >
        <Navbar />

        {/* Intro */}
        <header className="mb-12">
          <p
            className="text-sm font-medium mb-3"
            style={{ color: "var(--sg-accent)" }}
          >
            {intro.eyebrow}
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-semibold leading-tight mb-6">
            {intro.title}
          </h1>
          {(intro.intro || []).map((text, i) => (
            <p
              key={i}
              className={`leading-relaxed ${i ? "mt-4" : ""}`}
              style={soft}
            >
              <RichText text={text} />
            </p>
          ))}
        </header>

        {/* Immediate danger */}
        <div
          className="rounded-lg p-5 mb-12 border"
          style={{
            backgroundColor: "var(--sg-urgent-bg)",
            borderColor: "var(--sg-urgent)",
          }}
        >
          <h2
            className="font-semibold mb-1.5"
            style={{ color: "var(--sg-urgent)" }}
          >
            {urgent.heading}
          </h2>
          <p
            className="leading-relaxed text-sm"
            style={{ color: "var(--sg-ink)" }}
          >
            <RichText text={urgent.text} linkColor="var(--sg-urgent)" />
          </p>
        </div>

        {/* Our commitment */}
        <section className="mb-12">
          <h2 className="font-serif text-xl font-semibold mb-4">
            {commit.heading}
          </h2>
          <p className="leading-relaxed mb-5" style={soft}>
            <RichText text={commit.intro} />
          </p>
          <ul className="space-y-3">
            {(commit.items || []).map((item) => (
              <li key={item.id} className="flex gap-3 leading-relaxed">
                <span
                  aria-hidden="true"
                  className="mt-2.5 w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: "var(--sg-accent)" }}
                />
                <span>
                  <RichText text={item.text} />
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Reporting a concern */}
        <section className="mb-12">
          <h2 className="font-serif text-xl font-semibold mb-4">
            {report.heading}
          </h2>
          <p className="leading-relaxed mb-5" style={soft}>
            <RichText text={report.intro} />
          </p>

          <div
            className="rounded-lg p-5 border grid gap-4 sm:grid-cols-2"
            style={{
              backgroundColor: "var(--sg-accent-soft)",
              borderColor: "var(--sg-line)",
            }}
          >
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-wide mb-1"
                style={{ color: "var(--sg-accent)" }}
              >
                {report.teamLabel}
              </p>
              {(report.team || []).map((name, i) => (
                <p key={i}>{name}</p>
              ))}
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-wide mb-1"
                style={{ color: "var(--sg-accent)" }}
              >
                {report.emailLabel}
              </p>
              <p style={soft}>{report.email}</p>
            </div>
          </div>

          <p className="leading-relaxed mt-5 text-sm" style={soft}>
            <RichText text={report.note} />
          </p>
        </section>

        {/* Other sections */}
        {(more.items || []).map((section) => (
          <section key={section.id} className="mb-12">
            <h2 className="font-serif text-xl font-semibold mb-4">
              {section.title}
            </h2>
            <Body text={section.body} />
          </section>
        ))}

        {/* Full policy link */}
        <section
          className="rounded-lg p-6 border text-center"
          style={{ borderColor: "var(--sg-line)" }}
        >
          <h2 className="font-serif text-lg font-semibold mb-2">
            {policy.heading}
          </h2>
          <p className="leading-relaxed mb-5 text-sm" style={soft}>
            <RichText text={policy.text} />
          </p>
          {policyHref && (
            <a
              href={policyHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 rounded-md font-medium text-sm text-white"
              style={{ backgroundColor: "var(--sg-accent)" }}
            >
              {policy.buttonLabel}
            </a>
          )}
        </section>
      </div>

      <Footer />
    </main>
  );
}
