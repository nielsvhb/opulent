/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        container: {
            padding: '3rem',
          },
		extend: {
            colors: {
                primary: "#24544B",
                "primary-light": "#72A38F",
                secondary: "#a56051",
                ice: "#d3e2ef",
                fuchsia: "#fdeeea"
            }
        },
        fontFamily: {
            body: ['agrandir'],
            heading: ['pearl'],
        },
	},
	plugins: []
}
