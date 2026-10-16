import { HandHeart, Flame, BookOpen, Church } from "lucide-react";

const activities = [
  {
    icon: HandHeart,
    title: "Daily Online Prayer",
    text: "Join us for our daily prayer gatherings on Google Meet.",
    tag: ["Online", "Daily"],
    image: "/images/activity-prayer.jpg",
    panel: "from-[#0f2468] to-[#0a1740]",
    iconBg: "bg-rcn-red",
  },
  {
    icon: Flame,
    title: "Prayer Marathon",
    text: "A monthly time of intensive prayer in person.",
    tag: ["In Person", "Monthly"],
    image: "/images/activity-marathon.jpg",
    panel: "from-[#8a2447] to-[#5a1530]",
    iconBg: "bg-rcn-red",
    fillIcon: true,
  },
  {
    icon: BookOpen,
    title: "Bible Study",
    text: "Growing deeper in God's Word together.",
    tag: ["In Person", "Regular"],
    image: "/images/activity-bible.jpg",
    panel: "from-[#0b4170] to-[#082a52]",
    iconBg: "bg-[#0a2a58]",
  },
  {
    icon: Church,
    title: "Sunday Services",
    text: "We will be starting our Sunday services in January 2027.",
    tag: ["In Person", "From Jan 2027"],
    image: "/images/activity-sunday.jpg",
    panel: "from-[#56408a] to-[#3b2a63]",
    iconBg: "bg-[#6f5bb0]",
  },
];

export default function FindYourPlace() {
  return (
    <section className="bg-rcn-snow px-6 py-10 lg:px-[47px]">
      <div className="mx-auto max-w-[1200px]">
        <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-rcn-red">
          Our Regular Activities
        </p>
        <h2 className="mt-1 text-[30px] font-extrabold leading-tight text-rcn-navy">
          Find Your Place
        </h2>
        <p className="mt-2 text-[15px] text-rcn-navy/70">
          Whether you're joining us online or in person, there's a place for you
          at RCN Cumbria.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 lg:flex-nowrap">
          {activities.map(
            ({ icon: Icon, title, text, tag, image, panel, iconBg, fillIcon }) => (
              <article
                key={title}
                className="flex min-h-[370px] w-[calc(50%-8px)] flex-col overflow-hidden rounded-lg shadow-[0_6px_18px_rgba(10,19,48,0.18)] max-sm:w-full lg:w-auto lg:flex-1"
              >
                {/* Photo */}
                <div className="h-[141px] shrink-0 overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Coloured panel */}
                <div
                  className={`relative flex flex-1 flex-col bg-gradient-to-b ${panel} px-[22px] pb-5 pt-[42px] text-rcn-white`}
                >
                  <span
                    className={`absolute -top-[30px] left-[22px] flex h-[60px] w-[60px] items-center justify-center rounded-full ${iconBg} shadow-md`}
                  >
                    <Icon
                      size={30}
                      strokeWidth={1.6}
                      className={fillIcon ? "fill-white" : ""}
                    />
                  </span>

                  <h3 className="text-[24px] font-bold leading-[1.1]">{title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.5] text-rcn-white/85">
                    {text}
                  </p>

                  <span className="mt-auto inline-flex w-fit items-center gap-2 rounded-md border border-rcn-white/60 px-3 py-1.5 pt-1.5 text-[11px] font-bold uppercase tracking-wider">
                    {tag[0]}
                    <span className="text-[8px]">●</span>
                    {tag[1]}
                  </span>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
