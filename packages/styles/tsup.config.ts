import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/theme.ts", "src/variants.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: false, // Don't clean to preserve CSS build
  noExternal: ["@shared-ui-library/tokens"],
});
