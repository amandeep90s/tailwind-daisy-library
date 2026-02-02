/**
 * Example Tailwind Config for Consumer Apps
 *
 * This file demonstrates how to integrate the shared UI library's
 * design tokens into your Tailwind configuration.
 *
 * Copy this example to your consumer app and customize as needed.
 */

import { tailwindConfig } from "@shared-ui-library/tokens";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Include library components in content scan
    "./node_modules/@shared-ui-library/react/dist/**/*.{js,mjs}",
  ],

  // Spread the library's Tailwind config
  ...tailwindConfig,

  theme: {
    ...tailwindConfig.theme,
    extend: {
      // Extend with library tokens
      ...tailwindConfig.theme.extend,

      // Example: Override primary color
      // colors: {
      //   ...tailwindConfig.theme.extend.colors,
      //   primary: {
      //     DEFAULT: '#3b82f6',
      //     content: '#ffffff',
      //   },
      // },

      // Example: Add custom spacing
      // spacing: {
      //   ...tailwindConfig.theme.extend.spacing,
      //   '4xl': '5rem',
      //   '5xl': '6rem',
      // },

      // Example: Override font family
      // fontFamily: {
      //   sans: ['Poppins', 'sans-serif'],
      //   mono: tailwindConfig.theme.extend.fontFamily.mono,
      // },
    },
  },

  plugins: [
    // Add DaisyUI plugin for component classes
    require("daisyui"),
  ],

  // DaisyUI configuration
  daisyui: {
    themes: ["light", "dark"],
    // Or use custom theme with library colors
    // themes: [
    //   {
    //     light: {
    //       ...require('daisyui/src/theming/themes')['light'],
    //       primary: '#your-color',
    //     },
    //   },
    // ],
  },
};
