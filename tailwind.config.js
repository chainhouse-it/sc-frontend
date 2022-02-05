module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			poppins: ['Poppins', 'Arial'],
			roboto: ['Roboto', 'Arial'],
		},
		screens: {
			'3xl': { min: '1980px' },
			'2xl': { max: '1440px' },
			xl: { max: '1279px' },
			lg: { max: '1023px' },
			md: { max: '767px' },
			sm: { max: '639px' },
			xs: { max: '439px' },
		},
		extend: {
			colors: {
				primaryGreen: '#02FEAB',
				desc: '#CFCED8',
			},
			gridTemplateColumns: {
				team: 'repeat(4, minmax(0, 400px))',
			},
			textShadow: {
				'2xl': '1px 1px 5px red',
				'3xl': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
			},
			width: {
				'400px': '400px',
				'750px': '750px',
			},
			gridTemplateRows: {
				'7': 'repeat(7, minmax(0, 1fr))',
			}
		},
	},
	plugins: [require('tailwindcss-textshadow')],
};
