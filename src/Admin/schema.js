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
};
