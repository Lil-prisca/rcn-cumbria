import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { defaults } from "./defaults";

let cache = null;
let request = null;

function loadAll() {
  if (!request) {
    request = supabase
      .from("site_content")
      .select("section_key, content")
      .then(({ data }) => {
        cache = Object.fromEntries(
          (data || []).map((r) => [r.section_key, r.content]),
        );
        return cache;
      });
  }
  return request;
}

export function invalidateContent() {
  cache = null;
  request = null;
}

export function useSection(key) {
  const [saved, setSaved] = useState(cache);
  useEffect(() => {
    if (!cache) loadAll().then(setSaved);
  }, []);
  return { ...defaults[key], ...saved?.[key] };
}
