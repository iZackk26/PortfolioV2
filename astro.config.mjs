import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'izackk26.github.io',
  base: '/PortfolioV2',
  integrations: [tailwind()]
});