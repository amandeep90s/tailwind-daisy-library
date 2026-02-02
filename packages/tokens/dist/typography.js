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

// src/typography.ts
var typography_exports = {};
__export(typography_exports, {
  typography: () => typography
});
module.exports = __toCommonJS(typography_exports);
var typography = {
  fontFamily: {
    sans: "'IBM Plex Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    serif: "'Crimson Pro', Georgia, Cambria, 'Times New Roman', Times, serif",
    mono: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace"
  },
  fontSize: {
    xs: "0.75rem",
    // 12px
    sm: "0.875rem",
    // 14px
    base: "1rem",
    // 16px
    lg: "1.125rem",
    // 18px
    xl: "1.25rem",
    // 20px
    "2xl": "1.5rem",
    // 24px
    "3xl": "1.875rem",
    // 30px
    "4xl": "2.25rem"
    // 36px
  },
  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700"
  },
  lineHeight: {
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625"
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  typography
});
//# sourceMappingURL=typography.js.map