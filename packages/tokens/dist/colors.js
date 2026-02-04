"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/colors.ts
var colors_exports = {};
__export(colors_exports, {
  colors: () => colors
});
module.exports = __toCommonJS(colors_exports);
var colors = {
  // Primary colors
  primary: "oklch(0.4965 0.1837 19.68)",
  primaryContent: "oklch(98% 0.01 240)",
  // Secondary colors
  secondary: "oklch(70% 0.25 200)",
  secondaryContent: "oklch(98% 0.01 200)",
  // Accent colors
  accent: "oklch(65% 0.25 160)",
  accentContent: "oklch(98% 0.01 160)",
  // Neutral colors
  neutral: "oklch(50% 0.05 240)",
  neutralContent: "oklch(98% 0.01 240)",
  // Base colors
  base100: "oklch(100% 0 0)",
  base200: "oklch(98% 0 0)",
  base300: "oklch(95% 0 0)",
  baseContent: "oklch(21% 0.006 285.885)",
  // Semantic colors
  info: "oklch(70% 0.2 220)",
  infoContent: "oklch(98% 0.01 220)",
  success: "oklch(0.4509 0.099094 161.8675)",
  successContent: "oklch(98% 0.01 140)",
  warning: "oklch(0.6697 0.138 81.94)",
  warningContent: "oklch(20% 0.05 80)",
  error: "oklch(0.5218 0.1923 33.04)",
  errorContent: "oklch(98% 0.01 30)"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  colors
});
//# sourceMappingURL=colors.js.map