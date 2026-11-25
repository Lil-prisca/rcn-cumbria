import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, User } from "lucide-react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import {
  formatDate,
  getReadTime,
  paragraphsOf,
  useArticle,
  useRelatedArticles,
} from "../data/articles";

/* ───────── Body helpers ───────── */

// Turns pasted HTML entities like &#39; into real characters.
const clean = (s = "") =>
  s
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .trim();

const SECTION_LABELS = ["Reflect and Pray", "Personal reflection", "Prayer"];

// Decides how each paragraph should be drawn.
const blockType = (text) => {
  if (SECTION_LABELS.includes(text)) return "label";
  if (/^[“"].+[”"]\s*[—-]/.test(text)) return "quote";
  if (/^[••-]\s*\S/.test(text) || /^[-]/.test(text)) return "bullet";
  if (
    /^(\d+\.\s+|Conclusion:)/.test(text) &&
    text.length < 90 &&
    !text.endsWith("?")
  )
    return "heading";
  return "paragraph";
};

const stripBullet = (text) => text.replace(/^[••\-\s]+|^[-]\s*/, "");

function ArticleBody({ paragraphs }) {
  // Index of the first normal paragraph (skips headings, quotes, bullets).
  // That one gets the big red first letter.
  const firstParaIndex = paragraphs.findIndex((raw) => {
    const t = clean(raw);
    return t && blockType(t) === "paragraph";
  });

  return (
    <div className="mx-auto mt-8 w-full max-w-[720px] md:max-w-[800px] space-y-5 text-[17px] leading-[1.8] text-rcn-navy/85">
      {paragraphs.map((raw, i) => {
        const text = clean(raw);
        if (!text) return null;

        switch (blockType(text)) {
          case "heading":
            return (
              <h2
                key={i}
                className="pt-4 text-[24px] font-extrabold leading-snug text-rcn-navy"
              >
                {text}
              </h2>
            );

          case "label":
            return (
              <h3 key={i} className="pt-2 text-[18px] font-bold text-rcn-red">
                {text}
              </h3>
            );

          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-4 border-rcn-red pl-4 text-[17px] italic leading-[1.75] text-rcn-navy/90"
              >
                {text}
              </blockquote>
            );

          case "bullet":
            return (
              <p
                key={i}
                className="flex gap-3 pl-2 text-[17px] leading-[1.75] text-rcn-navy/85"
              >
                <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-rcn-red" />
                <span>{stripBullet(text)}</span>
              </p>
            );

          default:
            return (
              <p
                key={i}
                className={
                  i === firstParaIndex
                    ? "text-[17px] leading-[1.75] text-rcn-navy/85 first-letter:float-left first-letter:mr-2 first-letter:text-[56px] first-letter:font-extrabold first-letter:leading-[0.9] first-letter:text-rcn-red"
                    : "text-[17px] leading-[1.75] text-rcn-navy/85"
                }
              >
                {text}
              </p>
            );
        }
      })}
    </div>
  );
}

/* ───────── Page ───────── */

export default function ArticlePage() {
  const { slug } = useParams();
  // Hooks must run before any early return below.
  const { article, loading } = useArticle(slug);
  const related = useRelatedArticles(article, 3);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    if (loading) {
      document.title = "Loading… — RCN Cumbria";
    } else {
      document.title = article
        ? `${article.title} — RCN Cumbria`
        : "Article not found — RCN Cumbria";
    }
  }, [slug, article, loading]);

  /* ───────── Loading ───────── */
  if (loading) {
    return (
      <main className="min-h-screen bg-rcn-snow font-sans">
        <Navbar />
        <div className="mx-auto max-w-[620px] px-6 pb-24 pt-36 text-center">
          <p className="text-[16px] text-rcn-body">Loading article…</p>
        </div>
        <Footer />
      </main>
    );
  }

  /* ───────── Not found ───────── */
  if (!article) {
    return (
      <main className="min-h-screen bg-rcn-snow font-sans">
        <Navbar />
        <div className="mx-auto max-w-[620px] px-6 pb-24 pt-36 text-center">
          <h1 className="text-[34px] font-extrabold text-rcn-navy">
            Article not found
          </h1>
          <p className="mt-3 text-[16px] text-rcn-body">
            The article you're looking for may have been moved or no longer
            exists.
          </p>
          <Link
            to="/resources"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-rcn-red px-6 py-3 text-[14px] font-semibold text-rcn-white transition hover:bg-rcn-redDark"
          >
            <ArrowLeft size={16} />
            Back to Resources
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const { title, date, author, image, alt } = article;
  const paragraphs = paragraphsOf(article);

  return (
    <main className="min-h-screen bg-rcn-snow font-sans">
      <Navbar />

      <article className="mx-auto max-w-[1200px] px-6 pb-10 pt-28">
        <div className="mx-auto w-full max-w-[720px]">
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-rcn-red transition hover:gap-3"
          >
            <ArrowLeft size={16} />
            Back to Resources
          </Link>

          {/* Header */}
          <header className="mt-6">
            <p className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-wide text-rcn-red">
              From the Pastor's Desk
              <span className="h-px w-10 bg-rcn-red" />
            </p>
            <h1 className="mt-2 text-[34px] font-extrabold leading-[1.15] text-rcn-navy md:text-[44px]">
              {title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-rcn-body">
              <time className="font-semibold tracking-wide text-rcn-faint">
                {formatDate(date)}
              </time>
              {author && (
                <span className="inline-flex items-center gap-1.5">
                  <User size={14} />
                  {author}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} />
                {/* getReadTime already returns "N min read" */}
                {getReadTime(article)}
              </span>
            </div>
          </header>
        </div>

        {/* Cover image */}
        {image && (
          <img
            src={image}
            alt={alt || title}
            className="mx-auto mt-6 block aspect-[5/3] md:aspect-[6/3] w-full max-w-[720px] md:max-w-[800px] rounded-xl object-cover shadow-[0_2px_12px_rgba(15,23,42,0.12)]"
          />
        )}

        {/* Body */}
        <ArticleBody paragraphs={paragraphs} />

        {/* Sign-off */}
        {author && (
          <div className="mx-auto mt-10 flex w-full max-w-[720px] md:max-w-[1040px] items-center gap-4 rounded-xl bg-rcn-ice px-6 py-5">
            <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#d6e5fb] text-rcn-navy">
              <User size={24} />
            </span>
            <div>
              <p className="text-[16px] font-bold text-rcn-navy">{author}</p>
              <p className="text-[13px] text-rcn-body">Pointman, RCN Cumbria</p>
            </div>
          </div>
        )}
      </article>

      {/* ───────── More articles ───────── */}
      {related.length > 0 && (
        <section className="mx-auto max-w-[1040px] px-6 pb-16 lg:px-[43px]">
          <hr className="border-slate-200" />
          <div className="mt-10 flex items-end justify-between gap-4">
            <h2 className="text-[28px] font-extrabold text-rcn-navy">
              More Articles
            </h2>
            <Link
              to="/resources"
              className="hidden items-center gap-2 text-[14px] font-semibold text-rcn-red sm:inline-flex"
            >
              View all <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-6 flex flex-col gap-5 sm:flex-row">
            {related.map((a) => (
              <Link
                key={a.id}
                to={`/resources/${a.slug}`}
                className="group flex-1 overflow-hidden rounded-lg bg-rcn-white shadow-[0_2px_10px_rgba(15,23,42,0.10)] transition hover:-translate-y-0.5"
              >
                <div className="h-36 overflow-hidden">
                  {a.image ? (
                    <img
                      src={a.image}
                      alt={a.alt || a.title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full bg-rcn-ice" />
                  )}
                </div>
                <div className="p-4">
                  <time className="text-[10px] font-medium text-rcn-faint">
                    {formatDate(a.date)}
                  </time>
                  <h3 className="mt-1 text-[16px] font-bold leading-snug text-rcn-navy">
                    {a.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
