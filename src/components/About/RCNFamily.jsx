export default function RCNFamily() {
  return (
    <section className="bg-rcn-snow py-5 pt-8">
      {/* image left, text right */}
      <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-8 px-6 lg:flex-row lg:gap-[38px] lg:px-[58px]">
        <img
          src="https://images.pexels.com/photos/12076384/pexels-photo-12076384.jpeg?_gl=1*17mbmvh*_ga*MTY4MTc4ODExOC4xNzkyMTYzMjUx*_ga_8JE65Q40S6*czE3OTIxNzU1NjAkbzIkZzEkdDE3OTIxNzYwMTYkajU5JGwwJGgw"
          alt="Minister teaching with a microphone"
          className="h-[210px] w-full rounded-lg object-cover shadow-[0_2px_10px_rgba(15,23,42,0.12)] lg:w-[420px] lg:shrink-0"
        />

        <div className="flex-1">
          <p className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-wide text-rcn-red">
            The RCN Family
            <span className="h-px w-6 bg-rcn-red" />
          </p>
          <h2 className="mt-1 text-[26px] font-extrabold leading-tight text-rcn-navy">
            Remnant Christian Network (RCN)
          </h2>
          <p className="mt-2 text-[14px] leading-[1.55] text-rcn-body">
            Remnant Christian Network (RCN) is an interdenominational and
            non-denominational international ministry to the body of Christ with
            the mandate of restoring the apostolic order of Christianity as it
            was in the days of the first generation of apostles of Jesus Christ
            and thereby heralding the coming of the Lord Jesus Christ at this
            end of the age.
          </p>
          <p className="mt-3 text-[14px] leading-[1.55] text-rcn-body">
            RCN is headquartered in Makurdi, Benue State, Nigeria, with
            apostolic centres and mission outreaches across Africa, North
            America and Europe.
          </p>
        </div>
      </div>
    </section>
  );
}
