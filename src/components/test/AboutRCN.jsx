import { ArrowRight, Globe, Users, Expand, UserRound } from "lucide-react";

const highlights = [
  { icon: Globe, label: "Global\nMinistry" },
  { icon: Users, label: "Apostolic\nCentres" },
  { icon: Expand, label: "Mission\nOutreaches" },
  { icon: UserRound, label: "Across Africa,\nNorth America\nand Europe" },
];

export default function AboutRCN() {
  return (
    <section className="bg-rcn-snow py-10 lg:py-12">
      {/* Two parts side by side on desktop */}
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 lg:flex-row lg:gap-12 lg:px-[52px]">
        {/* PART 1: Remnant Christian Network */}
        <div className="lg:w-1/2">
          <p className="text-[13px] font-bold uppercase tracking-wide text-rcn-red">
            About RCN
          </p>
          <h2 className="mt-1 text-[28px] font-extrabold leading-tight text-rcn-navy md:text-[30px]">
            Remnant Christian Network
          </h2>

          <p className="mt-3 max-w-[470px] text-[15px] leading-[1.6] text-rcn-body">
            Remnant Christian Network (RCN) is an interdenominational and
            non-denominational international ministry to the body of Christ with
            the mandate of restoring the apostolic order of Christianity as it
            was in the days of the first generation of apostles of Jesus Christ
            and thereby heralding the coming of the Lord Jesus Christ at this
            end of the age.
          </p>
          <p className="mt-3 max-w-[400px] text-[15px] leading-[1.6] text-rcn-body">
            Join us as we bring spiritual gatherings, support and community to
            Cumbria and the surrounding areas.
          </p>

          <a
            href="/about"
            className="mt-5 inline-flex items-center gap-3 rounded-md bg-rcn-red px-6 py-3 text-[14px] font-semibold text-rcn-white shadow-sm transition hover:bg-rcn-redDark"
          >
            About RCN
            <ArrowRight size={16} />
          </a>
        </div>

        {/* PART 2: Part of a Wider Family */}
        <div className="lg:w-1/2">
          <div className="flex items-center gap-8 rounded-xl bg-rcn-mist bg-[url('/images/world-map.svg')] bg-contain bg-left bg-no-repeat px-8 py-8 lg:px-10">
            <img
              src="https://images.pexels.com/photos/20620850/pexels-photo-20620850.jpeg?_gl=1*1muubgy*_ga*MTY4MTc4ODExOC4xNzkyMTYzMjUx*_ga_8JE65Q40S6*czE3OTIxNjMyNTEkbzEkZzEkdDE3OTIxNjM4MDQkajYwJGwwJGgw"
              alt="Remnant Christian Network logo"
              className="h-[88px] w-auto shrink-0"
            />
            <div>
              <h3 className="text-[17px] font-bold text-rcn-navy">
                Part of a Wider Family
              </h3>
              <p className="mt-2 text-[13px] leading-[1.55] text-rcn-body">
                As part of the wider Remnant Christian Network family, we share
                a common burden to see Christ formed in people and a praying,
                spiritually equipped Church raised to advance the purposes of
                God.
              </p>
            </div>
          </div>

          <ul className="mt-6 flex flex-wrap justify-between gap-x-2 gap-y-4">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon
                  className="shrink-0 text-rcn-red"
                  size={30}
                  strokeWidth={1.6}
                />
                <span className="whitespace-pre-line text-[9px] lg:text-[13px] font-semibold leading-tight text-rcn-navy">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
