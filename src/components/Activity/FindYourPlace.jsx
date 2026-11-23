import {
  HandHeart,
  Flame,
  Church,
  Zap,
  Moon,
  CalendarDays,
  Clock,
  MapPin,
  Monitor,
} from "lucide-react";
import { useSection } from "../../content/useSection";

// The admin edits text, details, tags and photos. Icon and panel colour are
// decorative, so they are picked by position (1st to 6th, then repeat).
const styles = [
  { icon: HandHeart, panel: "from-[#0f2468] to-[#0a1740]", iconBg: "bg-rcn-red" },
  { icon: Flame, panel: "from-[#8a2447] to-[#5a1530]", iconBg: "bg-rcn-red", fillIcon: true },
  { icon: Church, panel: "from-[#56408a] to-[#3b2a63]", iconBg: "bg-[#6f5bb0]" },
  { icon: Zap, panel: "from-[#56408a] to-[#3b2a63]", iconBg: "bg-[#6f5bb0]", fillIcon: true },
  { icon: Moon, panel: "from-[#0f2468] to-[#0a1740]", iconBg: "bg-[#1f3a9a]", fillIcon: true },
  { icon: CalendarDays, panel: "from-[#56408a] to-[#3b2a63]", iconBg: "bg-rcn-red" },
];

// Detail rows pick their icon from the "type" the admin sets.
const detailIcons = {
  date: CalendarDays,
  time: Clock,
  place: MapPin,
  online: Monitor,
};

export default function FindYourPlace() {
  const { eyebrow, heading, intro, items = [] } = useSection("activities.regular");

  return (
    <section className="bg-rcn-snow px-6 py-10 lg:px-[47px]">
      <div className="mx-auto max-w-[1200px]">
        <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-rcn-red">
          {eyebrow}
        </p>
        <h2 className="mt-1 text-[30px] font-extrabold leading-tight text-rcn-navy">
          {heading}
        </h2>
        <p className="mt-2 text-[15px] text-rcn-navy/70">{intro}</p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(
            ({ id, title, text, details = [], tagType, tagFrequency, image, alt }, i) => {
              const { icon: Icon, panel, iconBg, fillIcon } = styles[i % styles.length];

              return (
                <article
                  key={id ?? title}
                  className="flex min-h-[370px] flex-col overflow-hidden rounded-lg shadow-[0_6px_18px_rgba(10,19,48,0.18)]"
                >
                  <div className="h-[200px] shrink-0 overflow-hidden bg-rcn-ice">
                    {image && (
                      <img
                        src={image}
                        alt={alt || title}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>

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
                    <p className="mt-3 whitespace-pre-line text-[14px] leading-[1.5] text-rcn-white/85">
                      {text}
                    </p>

                    {details.length > 0 && (
                      <ul className="mt-4 space-y-2.5">
                        {details.map(({ type, label, note }, d) => {
                          const DIcon = detailIcons[type] || CalendarDays;
                          return (
                            <li key={d} className="flex items-start gap-3">
                              <DIcon size={20} strokeWidth={1.6} className="mt-0.5 shrink-0" />
                              <div className="text-[13px] leading-snug">
                                <p className="font-bold">{label}</p>
                                {note && (
                                  <p className="text-[12px] text-rcn-white/80">{note}</p>
                                )}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    )}

                    {(tagType || tagFrequency) && (
                      <div className="mt-auto pt-4">
                        <span className="inline-flex w-fit items-center gap-2 rounded-md border border-rcn-white/60 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                          {tagType}
                          {tagType && tagFrequency && <span className="text-[8px]">●</span>}
                          {tagFrequency}
                        </span>
                      </div>
                    )}
                  </div>
                </article>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}