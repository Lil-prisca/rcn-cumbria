import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { defaults } from "../content/defaults";
import { invalidateContent } from "../content/useSection";
import { Field, ListField } from "./fields";

function clean(content, section) {
  const trim = (arr) => (arr || []).map((s) => s.trim()).filter(Boolean);
  const out = { ...content };

  (section.fields || []).forEach((f) => {
    if (f.type === "lines") out[f.name] = trim(out[f.name]);
  });

  if (section.list) {
    const { name, itemFields } = section.list;
    out[name] = (out[name] || []).map((item) => {
      const copy = { ...item };
      itemFields.forEach((f) => {
        if (f.type === "lines") copy[f.name] = trim(copy[f.name]);
      });
      return copy;
    });
  }
  return out;
}

const stampNow = () =>
  new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" });

export default function SectionEditor({ section }) {
  const { key, label, fields = [], list, stamp, history } = section;
  const base = defaults[key];
  const folder = key.replace(/\./g, "/");

  const [open, setOpen] = useState(false);
  const [original, setOriginal] = useState(null);
  const [draft, setDraft] = useState(null);
  const [status, setStatus] = useState({ type: "loading" });
  const [historyOpen, setHistoryOpen] = useState(false);
  const [versions, setVersions] = useState(null); // null = loading | "error" | array

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
    if (stamp) content[stamp] = stampNow();
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
    setHistoryOpen(false);
    setVersions(null);
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

  async function toggleHistory() {
    const next = !historyOpen;
    setHistoryOpen(next);
    if (!next) return;
    setVersions(null);
    const { data, error } = await supabase
      .from("site_content_history")
      .select("id, saved_at")
      .eq("section_key", key)
      .order("saved_at", { ascending: false })
      .limit(20);
    setVersions(error ? "error" : data);
  }

  async function loadVersion(id) {
    if (
      !window.confirm(
        "Load this earlier version into the editor? Nothing is published until you press Save and publish.",
      )
    )
      return;
    const { data, error } = await supabase
      .from("site_content_history")
      .select("content")
      .eq("id", id)
      .single();
    if (error)
      return setStatus({
        type: "error",
        message: "Could not load that version.",
      });
    setDraft({ ...base, ...data.content });
    setHistoryOpen(false);
    setStatus({ type: "idle" });
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
              {stamp && draft[stamp] && (
                <p className="text-xs text-neutral-500">
                  “Last updated” on the website: {draft[stamp]} (changes
                  automatically when you save)
                </p>
              )}

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

              {history && (
                <div className="border-t border-neutral-100 pt-3">
                  <button
                    type="button"
                    onClick={toggleHistory}
                    className="text-sm underline"
                  >
                    {historyOpen ? "Hide version history" : "Version history"}
                  </button>
                  {historyOpen && (
                    <div className="mt-2 space-y-1">
                      {versions === null && (
                        <p className="text-sm text-neutral-500">Loading…</p>
                      )}
                      {versions === "error" && (
                        <p role="alert" className="text-sm text-red-600">
                          Could not load the history.
                        </p>
                      )}
                      {Array.isArray(versions) && versions.length === 0 && (
                        <p className="text-sm text-neutral-500">
                          No earlier saves yet. Every save from now on will be
                          listed here.
                        </p>
                      )}
                      {Array.isArray(versions) &&
                        versions.map((v) => (
                          <div
                            key={v.id}
                            className="flex items-center justify-between gap-3 text-sm"
                          >
                            <span>
                              {new Date(v.saved_at).toLocaleString("en-GB", {
                                dateStyle: "medium",
                                timeStyle: "short",
                              })}
                            </span>
                            <button
                              type="button"
                              className="underline"
                              onClick={() => loadVersion(v.id)}
                            >
                              Load this version
                            </button>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              )}
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
