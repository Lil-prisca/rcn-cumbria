import { Fragment } from "react";
import { safeHref } from "./safeHref";

const PATTERN =
  /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g;
const EMAIL = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const LINK = /^\[([^\]]+)\]\(([^)]+)\)$/;

export default function RichText({
  text = "",
  linkColor = "var(--legal-accent, #7a3b2e)",
}) {
  const lines = text.split("\n");
  return lines.map((line, li) => (
    <Fragment key={li}>
      {line
        .split(PATTERN)
        .filter(Boolean)
        .map((part, i) => {
          if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
            return (
              <strong key={i}>
                <RichText text={part.slice(2, -2)} linkColor={linkColor} />
              </strong>
            );
          }
          const link = part.match(LINK);
          if (link) {
            const href = safeHref(link[2]);
            return href ? (
              <a
                key={i}
                href={href}
                className="font-medium underline underline-offset-2"
                style={{ color: linkColor }}
              >
                {link[1]}
              </a>
            ) : (
              link[1]
            );
          }
          if (EMAIL.test(part)) {
            return (
              <a
                key={i}
                href={`mailto:${part}`}
                className="font-medium underline underline-offset-2"
                style={{ color: linkColor }}
              >
                {part}
              </a>
            );
          }
          return part;
        })}
      {li < lines.length - 1 && <br />}
    </Fragment>
  ));
}
