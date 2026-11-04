import { ExternalLink } from "lucide-react";
import { FaTelegram, FaYoutube } from "react-icons/fa";
import { useSectionStatus } from "../../content/useSection";

// All text and links come from the admin section "resources.teachings".
export default function TeachingsMessages() {
  const { data } = useSectionStatus("resources.teachings");
  const {
    heading,
    description,
    telegramTitle,
    telegramText,
    telegramButton,
    telegramLink,
    youtubeTitle,
    youtubeText,
    youtubeButton,
    youtubeLink,
  } = data || {};

  return (
    <section className="bg-rcn-snow font-sans">
      <div className="mx-auto max-w-[1200px] px-6 pb-14 lg:px-[43px]">
        <h2 className="text-[36px] font-extrabold leading-tight text-rcn-navy">
          {heading}
        </h2>
        <p className="mt-2 text-[18px] text-rcn-navy">{description}</p>

        {/* Two cards side by side on desktop */}
        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:gap-[30px]">
          {/* Telegram */}
          <div className="flex flex-col items-center rounded-2xl bg-[#e1edfc] px-8 pb-6 pt-3 text-center lg:flex-1">
            <FaTelegram size={76} className="text-[#1ea1f2]" />
            <h3 className="mt-3 text-[26px] font-extrabold text-rcn-navy">
              {telegramTitle}
            </h3>
            <p className="mt-2 max-w-[360px] text-[17px] leading-[1.4] text-rcn-navy">
              {telegramText}
            </p>
            {telegramLink && (
              <a
                href={telegramLink}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center gap-3 rounded-lg bg-[#2b82c9] px-12 py-3.5 text-[18px] font-bold text-rcn-white shadow-sm transition hover:bg-[#2370ad]"
              >
                {telegramButton}
                <ExternalLink size={18} />
              </a>
            )}
          </div>

          {/* YouTube */}
          <div className="flex flex-col items-center rounded-2xl bg-[#fde4e8] px-8 pb-6 pt-5 text-center lg:flex-1">
            <FaYoutube size={92} className="text-[#f00000]" />
            <h3 className="mt-2 text-[26px] font-extrabold text-rcn-navy">
              {youtubeTitle}
            </h3>
            <p className="mt-2 max-w-[360px] text-[17px] leading-[1.4] text-rcn-navy">
              {youtubeText}
            </p>
            {youtubeLink && (
              <a
                href={youtubeLink}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center gap-3 rounded-lg bg-[#d91e25] px-12 py-3.5 text-[18px] font-bold text-rcn-white shadow-sm transition hover:bg-[#bd1a20]"
              >
                {youtubeButton}
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
