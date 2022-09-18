const daisyui = require('daisyui');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [daisyui],

  daisyui: {
    themes: ["light", "dark"],
  }
};

module.exports = config;
