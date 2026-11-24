import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Override at build time: `vite build --base /kotik/` (see npm run build:gh).
  base: "/",
  plugins: [react()],
});
