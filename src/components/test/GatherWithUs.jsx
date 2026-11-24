import {
  ArrowRight,
  Laptop,
  Users,
  BookOpen,
  CalendarDays,
} from "lucide-react";
import { useSection } from "../../content/useSection";
// import gather from "../../assets/home-pic/gather-with-us.png";
// import gather2 from "../../assets/home-pic/Home gather.avif";
const activities = [
  {
    icon: Laptop,
    title: "Online Prayer",
    text: "Join us daily as we pray together online.",
    times: [],
  },
  {
    icon: Users,
    title: "Prayer Marathon",
    text: "A monthly time of intensive prayer in person.",
    times: [],
  },
  {
    icon: BookOpen,
    title: "Bible Study",
    text: "Deepen your understanding of God's Word.",
    times: [],
  },
  {
    icon: CalendarDays,
    title: "Sunday Services",
    text: "We will be starting our Sunday services in January 2027.",
    times: [],
  },
];

export default function GatherWithUs() {
  const { image, imageAlt } = useSection("home.gather");
  return (
    // Two parts side by side on desktop
    <section className="flex flex-col bg-rcn-cloud lg:flex-row">
      {/* PART 1: image background with text on top */}
      <div className="relative isolate flex min-h-[260px] items-center overflow-hidden bg-rcn-night px-8 py-10 lg:min-h-[242px] lg:w-[47.5%] lg:shrink-0 lg:px-[52px]">
        <img
          src={image}
          alt={imageAlt}
          className="absolute inset-y-0 right-0 -z-20 h-full w-[100%] object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-rcn-night from-35% via-rcn-night/80 via-55% to-transparent" />

        <div className="max-w-[330px] text-rcn-white">
          <p className="text-[13px] font-bold uppercase tracking-wide text-rcn-red">
            Gather With Us
          </p>
          <h2 className="mt-1 text-[28px] font-extrabold leading-[1.1]">
            Grow Together in God's Word, Prayer and Fellowship
          </h2>
          <p className="mt-3 text-[13px] leading-[1.45] text-rcn-white/90">
            From daily online prayers to in-person gatherings, there are
            opportunities to seek God, grow in His Word and fellowship with
            other believers.
          </p>
          <a
            href="/our-activities"
            className="mt-4 inline-flex items-center gap-3 rounded-md bg-rcn-red px-6 py-3 text-[14px] font-semibold text-rcn-white shadow-sm transition hover:bg-rcn-redDark"
          >
            View Our Activities
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* PART 2: programmes beside each other */}
      <div className="flex flex-1 flex-wrap gap-3 p-3 lg:flex-nowrap lg:p-[10px]">
        {activities.map(({ icon: Icon, title, text, times }) => (
          <article
            key={title}
            className="flex w-[calc(50%-6px)] flex-col items-center rounded-lg bg-rcn-white px-3 pb-5 pt-6 text-center shadow-[0_1px_6px_rgba(15,23,42,0.06)] lg:w-auto lg:flex-1"
          >
            <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-rcn-blush text-rcn-red">
              <Icon size={26} strokeWidth={1.6} />
            </span>
            <h3 className="mt-4 text-[13px] font-bold text-rcn-navy">
              {title}
            </h3>
            <p className="mt-2 text-[12px] leading-[1.45] text-rcn-body">
              {text}
            </p>
            {times.length > 0 && (
              <div className="mt-4 space-y-0.5 text-[12px] font-bold leading-snug text-rcn-navy">
                {times.map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
