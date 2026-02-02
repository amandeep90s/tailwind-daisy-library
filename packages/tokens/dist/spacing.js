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

// src/spacing.ts
var spacing_exports = {};
__export(spacing_exports, {
  spacing: () => spacing
});
module.exports = __toCommonJS(spacing_exports);
var spacing = {
  xs: "0.25rem",
  // 4px
  sm: "0.5rem",
  // 8px
  md: "1rem",
  // 16px
  lg: "1.5rem",
  // 24px
  xl: "2rem",
  // 32px
  "2xl": "3rem",
  // 48px
  "3xl": "4rem"
  // 64px
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  spacing
});
//# sourceMappingURL=spacing.js.map