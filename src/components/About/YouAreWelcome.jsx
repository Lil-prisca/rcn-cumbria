import { MessageCircle, ChevronRight } from "lucide-react";

export default function YouAreWelcome({
  whatsappLink = "https://chat.whatsapp.com/your-invite-link",
}) {
  return (
    <section className="bg-rcn-snow py-5 pb-8">
      {/* image left, text right */}
      <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-8 px-6 lg:flex-row lg:items-center lg:gap-[38px] lg:px-[58px]">
        <img
          src="/images/about-open-bible.jpg"
          alt="Open Bible on a table"
          className="h-[175px] w-full rounded-lg object-cover shadow-[0_2px_10px_rgba(15,23,42,0.12)] lg:w-[420px] lg:shrink-0"
        />

        <div className="flex-1">
          <p className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-wide text-rcn-red">
            A Place to Belong and Grow
            <span className="h-px w-6 bg-rcn-red" />
          </p>
          <h2 className="mt-1 text-[26px] font-extrabold leading-tight text-rcn-navy">
            You Are Welcome
          </h2>
          <p className="mt-2 text-[14px] leading-[1.5] text-rcn-body">
            Whether you are exploring the Christian faith, returning to
            fellowship, new to Cumbria, or simply looking for a community in
            which to grow, you are welcome.
            <br />
            Come worship, pray and fellowship with us as we pursue Christ
            together.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex flex-col items-center justify-center rounded-md bg-[#0f6b38] px-5 py-2.5 text-rcn-white shadow-sm transition hover:bg-[#0c5a2f]"
          >
            <span className="flex items-center gap-3 text-[15px] font-bold">
              <MessageCircle size={26} strokeWidth={1.6} />
              Join Our WhatsApp Community
              <ChevronRight size={20} />
            </span>
            <span className="mt-0.5 text-[11px] font-normal">
              Connect with us and stay informed about upcoming gatherings.
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
