export default function PrayerFocus() {
  return (
    <section className="bg-rcn-snow py-5">
      {/* image left, text right */}
      <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-8 px-6 lg:flex-row lg:items-center lg:gap-[38px] lg:px-[58px]">
        <img
          src="https://images.pexels.com/photos/32504227/pexels-photo-32504227.jpeg?_gl=1*hw845t*_ga*MTY4MTc4ODExOC4xNzkyMTYzMjUx*_ga_8JE65Q40S6*czE3OTIxNzU1NjAkbzIkZzEkdDE3OTIxNzU4MDIkajU5JGwwJGgw"
          alt="Carlisle at sunset"
          className="h-[183px] w-full rounded-lg object-cover shadow-[0_2px_10px_rgba(15,23,42,0.12)] lg:w-[420px] lg:shrink-0"
        />

        <div className="flex-1">
          <p className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-wide text-rcn-red">
            Watchmen and Gatekeepers
            <span className="h-px w-6 bg-rcn-red" />
          </p>
          <h2 className="mt-1 text-[26px] font-extrabold leading-tight text-rcn-navy">
            Our City, Our Prayer Focus
          </h2>
          <p className="mt-2 text-[14px] leading-[1.55] text-rcn-body">
            Carlisle — the urban capital of Cumbria — is a border city with a
            rich history, and we recognise its spiritual significance, hence the
            need to take our place as Watchmen and Gatekeepers.
          </p>
          <p className="mt-3 text-[14px] leading-[1.55] text-rcn-body">
            We intercede for our city, families, communities and the wider
            region, believing that prayer can bring transformation and open
            doors for God's purposes in Cumbria and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}
