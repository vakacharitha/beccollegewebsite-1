/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	mode: "jit",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {
			colors: {
				primaryColor: "#0061B0",
				secondaryColor: "#FFDEAD",
				bannerPrimary: "#008DFF",
				footerHeading: "#ffa07a",
			},
		},
		screens: {
			xs: "320px",
			...defaultTheme.screens,
		},
	},
	plugins: [require('flowbite/plugin')]
};
