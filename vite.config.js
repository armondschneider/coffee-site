import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ghPages } from "vite-plugin-gh-pages";

// Replace "your-username/your-repo-name" with your GitHub repository name.
export default defineConfig({
  plugins: [react(), ghPages()],
  base: "/coffee-site/", // Base path for GitHub Pages
});