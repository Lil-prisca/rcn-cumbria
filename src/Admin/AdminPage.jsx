import { Navigate, useParams } from "react-router-dom";
import { adminPages } from "./schema";
import SectionEditor from "./SectionEditor";

export default function AdminPage() {
  const { page } = useParams();
  const config = adminPages[page];
  if (!config) return <Navigate to="/admin" replace />;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">{config.title}</h1>
      <p className="text-sm text-neutral-500">
        Saving publishes changes to the live website.
      </p>
      {config.sections.map((s) => (
        <SectionEditor key={s.key} section={s} />
      ))}
    </div>
  );
}
