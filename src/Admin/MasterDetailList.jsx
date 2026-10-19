import { useMemo, useState } from "react";
import { Field } from "./fields";

// A list editor for long lists (e.g. articles): search + pick one, then edit
// only that item. Same props as ListField, so SectionEditor can swap it in.
//
// Optional keys on the schema's `list` definition:
//   layout: "master-detail"   -> use this editor
//   sortField: "date"         -> show newest first (string compare, so use YYYY-MM-DD)

const newId = () => String(Date.now());
const today = () => new Date().toISOString().slice(0, 10);

export default function MasterDetailList({
  def,
  items = [],
  onChange,
  folder,
}) {
  const {
    itemLabel = "Item",
    titleField = "title",
    itemFields = [],
    sortField,
  } = def;

  const [selectedId, setSelectedId] = useState(null);
  const [query, setQuery] = useState("");

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = [...items].filter((item) =>
      q ? String(item[titleField] || "").toLowerCase().includes(q) : true,
    );
    if (sortField) {
      list.sort((a, b) =>
        String(b[sortField] || "").localeCompare(String(a[sortField] || "")),
      );
    }
    return list;
  }, [items, query, titleField, sortField]);

  const selected = items.find((i) => i.id === selectedId) || null;

  const updateItem = (id, name, value) =>
    onChange(items.map((i) => (i.id === id ? { ...i, [name]: value } : i)));

  function addItem() {
    const blank = { id: newId() };
    itemFields.forEach((f) => {
      blank[f.name] = f.type === "lines" ? [] : "";
    });
    if (sortField) blank[sortField] = today();
    onChange([blank, ...items]);
    setQuery("");
    setSelectedId(blank.id);
  }

  function removeItem(id) {
    if (
      !window.confirm(
        `Delete this ${itemLabel.toLowerCase()}? It is removed when you press Save and publish.`,
      )
    )
      return;
    onChange(items.filter((i) => i.id !== id));
    setSelectedId(null);
  }

  return (
    <div className="space-y-3">
      {/* Search + add */}
      <div className="flex flex-wrap items-center gap-2">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search ${itemLabel.toLowerCase()}s by title…`}
          className="min-w-0 flex-1 rounded-lg border border-neutral-300 px-3 py-2 text-sm"
        />
        <button
          type="button"
          onClick={addItem}
          className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white"
        >
          + Add {itemLabel.toLowerCase()}
        </button>
      </div>

      {/* Compact list: one row per item */}
      <div className="max-h-64 overflow-y-auto rounded-lg border border-neutral-200">
        {rows.length === 0 && (
          <p className="px-3 py-4 text-sm text-neutral-500">
            {items.length === 0
              ? `No ${itemLabel.toLowerCase()}s yet. Press “Add ${itemLabel.toLowerCase()}” to create one.`
              : "Nothing matches your search."}
          </p>
        )}
        {rows.map((item) => {
          const active = item.id === selectedId;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedId(active ? null : item.id)}
              aria-pressed={active}
              className={`flex w-full items-center justify-between gap-3 border-b border-neutral-100 px-3 py-2.5 text-left text-sm last:border-b-0 ${
                active ? "bg-neutral-900 text-white" : "hover:bg-neutral-50"
              }`}
            >
              <span className="truncate font-medium">
                {item[titleField] || `Untitled ${itemLabel.toLowerCase()}`}
              </span>
              {sortField && (
                <span
                  className={`shrink-0 text-xs ${
                    active ? "text-neutral-300" : "text-neutral-500"
                  }`}
                >
                  {item[sortField]}
                </span>
              )}
            </button>
          );
        })}
      </div>
      <p className="text-xs text-neutral-500">
        {items.length} {itemLabel.toLowerCase()}
        {items.length === 1 ? "" : "s"} · click one to edit it
      </p>

      {/* Only the selected item's fields are shown */}
      {selected && (
        <div className="space-y-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-semibold">
              Editing: {selected[titleField] || `Untitled ${itemLabel.toLowerCase()}`}
            </h3>
            <button
              type="button"
              onClick={() => setSelectedId(null)}
              className="text-sm text-neutral-500 underline"
            >
              Close
            </button>
          </div>

          {itemFields.map((f) => (
            <Field
              key={f.name}
              def={f}
              value={selected[f.name]}
              onChange={(v) => updateItem(selected.id, f.name, v)}
              folder={folder}
            />
          ))}

          <button
            type="button"
            onClick={() => removeItem(selected.id)}
            className="text-sm text-red-600 underline"
          >
            Delete this {itemLabel.toLowerCase()}
          </button>
        </div>
      )}
    </div>
  );
}
