module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			montserrat: ['Montserrat', 'Arial'],
			roboto: ['Roboto', 'Arial'],
		},
		screens: {
			'2xl': { max: '1535px' },
			xl: { max: '1279px' },
			lg: { max: '1023px' },
			md: { max: '767px' },
			sm: { max: '639px' },
			xs: { max: '439px' },
		},
		extend: {
			fontSize: {
				'10xl': '10rem',
				'15xl': '15rem',
				'20xl': '20rem',
				'24xl': '24rem',
				'25xl': '25rem',
			},
			textShadow: {
				'2xl': '1px 1px 5px red',
				'3xl': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
			},
			width: {
				'400px': '400px',
				'750px': '750px',
			},
		},
	},
	plugins: [require('tailwindcss-textshadow')],
};
