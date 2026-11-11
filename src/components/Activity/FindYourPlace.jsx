import { HandHeart, Flame, BookOpen, Church } from "lucide-react";
import { useSection } from "../../content/useSection";

// The admin only edits the text, tags and photos. The icon and panel colour
// are decorative, so they are picked by position (1st, 2nd, 3rd, 4th, then repeat).
const styles = [
  {
    icon: HandHeart,
    panel: "from-[#0f2468] to-[#0a1740]",
    iconBg: "bg-rcn-red",
  },
  {
    icon: Flame,
    panel: "from-[#8a2447] to-[#5a1530]",
    iconBg: "bg-rcn-red",
    fillIcon: true,
  },
  {
    icon: BookOpen,
    panel: "from-[#0b4170] to-[#082a52]",
    iconBg: "bg-[#0a2a58]",
  },
  {
    icon: Church,
    panel: "from-[#56408a] to-[#3b2a63]",
    iconBg: "bg-[#6f5bb0]",
  },
];

// Text and cards come from the admin section "activities.regular".
export default function FindYourPlace() {
  const {
    eyebrow,
    heading,
    intro,
    items = [],
  } = useSection("activities.regular");

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

        <div className="mt-6 flex flex-wrap gap-4 lg:flex-nowrap">
          {items.map(
            ({ id, title, text, tagType, tagFrequency, image, alt }, i) => {
              const {
                icon: Icon,
                panel,
                iconBg,
                fillIcon,
              } = styles[i % styles.length];

              return (
                <article
                  key={id ?? title}
                  className="flex min-h-[370px] w-[calc(50%-8px)] flex-col overflow-hidden rounded-lg shadow-[0_6px_18px_rgba(10,19,48,0.18)] max-sm:w-full lg:w-auto lg:flex-1"
                >
                  {/* Photo */}
                  <div className="h-[200px] shrink-0 overflow-hidden bg-rcn-ice">
                    {image && (
                      <img
                        src={image}
                        alt={alt || title}
                        className="h-full w-full object-cover "
                      />
                    )}
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

                    <h3 className="text-[24px] font-bold leading-[1.1]">
                      {title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-[1.5] text-rcn-white/85">
                      {text}
                    </p>

                    {(tagType || tagFrequency) && (
                      <span className="mt-auto inline-flex w-fit items-center gap-2 rounded-md border border-rcn-white/60 px-3 py-1.5 pt-1.5 text-[11px] font-bold uppercase tracking-wider">
                        {tagType}
                        {tagType && tagFrequency && (
                          <span className="text-[8px]">●</span>
                        )}
                        {tagFrequency}
                      </span>
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
