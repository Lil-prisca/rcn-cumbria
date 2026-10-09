import { Link } from "react-router-dom";
import { adminPages } from "./schema";

export default function AdminHome() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Website content</h1>
      <p className="text-sm text-neutral-500">
        Choose a page to edit. Saving publishes changes to the live website.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {Object.entries(adminPages).map(([slug, p]) => (
          <Link
            key={slug}
            to={`/admin/${slug}`}
            className="rounded-xl bg-white border border-neutral-200 p-5 font-medium hover:shadow-md transition-shadow"
          >
            {p.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
