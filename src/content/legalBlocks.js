const stripNumber = (t = "") => t.replace(/^\d+\.\s*/, "");

export function blocksToMarkdown(blocks = []) {
  return blocks
    .map((b) =>
      b.type === "h3"
        ? `### ${b.text}`
        : b.type === "ul"
          ? b.items.map((i) => `- ${i}`).join("\n")
          : b.text,
    )
    .join("\n\n");
}

export const toEditableSections = (sections = []) =>
  sections.map((s) => ({
    id: s.id,
    title: stripNumber(s.title),
    body: blocksToMarkdown(s.blocks),
  }));

function parseChunk(chunk) {
  const lines = chunk.split("\n");
  if (lines[0].startsWith("### ")) {
    const rest = lines.slice(1).join("\n").trim();
    return [
      { type: "h3", text: lines[0].slice(4).trim() },
      ...(rest ? parseChunk(rest) : []),
    ];
  }
  const trimmed = lines.map((l) => l.trim());
  if (trimmed.every((l) => l.startsWith("- "))) {
    return [{ type: "ul", items: trimmed.map((l) => l.slice(2).trim()) }];
  }
  return [{ type: "p", text: chunk.trim() }];
}

export const parseBody = (body = "") =>
  body
    .split(/\n\s*\n/)
    .map((c) => c.trim())
    .filter(Boolean)
    .flatMap(parseChunk);
