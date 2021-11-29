module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: '@babel/eslint-parser',
		requireConfigFile: false
	},
	extends: [
		'@nuxtjs',
		'plugin:nuxt/recommended'
	],
	plugins: [],
	// add your custom rules here
	rules: {
		indent: ['off', 'tab', { SwitchCase: 1 }],
		'no-tabs': 0,
		'no-trailing-spaces': ["off"]
	}
}
