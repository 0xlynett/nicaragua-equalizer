import { defineConfig } from "@wagmi/cli";
import { react, foundry } from "@wagmi/cli/plugins";

export default defineConfig({
  out: "web/generated.ts",
  contracts: [],
  plugins: [
    foundry({
      project: "./sol",
      include: ["Equalizer.json", "ERC20.json"],
    }),
    react(),
  ],
});
