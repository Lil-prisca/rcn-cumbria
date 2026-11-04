import { useMemo } from "react";
import { useSectionStatus } from "../content/useSection";

export const slugify = (text = "") =>
  String(text)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const slugOf = (a) => a.slug || slugify(a.title) || String(a.id);

export function parseDate(value) {
  if (!value) return null;
  // "2026-11-04" is parsed as local time so the day never shifts
  const d =
    value.length === 10 ? new Date(`${value}T00:00:00`) : new Date(value);
  return Number.isNaN(d.getTime()) ? null : d;
}

export function formatDate(
  value,
  options = { day: "numeric", month: "long", year: "numeric" },
) {
  const d = parseDate(value);
  return d ? d.toLocaleDateString("en-GB", options) : "";
}

export function getReadTime(article) {
  const words = (article.body || "").trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

// body → paragraphs (every line break starts a new paragraph)
export const paragraphsOf = (article) =>
  (article.body || "")
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

export function useArticles() {
  const { data, loading } = useSectionStatus("articles.list");
  const articles = useMemo(
    () =>
      (data.items || [])
        .filter((a) => a.title)
        .map((a) => ({ ...a, slug: slugOf(a) }))
        .sort(
          (a, b) =>
            (parseDate(b.date)?.getTime() ?? 0) -
            (parseDate(a.date)?.getTime() ?? 0),
        ),
    [data.items],
  );
  return { articles, loading };
}

export function useArticle(slug) {
  const { articles, loading } = useArticles();
  return { article: articles.find((a) => a.slug === slug) ?? null, loading };
}

export function useRelatedArticles(article, limit = 3) {
  const { articles } = useArticles();
  return useMemo(
    () => articles.filter((a) => a.id !== article?.id).slice(0, limit),
    [articles, article?.id, limit],
  );
}
export function useLatestArticles(limit) {
  const { articles, loading } = useArticles();
  return { articles: limit ? articles.slice(0, limit) : articles, loading };
}
