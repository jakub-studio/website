const defaultTheme = require("tailwindcss/defaultTheme");

const v = varName => `var(--${varName})`;

module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,ts,jsx,tsx,md}"],
	theme: {
		fontFamily: {
			serif: ["var(--font-serif)", ...defaultTheme.fontFamily.serif],
			// this is not the way things should be done iirc
			sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans]
		},
		extend: {
			colors: {
				brand: "#ffa50a"
			},
			minHeight: {
				44: "44px"
			},
			minWidth: {
				44: "44px"
			}
		}
	},
	plugins: []
};
