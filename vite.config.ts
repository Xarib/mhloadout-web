import solid from "solid-start/vite";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    plugins: [solid({ ssr: true }), Icons({ compiler: "solid" })],
    ssr: { external: ["@prisma/client"] },
  };
});
