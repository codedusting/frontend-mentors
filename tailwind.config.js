/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			screens: {
				"2xl": "1440px"
			},
			colors: {
				white: "hsl(0, 0%, 100%)",
				lightgray: "hsl(212, 45%, 89%)",
				grayishblue: "hsl(220, 15%, 55%)",
				darkblue: "hsl(218, 44%, 22%)"
			},
			fontFamily: {
				outfit: ["Outfit", "sans-serif"]
			},
			fontSize: {
				base: "15px"
			}
		}
	},
	plugins: []
};
