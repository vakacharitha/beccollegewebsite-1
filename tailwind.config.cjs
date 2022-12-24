/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primaryColor: "#0061B0",
				bannerPrimary: "#008DFF",
				footerHeading: "#ffa07a",
			},
		},
	},
	plugins: [],
};
