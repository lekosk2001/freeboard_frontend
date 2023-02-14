module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'standard-with-typescript',
		'prettier',
	],
	overrides: [],
	parserOptions: {
		project: './tsconfig.json',
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/naming-convention': 'off',
		'@typescript-eslint/no-misused-promises': 'off',
		'@typescript-eslint/restrict-template-expressions': 'off',
		'@typescript-eslint/restrict-plus-operands': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/triple-slash-reference': 'off',
		'react/display-name':'off',
	},
};
