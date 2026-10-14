import { socialOptions } from "../content/socialIcons";
import { iconOptions } from "../content/valueIcons";
const bodyHelp =
  "Leave a blank line between paragraphs. Start a line with “- ” for a bullet point or “### ” for a sub-heading. Wrap words in **double asterisks** for bold. Use [link text](https://…) for links; email addresses become links automatically.";

const alt = (name = "alt") => ({
  name,
  label: "Image description (for accessibility)",
  type: "text",
});

export const adminPages = {
  activities: {
    title: "Activities",
    sections: [
      {
        key: "activities.banner",
        label: "Welcome banner",
        fields: [
          { name: "line1", label: "Heading – line 1", type: "text" },
          { name: "line2", label: "Heading – line 2", type: "text" },
          { name: "accent", label: "Heading – highlighted line", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "image", label: "Background image", type: "image" },
          alt("imageAlt"),
        ],
      },
      {
        key: "activities.schedule",
        label: "Activity schedule",
        fields: [{ name: "heading", label: "Section heading", type: "text" }],
        list: {
          name: "items",
          itemLabel: "Activity",
          titleField: "title",
          itemFields: [
            { name: "title", label: "Title", type: "text" },
            {
              name: "schedule",
              label: "Schedule (one line per row)",
              type: "lines",
            },
            { name: "image", label: "Image", type: "image" },
            alt(),
          ],
        },
      },
      {
        key: "activities.prayer",
        label: "Altar of Prayer feature",
        fields: [
          { name: "title", label: "Heading", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "verse", label: "Verse", type: "text" },
          { name: "image", label: "Background image", type: "image" },
          alt("imageAlt"),
        ],
      },
      {
        key: "activities.gallery",
        label: "Gallery",
        fields: [{ name: "heading", label: "Section heading", type: "text" }],
        list: {
          name: "items",
          itemLabel: "Image",
          bulk: "image", // enables "upload several images"
          itemFields: [{ name: "image", label: "Image", type: "image" }, alt()],
        },
      },
    ],
  },
  give: {
    title: "Giving",
    sections: [
      {
        key: "give.banner",
        label: "Welcome banner",
        fields: [
          { name: "heading", label: "Heading", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "image", label: "Background image", type: "image" },
          {
            name: "imageAlt",
            label: "Image description (for accessibility)",
            type: "text",
          },
        ],
      },
      {
        key: "give.info",
        label: "Giving information",
        fields: [
          { name: "heading", label: "Heading", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "featureTitle", label: "Highlight – title", type: "text" },
          { name: "featureText", label: "Highlight – text", type: "textarea" },
        ],
      },
      {
        key: "give.bank",
        label: "Bank details",
        fields: [
          { name: "cardHeading", label: "Card heading", type: "text" },
          { name: "accountNumber", label: "Account number", type: "text" },
          { name: "sortCode", label: "Sort code", type: "text" },
          { name: "country", label: "Country or region", type: "text" },
          { name: "currency", label: "Currency", type: "text" },
        ],
      },
    ],
  },
  contact: {
    title: "Contact",
    sections: [
      {
        key: "contact.banner",
        label: "Welcome banner",
        fields: [
          { name: "line1", label: "Heading – line 1", type: "text" },
          { name: "accent", label: "Heading – highlighted line", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "image", label: "Background image", type: "image" },
          {
            name: "imageAlt",
            label: "Image description (for accessibility)",
            type: "text",
          },
        ],
      },
      {
        key: "contact.touch",
        label: "Get in Touch section",
        fields: [
          { name: "heading", label: "Heading", type: "text" },
          { name: "intro", label: "Introduction", type: "textarea" },
        ],
      },
      {
        key: "contact.location",
        label: "Location",
        fields: [
          { name: "heading", label: "Heading", type: "text" },
          {
            name: "address",
            label: "Address (one line per row)",
            type: "lines",
          },
        ],
      },
      {
        key: "contact.social",
        label: "Social links",
        fields: [{ name: "heading", label: "Heading", type: "text" }],
        list: {
          name: "links",
          itemLabel: "Link",
          titleField: "label",
          itemFields: [
            {
              name: "platform",
              label: "Platform (sets the icon)",
              type: "select",
              options: socialOptions,
            },
            { name: "label", label: "Text shown", type: "text" },
            { name: "url", label: "Link address (https://…)", type: "text" },
          ],
        },
      },
    ],
  },
  about: {
    title: "About",
    sections: [
      {
        key: "about.banner",
        label: "Welcome banner",
        fields: [
          { name: "line1", label: "Heading – line 1", type: "text" },
          { name: "line2", label: "Heading – line 2", type: "text" },
          { name: "accent", label: "Heading – highlighted word", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "image", label: "Background image", type: "image" },
          {
            name: "imageAlt",
            label: "Image description (for accessibility)",
            type: "text",
          },
        ],
      },
      {
        key: "about.story",
        label: "Our story",
        fields: [
          { name: "image", label: "Image", type: "image" },
          {
            name: "imageAlt",
            label: "Image description (for accessibility)",
            type: "text",
          },
          {
            name: "intro",
            label: "Opening paragraphs (one per line)",
            type: "lines",
          },
        ],
        list: {
          name: "blocks",
          itemLabel: "Block",
          titleField: "heading",
          itemFields: [
            { name: "heading", label: "Heading", type: "text" },
            {
              name: "paragraphs",
              label:
                "Paragraphs (one per line; wrap words in **double asterisks** for bold)",
              type: "lines",
            },
            {
              name: "highlight",
              label: "Closing line (optional, shown in the accent style)",
              type: "text",
            },
            { name: "linkLabel", label: "Link text (optional)", type: "text" },
            {
              name: "linkUrl",
              label: "Link address (optional, e.g. /safeguarding)",
              type: "text",
            },
          ],
        },
      },
      {
        key: "about.values",
        label: "Core values",
        fields: [{ name: "heading", label: "Section heading", type: "text" }],
        list: {
          name: "items",
          itemLabel: "Value",
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
        key: "about.oversight",
        label: "Spiritual oversight",
        fields: [
          { name: "heading", label: "Section heading", type: "text" },
          { name: "name", label: "Name", type: "text" },
          { name: "role", label: "Role", type: "text" },
          { name: "quote", label: "Description / quote", type: "textarea" },
          { name: "image", label: "Portrait", type: "image" },
          {
            name: "imageAlt",
            label: "Image description (for accessibility)",
            type: "text",
          },
        ],
      },
      {
        key: "about.team",
        label: "Leadership team card",
        fields: [
          { name: "title", label: "Heading", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "buttonLabel", label: "Button label", type: "text" },
        ],
        list: {
          name: "photos",
          itemLabel: "Photo",
          bulk: "image",
          itemFields: [
            { name: "image", label: "Photo", type: "image" },
            {
              name: "alt",
              label: "Image description (for accessibility)",
              type: "text",
            },
          ],
        },
      },
    ],
  },
  home: {
    title: "Home",
    sections: [
      {
        key: "home.banner",
        label: "Welcome banner",
        fields: [
          { name: "lead", label: "Heading – start", type: "text" },
          {
            name: "accent",
            label: "Heading – highlighted words",
            type: "text",
          },
          { name: "tail", label: "Heading – end", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "image", label: "Background image", type: "image" },
          {
            name: "imageAlt",
            label: "Image description (for accessibility)",
            type: "text",
          },
          { name: "primaryLabel", label: "First button label", type: "text" },
          {
            name: "secondaryLabel",
            label: "Second button label",
            type: "text",
          },
        ],
      },
      {
        key: "home.mandate",
        label: "Sacred mandate",
        fields: [
          { name: "heading", label: "Heading", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "image", label: "Image", type: "image" },
          {
            name: "imageAlt",
            label: "Image description (for accessibility)",
            type: "text",
          },
        ],
      },
      {
        key: "home.vision",
        label: "Vision statement",
        fields: [{ name: "heading", label: "Heading", type: "text" }],
        list: {
          name: "items",
          itemLabel: "Point",
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
        key: "home.mission",
        label: "Mission statement",
        fields: [{ name: "heading", label: "Heading", type: "text" }],
        list: {
          name: "items",
          itemLabel: "Point",
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
        key: "home.presence",
        label: "Presence quote",
        fields: [
          { name: "heading", label: "Heading", type: "text" },
          { name: "quote", label: "Quote", type: "textarea" },
          { name: "image", label: "Background image", type: "image" },
          {
            name: "imageAlt",
            label: "Image description (for accessibility)",
            type: "text",
          },
        ],
      },
      {
        key: "home.live",
        label: "Live broadcast",
        fields: [
          { name: "heading", label: "Heading", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "image", label: "Video thumbnail image", type: "image" },
          {
            name: "imageAlt",
            label: "Image description (for accessibility)",
            type: "text",
          },
          { name: "linkLabel", label: "Link label", type: "text" },
          { name: "linkUrl", label: "Link address (https://…)", type: "text" },
        ],
      },
      {
        key: "home.spotlight",
        label: "Spotlight event",
        fields: [
          { name: "line1", label: "Heading – first line", type: "text" },
          { name: "accent", label: "Heading – italic line", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "buttonLabel", label: "Button label", type: "text" },
        ],
      },
    ],
  },
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
          {
            name: "imageAlt",
            label: "Image description (for accessibility)",
            type: "text",
          },
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
            label: "Text",
            type: "textarea",
            help: "Use [999](tel:999) to keep the phone link.",
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
          { name: "note", label: "Note below the box", type: "textarea" },
        ],
      },
      {
        key: "safeguarding.more",
        label: "Safeguarding – other sections",
        history: true,
        list: {
          name: "items",
          itemLabel: "Section",
          titleField: "title",
          itemFields: [
            { name: "title", label: "Heading", type: "text" },
            {
              name: "body",
              label: "Text",
              type: "textarea",
              rows: 8,
              help: bodyHelp,
            },
          ],
        },
      },
      {
        key: "safeguarding.policy",
        label: "Safeguarding – policy document",
        history: true,
        fields: [
          { name: "heading", label: "Heading", type: "text" },
          { name: "text", label: "Text", type: "textarea" },
          { name: "buttonLabel", label: "Button label", type: "text" },
          { name: "file", label: "Policy document (PDF)", type: "pdf" },
        ],
      },
    ],
  },
};
