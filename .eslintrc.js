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
		indent: ['warn', 'tab', { SwitchCase: 1 }],
		'no-tabs': 'off',
		'no-trailing-spaces': ['off'],
		'object-curly-spacing': ['off'],
		'space-before-function-paren': ['off']
	}
}
