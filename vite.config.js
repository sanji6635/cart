import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vercel from "vite-plugin-vercel";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4200,
  },
  plugins: [react(), vercel()],
  base: "/", // Replace <repo-name> with your GitHub repository name
});
