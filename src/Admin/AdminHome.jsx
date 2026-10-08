import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { adminPages } from "./schema";

export default function AdminHome() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <div className="max-w-3xl mx-auto p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Website content</h1>
          <button
            onClick={() => supabase.auth.signOut()}
            className="text-sm underline"
          >
            Sign out
          </button>
        </div>
        <p className="text-sm text-neutral-500">
          Saving publishes changes to the live website.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {Object.entries(adminPages).map(([slug, p]) => (
            <Link
              key={slug}
              to={`/admin/${slug}`}
              className="rounded-xl bg-white border border-neutral-200 p-5 font-medium hover:shadow-md"
            >
              {p.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
