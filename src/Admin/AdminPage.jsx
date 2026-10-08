import { Link, Navigate, useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { adminPages } from "./schema";
import SectionEditor from "./SectionEditor";

export default function AdminPage() {
  const { page } = useParams();
  const config = adminPages[page];
  if (!config) return <Navigate to="/admin" replace />;

  return (
    <div className="min-h-screen bg-neutral-100">
      <div className="max-w-3xl mx-auto p-6 space-y-4">
        <div className="flex items-center justify-between">
          <Link to="/Admin" className="text-sm underline">
            ← All pages
          </Link>
          <button
            onClick={() => supabase.auth.signOut()}
            className="text-sm underline"
          >
            Sign out
          </button>
        </div>
        <h1 className="text-2xl font-semibold">{config.title}</h1>
        <p className="text-sm text-neutral-500">
          Saving publishes changes to the live website.
        </p>
        {config.sections.map((s) => (
          <SectionEditor key={s.key} section={s} />
        ))}
      </div>
    </div>
  );
}
