// Dummy articles — replace with your CMS / API data later.
// Keep the same shape and nothing else in the app needs to change.
// Suggested location: src/content/articles.js

const PLACEHOLDER_IMAGE =
  "https://images.pexels.com/photos/20620850/pexels-photo-20620850.jpeg?auto=compress&cs=tinysrgb&w=1200";

const rawArticles = [
  {
    id: 1,
    slug: "standing-firm",
    date: "2026-10-12",
    author: "Pastor Kenneth Dumbiri",
    title: "Standing Firm in Uncertain Times",
    excerpt:
      "When the ground feels unsteady, Scripture reminds us where our footing is found and why we can hold fast.",
    image: PLACEHOLDER_IMAGE,
    href: "/resources/standing-firm",
    body: [
      "There are seasons when everything around us seems to shift: our finances, our health, our plans and even our sense of direction. In such moments, the question is not whether the storm will come, but where we have anchored our lives.",
      "Scripture is full of men and women who stood firm while the world around them trembled. Their strength did not come from favourable conditions, but from an unshakeable confidence in the character and promises of God.",
      "As you face uncertainty today, return to the Word, gather with other believers and pray without ceasing. The One who called you is faithful, and He will not leave you to stand alone.",
    ],
  },
  {
    id: 2,
    slug: "praying-community",
    date: "2026-10-02",
    author: "Pastor Kenneth Dumbiri",
    title: "The Power of a Praying Community",
    excerpt:
      "What happens when believers gather with one heart to seek God together, and why it still matters today.",
    image: PLACEHOLDER_IMAGE,
    href: "/resources/praying-community",
    body: [
      "From the earliest days of the Church, prayer was never a private exercise alone. Believers gathered, lifted their voices together and watched God move in ways no individual could have imagined.",
      "When a community prays with one heart, burdens are shared, faith is strengthened and the purposes of God are advanced. Unity in prayer creates an atmosphere where heaven touches earth.",
      "Make it a priority to join our daily online prayers and monthly prayer marathons. Your voice matters, and the prayers of the community are stronger with you in them.",
    ],
  },
  {
    id: 3,
    slug: "gods-purpose",
    date: "2026-09-18",
    author: "Pastor Kenneth Dumbiri",
    title: "Walking in God's Purpose",
    excerpt:
      "Discovering and embracing the purpose God has set for your life, one faithful step at a time.",
    image: PLACEHOLDER_IMAGE,
    href: "/resources/gods-purpose",
    body: [
      "God does not create anyone without purpose. Each of us has been placed in a particular time, family and community for a reason, and discovering that purpose begins with a surrendered heart.",
      "Purpose is rarely revealed all at once. More often, it unfolds as we obey in the small things, remain faithful where we are and stay close to the voice of the Holy Spirit.",
      "Take the next step you already know to take. As you walk in obedience, you will find that He directs your path and gives clarity for the journey ahead.",
    ],
  },
  {
    id: 4,
    slug: "abiding-in-the-word",
    date: "2026-09-04",
    author: "Pastor Kenneth Dumbiri",
    title: "Abiding in the Word Daily",
    excerpt:
      "Simple, practical ways to make time in God's Word a steady rhythm in everyday life.",
    image: PLACEHOLDER_IMAGE,
    href: "/resources/abiding-in-the-word",
    body: [
      "A life rooted in the Word is a life that bears lasting fruit. Yet many believers struggle to keep a consistent rhythm of reading and meditating on Scripture amid busy schedules.",
      "Start small and be consistent. Choose a set time, read a short passage, ask what it reveals about God and how it should shape your day, and then write down what you learn.",
      "Over time, these small moments become a deep well. The Word will begin to guide your decisions, renew your mind and strengthen your faith.",
    ],
  },
  {
    id: 5,
    slug: "early-church-fellowship",
    date: "2026-08-21",
    author: "Pastor Kenneth Dumbiri",
    title: "The Fellowship of the Early Church",
    excerpt:
      "Lessons from Acts 2:42 on devotion to teaching, prayer, fellowship and the breaking of bread.",
    image: PLACEHOLDER_IMAGE,
    href: "/resources/early-church-fellowship",
    body: [
      "The early Church devoted themselves to the apostles' teaching, to fellowship, to the breaking of bread and to prayer. These four pillars shaped a community that turned its world upside down.",
      "Their fellowship was not casual. It was marked by generosity, shared meals, mutual care and a deep sense that they belonged to one another in Christ.",
      "At RCN Cumbria, we seek to walk in that same pattern. Come and be part of a community devoted to God's Word, prayer and genuine fellowship.",
    ],
  },
  {
    id: 6,
    slug: "keeping-the-fire-burning",
    date: "2026-08-07",
    author: "Pastor Kenneth Dumbiri",
    title: "Keeping the Fire Burning",
    excerpt:
      "How to stay spiritually fervent in every season through prayer, the Word and community.",
    image: PLACEHOLDER_IMAGE,
    href: "/resources/keeping-the-fire-burning",
    body: [
      "Fire needs fuel to keep burning, and so does our spiritual life. When prayer grows irregular and the Word is neglected, the flame can slowly dim without our noticing.",
      "The good news is that it can be rekindled. Return to the place of prayer, feed on the Scriptures and surround yourself with believers who stir you up to love and good works.",
      "Guard the fire that God has placed within you. Where there is fervency, there is power, and where there is power, lives are transformed.",
    ],
  },
];

// ── Automatic fields ────────────────────────────────────────────────
// Works for both dummy data (body = array) and admin data (body = one
// textarea string with blank lines between paragraphs).

export function slugify(text = "") {
  return String(text)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const toParagraphs = (body) =>
  Array.isArray(body)
    ? body.filter(Boolean)
    : String(body || "")
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean);

// First few lines of the article, cut cleanly at a word boundary
export function makeExcerpt(paragraphs, max = 140) {
  const text = paragraphs.join(" ").replace(/\s+/g, " ").trim();
  if (text.length <= max) return text;
  const cut = text.slice(0, max).replace(/\s+\S*$/, "");
  return `${cut.replace(/[.,;:!?-]+$/, "")}…`;
}

// Fills in slug, href, excerpt and body array. Anything set by hand wins.
export function normalizeArticles(list = []) {
  const used = new Set();
  return list.map((a, i) => {
    const body = toParagraphs(a.body);
    let slug = a.slug || slugify(a.title) || `article-${a.id ?? i + 1}`;
    if (used.has(slug)) slug = `${slug}-${a.id ?? i + 1}`; // keep unique
    used.add(slug);
    return {
      ...a,
      body,
      slug,
      href: `/resources/${slug}`,
      excerpt: a.excerpt || makeExcerpt(body),
    };
  });
}

export const articles = normalizeArticles(rawArticles);

const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

// "2026-10-12" -> "12 OCT 2026"
export function formatDate(iso) {
  const [year, month, day] = iso.split("-");
  return `${day} ${MONTHS[Number(month) - 1]} ${year}`;
}

// Newest first, sliced to n (omit n to get them all)
export function getLatestArticles(n, list = articles) {
  const sorted = [...list].sort((a, b) => b.date.localeCompare(a.date));
  return typeof n === "number" ? sorted.slice(0, n) : sorted;
}

export function getArticleBySlug(slug, list = articles) {
  return list.find((a) => a.slug === slug);
}

// Other articles, newest first (excludes the current one)
export function getRelatedArticles(slug, n = 3, list = articles) {
  return getLatestArticles(undefined, list)
    .filter((a) => a.slug !== slug)
    .slice(0, n);
}

// Rough reading time in minutes
export function getReadTime(article) {
  const words = (article.body || []).join(" ").split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
