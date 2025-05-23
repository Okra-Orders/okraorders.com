import type { APIRoute } from "astro";
// import { getImage } from "astro:assets"; // Removed unused import
// import type { ImageMetadata } from "astro"; // Removed unused import

export const GET: APIRoute = async () => {
  const manifest = {
    short_name: "OkraOrders",
    name: "Okra Orders",
    display: "standalone",
    id: "/",
    start_url: "/?utm_source=pwa",
    theme_color: "#007a7a",
    background_color: "#ffffff",
    description: "Okra Orders - Streamlined online ordering and management for catering.",
  };

  return new Response(JSON.stringify(manifest));
};
