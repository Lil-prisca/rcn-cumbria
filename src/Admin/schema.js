import { iconOptions } from "../content/valueIcons";

const bodyHelp =
  "Leave a blank line between paragraphs. Start a line with “- ” for a bullet point or “### ” for a sub-heading. Wrap words in **double asterisks** for bold. Use [link text](https://…) for links; email addresses become links automatically.";

const alt = (name = "alt") => ({
  name,
  label: "Image description (for accessibility)",
  type: "text",
});

export const adminPages = {
  /* ───────────────────────────── HOME ───────────────────────────── */
  home: {
    title: "Home",
    sections: [
      {
        key: "home.banner",
        label: "Welcome banner",
        fields: [
          { name: "line1", label: "Heading – first line", type: "text" },
          { name: "line2", label: "Heading – second line", type: "text" },
          { name: "accent", label: "Heading – highlighted word", type: "text" },
          { name: "subtitle", label: "Sub-heading", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "primaryLabel", label: "First button label", type: "text" },
          {
            name: "secondaryLabel",
            label: "Second button label",
            type: "text",
          },
        ],
        list: {
          name: "photos",
          itemLabel: "Collage photo",
          bulk: "image",
          itemFields: [{ name: "image", label: "Photo", type: "image" }, alt()],
        },
      },
      {
        key: "home.about",
        label: "About RCN",
        fields: [
          {
            name: "eyebrow",
            label: "Small label above the heading",
            type: "text",
          },
          { name: "heading", label: "Heading", type: "text" },
          {
            name: "paragraphs",
            label: "Paragraphs (one per line)",
            type: "lines",
          },
          { name: "buttonLabel", label: "Button label", type: "text" },
          {
            name: "familyHeading",
            label: "“Wider family” – heading",
            type: "text",
          },
          {
            name: "familyText",
            label: "“Wider family” – text",
            type: "textarea",
          },
        ],
        list: {
          name: "highlights",
          itemLabel: "Highlight",
          titleField: "label",
          itemFields: [{ name: "label", label: "Label", type: "text" }],
        },
      },
      {
        key: "home.gather",
        label: "Gather with us",
        fields: [
          {
            name: "eyebrow",
            label: "Small label above the heading",
            type: "text",
          },
          { name: "heading", label: "Heading", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "buttonLabel", label: "Button label", type: "text" },
          { name: "image", label: "Background image", type: "image" },
          alt("imageAlt"),
        ],
        list: {
          name: "items",
          itemLabel: "Programme card",
          titleField: "title",
          itemFields: [
            { name: "title", label: "Title", type: "text" },
            { name: "text", label: "Short description", type: "textarea" },
            {
              name: "times",
              label: "Times (one per line, optional)",
              type: "lines",
            },
          ],
        },
      },
      {
        key: "home.oversight",
        label: "Spiritual oversight",
        fields: [
          {
            name: "eyebrow",
            label: "Small label above the name",
            type: "text",
          },
          { name: "name", label: "Name", type: "text" },
          { name: "role", label: "Role", type: "text" },
          { name: "quote", label: "Quote", type: "textarea" },
          { name: "image", label: "Portrait", type: "image" },
          alt("imageAlt"),
        ],
      },
      {
        key: "home.team",
        label: "Leadership team card",
        fields: [
          { name: "heading", label: "Heading", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "buttonLabel", label: "Button label", type: "text" },
          { name: "image", label: "Photo", type: "image" },
          alt("imageAlt"),
        ],
      },
      {
        key: "home.desk",
        label: "From the Pastor's Desk (heading block)",
        fields: [
          {
            name: "eyebrow",
            label: "Small label above the heading",
            type: "text",
          },
          { name: "heading", label: "Heading", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "buttonLabel", label: "Button label", type: "text" },
        ],
      },
    ],
  },

  /* ──────────────────────────── ABOUT ───────────────────────────── */
  about: {
    title: "About",
    sections: [
      {
        key: "about.banner",
        label: "Welcome banner",
        fields: [
          {
            name: "eyebrow",
            label: "Small label above the heading",
            type: "text",
          },
          { name: "line1", label: "Heading – line 1", type: "text" },
          { name: "line2", label: "Heading – line 2", type: "text" },
          { name: "accent", label: "Heading – highlighted word", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "image", label: "Background image", type: "image" },
          alt("imageAlt"),
        ],
      },
      {
        key: "about.family",
        label: "The RCN family",
        fields: [
          {
            name: "eyebrow",
            label: "Small label above the heading",
            type: "text",
          },
          { name: "heading", label: "Heading", type: "text" },
          {
            name: "paragraphs",
            label: "Paragraphs (one per line)",
            type: "lines",
          },
          { name: "image", label: "Image", type: "image" },
          alt("imageAlt"),
        ],
      },
      {
        key: "about.local",
        label: "Our local expression",
        fields: [
          {
            name: "eyebrow",
            label: "Small label above the heading",
            type: "text",
          },
          { name: "heading", label: "Heading", type: "text" },
          {
            name: "paragraphs",
            label: "Paragraphs (one per line)",
            type: "lines",
          },
          { name: "image", label: "Image", type: "image" },
          alt("imageAlt"),
        ],
      },
      {
        key: "about.prayer",
        label: "Our city, our prayer focus",
        fields: [
          {
            name: "eyebrow",
            label: "Small label above the heading",
            type: "text",
          },
          { name: "heading", label: "Heading", type: "text" },
          {
            name: "paragraphs",
            label: "Paragraphs (one per line)",
            type: "lines",
          },
          { name: "image", label: "Image", type: "image" },
          alt("imageAlt"),
        ],
      },
      {
        key: "about.leadership",
        label: "Our leadership",
        fields: [
          {
            name: "eyebrow",
            label: "Small label above the name",
            type: "text",
          },
          { name: "name", label: "Name", type: "text" },
          { name: "role", label: "Role", type: "text" },
          {
            name: "paragraphs",
            label: "Paragraphs (one per line)",
            type: "lines",
          },
          { name: "image", label: "Portrait", type: "image" },
          alt("imageAlt"),
        ],
      },
      {
        key: "about.welcome",
        label: "You are welcome",
        fields: [
          {
            name: "eyebrow",
            label: "Small label above the heading",
            type: "text",
          },
          { name: "heading", label: "Heading", type: "text" },
          {
            name: "paragraphs",
            label: "Paragraphs (one per line)",
            type: "lines",
          },
          {
            name: "whatsappLabel",
            label: "WhatsApp button – title",
            type: "text",
          },
          {
            name: "whatsappNote",
            label: "WhatsApp button – small text",
            type: "text",
          },
          {
            name: "whatsappLink",
            label: "WhatsApp invite link (https://…)",
            type: "text",
          },
          { name: "image", label: "Image", type: "image" },
          alt("imageAlt"),
        ],
      },
    ],
  },

  /* ────────────────────────── ACTIVITIES ────────────────────────── */
  activities: {
    title: "Activities",
    sections: [
      {
        key: "activities.banner",
        label: "Welcome banner",
        fields: [
          {
            name: "eyebrow",
            label: "Small label above the heading",
            type: "text",
          },
          { name: "line1", label: "Heading – line 1", type: "text" },
          { name: "line2", label: "Heading – line 2", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "image", label: "Background image", type: "image" },
          alt("imageAlt"),
        ],
      },
      {
        key: "activities.regular",
        label: "Regular activities (Find your place)",
        fields: [
          {
            name: "eyebrow",
            label: "Small label above the heading",
            type: "text",
          },
          { name: "heading", label: "Heading", type: "text" },
          { name: "intro", label: "Introduction", type: "textarea" },
        ],
        list: {
          name: "items",
          itemLabel: "Activity",
          titleField: "title",
          itemFields: [
            { name: "title", label: "Title", type: "text" },
            { name: "text", label: "Description", type: "textarea" },
            {
              name: "tagType",
              label: "Tag – first part (e.g. Online, In person)",
              type: "text",
            },
            {
              name: "tagFrequency",
              label: "Tag – second part (e.g. Daily, Monthly)",
              type: "text",
            },
            { name: "image", label: "Photo", type: "image" },
            alt(),
          ],
        },
      },
      {
        key: "activities.meet",
        label: "Google Meet details",
        fields: [
          {
            name: "eyebrow",
            label: "Small label above the heading",
            type: "text",
          },
          { name: "heading", label: "Heading", type: "text" },
          { name: "highlight", label: "Bold line", type: "text" },
          { name: "description", label: "Description", type: "text" },
          {
            name: "meetLink",
            label: "Meeting link (without https://)",
            type: "text",
          },
          { name: "meetingId", label: "Meeting ID", type: "text" },
          { name: "passcode", label: "Passcode", type: "text" },
        ],
      },
      {
        key: "activities.events",
        label: "Upcoming events",
        fields: [
          {
            name: "eyebrow",
            label: "Small label above the heading",
            type: "text",
          },
          { name: "heading", label: "Heading", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "image", label: "Image", type: "image" },
          alt("imageAlt"),
        ],
      },
      {
        key: "activities.gallery",
        label: "Photo gallery",
        fields: [{ name: "heading", label: "Heading", type: "text" }],
        list: {
          name: "items",
          itemLabel: "Photo",
          bulk: "image",
          itemFields: [{ name: "image", label: "Photo", type: "image" }, alt()],
        },
      },
    ],
  },

  /* ───────────────────────────── GIVE ───────────────────────────── */
  give: {
    title: "Giving",
    sections: [
      {
        key: "give.banner",
        label: "Welcome banner",
        fields: [
          {
            name: "eyebrow",
            label: "Small label above the heading",
            type: "text",
          },
          { name: "heading", label: "Heading", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "image", label: "Background image", type: "image" },
          alt("imageAlt"),
        ],
      },
      {
        key: "give.quote",
        label: "Scripture quote",
        fields: [
          { name: "quote", label: "Quote", type: "textarea" },
          {
            name: "reference",
            label: "Reference (e.g. 2 Corinthians 9:7 (ESV))",
            type: "text",
          },
        ],
      },
      {
        key: "give.methods",
        label: "Choose a giving method",
        fields: [
          {
            name: "eyebrow",
            label: "Small label above the heading",
            type: "text",
          },
          { name: "heading", label: "Heading", type: "text" },
          { name: "intro", label: "Introduction", type: "textarea" },
          {
            name: "onlineHeading",
            label: "Card payment – heading",
            type: "text",
          },
          {
            name: "onlineText",
            label: "Card payment – text",
            type: "textarea",
          },
          {
            name: "onlineButton",
            label: "Card payment – button label",
            type: "text",
          },
          {
            name: "bankHeading",
            label: "Bank transfer – heading",
            type: "text",
          },
          { name: "bankText", label: "Bank transfer – text", type: "textarea" },
          {
            name: "bankNote",
            label: "Note under the bank details",
            type: "textarea",
          },
        ],
      },
      {
        key: "give.bank",
        label: "Stripe link & bank details",
        fields: [
          {
            name: "stripeLink",
            label: "Stripe payment link (https://…)",
            type: "text",
          },
          { name: "accountName", label: "Account name", type: "text" },
          { name: "sortCode", label: "Sort code", type: "text" },
          { name: "accountNumber", label: "Account number", type: "text" },
        ],
      },
      {
        key: "give.info",
        label: "Generosity as worship",
        fields: [
          {
            name: "eyebrow",
            label: "Small label above the heading",
            type: "text",
          },
          { name: "heading", label: "Heading", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "featureTitle", label: "Highlight – title", type: "text" },
          { name: "featureText", label: "Highlight – text", type: "textarea" },
        ],
      },
    ],
  },

  /* ─────────────────────────── CONTACT ──────────────────────────── */
  contact: {
    title: "Contact",
    sections: [
      {
        key: "contact.banner",
        label: "Welcome banner",
        fields: [
          {
            name: "eyebrow",
            label: "Small label above the heading",
            type: "text",
          },
          { name: "line1", label: "Heading – line 1", type: "text" },
          { name: "line2", label: "Heading – line 2", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "image", label: "Background image", type: "image" },
          alt("imageAlt"),
        ],
      },
      {
        key: "contact.touch",
        label: "Contact information",
        fields: [
          { name: "heading", label: "Heading", type: "text" },
          { name: "intro", label: "Introduction", type: "textarea" },
          { name: "email", label: "Email address", type: "text" },
          { name: "phone", label: "Telephone number", type: "text" },
          {
            name: "whatsappLink",
            label: "WhatsApp community link (https://…)",
            type: "text",
          },
        ],
      },
      {
        key: "contact.form",
        label: "Enquiry form (heading)",
        fields: [
          {
            name: "eyebrow",
            label: "Small label above the heading",
            type: "text",
          },
          { name: "heading", label: "Heading", type: "text" },
          { name: "intro", label: "Introduction", type: "textarea" },
        ],
      },
      {
        key: "contact.community",
        label: "Be part of our community",
        fields: [
          {
            name: "eyebrow",
            label: "Small label above the heading",
            type: "text",
          },
          { name: "heading", label: "Heading", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "buttonLabel", label: "Button label", type: "text" },
          { name: "image", label: "Image", type: "image" },
          alt("imageAlt"),
        ],
      },
    ],
  },

  /* ────────────────────────── RESOURCES ─────────────────────────── */
  resources: {
    title: "Resources",
    sections: [
      {
        key: "resources.banner",
        label: "Welcome banner",
        fields: [
          {
            name: "eyebrow",
            label: "Small label above the heading",
            type: "text",
          },
          { name: "title", label: "Heading", type: "text" },
          { name: "description", label: "Description", type: "text" },
          { name: "image", label: "Background image", type: "image" },
          alt("imageAlt"),
        ],
      },
      {
        key: "resources.desk",
        label: "From the Pastor's Desk (intro)",
        fields: [
          { name: "heading", label: "Heading", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "image", label: "Image", type: "image" },
          alt("imageAlt"),
        ],
      },
      {
        key: "resources.teachings",
        label: "Teachings & messages",
        fields: [
          { name: "heading", label: "Heading", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
          {
            name: "telegramTitle",
            label: "Telegram card – title",
            type: "text",
          },
          {
            name: "telegramText",
            label: "Telegram card – text",
            type: "textarea",
          },
          {
            name: "telegramButton",
            label: "Telegram card – button label",
            type: "text",
          },
          {
            name: "telegramLink",
            label: "Telegram link (https://…)",
            type: "text",
          },
          { name: "youtubeTitle", label: "YouTube card – title", type: "text" },
          {
            name: "youtubeText",
            label: "YouTube card – text",
            type: "textarea",
          },
          {
            name: "youtubeButton",
            label: "YouTube card – button label",
            type: "text",
          },
          {
            name: "youtubeLink",
            label: "YouTube link (https://…)",
            type: "text",
          },
        ],
      },
      {
        key: "resources.connect",
        label: "Stay connected",
        fields: [
          { name: "heading", label: "Heading", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "buttonLabel", label: "Button label", type: "text" },
          {
            name: "whatsappLink",
            label: "WhatsApp community link (https://…)",
            type: "text",
          },
        ],
      },
    ],
  },

  /* ──────────────────────────── ARTICLES ────────────────────────── */
  articles: {
    title: "Articles",
    sections: [
      {
        key: "articles.list",
        label: "Pastor's Desk articles",
        notice:
          "The 3 newest articles (by date) automatically appear on the home page, and all of them appear on the Resources page.",
        list: {
          name: "items",
          itemLabel: "Article",
          titleField: "title",
          layout: "master-detail", // search + pick one, instead of every article open at once
          sortField: "date", // newest first
          itemFields: [
            { name: "title", label: "Title", type: "text" },
            {
              name: "date",
              label: "Date (YYYY-MM-DD, e.g. 2026-10-12)",
              type: "text",
            },
            { name: "image", label: "Cover image", type: "image" },
            {
              name: "body",
              label: "Article text",
              type: "textarea",
              rows: 10,
              help: "Leave a blank line between paragraphs. The web address and the card summary are made from the title and the first few lines automatically.",
            },
            { name: "author", label: "Author", type: "text" },
            alt(),
          ],
        },
      },
    ],
  },

  /* ──────────────────────────── I AM NEW ────────────────────────── */
  iamnew: {
    title: "I Am New",
    sections: [
      {
        key: "iamnew.banner",
        label: "Welcome banner",
        fields: [
          { name: "line1", label: "Heading – first line", type: "text" },
          { name: "accent", label: "Heading – highlighted line", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "image", label: "Background image", type: "image" },
          alt("imageAlt"),
        ],
      },
      {
        key: "iamnew.expect",
        label: "What to expect",
        fields: [
          {
            name: "eyebrow",
            label: "Small label above the heading",
            type: "text",
          },
          { name: "heading", label: "Heading", type: "text" },
        ],
        list: {
          name: "items",
          itemLabel: "Card",
          titleField: "title",
          itemFields: [
            {
              name: "icon",
              label: "Icon",
              type: "select",
              options: iconOptions,
            },
            { name: "title", label: "Title", type: "text" },
            { name: "desc", label: "Description", type: "textarea" },
          ],
        },
      },
      {
        key: "iamnew.faq",
        label: "Common questions",
        fields: [
          {
            name: "eyebrow",
            label: "Small label above the heading",
            type: "text",
          },
          { name: "heading", label: "Heading", type: "text" },
        ],
        list: {
          name: "items",
          itemLabel: "Question",
          titleField: "question",
          itemFields: [
            {
              name: "icon",
              label: "Icon",
              type: "select",
              options: iconOptions,
            },
            { name: "question", label: "Question", type: "text" },
            { name: "answer", label: "Answer", type: "textarea" },
          ],
        },
      },
    ],
  },

  /* ──────────────────────────── LEADERSHIP ──────────────────────── */
  team: {
    title: "Leadership",
    sections: [
      {
        key: "team.page",
        label: "Team members",
        fields: [{ name: "heading", label: "Page heading", type: "text" }],
        list: {
          name: "members",
          itemLabel: "Member",
          titleField: "name",
          itemFields: [
            { name: "name", label: "Name", type: "text" },
            { name: "position", label: "Role", type: "text" },
            { name: "image", label: "Portrait", type: "image" },
          ],
        },
      },
    ],
  },

  /* ─────────────────────── LEGAL & SAFEGUARDING ─────────────────── */
  legal: {
    title: "Legal & policies",
    notice:
      "These pages can have legal effect. Every save is recorded in the version history and any earlier version can be loaded back, but please take care and have changes checked before saving.",
    sections: [
      {
        key: "legal.privacy",
        label: "Privacy policy",
        stamp: "lastUpdated",
        history: true,
        fields: [
          { name: "title", label: "Page title", type: "text" },
          {
            name: "intro",
            label: "Opening paragraphs (one per line)",
            type: "lines",
          },
        ],
        list: {
          name: "sections",
          itemLabel: "Section",
          titleField: "title",
          itemFields: [
            {
              name: "title",
              label: "Section title (numbered automatically)",
              type: "text",
            },
            {
              name: "body",
              label: "Text",
              type: "textarea",
              rows: 12,
              help: bodyHelp,
            },
          ],
        },
      },
      {
        key: "legal.terms",
        label: "Website terms of use",
        stamp: "lastUpdated",
        history: true,
        fields: [
          { name: "title", label: "Page title", type: "text" },
          {
            name: "intro",
            label: "Opening paragraphs (one per line)",
            type: "lines",
          },
        ],
        list: {
          name: "sections",
          itemLabel: "Section",
          titleField: "title",
          itemFields: [
            {
              name: "title",
              label: "Section title (numbered automatically)",
              type: "text",
            },
            {
              name: "body",
              label: "Text",
              type: "textarea",
              rows: 12,
              help: bodyHelp,
            },
          ],
        },
      },
      {
        key: "safeguarding.intro",
        label: "Safeguarding – introduction",
        history: true,
        fields: [
          {
            name: "eyebrow",
            label: "Small label above the title",
            type: "text",
          },
          { name: "title", label: "Page title", type: "text" },
          {
            name: "intro",
            label: "Opening paragraphs (one per line)",
            type: "lines",
          },
        ],
      },
      {
        key: "safeguarding.urgent",
        label: "Safeguarding – immediate danger box",
        history: true,
        fields: [
          { name: "heading", label: "Heading", type: "text" },
          {
            name: "text",
            label: "Text (paragraphs, one per line)",
            type: "lines",
          },
        ],
      },
      {
        key: "safeguarding.commitments",
        label: "Safeguarding – our commitments",
        history: true,
        fields: [
          { name: "heading", label: "Heading", type: "text" },
          { name: "intro", label: "Introduction", type: "textarea" },
        ],
        list: {
          name: "items",
          itemLabel: "Commitment",
          itemFields: [{ name: "text", label: "Commitment", type: "textarea" }],
        },
      },
      {
        key: "safeguarding.report",
        label: "Safeguarding – reporting a concern",
        history: true,
        fields: [
          { name: "heading", label: "Heading", type: "text" },
          { name: "intro", label: "Introduction", type: "textarea" },
          { name: "teamLabel", label: "Team label", type: "text" },
          {
            name: "team",
            label: "Safeguarding team names (one per line)",
            type: "lines",
          },
          { name: "emailLabel", label: "Email label", type: "text" },
          { name: "email", label: "Safeguarding email address", type: "text" },
          {
            name: "note",
            label: "Paragraphs below the box (one per line)",
            type: "lines",
          },
        ],
      },
      {
        key: "safeguarding.more",
        label: "Safeguarding – confidentiality, children & adults at risk",
        history: true,
        list: {
          name: "items",
          itemLabel: "Column",
          titleField: "title",
          itemFields: [
            {
              name: "eyebrow",
              label: "Small label above the heading",
              type: "text",
            },
            { name: "title", label: "Heading", type: "text" },
            {
              name: "paragraphs",
              label: "Paragraphs (one per line)",
              type: "lines",
            },
          ],
        },
      },
    ],
  },
};
