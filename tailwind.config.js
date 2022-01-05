module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		fontFamily: {
			montserrat: ['Montserrat', 'Arial'],
			roboto: ['Roboto', 'Arial'],
		},
		extend: {
			colors: {
				darkGray: '#0F0F0F',
				lightGray: '#C1C1C1',
			},
		},
	},
	plugins: [],
};
