import { Link } from "react-router-dom";
import { ArrowRight, BookOpenText } from "lucide-react";
import { formatDate, useArticles } from "../../data/articles";
import { useSection } from "../../content/useSection";

// Resources page: shows every article, newest first (from Supabase).
// Shows the "articles will appear here" note only when loading has finished
// and there are no articles.
export default function ResourcesPastorsDesk() {
  const { description, heading, image, imageAlt } =
    useSection("resources.desk");
  const { articles: list, loading } = useArticles();
  const hasArticles = list.length > 0;
  const showEmpty = !loading && !hasArticles;

  return (
    <section className="bg-rcn-snow font-sans">
      <div className="mx-auto max-w-[1040px] px-6 pb-12 pt-10 lg:px-[43px]">
        {/* Text + image side by side on desktop */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">
          {/* PART 1: text */}
          <div className="lg:w-[48%]">
            <h2 className="text-[36px] font-extrabold leading-tight text-rcn-navy">
              {heading}
            </h2>
            <p className="mt-4 text-[19px] leading-[1.45] text-rcn-navy">
              {description}
            </p>

            {/* Empty-state note (matches the design) */}
            {showEmpty && (
              <div className="mt-6 flex items-center gap-5 rounded-xl bg-[#eef0fb] px-7 py-6">
                <BookOpenText
                  size={56}
                  strokeWidth={1.4}
                  className="shrink-0 text-rcn-navy"
                />
                <span className="h-[54px] w-px shrink-0 bg-rcn-navy" />
                <p className="text-[15px] leading-[1.5] text-rcn-navy">
                  Latest articles will appear here, with the option to read each
                  article on the website.
                </p>
              </div>
            )}
          </div>

          {/* PART 2: image */}
          <img
            src={image}
            alt={imageAlt}
            className="h-[250px] w-full rounded-lg object-cover shadow-[0_2px_10px_rgba(15,23,42,0.12)] lg:flex-1"
          />
        </div>

        {/* Articles list */}
        {hasArticles && (
          <div className="mt-10 flex flex-wrap gap-5">
            {list.map(
              ({ id, slug, date, title, excerpt, image: cover, alt }) => (
                <Link
                  key={id}
                  to={`/resources/${slug}`}
                  className="group flex w-full flex-col overflow-hidden rounded-lg bg-rcn-white shadow-[0_2px_10px_rgba(15,23,42,0.10)] transition hover:-translate-y-0.5 sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
                >
                  <div className="h-44 overflow-hidden">
                    {cover ? (
                      <img
                        src={cover}
                        alt={alt || title}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full bg-rcn-ice" />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col px-4 pb-4 pt-4">
                    <time className="text-[10px] font-medium text-rcn-faint">
                      {formatDate(date)}
                    </time>
                    <h3 className="mt-1 text-[17px] font-bold leading-snug text-rcn-navy">
                      {title}
                    </h3>
                    {excerpt && (
                      <p className="mt-2 line-clamp-2 text-[13px] leading-[1.5] text-rcn-body">
                        {excerpt}
                      </p>
                    )}
                    <span className="mt-3 inline-flex items-center gap-2 pt-1 text-[13px] font-semibold text-rcn-red">
                      Read article
                      <ArrowRight
                        size={14}
                        className="transition group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              ),
            )}
          </div>
        )}

        <hr className="mt-12 border-slate-200" />
      </div>
    </section>
  );
}
