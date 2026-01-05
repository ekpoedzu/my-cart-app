/*
// frontend/src/utils/image.js

// In production, VITE_API_URL should be your Render backend origin:
// https://my-cart-app-0n8d.onrender.com
// In local dev, it can be empty; we fallback to localhost backend.
const API_ORIGIN = import.meta.env.VITE_API_URL || "http://localhost:5000";

/**
 * Converts DB image values into a working URL:
 * - If already absolute (http...), return it
 * - If it's a backend path like "/images/xxx.jpg", prefix backend origin
 * - If it's a frontend public image like "/public/images/..." use "/images/..."
 */
/*export const getImageSrc = (img) => {
  if (!img) return "/images/placeholder.jpg";

  // absolute URL already
  if (img.startsWith("http://") || img.startsWith("https://")) return img;

  // backend-served static images path
  if (img.startsWith("/images/")) return `${API_ORIGIN}${img}`;

  // sometimes people save "images/xxx.jpg" (missing leading slash)
  if (img.startsWith("images/")) return `${API_ORIGIN}/${img}`;

  // fallback to whatever it is
  return img;
};*/




// frontend/src/utils/image.js
const API_ORIGIN = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const normalizeImagePath = (img) => {
  if (!img) return "";

  let out = img.trim();

  // Fix common bad saves:
  // "/images/images/file.jpg" -> "/images/file.jpg"
  out = out.replace(/^\/images\/images\//, "/images/");

  // "images/file.jpg" -> "/images/file.jpg"
  if (out.startsWith("images/")) out = `/${out}`;

  // "/public/images/file.jpg" -> "/images/file.jpg"
  out = out.replace(/^\/public\/images\//, "/images/");

  return out;
};

export const getImageSrc = (img) => {
  if (!img) return "/images/placeholder.jpg";

  // absolute URL already
  if (img.startsWith("http://") || img.startsWith("https://")) return img;

  const cleaned = normalizeImagePath(img);

  // if it's a backend-served static images path
  if (cleaned.startsWith("/images/")) return `${API_ORIGIN}${cleaned}`;

  // fallback
  return cleaned || "/images/placeholder.jpg";
};

