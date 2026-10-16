import { CalendarDays } from "lucide-react";
import safe from "../../assets/Activity/save_a_date.png";

export default function UpcomingEvents() {
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
              Upcoming Events
            </p>
            <h2 className="mt-1 text-[24px] font-extrabold leading-tight text-rcn-navy">
              Keep an Eye Out
            </h2>
            <p className="mt-2 max-w-[340px] text-[13px] leading-[1.5] text-rcn-body">
              We also host special events, conferences and programmes throughout
              the year. Check back regularly for updates.
            </p>
          </div>
        </div>

        {/* PART 2: image that fades in from the text side */}
        <div className="relative h-[140px] md:h-auto md:w-1/2">
          <img
            src={safe}
            alt="Save the date calendar with pen"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rcn-ice via-rcn-ice/10 to-transparent md:from-rcn-ice/80 md:via-transparent" />
        </div>
      </div>
    </section>
  );
}
