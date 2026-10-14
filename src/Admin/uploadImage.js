import { supabase } from "../lib/supabase";

const TYPES = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp" };
const MAX_BYTES = 5 * 1024 * 1024;

export function validateImage(file) {
  if (!TYPES[file.type]) return "Please use a JPG, PNG or WebP image.";
  if (file.size > MAX_BYTES) return "Image is larger than 5 MB.";
  return null;
}

export async function uploadImage(file, folder) {
  const path = `${folder}/${crypto.randomUUID()}.${TYPES[file.type]}`;
  const { error } = await supabase.storage
    .from("site-images")
    .upload(path, file, { cacheControl: "31536000", contentType: file.type });
  if (error) throw error;
  return supabase.storage.from("site-images").getPublicUrl(path).data.publicUrl;
}

const PDF_MAX_BYTES = 10 * 1024 * 1024;

export function validatePdf(file) {
  if (file.type !== "application/pdf") return "Please choose a PDF file.";
  if (file.size > PDF_MAX_BYTES) return "The PDF is larger than 10 MB.";
  return null;
}

export async function uploadPdf(file, folder) {
  const path = `${folder}/${crypto.randomUUID()}.pdf`;
  const { error } = await supabase.storage
    .from("site-images")
    .upload(path, file, {
      cacheControl: "31536000",
      contentType: "application/pdf",
    });
  if (error) throw error;
  return supabase.storage.from("site-images").getPublicUrl(path).data.publicUrl;
}
