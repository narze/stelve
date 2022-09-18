const daisyui = require('daisyui');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require('@tailwindcss/typography'), daisyui],

	daisyui: {
		themes: ['light', 'dark']
	}
};

module.exports = config;
