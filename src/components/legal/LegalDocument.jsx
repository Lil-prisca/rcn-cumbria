import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { useSection } from "../../content/useSection";
import { parseBody } from "../../content/legalBlocks";
import RichText from "../../content/RichText";

export default function LegalDocument({ sectionKey, numbered = true }) {
  const doc = useSection(sectionKey);
  const soft = { color: "var(--legal-ink-soft, #4a4a4a)" };
  const softer = { color: "var(--legal-ink-soft, #6b6b6b)" };

  return (
    <>
      <Navbar />
      <div
        className="mx-auto mt-10 max-w-3xl px-4 py-16 sm:py-20"
        style={{ color: "var(--legal-ink, #1c1c1c)" }}
      >
        <header
          className="mb-12 border-b pb-8"
          style={{ borderColor: "var(--legal-line, #e2e2e2)" }}
        >
          <h1 className="font-serif text-3xl font-semibold sm:text-4xl">
            {doc.title}
          </h1>
          {doc.lastUpdated && (
            <p className="mt-2 text-sm font-semibold" style={softer}>
              Last updated: {doc.lastUpdated}
            </p>
          )}
          <div className="mt-5 space-y-4 leading-relaxed" style={softer}>
            {(doc.intro || []).map((text, i) => (
              <p key={i}>
                <RichText text={text} />
              </p>
            ))}
          </div>
        </header>

        <div className="space-y-10">
          {(doc.sections || []).map((section, n) => (
            <section key={section.id} id={section.id} className="scroll-mt-8">
              <h2 className="font-serif text-lg font-semibold">
                {numbered ? `${n + 1}. ` : ""}
                {section.title}
              </h2>

              {parseBody(section.body).map((block, i) => {
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
                        <li key={j}>
                          <RichText text={item} />
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="mt-3 leading-relaxed" style={soft}>
                    <RichText text={block.text} />
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
