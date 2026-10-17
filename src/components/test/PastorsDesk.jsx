import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  articles as allArticles,
  formatDate,
  getLatestArticles,
} from "../../data/articles";

// Home page: shows the 3 latest articles automatically.
// Pass `articles` to override (e.g. data from your CMS / API).
export default function PastorsDesk({ articles = allArticles }) {
  const latest = getLatestArticles(3, articles);

  return (
    <section className="bg-rcn-cloud py-8 h-fit lg:h-70 ">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 lg:flex-row lg:items-center lg:gap-10 lg:px-[52px]">
        {/* PART 1: Latest Articles heading */}
        <div className="lg:w-[320px] lg:shrink-0">
          <p className="text-[13px] font-bold uppercase tracking-wide text-rcn-red">
            From the Pastor's Desk
          </p>
          <h2 className="mt-1 text-[26px] font-extrabold leading-tight text-rcn-navy">
            Latest Articles
          </h2>
          <p className="mt-2 max-w-[270px] text-[13px] leading-[1.45] text-rcn-body">
            Encouragement, biblical insights and practical reflections for
            everyday life.
          </p>
          <Link
            to="/resources"
            className="mt-4 inline-flex items-center gap-3 rounded-md border-2 border-rcn-red bg-rcn-white px-5 py-2.5 text-[13px] font-semibold text-rcn-red transition hover:bg-rcn-red hover:text-rcn-white"
          >
            View All Articles
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* PART 2: articles side by side */}
        <div className="flex flex-1 flex-col gap-4 sm:flex-row">
          {latest.map(({ id, date, title, image, href }) => (
            <Link
              key={id}
              to={href}
              className="group flex-1 overflow-hidden rounded-md bg-rcn-white shadow-[0_2px_10px_rgba(15,23,42,0.10)] transition hover:-translate-y-0.5"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="px-3 h-20 pb-3 pt-5">
                <time className="block text-[9px] text-rcn-faint">
                  {formatDate(date)}
                </time>
                <h3 className="mt-1 text-[13px] font-bold leading-snug text-rcn-navy">
                  {title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
