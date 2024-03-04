module.exports = {
	root: true,
	env: {
		node: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	extends: [
		'standard',
		'plugin:sonarjs/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier'
	],
	plugins: [
		'@typescript-eslint',
		'prettier',
		'sonarjs'
	],
	overrides: [
		{
			files: [
				'**/*.jss',
				'**/*.ts'
			],
		}
	],
	rules: {
		indent: [
			'error',
			'tab'
		],
		'no-tabs': 0,
		semi: [
			'error',
			'always'
		],
		// allow paren-less arrow functions
		'arrow-parens': 0,
		'array-element-newline': [
			'error',
		],
		// allow async-await
		'generator-star-spacing': 0,
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	}
};
