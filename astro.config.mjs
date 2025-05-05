import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
// import starlight from "@astrojs/starlight"; // Removed Starlight import
// import iconify from "astro-iconify"; // Removed this lingering import
import icon from "astro-icon";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://okraorders.com",
  image: {
    domains: ["images.unsplash.com"],
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // Lower quality means more compression, higher means less compression
        quality: 85, // Example: Set quality to 85 (adjust as needed)
        // You can add other Sharp options here if necessary
      }
    }
  },
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en", "fr"],
  //   fallback: {
  //     fr: "en",
  //   },
  //   routing: {
  //     prefixDefaultLocale: false,
  //   },
  // },
  prefetch: true,
  integrations: [sitemap({
    i18n: {
      defaultLocale: "en", // All urls that don't contain `fr` after `https://screwfast.uk/` will be treated as default locale, i.e. `en`
      locales: {
        en: "en", // The `defaultLocale` value must present in `locales` keys
        // fr: "fr", // Removed fr locale
      },
    },
  }),  compressor({
    gzip: false,
    brotli: true,
  }), mdx(), icon({
    include: {
      heroicons: ["*"],
    }
  })],
  experimental: {
    clientPrerender: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
