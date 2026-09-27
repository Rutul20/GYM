import { defineConfig, type UserConfig } from "vite";
import react from "@vitejs/plugin-react";

const config: UserConfig = {
  plugins: [react()],
  base: '/GYM/',
  server: {
    port: 3000,
    open: true,
  },
};

export default defineConfig(config);
