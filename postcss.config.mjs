// Tailwind now runs through PostCSS (the retired @astrojs/tailwind integration
// only supported up to Astro 5). Same Tailwind 3, same output, different wiring.
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
