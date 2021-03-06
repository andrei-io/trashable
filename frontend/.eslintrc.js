module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/vue3-essential', '@vue/airbnb', '@vue/typescript/recommended'],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-tabs': 0,
		indent: ['error', 'tab'],
		'arrow-parens': 0,
		'no-shadow': 0,
		'@typescript-eslint/no-shadow': ['error'],
		'import/order': 0,
		'object-curly-newline': 0,
	},
};
