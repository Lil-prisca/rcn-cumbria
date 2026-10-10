export const safeHref = (url = "") =>
  /^(\/|https?:\/\/)/.test(url.trim()) ? url.trim() : null;
