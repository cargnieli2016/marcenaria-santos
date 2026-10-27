import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/marcenaria-santos/",
  },
  tanstackStart: {
    server: { entry: "server" },
    router: { basepath: "/marcenaria-santos" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: true,
    },
  },
  nitro: false,
});
