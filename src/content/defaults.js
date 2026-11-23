import { toEditableSections } from "./legalBlocks";
import {
  PRIVACY_INTRO,
  PRIVACY_SECTIONS,
  TERMS_INTRO,
  TERMS_SECTIONS,
} from "./legalText";

// Placeholder used for the dummy articles — replace per article in the admin.
const PLACEHOLDER_IMAGE =
  "https://images.pexels.com/photos/20620850/pexels-photo-20620850.jpeg?auto=compress&cs=tinysrgb&w=1200";

// Home banner collage (9 tiles) — put files at /public/images/home/collage-1.jpg … collage-9.jpg
const collage = Array.from({ length: 9 }, (_, i) => ({
  id: String(i + 1),
  image: `/images/home/collage-${i + 1}.jpg`,
  alt: "",
}));

export const defaults = {
  /* ───────────────────────────── HOME ───────────────────────────── */
  "home.banner": {
    line1: "Welcome to",
    line2: "RCN",
    accent: "Cumbria",
    subtitle: "Striving towards the Rebirth of Apostolic Christianity",
    description:
      "A community devoted to God's Word, prayer, fellowship and the breaking of bread. Acts 2:42",
    primaryLabel: "About Us",
    secondaryLabel: "I am New",
    photos: collage,
    //  image: "/images/resources/hero.jpg",
    imageAlt: "Open Bible on a wooden table",
  },
  "home.about": {
    eyebrow: "About RCN",
    heading: "Remnant Christian Network",
    paragraphs: [
      "Remnant Christian Network (RCN) is an interdenominational and non-denominational international ministry to the body of Christ with the mandate of restoring the apostolic order of Christianity as it was in the days of the first generation of apostles of Jesus Christ and thereby heralding the coming of the Lord Jesus Christ at this end of the age.",
      "Join us as we bring spiritual gatherings, support and community to Cumbria and the surrounding areas.",
    ],
    buttonLabel: "About RCN",
    familyHeading: "Part of a Wider Family",
    familyText:
      "As part of the wider Remnant Christian Network family, we share a common burden to see Christ formed in people and a praying, spiritually equipped Church raised to advance the purposes of God.",
    highlights: [
      { id: "1", label: "Global Ministry" },
      { id: "2", label: "Apostolic Centres" },
      { id: "3", label: "Mission Outreaches" },
      { id: "4", label: "Across Africa, North America and Europe" },
    ],
  },
  "home.gather": {
    eyebrow: "Gather With Us",
    heading: "Grow Together in God's Word, Prayer and Fellowship",
    description:
      "From daily online prayers to in-person gatherings, there are opportunities to seek God, grow in His Word and fellowship with other believers.",
    buttonLabel: "View Our Activities",
    image: "/images/home/gather.jpg",
    imageAlt: "Woman smiling during a fellowship gathering",
    items: [
      {
        id: "1",
        title: "Online Prayer",
        text: "Join us daily as we pray together online.",
        times: ["12:00 PM – 1:00 PM", "11:00 PM – 12:00 AM"],
      },
      {
        id: "2",
        title: "Prayer Marathon",
        text: "A monthly time of intensive prayer in person.",
        times: ["8:00 AM – 6:00 PM"],
      },
      {
        id: "3",
        title: "Bible Study",
        text: "Deepen your understanding of God's Word.",
        times: [],
      },
      {
        id: "4",
        title: "Sunday Services",
        text: "We will be starting our Sunday services in January 2027.",
        times: [],
      },
    ],
  },
  "home.oversight": {
    eyebrow: "Spiritual Oversight",
    name: "Apostle Arome Osayi",
    role: "Set Man, Remnant Christian Network",
    quote:
      "Called to restore apostolic Christianity and prepare the church for Christ's return through powerful teaching and international missions.",
    image: "/images/leaders/AAO.jpg",
    imageAlt: "Portrait of Apostle Arome Osayi",
  },
  "home.team": {
    heading: "Cumbria Leadership Team",
    description:
      "Guided by a plurality of elders and dedicated ministry leads focused on administration, youth, and community outreach.",
    buttonLabel: "View Full Team",
    image: "/images/leaders/AAO.jpg",
    imageAlt: "Leadership team",
  },
  "home.desk": {
    eyebrow: "From the Pastor's Desk",
    heading: "Latest Articles",
    description:
      "Encouragement, biblical insights and practical reflections for everyday life.",
    buttonLabel: "View All Articles",
  },

  /* ──────────────────────────── ABOUT ───────────────────────────── */
  "about.banner": {
    eyebrow: "About Us",
    line1: "About Remnant",
    line2: "Christian Network",
    accent: "Cumbria",
    description:
      "A community of prayer, the Word and fellowship, seeking to see lives transformed in Christ.",
    image: "/images/about/hero.webp",
    imageAlt: "",
  },
  "about.family": {
    eyebrow: "The RCN Family",
    heading: "Remnant Christian Network (RCN)",
    paragraphs: [
      "Remnant Christian Network (RCN) is an interdenominational and non-denominational international ministry to the body of Christ with the mandate of restoring the apostolic order of Christianity as it was in the days of the first generation of apostles of Jesus Christ and thereby heralding the coming of the Lord Jesus Christ at this end of the age.",
      "RCN is headquartered in Makurdi, Benue State, Nigeria, with apostolic centres and mission outreaches across Africa, North America and Europe.",
    ],
    image: "/images/about/family.jpg",
    imageAlt: "Minister teaching with a microphone",
  },
  "about.local": {
    eyebrow: "RCN Cumbria",
    heading: "Our Local Expression",
    paragraphs: [
      "In Cumbria, we continue in following the apostles' doctrine, just as the early Christians did in Acts 2:42–47. We gather regularly in prayer, in the study of the Word, and in the breaking of Bread with one another, expressing our fellowship in ways that align with our terrain.",
      "Through online and in-person gatherings, we seek to raise believers who are rooted in Christ, spiritually equipped and devoted to advancing God's purposes in our communities.",
    ],
    image: "/images/about/local.jpg",
    imageAlt: "Believers praying together",
  },
  "about.prayer": {
    eyebrow: "Watchmen and Gatekeepers",
    heading: "Our City, Our Prayer Focus",
    paragraphs: [
      "Carlisle — the urban capital of Cumbria — is a border city with a rich history, and we recognise its spiritual significance, hence the need to take our place as Watchmen and Gatekeepers.",
      "We intercede for our city, families, communities and the wider region, believing that prayer can bring transformation and open doors for God's purposes in Cumbria and beyond.",
    ],
    image: "/images/about/carlisle.jpg",
    imageAlt: "Carlisle at sunset",
  },
  "about.leadership": {
    eyebrow: "Our Leadership",
    name: "Pastor Kenneth Dumbiri",
    role: "Pointman, RCN Cumbria",
    paragraphs: [
      "RCN Cumbria is led locally by Pastor Kenneth Dumbiri, under the spiritual oversight of Apostle Arome Osayi, Set Man of Remnant Christian Network.",
      "Together with the local ministry team, he provides leadership for the ministry's gatherings, prayer activities, discipleship and fellowship across Cumbria.",
    ],
    image: "/images/leaders/pke.webp",
    imageAlt: "Pastor Kenneth Dumbiri speaking",
  },
  "about.welcome": {
    eyebrow: "A Place to Belong and Grow",
    heading: "You Are Welcome",
    paragraphs: [
      "Whether you are exploring the Christian faith, returning to fellowship, new to Cumbria, or simply looking for a community in which to grow, you are welcome.",
      "Come worship, pray and fellowship with us as we pursue Christ together.",
    ],
    whatsappLabel: "Join Our WhatsApp Community",
    whatsappNote:
      "Connect with us and stay informed about upcoming gatherings.",
    whatsappLink: "https://chat.whatsapp.com/E1qn1XPEDw5lqJ5htWj6PY",
    image: "/images/about/welcome.jpg",
    imageAlt: "Open Bible on a table",
  },

  /* ────────────────────────── ACTIVITIES ────────────────────────── */
  "activities.banner": {
    eyebrow: "Our Activities",
    line1: "Join Us in Prayer,",
    line2: "the Word and Fellowship",
    description:
      "We gather together — online and in person — to seek God, grow in His Word and support one another in faith.",
    image: "/images/activities/hero.jpg",
    imageAlt: "Woman praying with hands raised",
  },
  "activities.regular": {
  eyebrow: "Our Regular Activities",
  heading: "Find Your Place",
  intro:
    "Whether you're joining us online or in person, there's a place for you at RCN Cumbria.",
  items: [
    {
      id: "1",
      title: "Daily Online Prayer",
      text: "Join us for our daily prayer gatherings online.",
      details: [
        { type: "time", label: "Gatekeepers' Prayer", note: "12:00 pm – 1:00 pm (UK time)" },
        { type: "time", label: "Watchmen's Prayer Meeting", note: "11:00 pm – 12:00 am (UK time)" },
      ],
      tagType: "Online",
      tagFrequency: "Daily",
      image: "/images/activities/prayer.jpg",
      alt: "Hands clasped in prayer beside a laptop",
    },
    {
      id: "2",
      title: "Prayer Marathon",
      text: "A monthly time of intensive prayer in person.",
      details: [
        { type: "date", label: "Venue will be confirmed for each month via our social media channels." },
      ],
      tagType: "In Person",
      tagFrequency: "Monthly",
      image: "/images/activities/marathon.jpg",
      alt: "Believers praying together",
    },
    {
      id: "3",
      title: "Sunday Services",
      text: "Join us for worship, prayer, fellowship and the ministry of God's Word.",
      details: [
        { type: "date", label: "Every Sunday", note: "(except the first Sunday of the month)" },
        { type: "time", label: "2:30 pm (UK time)" },
        { type: "place", label: "Petteril Bank Community Centre, Meade Road, Carlisle CA1 3BW" },
      ],
      tagType: "In Person",
      tagFrequency: "From Jan 2027",
      image: "/images/activities/sunday.jpg",
      alt: "Congregation worshipping with raised hands",
    },
    {
      id: "4",
      title: "Prophetic and Power Service",
      text: "A monthly prophetic service, with a focus on the ministry of the Holy Spirit, prophetic insight, prayer and the demonstration of God's power.",
      details: [
        { type: "date", label: "Every first Sunday of the month" },
        { type: "time", label: "2:30 pm (UK time)" },
        { type: "place", label: "Petteril Bank Community Centre, Meade Road, Carlisle CA1 3BW" },
      ],
      tagType: "In Person",
      tagFrequency: "Monthly",
      image: "/images/activities/prophetic.jpg",
      alt: "Hands raised in worship",
    },
    {
      id: "5",
      title: "Monthly Night Vigil",
      text: "A time of extended prayer, intercession and communion with the Lord.",
      details: [
        { type: "date", label: "Last Friday of every month" },
        { type: "time", label: "10:00 pm – 1:00 am (UK time)" },
        { type: "online", label: "Online" },
      ],
      tagType: "Online",
      tagFrequency: "Monthly",
      image: "/images/activities/vigil.jpg",
      alt: "Moon over a dark mountain landscape",
    },
    {
      id: "6",
      title: "Keep an Eye Out",
      text: "We also host special services, conferences and programmes throughout the year.\n\nFollow our social media channels for the latest updates and to be the first to know about upcoming events.",
      details: [],
      tagType: "In Person",
      tagFrequency: "Various",
      image: "/images/activities/save-the-date.jpg",
      alt: "Save the date note on a calendar",
    },
  ],
},
  "activities.meet": {
    eyebrow: "Join Our Online Gatherings",
    heading: "Google Meet",
    highlight: "Our daily online prayer meetings take place on Google Meet.",
    description: "Click the button  to join or copy the meeting details.",
    meetLink: "meet.google.com/xxx-xxxx-xxx",
    meetingId: "(GB) +44 20 3937 4988",
    passcode: "xxxxx",
  },
  "activities.events": {
    eyebrow: "Upcoming Events",
    heading: "Keep an Eye Out",
    description:
      "We also host special events, conferences and programmes throughout the year. Check back regularly for updates.",
    image: "/images/activities/save-the-date.jpg",
    imageAlt: "Save the date calendar with a pen",
  },
  "activities.gallery": {
    heading: "Gallery",
    items: [],
  },

  /* ───────────────────────────── GIVE ───────────────────────────── */
  "give.banner": {
    eyebrow: "Give",
    heading: "Partner With Us",
    description:
      "Your generosity helps support the work of Remnant Christian Network Cumbria as we seek to build people, strengthen communities and advance God's Kingdom in our region.",
    image: "/images/give/hero.jpg",
    imageAlt: "",
  },
  "give.quote": {
    quote:
      "Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver.",
    reference: "2 Corinthians 9:7 (ESV)",
  },
  "give.methods": {
    eyebrow: "Ways to Give",
    heading: "Choose a Giving Method",
    intro:
      "There are two simple ways to support the work of RCN Cumbria. You can give securely online via card payment, or by bank transfer.",
    onlineHeading: "Give Online (Card Payment)",
    onlineText:
      "Make a secure one-off or recurring gift using your debit or credit card via Stripe.",
    onlineButton: "Give Securely via Stripe",
    bankHeading: "Give by Bank Transfer",
    bankText:
      "You can also give directly via bank transfer using the details below.",
    bankNote:
      "Please use a reference (e.g. Giving) so we can identify your gift. Thank you for your support.",
  },
  // Placeholders (not empty strings) so the page shows sensible values until you edit them.
  "give.bank": {
    stripeLink: "https://buy.stripe.com/your-link",
    accountName: "RCN Cumbria",
    sortCode: "XX-XX-XX",
    accountNumber: "XXXXXXXX",
  },
  "give.info": {
    eyebrow: "Generosity as Worship",
    heading: "Generosity as Worship",
    description:
      "Giving is an expression of our worship and commitment to God's work. Through tithes, offerings and voluntary donations, we support our gatherings, biblical teachings, outreach and the advancement of the Gospel in Cumbria and beyond.",
    featureTitle: "Faithful Stewardship",
    featureText:
      "We are committed to managing every contribution responsibly, ensuring that donations are used to support the ministry's activities and purposes.",
  },

  /* ─────────────────────────── CONTACT ──────────────────────────── */
  "contact.banner": {
    eyebrow: "Contact Us",
    line1: "We'd Love to",
    line2: "Hear From You",
    description:
      "Whether you have a question, would like to connect, or want to know more about our gatherings, we are here to help. Feel free to reach out using any of the options below.",
    image: "/images/contact/hero.webp",
    imageAlt: "",
  },
  "contact.touch": {
    heading: "Contact Information",
    intro:
      "You can reach us by email, phone or through our WhatsApp Community. We will do our best to respond as soon as possible.",
    email: "info@rcncumbria.uk",
    phone: "+44 7350153033",
    whatsappLink: "https://chat.whatsapp.com/E1qn1XPEDw5lqJ5htWj6PY",
  },
  "contact.form": {
    eyebrow: "Send Us a Message",
    heading: "Enquiry Form",
    intro:
      "Fill in the form below and we will get back to you as soon as possible.",
  },
  "contact.community": {
    eyebrow: "Join Us",
    heading: "Be Part of Our Community",
    description:
      "We would love for you to join us at our gatherings and be part of what God is doing in Cumbria. Explore our upcoming events and activities to find out how you can get involved.",
    buttonLabel: "View Our Activities",
    image: "/images/contact/community.jpg",
    imageAlt: "Two people smiling in conversation",
  },

  /* ────────────────────────── RESOURCES ─────────────────────────── */
  "resources.banner": {
    eyebrow: "Resources",
    title: "Resources",
    description: "Grow in the Word. Be Strengthened in Faith.",
    image: "/images/resources/hero.jpg",
    imageAlt: "Open Bible on a wooden table",
  },
  "resources.desk": {
    heading: "From the Pastor's Desk",
    description:
      "Articles and written reflections from Pastor Kenneth Dumbiri on Scripture, prayer and Christian living.",
    image: "/images/resources/pastor-writing.jpg",
    imageAlt: "Hand writing in a journal beside a Bible",
  },
  "resources.articles": {
    items: [
      {
        id: "1",
        slug: "standing-firm",
        date: "2026-10-12",
        author: "Pastor Kenneth Dumbiri",
        title: "Standing Firm in Uncertain Times",
        excerpt:
          "When the ground feels unsteady, Scripture reminds us where our footing is found and why we can hold fast.",
        image: PLACEHOLDER_IMAGE,
        alt: "",
        body: "There are seasons when everything around us seems to shift: our finances, our health, our plans and even our sense of direction. In such moments, the question is not whether the storm will come, but where we have anchored our lives.\n\nScripture is full of men and women who stood firm while the world around them trembled. Their strength did not come from favourable conditions, but from an unshakeable confidence in the character and promises of God.\n\nAs you face uncertainty today, return to the Word, gather with other believers and pray without ceasing. The One who called you is faithful, and He will not leave you to stand alone.",
      },
      {
        id: "2",
        slug: "praying-community",
        date: "2026-10-02",
        author: "Pastor Kenneth Dumbiri",
        title: "The Power of a Praying Community",
        excerpt:
          "What happens when believers gather with one heart to seek God together, and why it still matters today.",
        image: PLACEHOLDER_IMAGE,
        alt: "",
        body: "From the earliest days of the Church, prayer was never a private exercise alone. Believers gathered, lifted their voices together and watched God move in ways no individual could have imagined.\n\nWhen a community prays with one heart, burdens are shared, faith is strengthened and the purposes of God are advanced. Unity in prayer creates an atmosphere where heaven touches earth.\n\nMake it a priority to join our daily online prayers and monthly prayer marathons. Your voice matters, and the prayers of the community are stronger with you in them.",
      },
      {
        id: "3",
        slug: "gods-purpose",
        date: "2026-09-18",
        author: "Pastor Kenneth Dumbiri",
        title: "Walking in God's Purpose",
        excerpt:
          "Discovering and embracing the purpose God has set for your life, one faithful step at a time.",
        image: PLACEHOLDER_IMAGE,
        alt: "",
        body: "God does not create anyone without purpose. Each of us has been placed in a particular time, family and community for a reason, and discovering that purpose begins with a surrendered heart.\n\nPurpose is rarely revealed all at once. More often, it unfolds as we obey in the small things, remain faithful where we are and stay close to the voice of the Holy Spirit.\n\nTake the next step you already know to take. As you walk in obedience, you will find that He directs your path and gives clarity for the journey ahead.",
      },
      {
        id: "4",
        slug: "abiding-in-the-word",
        date: "2026-09-04",
        author: "Pastor Kenneth Dumbiri",
        title: "Abiding in the Word Daily",
        excerpt:
          "Simple, practical ways to make time in God's Word a steady rhythm in everyday life.",
        image: PLACEHOLDER_IMAGE,
        alt: "",
        body: "A life rooted in the Word is a life that bears lasting fruit. Yet many believers struggle to keep a consistent rhythm of reading and meditating on Scripture amid busy schedules.\n\nStart small and be consistent. Choose a set time, read a short passage, ask what it reveals about God and how it should shape your day, and then write down what you learn.\n\nOver time, these small moments become a deep well. The Word will begin to guide your decisions, renew your mind and strengthen your faith.",
      },
      {
        id: "5",
        slug: "early-church-fellowship",
        date: "2026-08-21",
        author: "Pastor Kenneth Dumbiri",
        title: "The Fellowship of the Early Church",
        excerpt:
          "Lessons from Acts 2:42 on devotion to teaching, prayer, fellowship and the breaking of bread.",
        image: PLACEHOLDER_IMAGE,
        alt: "",
        body: "The early Church devoted themselves to the apostles' teaching, to fellowship, to the breaking of bread and to prayer. These four pillars shaped a community that turned its world upside down.\n\nTheir fellowship was not casual. It was marked by generosity, shared meals, mutual care and a deep sense that they belonged to one another in Christ.\n\nAt RCN Cumbria, we seek to walk in that same pattern. Come and be part of a community devoted to God's Word, prayer and genuine fellowship.",
      },
      {
        id: "6",
        slug: "keeping-the-fire-burning",
        date: "2026-08-07",
        author: "Pastor Kenneth Dumbiri",
        title: "Keeping the Fire Burning",
        excerpt:
          "How to stay spiritually fervent in every season through prayer, the Word and community.",
        image: PLACEHOLDER_IMAGE,
        alt: "",
        body: "Fire needs fuel to keep burning, and so does our spiritual life. When prayer grows irregular and the Word is neglected, the flame can slowly dim without our noticing.\n\nThe good news is that it can be rekindled. Return to the place of prayer, feed on the Scriptures and surround yourself with believers who stir you up to love and good works.\n\nGuard the fire that God has placed within you. Where there is fervency, there is power, and where there is power, lives are transformed.",
      },
    ],
  },
  "resources.teachings": {
    heading: "Teachings & Messages",
    description:
      "Access our platforms for uplifting messages, biblical teachings and recorded gatherings.",
    telegramTitle: "Listen on Telegram",
    telegramText:
      "Explore our collection of biblical teachings and audio messages to strengthen your walk with God.",
    telegramButton: "Open Telegram",
    telegramLink: "https://t.me/your-channel",
    youtubeTitle: "Watch on YouTube",
    youtubeText:
      "Watch biblical teachings, messages and recorded gatherings on our YouTube channel.",
    youtubeButton: "Visit YouTube",
    youtubeLink: "https://www.youtube.com/@RCNCarlisle",
  },
  "resources.connect": {
    heading: "Stay Connected with RCN Cumbria",
    description:
      "Join our WhatsApp community for updates about our gatherings, prayer meetings and more.",
    buttonLabel: "Join Our WhatsApp Community",
    whatsappLink: "https://chat.whatsapp.com/E1qn1XPEDw5lqJ5htWj6PY",
  },

  /* ──────────────────────────── I AM NEW ────────────────────────── */
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

  /* ─────────────────────────── TEAM PAGE ────────────────────────── */
  "team.page": {
    heading: "Leadership",
    members: [
      {
        id: "1",
        name: "Apostle Arome Osayi",
        position: "Set Man, Remnant Christian Network Global",
        image: "/images/leaders/AAO.jpg",
      },
      {
        id: "2",
        name: "Reverend Dinna Osayi",
        position: "Co Pastor, Remnant Christian Network  Global",
        image: "/images/leaders/aab.png",
      },
      {
        id: "3",
        name: "Rev. ??????",
        position: "Point man, Remnant Christian Network Cumbria",
        image: "/images/leaders/pke.webp",
      },
    ],
  },

  /* ─────────────────────── LEGAL & SAFEGUARDING ─────────────────── */
  "legal.privacy": {
    title: "Privacy Policy",
    lastUpdated: "September 2026",
    intro: PRIVACY_INTRO,
    sections: toEditableSections(PRIVACY_SECTIONS),
  },
  "legal.terms": {
    title: "Website Terms of Use",
    lastUpdated: "September 2026",
    intro: TERMS_INTRO,
    sections: toEditableSections(TERMS_SECTIONS),
  },

  "safeguarding.intro": {
    eyebrow: "Safeguarding",
    title: "Safeguarding",
    intro: [
      "At Remnant Christian Network Cumbria (RCN Cumbria), we are committed to creating a safe, welcoming and caring environment for everyone who participates in our gatherings, programmes and activities, whether in person or online.",
      "We believe that every person is made in the image of God and deserves to be treated with dignity, respect and care. Safeguarding is therefore an essential part of our responsibility as a Christian community.",
    ],
  },
  "safeguarding.urgent": {
    heading: "If Someone Is in Immediate Danger",
    text: [
      "If you believe that a child or adult is in immediate danger or at risk of serious harm, call 999.",
      "Where appropriate, safeguarding concerns may also be reported directly to the police or relevant local authority safeguarding services.",
    ],
  },
  "safeguarding.commitments": {
    heading: "Our Commitment",
    intro:
      "RCN Cumbria is committed to safeguarding children, young people and adults at risk. We seek to:",
    items: [
      {
        id: "1",
        text: "Maintain a safe and supportive environment for everyone participating in our activities.",
      },
      {
        id: "2",
        text: "Respond promptly and appropriately to safeguarding concerns, disclosures and allegations.",
      },
      {
        id: "3",
        text: "Ensure that those entrusted with safeguarding responsibilities are appropriately selected, supported and, where legally eligible and appropriate, DBS checked.",
      },
      {
        id: "4",
        text: "Promote responsible conduct, appropriate boundaries and accountability among ministry leaders, workers and volunteers.",
      },
      {
        id: "5",
        text: "Work with statutory safeguarding authorities and other relevant organisations when necessary.",
      },
      {
        id: "6",
        text: "Review our safeguarding arrangements and practices regularly.",
      },
    ],
  },
  "safeguarding.report": {
    heading: "Reporting a Safeguarding Concern",
    intro:
      "If you are concerned about the safety or wellbeing of a child, young person or adult at risk, or about something that has happened during an RCN Cumbria activity, please contact our designated safeguarding team.",
    teamLabel: "Designated Safeguarding Team",
    team: ["Abigael Dumbiri", "Deborah Akindina"],
    emailLabel: "Safeguarding Email",
    email: "safeguarding.rcncumbria@gmail.com",
    note: [
      "You do not need to be certain that abuse or harm has occurred before raising a concern. If something does not feel right, we encourage you to report it.",
      "You may also contact the relevant local authority safeguarding service or the police directly. If your concern involves a member of the safeguarding team, you do not need to report it to that person.",
    ],
  },
  "safeguarding.more": {
    items: [
      {
        id: "1",
        eyebrow: "Confidentiality",
        title: "Confidentiality",
        paragraphs: [
          "We recognise the importance of handling safeguarding concerns with sensitivity and discretion.",
          "Information shared with our safeguarding team will be handled carefully and shared only where necessary to protect an individual, respond appropriately to a concern or fulfil our safeguarding and legal responsibilities.",
          "We cannot promise absolute confidentiality where someone may be at risk of harm.",
        ],
      },
      {
        id: "2",
        eyebrow: "Children and Young People",
        title: "Children and Young People",
        paragraphs: [
          "We want children and young people to participate in church life in a safe and supportive environment where they feel respected and valued.",
          "Those entrusted with responsibilities involving children and young people are expected to maintain appropriate boundaries and follow our safeguarding procedures and codes of conduct. Where applicable, appropriate recruitment and DBS checking requirements will be observed.",
          "Parents and carers are encouraged to raise any questions or concerns about their child's participation in our activities with the safeguarding team.",
        ],
      },
      {
        id: "3",
        eyebrow: "Adults at Risk",
        title: "Adults at Risk",
        paragraphs: [
          "We recognise that adults may also experience abuse, exploitation, neglect or other forms of harm.",
          "We are committed to responding appropriately to concerns while respecting the dignity, wishes and circumstances of each individual and recognising our responsibility to protect people from harm.",
        ],
      },
    ],
  },
};
