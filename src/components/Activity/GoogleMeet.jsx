import { useState } from "react";
import { Link2, Video, Copy, Check } from "lucide-react";
import { useSection } from "../../content/useSection";

// Text, link and meeting details come from the admin section "activities.meet".
export default function GoogleMeet({
  logoSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsFrKch4EoKz0vdLskhMBb5aYqAzdt-O9mQc-SFJr2og&s=10",
}) {
  const {
    eyebrow,
    heading,
    highlight,
    description,
    meetLink = "",
    meetingId,
    passcode,
  } = useSection("activities.meet");
  const [copied, setCopied] = useState(false);

  const copyDetails = async () => {
    const text = `Meeting link: https://${meetLink}\nMeeting ID: ${meetingId}\nPasscode: ${passcode}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section className="bg-rcn-ice px-6 py-14 lg:px-[58px]">
      {/* Two parts side by side, with a divider between them */}
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-0">
        {/* PART 1 */}
        <div className="flex items-center gap-5 lg:w-1/2 lg:border-r lg:border-rcn-body/30 lg:pr-10">
          <img
            src={logoSrc}
            alt="Google Meet"
            className="h-[62px] w-[62px] shrink-0 object-contain"
          />
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-rcn-red">
              {eyebrow}
            </p>
            <h2 className="mt-1 text-[30px] font-extrabold leading-tight text-rcn-navy">
              {heading}
            </h2>
            <p className="mt-2 text-[13px] font-bold text-rcn-navy/85">
              {highlight}
            </p>
            <p className="mt-1.5 text-[13px] text-rcn-body">{description}</p>
          </div>
        </div>

        {/* PART 2 */}
        <div className="lg:w-1/2 lg:pl-10">
          <div className="rounded-lg bg-rcn-white p-6 shadow-[0_2px_14px_rgba(15,23,42,0.07)]">
            <div className="flex items-start gap-4">
              <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-rcn-navy text-rcn-white">
                <Link2 size={16} />
              </span>
              <div className="text-[13px] text-rcn-navy">
                <h3 className="text-[15px] font-bold">Meeting Details</h3>
                <p className="mt-1.5">
                  Meeting link:{" "}
                  <a
                    href={`https://${meetLink}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-rcn-link underline"
                  >
                    {meetLink}
                  </a>
                </p>
                <p className="mt-1.5">
                  {/* Meeting ID: <span className="ml-1">{meetingId}</span> */}
                </p>
                <p className="mt-1.5">
                  {/* Passcode: <span className="ml-2">{passcode}</span> */}
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={`https://${meetLink}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-rcn-red px-5 py-3 text-[13px] font-semibold text-rcn-white shadow-sm transition hover:bg-rcn-redDark"
              >
                <Video size={16} className="fill-white" />
                Join on Google Meet
              </a>
              <button
                type="button"
                onClick={copyDetails}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-rcn-navy bg-rcn-white px-5 py-3 text-[13px] font-semibold text-rcn-navy transition hover:bg-rcn-navy hover:text-rcn-white"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied!" : "Copy Details"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
