export const safeHref = (url = "") =>
  /^(\/|https?:\/\/|mailto:|tel:)/.test(url.trim()) ? url.trim() : null;
