export default function OurLeadership() {
  return (
    <section className="bg-rcn-snow py-5">
      {/* text left, image right */}
      <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-8 px-6 lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-[38px] lg:px-[58px]">
        <img
          src="/images/about-pastor-kenneth.jpg"
          alt="Pastor Kenneth Dumbiri speaking"
          className="h-[177px] w-full rounded-lg object-cover shadow-[0_2px_10px_rgba(15,23,42,0.12)] lg:w-[388px] lg:shrink-0"
        />

        <div className="max-w-[470px] flex-1">
          <p className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-wide text-rcn-red">
            Our Leadership
            <span className="h-px w-6 bg-rcn-red" />
          </p>
          <h2 className="mt-1 text-[28px] font-extrabold leading-tight text-rcn-navy">
            Pastor Kenneth Dumbiri
          </h2>
          <p className="mt-0.5 text-[17px] font-semibold text-rcn-red">
            Pointman, RCN Cumbria
          </p>
          <p className="mt-1.5 text-[14px] leading-[1.55] text-rcn-body">
            RCN Cumbria is led locally by Pastor Kenneth Dumbiri, under the
            spiritual oversight of Apostle Arome Osayi, Set Man of Remnant
            Christian Network.
          </p>
          <p className="mt-3 text-[14px] leading-[1.55] text-rcn-body">
            Together with the local ministry team, he provides leadership for
            the ministry's gatherings, prayer activities, discipleship and
            fellowship across Cumbria.
          </p>
        </div>
      </div>
    </section>
  );
}
