import { useSection } from "../../content/useSection";
export default function LocalExpression() {
  const { eyebrow, heading, image, imageAlt } = useSection("about.local");
  return (
    <section className="bg-rcn-snow py-5">
      {/* text left, image right (image first in the DOM so it stacks on top on mobile) */}
      <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-8 px-6 lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-[38px] lg:px-[58px]">
        <img
          src={image}
          alt={imageAlt}
          className="h-[205px] w-full rounded-lg object-cover shadow-[0_2px_10px_rgba(15,23,42,0.12)] lg:w-[408px] lg:shrink-0"
        />

        <div className="max-w-[440px] flex-1">
          <p className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-wide text-rcn-red">
            {eyebrow}
            <span className="h-px w-6 bg-rcn-red" />
          </p>
          <h2 className="mt-1 text-[26px] font-extrabold leading-tight text-rcn-navy">
            {heading}
          </h2>
          <p className="mt-2 text-[14px] leading-[1.55] text-rcn-body">
            In Cumbria, we continue in following the apostles' doctrine, just as
            the early Christians did in Acts 2:42–47. We gather regularly in
            prayer, in the study of the Word, and in the breaking of Bread with
            one another, expressing our fellowship in ways that align with our
            terrain.
          </p>
          <p className="mt-3 text-[14px] leading-[1.55] text-rcn-body">
            Through online and in-person gatherings, we seek to raise believers
            who are rooted in Christ, spiritually equipped and devoted to
            advancing God's purposes in our communities.
          </p>
        </div>
      </div>
    </section>
  );
}
