import { useState } from "react";
import { validateImage, uploadImage } from "./uploadImage";

const inputCls =
  "w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900";
const labelCls = "block text-sm font-medium text-neutral-700 mb-1";
const btnCls =
  "rounded-lg border border-neutral-300 px-3 py-1.5 text-sm hover:bg-neutral-100";

export function ImageField({ label, value, onChange, folder, compact }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function pick(e) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const problem = validateImage(file);
    if (problem) return setError(problem);
    setBusy(true);
    setError("");
    try {
      onChange(await uploadImage(file, folder));
    } catch {
      setError("Upload failed. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <span className={labelCls}>{label}</span>
      {value && (
        <img
          src={value}
          alt=""
          loading="lazy"
          className={`${compact ? "h-20" : "h-36"} w-full max-w-xs object-cover rounded-lg border mb-2`}
        />
      )}
      <label
        className={`${btnCls} inline-block cursor-pointer ${busy ? "opacity-60" : ""}`}
      >
        {busy ? "Uploading…" : value ? "Replace image" : "Choose image"}
        <input
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          onChange={pick}
          disabled={busy}
        />
      </label>
      {error && (
        <p role="alert" className="text-sm text-red-600 mt-1">
          {error}
        </p>
      )}
    </div>
  );
}

export function Field({ def, value, onChange, folder, compact }) {
  if (def.type === "image") {
    return (
      <ImageField
        label={def.label}
        value={value}
        onChange={onChange}
        folder={folder}
        compact={compact}
      />
    );
  }
  return (
    <label className="block">
      <span className={labelCls}>{def.label}</span>
      {def.type === "text" && (
        <input
          className={inputCls}
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      {def.type === "textarea" && (
        <textarea
          rows={4}
          className={inputCls}
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      {def.type === "lines" && (
        <textarea
          rows={3}
          className={inputCls}
          value={(value ?? []).join("\n")}
          onChange={(e) => onChange(e.target.value.split("\n"))}
        />
      )}
    </label>
  );
}

export function ListField({ def, items = [], onChange, folder }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const blank = () => ({
    id: crypto.randomUUID(),
    ...Object.fromEntries(
      def.itemFields.map((f) => [f.name, f.type === "lines" ? [] : ""]),
    ),
  });
  const update = (i, patch) =>
    onChange(items.map((it, idx) => (idx === i ? { ...it, ...patch } : it)));
  const move = (i, dir) => {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };
  const remove = (i) => {
    if (window.confirm(`Remove this ${def.itemLabel.toLowerCase()}?`))
      onChange(items.filter((_, idx) => idx !== i));
  };

  async function bulkAdd(e) {
    const files = Array.from(e.target.files || []);
    e.target.value = "";
    if (!files.length) return;
    setBusy(true);
    setError("");
    const added = [];
    for (const file of files) {
      const problem = validateImage(file);
      if (problem) {
        setError(`${file.name}: ${problem}`);
        continue;
      }
      try {
        added.push({ ...blank(), [def.bulk]: await uploadImage(file, folder) });
      } catch {
        setError(`${file.name}: upload failed.`);
      }
    }
    if (added.length) onChange([...items, ...added]);
    setBusy(false);
  }

  return (
    <div className="space-y-3">
      <div className={def.bulk ? "grid sm:grid-cols-2 gap-3" : "space-y-3"}>
        {items.map((item, i) => (
          <div
            key={item.id}
            className="rounded-lg border border-neutral-200 p-3 space-y-3 bg-neutral-50"
          >
            <div className="flex items-center justify-between gap-2">
              <strong className="text-sm">
                {def.itemLabel} {i + 1}
                {def.titleField && item[def.titleField]
                  ? ` – ${item[def.titleField]}`
                  : ""}
              </strong>
              <div className="flex gap-1 shrink-0">
                <button
                  type="button"
                  className={btnCls}
                  onClick={() => move(i, -1)}
                  disabled={i === 0}
                  aria-label="Move up"
                >
                  ↑
                </button>
                <button
                  type="button"
                  className={btnCls}
                  onClick={() => move(i, 1)}
                  disabled={i === items.length - 1}
                  aria-label="Move down"
                >
                  ↓
                </button>
                <button
                  type="button"
                  className={`${btnCls} text-red-600`}
                  onClick={() => remove(i)}
                >
                  Remove
                </button>
              </div>
            </div>
            {def.itemFields.map((f) => (
              <Field
                key={f.name}
                def={f}
                value={item[f.name]}
                onChange={(v) => update(i, { [f.name]: v })}
                folder={folder}
                compact={!!def.bulk}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className={btnCls}
          onClick={() => onChange([...items, blank()])}
        >
          + Add {def.itemLabel.toLowerCase()}
        </button>
        {def.bulk && (
          <label
            className={`${btnCls} cursor-pointer ${busy ? "opacity-60" : ""}`}
          >
            {busy ? "Uploading…" : "Upload several images"}
            <input
              type="file"
              multiple
              accept="image/jpeg,image/png,image/webp"
              className="hidden"
              onChange={bulkAdd}
              disabled={busy}
            />
          </label>
        )}
      </div>
      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
