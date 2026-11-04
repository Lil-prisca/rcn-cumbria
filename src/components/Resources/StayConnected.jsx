import { ChevronRight, UsersRound } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useSectionStatus } from "../../content/useSection";

// All text and the link come from the admin section "resources.connect".
export default function StayConnected() {
  const { data } = useSectionStatus("resources.connect");
  const { heading, description, buttonLabel, whatsappLink } = data || {};

  return (
    <section className="bg-[#e9e8fb] font-sans">
      {/* Text block + button side by side on desktop */}
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-[43px]">
        <div className="flex items-center gap-5 lg:gap-6">
          <UsersRound
            size={84}
            strokeWidth={1.2}
            className="shrink-0 fill-rcn-navy text-rcn-navy"
          />
          <span className="hidden h-[78px] w-[2px] shrink-0 bg-rcn-navy sm:block" />
          <div>
            <h2 className="text-[26px] font-extrabold leading-tight text-rcn-navy">
              {heading}
            </h2>
            <p className="mt-1.5 max-w-[470px] text-[16px] leading-[1.45] text-rcn-navy">
              {description}
            </p>
          </div>
        </div>

        {whatsappLink && (
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#0f6b38] px-7 py-5 text-[15px] font-bold text-rcn-white shadow-sm transition hover:bg-[#0c5a2f]"
          >
            <FaWhatsapp size={34} />
            {buttonLabel}
            <ChevronRight size={18} />
          </a>
        )}
      </div>
    </section>
  );
}
