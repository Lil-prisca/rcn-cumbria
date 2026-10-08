import { useSection } from "../../content/useSection";

const ActivityCard = ({
  title,
  schedule = [],
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
      {schedule.map((line, i) => (
        <p key={i} className="text-on-primary mt-1 text-sm md:text-base">
          {line}
        </p>
      ))}
    </div>
  </article>
);

const Activity = () => {
  const { heading, items = [] } = useSection("activities.schedule");

  return (
    <section className="pt-5 pb-10 bg-on-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-5xl text-primary mb-4">{heading}</h2>
          <div className="h-1 w-24 bg-primary" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:px-20">
          {items.map((item) => (
            <ActivityCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activity;
