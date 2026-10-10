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

  // give
  "give.banner": {
    heading: "Partner With Us",
    description:
      "Whether you are reaching out for support or choosing to give back, you are an essential part of the RCN Cumbria story.",
    image: "/images/give/hero.jpg",
    imageAlt: "",
  },
  "give.info": {
    heading: "Generosity as Worship",
    description:
      "We believe that giving is a spiritual act of worship. Your tithes and offerings directly support our mission to spread the Gospel and serve the Cumbria community.",
    featureTitle: "Transparent Allocation",
    featureText:
      "100% of your donations are audited and allocated to ministry operations, community outreach, and global missions.",
  },
  "give.bank": {
    cardHeading: "What are you Giving to",
    accountNumber: "",
    sortCode: "",
    country: "",
    currency: "",
  },

  // contact
  "contact.banner": {
    line1: "Reach Out",
    accent: "Anytime",
    description:
      "Whether you have a question, need prayer, want more information about our church, or would like to speak with a member of our team, we'd love to hear from you. Contact us through any of the channels below, and we'll get back to you as soon as possible.",
    image: "/images/contact/hero.webp",
    imageAlt: "",
  },
  "contact.touch": {
    heading: "Get in Touch",
    intro:
      "Have questions? We'd love to hear from you. Send us a message and our team will get back to you within 24 hours.",
  },
  "contact.location": {
    heading: "Location",
    address: ["St Thomas Centre,", "Ardwick Green North Cumbria M12 6FZ"],
  },
  "contact.social": {
    heading: "Connect with Us",
    links: [
      {
        id: "1",
        platform: "youtube",
        label: "YouTube — Watch Live",
        url: "https://www.youtube.com/@RCNCarlisle",
      },
      {
        id: "2",
        platform: "facebook",
        label: "Facebook — Community Updates",
        url: "https://www.facebook.com/rcncarlisle",
      },
      {
        id: "3",
        platform: "whatsapp",
        label: "WhatsApp — Daily Updates",
        url: "https://whatsapp.com/channel/0029VbC2WZW5vKAHVkYWha1m",
      },
      {
        id: "4",
        platform: "instagram",
        label: "Instagram",
        url: "https://www.instagram.com/rcncarlisle/",
      },
    ],
  },

  // about
  "about.banner": {
    line1: "About Remnant",
    line2: "Christian Network",
    accent: "Cumbria",
    description:
      "Raising a generation of priests who will represent the government of God in the heart of the United Kingdom.",
    image: "/images/about/hero.webp",
    imageAlt: "",
  },
  "about.story": {
    image: "/images/about/story.jpg",
    imageAlt: "RCN Cumbria gathered in worship and prayer",
    intro: [
      "RCN Cumbria is an extension of Remnant Christian Network (RCN), a global apostolic movement committed to the restoration of the apostolic and prophetic foundations of the Church and the raising of believers who are deeply rooted in Christ.",
      "Our mission is simple: to witness the transformation of lives through the pure Word of God, intense prayer, discipleship and a vibrant community that reflects the heart of the Father.",
    ],
    blocks: [
      {
        id: "1",
        heading: "A Community of Prayer and the Word",
        paragraphs: [
          "Prayer and the Word of God are central to who we are.",
          "Through our gatherings, we seek to create an environment where people can encounter God, grow in spiritual maturity and be equipped to live out His purposes wherever He has placed them.",
          "We are a family of believers from different backgrounds and stages of life, united by our love for Jesus and a desire to see His purposes established in our lives, our communities and our generation.",
        ],
        highlight: "",
        linkLabel: "",
        linkUrl: "",
      },
      {
        id: "2",
        heading: "A Place to Belong and Grow",
        paragraphs: [
          "Whether you are exploring the Christian faith, returning to fellowship, new to Cumbria, or simply looking for a community in which to grow, you are welcome.",
          "Come worship, pray and fellowship with us. Let's grow together as a family. **We'd love to have you with us.**",
        ],
        highlight: "",
        linkLabel: "",
        linkUrl: "",
      },
      {
        id: "3",
        heading: "Our Commitment to Safeguarding",
        paragraphs: [
          "We are committed to creating a safe, welcoming and caring environment for everyone who participates in the life of RCN Cumbria, with particular regard for the safeguarding of children, young people and adults at risk.",
        ],
        highlight: "",
        linkLabel: "View Safeguarding",
        linkUrl: "/safeguarding",
      },
      {
        id: "4",
        heading: "Part of a Wider Family",
        paragraphs: [
          "As part of the wider Remnant Christian Network family, we share a common burden to see Christ formed in people and a praying, spiritually equipped Church raised to advance the purposes of God.",
        ],
        highlight:
          "We invite you to journey with us as we pursue Jesus together.",
        linkLabel: "",
        linkUrl: "",
      },
    ],
  },
  "about.values": {
    heading: "Core Values",
    items: [
      {
        id: "1",
        icon: "church",
        title: "Holiness",
        desc: "Living a life consecrated and separated unto God in every sphere.",
      },
      {
        id: "2",
        icon: "heart",
        title: "Love",
        desc: "Reflecting the unconditional nature of Christ in our community.",
      },
      {
        id: "3",
        icon: "book",
        title: "Sound Doctrine",
        desc: "Upholding the undiluted truth of God's word with precision.",
      },
      {
        id: "4",
        icon: "layers",
        title: "Service",
        desc: "Stewarding our gifts for the building of the Body and the city.",
      },
    ],
  },
  "about.oversight": {
    heading: "Spiritual Oversight",
    name: "Apostle Arome Osayi",
    role: "Set Man, Remnant Christian Network",
    quote:
      "Called to restore apostolic Christianity and prepare the church for Christ's return through powerful teaching and international missions.",
    image: "/images/leaders/AAO.jpg",
    imageAlt: "Portrait of Apostle Arome Osayi",
  },
  "about.team": {
    title: "Cumbria Leadership Team",
    description:
      "Guided by a plurality of elders and dedicated ministry leads focused on administration, youth, and community outreach.",
    buttonLabel: "View Full Team",
    photos: [
      { id: "1", image: "/images/leaders/AAO.jpg", alt: "Resident pastor" },
      { id: "2", image: "/images/leaders/aab.png", alt: "Resident pastor" },
      { id: "3", image: "/images/leaders/pke.webp", alt: "Resident pastor" },
    ],
  },
  "home.banner": {
    lead: "Welcome to",
    accent: "Remnant Christian Network",
    tail: "Cumbria",
    description:
      "A Place of Prayer, Word, and Fellowship. Experience the transformative power of the Spirit in the heart of the city.",
    image: "/images/home/hero.webp",
    imageAlt: "Large gathering",
    primaryLabel: "About Us",
    secondaryLabel: "I am New",
  },
  "home.mandate": {
    heading: "Our Sacred Mandate",
    description:
      "At RCN Cumbria, we are a community of believers dedicated to the pursuit of the authentic apostolic life. We believe in the raw power of the Gospel to transform lives, cities, and nations.",
    image: "/images/home/mandate.jpg",
    imageAlt:
      "Spiritual depth and the quiet intensity of an apostolic mission.",
  },
  "home.vision": {
    heading: "Vision Statement",
    items: [
      {
        id: "1",
        icon: "flag",
        title: "Apostolic Rebirth",
        desc: "To strive towards the rebirth of early apostolic Christianity as seen in the days of the first-generation apostles of Jesus Christ.",
      },
      {
        id: "2",
        icon: "bullseye",
        title: "Kingdom Realization",
        desc: "To see the coming of the King and His Kingdom until His reality is furnished in the hearts of men, heralding the end-of-age return of Jesus Christ.",
      },
      {
        id: "3",
        icon: "scripture",
        title: "Kingdom Pillars",
        desc: "To raise believers and ministers who are passionately committed to the will and work of God.",
      },
    ],
  },
  "home.mission": {
    heading: "Mission Statement",
    items: [
      {
        id: "1",
        icon: "flag",
        title: "Core Practices",
        desc: "To utilize prayer, the intense study of the Word, and the breaking of bread as the primary instruments for spiritual growth and community building.",
      },
      {
        id: "2",
        icon: "bullseye",
        title: "Equipping Ministers",
        desc: "To train and deploy effective ministers of the Gospel to advance the work of the church and preserve true biblical doctrine.",
      },
      {
        id: "3",
        icon: "scripture",
        title: "Apostolic Community",
        desc: "To build living apostolic communities through aggressive evangelism, missions, and active fellowship.",
      },
    ],
  },
  "home.presence": {
    heading: "The Presence",
    quote:
      "In His presence is fullness of joy; at His right hand there are pleasures forevermore.",
    image: "/images/home/presence.jpg",
    imageAlt: "Misty mountain peaks in the Lake District",
  },
  "home.live": {
    heading: "Join the Moment.",
    description:
      "Can't make it to Cumbria? Engage with our live broadcast, wherever you are.",
    image: "/images/home/live.jpg",
    imageAlt: "Speaker silhouetted on stage during a live service",
    linkLabel: "Join Us Online",
    linkUrl: "https://www.youtube.com/@RCNCarlisle",
  },
  "home.spotlight": {
    line1: "Lunch Hour",
    accent: "Prayer",
    description:
      "Join us for daily lunch hour prayer encounters and many more Activities",
    buttonLabel: "See Activity Page",
  },
  "iamnew.banner": {
    line1: "We're So Glad",
    accent: "You're Here",
    description:
      "Whatever brought you here today, you're welcome exactly as you are. Here's everything you need to know before you visit.",
    image: "/images/iamnew/hero.jpg",
    imageAlt: "Welcoming church gathering",
  },
  "iamnew.expect": {
    eyebrow: "WHAT TO EXPECT",
    heading: "Your First Visit",
    items: [
      {
        id: "1",
        icon: "heart",
        title: "A warm welcome",
        desc: "Our welcome team will greet you at the door, help you find a seat, and answer any questions you have.",
      },
      {
        id: "2",
        icon: "users",
        title: "Genuine community",
        desc: "You'll be surrounded by people who are genuinely glad you came — no pressure, just authentic connection.",
      },
      {
        id: "3",
        icon: "cross",
        title: "Powerful worship & word",
        desc: "Expect passionate worship and Spirit-filled teaching that speaks directly to where you are in life.",
      },
    ],
  },
  "iamnew.faq": {
    eyebrow: "COMMON QUESTIONS",
    heading: "Before You Visit",
    items: [
      {
        id: "1",
        icon: "shirt",
        question: "What should I wear?",
        answer:
          "Come as you are. There's no dress code here — whether you're in jeans or a suit, you're welcome. Many people dress casually, others smart-casual. What matters most is your heart, not your outfit.",
      },
      {
        id: "2",
        icon: "clock",
        question: "How long is the service?",
        answer:
          "Depending on the service you're attending, our services run for about 1hr and above. We never want you to feel rushed in God's presence.",
      },
      {
        id: "3",
        icon: "users",
        question: "Will I be put on the spot?",
        answer:
          "Never. You're free to simply observe, worship, and listen at your own pace. We won't single you out or ask you to do anything you're not comfortable with.",
      },
    ],
  },
};
