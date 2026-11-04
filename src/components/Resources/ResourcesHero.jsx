import { useSectionStatus } from "../../content/useSection";

// All text and the image come from the admin section "resources.banner".
export default function ResourcesHero() {
  const { data } = useSectionStatus("resources.banner");
  const { eyebrow, title, description, image, imageAlt } = data || {};

  return (
    <section className="relative isolate flex min-h-[395px] items-center overflow-hidden  mt-20 bg-rcn-night font-sans">
      {/* Bible photo on the right */}
      {image && (
        <img
          src={image}
          alt={imageAlt || ""}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-right"
        />
      )}
      {/* Navy fade from the left */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-rcn-night from-35% via-rcn-night/80 via-55% to-transparent" />

      <div className="w-full px-6 py-12 md:px-[64px]">
        {eyebrow && (
          <p className="flex items-center gap-3 text-[17px] font-bold uppercase tracking-wide text-rcn-red">
            {eyebrow}
            <span className="h-px w-8 bg-rcn-red" />
          </p>
        )}
        <h1 className="mt-2 text-[56px] font-extrabold leading-none tracking-[-0.02em] text-rcn-white md:text-[72px]">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-[20px] text-rcn-white md:text-[22px]">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
