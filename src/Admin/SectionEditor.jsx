import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { defaults } from "../content/defaults";
import { invalidateContent } from "../content/useSection";
import { Field, ListField } from "./fields";

function clean(content, section) {
  if (!section.list) return content;
  const { name, itemFields } = section.list;
  return {
    ...content,
    [name]: (content[name] || []).map((item) => {
      const copy = { ...item };
      itemFields.forEach((f) => {
        if (f.type === "lines")
          copy[f.name] = (copy[f.name] || [])
            .map((s) => s.trim())
            .filter(Boolean);
      });
      return copy;
    }),
  };
}

export default function SectionEditor({ section }) {
  const { key, label, fields = [], list } = section;
  const base = defaults[key];
  const folder = key.replace(".", "/");

  const [open, setOpen] = useState(false);
  const [original, setOriginal] = useState(null);
  const [draft, setDraft] = useState(null);
  const [status, setStatus] = useState({ type: "loading" });

  useEffect(() => {
    supabase
      .from("site_content")
      .select("content")
      .eq("section_key", key)
      .maybeSingle()
      .then(({ data, error }) => {
        if (error)
          return setStatus({
            type: "error",
            message: "Could not load this section.",
          });
        const merged = { ...base, ...data?.content };
        setOriginal(merged);
        setDraft(merged);
        setStatus({ type: "idle" });
      });
  }, [key, base]);

  const dirty = original && JSON.stringify(draft) !== JSON.stringify(original);
  const set = (name, value) => setDraft((d) => ({ ...d, [name]: value }));

  async function save() {
    setStatus({ type: "saving" });
    const content = clean(draft, section);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { error } = await supabase.from("site_content").upsert({
      section_key: key,
      content,
      updated_at: new Date().toISOString(),
      updated_by: user?.id,
    });
    if (error)
      return setStatus({
        type: "error",
        message: "Save failed. Please try again.",
      });
    invalidateContent();
    setOriginal(content);
    setDraft(content);
    setStatus({ type: "saved" });
  }

  async function restore() {
    if (
      !window.confirm(
        "Restore the original content for this section? Your edits to it will be lost.",
      )
    )
      return;
    setStatus({ type: "saving" });
    const { error } = await supabase
      .from("site_content")
      .delete()
      .eq("section_key", key);
    if (error)
      return setStatus({
        type: "error",
        message: "Could not restore. Please try again.",
      });
    invalidateContent();
    setOriginal(base);
    setDraft(base);
    setStatus({ type: "saved" });
  }

  return (
    <section className="rounded-xl bg-white shadow-sm border border-neutral-200">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold">{label}</span>
        <span className="text-neutral-500 text-sm">
          {open ? "Close" : "Edit"}
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5 space-y-4 border-t border-neutral-100 pt-4">
          {status.type === "loading" && <p>Loading…</p>}

          {draft && (
            <>
              {fields.map((f) => (
                <Field
                  key={f.name}
                  def={f}
                  value={draft[f.name]}
                  onChange={(v) => set(f.name, v)}
                  folder={folder}
                />
              ))}
              {list && (
                <ListField
                  def={list}
                  items={draft[list.name]}
                  onChange={(v) => set(list.name, v)}
                  folder={folder}
                />
              )}

              <div className="flex flex-wrap items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={save}
                  disabled={!dirty || status.type === "saving"}
                  className="rounded-lg bg-neutral-900 text-white px-4 py-2 text-sm font-medium disabled:opacity-50"
                >
                  {status.type === "saving" ? "Saving…" : "Save and publish"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setDraft(original);
                    setStatus({ type: "idle" });
                  }}
                  disabled={!dirty}
                  className="rounded-lg border border-neutral-300 px-4 py-2 text-sm disabled:opacity-50"
                >
                  Discard changes
                </button>
                <button
                  type="button"
                  onClick={restore}
                  className="ml-auto text-sm text-red-600 underline"
                >
                  Restore original
                </button>
              </div>
            </>
          )}

          {status.type === "saved" && (
            <p role="status" className="text-sm text-green-700">
              Saved. The live website is updated.
            </p>
          )}
          {status.type === "error" && (
            <p role="alert" className="text-sm text-red-600">
              {status.message}
            </p>
          )}
        </div>
      )}
    </section>
  );
}
