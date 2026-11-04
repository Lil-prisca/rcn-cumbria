import { CalendarDays } from "lucide-react";
import { useSection } from "../../content/useSection";
import safe from "../../assets/Activity/save_a_date.png";

// Text and image come from the admin section "activities.events".
// The bundled image is used if no image has been set.
export default function UpcomingEvents() {
  const { eyebrow, heading, description, image, imageAlt } =
    useSection("activities.events");

  return (
    <section className="bg-rcn-snow px-6 py-10 lg:px-[47px]">
      {/* Text + image side by side */}
      <div className="mx-auto flex max-w-[1200px] flex-col overflow-hidden rounded-xl bg-rcn-ice shadow-[0_1px_8px_rgba(15,23,42,0.06)] md:min-h-[138px] md:flex-row">
        {/* PART 1: text */}
        <div className="flex items-center gap-4 px-6 py-6 md:w-1/2 md:pl-5">
          <CalendarDays
            size={38}
            strokeWidth={1.5}
            className="shrink-0 self-start text-rcn-red md:mt-4"
          />
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-rcn-red">
              {eyebrow}
            </p>
            <h2 className="mt-1 text-[24px] font-extrabold leading-tight text-rcn-navy">
              {heading}
            </h2>
            <p className="mt-2 max-w-[340px] text-[13px] leading-[1.5] text-rcn-body">
              {description}
            </p>
          </div>
        </div>

        {/* PART 2: image that fades in from the text side */}
        <div className="relative h-[140px] md:h-auto md:w-1/2">
          <img
            src={image || safe}
            alt={imageAlt || ""}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rcn-ice via-rcn-ice/10 to-transparent md:from-rcn-ice/80 md:via-transparent" />
        </div>
      </div>
    </section>
  );
}
