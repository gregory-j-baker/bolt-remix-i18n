import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
      routes: async (defineRoutes) => {
        return defineRoutes((route) => {
          // Define the index route
          route("/", "routes/index.tsx");
          
          // Define English routes
          route("/en/about", "routes/about.tsx", {
            id: "en-about"
          });
          route("/en/contact", "routes/contact.tsx", {
            id: "en-contact"
          });
          
          // Define French routes
          route("/fr/a-propos", "routes/about.tsx", {
            id: "fr-about"
          });
          route("/fr/contact", "routes/contact.tsx", {
            id: "fr-contact"
          });
        });
      },
    }),
    tsconfigPaths(),
  ],
});