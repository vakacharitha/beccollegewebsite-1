/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	mode: "jit",
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/flowbite/**/*.js",
	],
	theme: {
		extend: {
			colors: {
				primaryColor: "#0061B0",
				secondaryColor: "#FFDEAD",
				bannerPrimary: "#008DFF",
				footerHeading: "#ffa07a",
				background: "#a8d4ff9c",
				secondary: "#07263f",
				placementsbg: "#F2EAEA",
				alumnibg: "#3AC2C2",
			},
			backgroundImage: {
				"hero-pattern": "url('/src/assets/homepage/v-m bg image.jpg')",
				courses: "url('/src/assets/homepage/courses/courses.png')",
			},
		},
		screens: {
			xs: "320px",
			...defaultTheme.screens,
		},
	},
	plugins: [require("flowbite/plugin")],
};
