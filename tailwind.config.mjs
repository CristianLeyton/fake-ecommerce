/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ['selector'],
	theme: {
		extend: {
			colors: {
				'gray': {
					200: '#E5E5E5',
				},
				'primary': '#EAB308',
				'secondary': '#FACC15',
				'terciary': '#F4F3E7'
			}
		},
	},
	plugins: [],
}
