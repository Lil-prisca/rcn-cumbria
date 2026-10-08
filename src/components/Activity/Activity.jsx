import prayergroup from "../../assets/Activity/imgi_12_P1000197.jpg-scaled.webp";
import prayer2 from "../../assets/Activity/imgi_15_IMG_7816.JPG.webp";

const activities = [
  {
    id: 1,
    title: "Bible Study",
    schedule: ["Every Sunday | 12pm-2pm"],
    image: prayergroup,
    alt: "Congregation raising hands during a Sunday gathering",
    position: "object-top", // optional focal point
  },
  {
    id: 2,
    title: "GateKeeper's Prayer Meeting",
    schedule: ["Daily | 12pm-1pm"],
    image: prayer2,
    alt: "Members praying together",
  },
  {
    id: 3,
    title: "Watchmen's Prayer Meeting",
    schedule: ["Daily | 11pm-12:30am"],
    image: prayer2,
    alt: "Members in night prayer",
  },
  {
    id: 4,
    title: "Prayer Marathon (10hrs)",
    schedule: ["1st Saturday of every month | 8am-6pm"],
    image: prayer2,
    alt: "Prayer marathon session",
  },
  {
    id: 5,
    title: "Community Outreach",
    schedule: ["Held Quarterly"],
    image: prayer2,
    alt: "Volunteers serving the community",
  },
  {
    id: 6,
    title: "Special Event",
    schedule: ["To be communicated"],
    image: prayer2,
    alt: "Special church event",
  },
];

const ActivityCard = ({
  title,
  schedule,
  image,
  alt,
  position = "object-center",
}) => (
  <article className="group relative overflow-hidden rounded-xl bg-surface-container-low aspect-4/3 sm:aspect-16/10 lg:aspect-4/3">
    <img
      src={image}
      alt={alt}
      loading="lazy"
      className={`absolute inset-0 w-full h-full object-cover ${position} group-hover:scale-105 transition-transform duration-1000`}
    />
    <div className="absolute inset-0 bg-linear-to-t from-[#0e0e13] via-transparent to-transparent" />
    <div className="absolute bottom-2 inset-x-3 glass rounded-2xl p-4 md:p-5">
      <h3 className="text-lg text-white">{title}</h3>
      {schedule.map((line) => (
        <p key={line} className="text-on-primary mt-1 text-sm md:text-base">
          {line}
        </p>
      ))}
    </div>
  </article>
);

const Activity = () => (
  <section className="pt-5 pb-10 bg-on-primary">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-5xl text-primary mb-4">Our Activities</h2>
        <div className="h-1 w-24 bg-primary" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:px-20">
        {activities.map((item) => (
          <ActivityCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default Activity;
