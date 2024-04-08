/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    	"./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
	  extend: {
		  screens: {
			  'sm': '640px',
			  // => @media (min-width: 640px) { ... }
			  'md': '768px',
			  // => @media (min-width: 768px) { ... }
			  'lg': '1024px',
			  // => @media (min-width: 1024px) { ... }
			  'xl': '1280px',
			  // => @media (min-width: 1280px) { ... }
			  '2xl': '1536px',
			  // => @media (min-width: 1536px) { ... }
			  },
	  },
	},
	plugins: [],
  });
