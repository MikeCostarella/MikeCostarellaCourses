import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// GitHub Pages project site: base MUST equal "/<RepoName>/".
const BASE = "/MikeCostarellaCourses/";

// https://vitejs.dev/config/
export default defineConfig({
  base: BASE,
  define: {
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.png", "icons/apple-touch-icon.png"],
      manifest: {
        name: "Mike Costarella — Courses",
        short_name: "Courses",
        description:
          "Directory of the courses Mike Costarella teaches and has designed — course sites, syllabi, student tools, and repositories.",
        theme_color: "#3b2a5a",
        background_color: "#3b2a5a",
        display: "standalone",
        orientation: "any",
        scope: BASE,
        start_url: BASE,
        icons: [
          { src: "icons/pwa-192.png", sizes: "192x192", type: "image/png" },
          { src: "icons/pwa-512.png", sizes: "512x512", type: "image/png" },
          {
            src: "icons/maskable-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg,json}"],
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
      },
    }),
  ],
});
