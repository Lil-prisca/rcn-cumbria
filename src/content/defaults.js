const range = (prefix, from, to, ext) =>
  Array.from(
    { length: to - from + 1 },
    (_, i) => `${prefix}${from + i}.${ext}`,
  );

// same order as your original Images array
const galleryFiles = [
  "pointman-wife.jpg",
  "img3.gif",
  "white-1.jpeg",
  "newpic1.jpg",
  "newpic2.jpg",
  "pic-1.jpg",
  "pic-3.jpg",
  ...range("img", 7, 14, "jpeg"),
  "pic-2.jpg",
  "img16.png",
  ...range("img", 17, 22, "jpg"),
  ...range("pic-", 5, 9, "jpg"),
  ...range("img", 23, 25, "jpg"),
  "newpic5.jpg",
  ...range("img", 27, 42, "jpg"),
  "pic-4.jpg",
  ...range("img", 44, 48, "jpg"),
  "newpic7.jpg",
];

export const defaults = {
  "activities.banner": {
    line1: "Find Us.",
    line2: "Connect With Us.",
    accent: "Grow With Us.",
    description:
      "Wherever you are, let's worship and pray together, let's grow as a family, and we'd love for you to be with us",
    image: "/images/activities/hero.png",
    imageAlt: "Landscape of Cumbria",
  },
  "activities.schedule": {
    heading: "Our Activities",
    items: [
      {
        id: "1",
        title: "Bible Study",
        schedule: ["Every Sunday | 12pm-2pm"],
        image: "/images/activities/prayer-group.webp",
        alt: "Congregation raising hands during a Sunday gathering",
        position: "object-top",
      },
      {
        id: "2",
        title: "GateKeeper's Prayer Meeting",
        schedule: ["Daily | 12pm-1pm"],
        image: "/images/activities/prayer-2.webp",
        alt: "Members praying together",
      },
      {
        id: "3",
        title: "Watchmen's Prayer Meeting",
        schedule: ["Daily | 11pm-12:30am"],
        image: "/images/activities/prayer-2.webp",
        alt: "Members in night prayer",
      },
      {
        id: "4",
        title: "Prayer Marathon (10hrs)",
        schedule: ["1st Saturday of every month | 8am-6pm"],
        image: "/images/activities/prayer-2.webp",
        alt: "Prayer marathon session",
      },
      {
        id: "5",
        title: "Community Outreach",
        schedule: ["Held Quarterly"],
        image: "/images/activities/prayer-2.webp",
        alt: "Volunteers serving the community",
      },
      {
        id: "6",
        title: "Special Event",
        schedule: ["To be communicated"],
        image: "/images/activities/prayer-2.webp",
        alt: "Special church event",
      },
    ],
  },
  "activities.prayer": {
    title: "Altar of Prayer",
    description:
      "An altar of earth you shall make for me and sacrifice on it your burnt offerings and your peace offerings... In every place where I cause my name to be remembered I will come to you and bless you. ",
    verse: "Exodus 20:24",
    image: "/images/activities/altar.jpg",
    imageAlt: "Mountain peaks covered in morning mist",
  },
  "activities.gallery": {
    heading: "Gallery",
    items: galleryFiles.map((file, i) => ({
      id: String(i + 1),
      image: `/images/gallery/${file}`,
      alt: "",
    })),
  },
};
