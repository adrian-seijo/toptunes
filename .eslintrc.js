/* eslint-env node */

module.exports = {
	env: {
		browser: true,
		es6: true
	},
	'extends': [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:react/recommended',
		'plugin:ava/recommended'
	],
	plugins: [
		'import',
		'react',
		'ava'
	],
	parser: '@babel/eslint-parser',
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	rules: {
		// Fixes for eslint weirdness
		'no-restricted-globals': ['error', 'event'],

		// General
		'max-len': ['error', 120],
		indent: ['error', 'tab', {SwitchCase: 1}],
		'brace-style': ['error', '1tbs'],
		eqeqeq: 'error',
		curly: ['error', 'multi-line'],
		quotes: ['error', 'single', {allowTemplateLiterals: true}],
		complexity: ['error', 10],
		'max-depth': ['error', 4],
		'max-statements': ['error', 20],
		'no-shadow': ['error', {builtinGlobals: false, allow: ['err', 'event']}],
		'no-unused-vars': 'error',
		semi: ['error', 'always'],
		'space-before-function-paren': ['error', {anonymous: 'never', named: 'never', asyncArrow: 'always'}],
		'no-trailing-spaces': 'error',
		'comma-spacing': ['error', {before: false, after: true}],
		'space-before-blocks': ['error', 'always'],
		'no-mixed-spaces-and-tabs': 'error',
		'space-infix-ops': 'error',
		'key-spacing': ['error', {afterColon: true, beforeColon: false, mode: 'strict'}],
		'quote-props': [2, 'as-needed', {keywords: true}],
		'valid-jsdoc': [0, {
			requireReturn: false,
			requireReturnDescription: false
		}],
		'default-case': 'error',
		'guard-for-in': 'error',
		'no-div-regex': 'error',
		'no-else-return': 'error',
		'no-eq-null': 'error',
		'no-floating-decimal': 'error',
		'no-param-reassign': 'error',
		'no-self-compare': 'error',
		'no-void': 'error',
		radix: 'error',
		'no-undefined': 'error',
		'no-implicit-coercion': 'error',
		'no-useless-call': 'error',
		'comma-style': ['error', 'last'],
		'comma-dangle': ['error', 'only-multiline'],
		'max-nested-callbacks': ['error', 5],
		'no-lonely-if': 'error',
		'no-multiple-empty-lines': ['error', {max: 1}],
		'no-nested-ternary': 'error',
		'keyword-spacing': ['error', {after: true}],
		'object-curly-spacing': ['error', 'never'],
		'array-bracket-spacing': ['error', 'never'],
		'computed-property-spacing': ['error', 'never'],
		'space-in-parens': ['error', 'never'],
		'space-unary-ops': ['error', {words: true}],
		'spaced-comment': ['error', 'always'],
		'no-underscore-dangle': 'error',
		'linebreak-style': ['error', 'unix'],
		'dot-notation': 'error',
		camelcase: 'error',
		'one-var': ['error', 'never'],

		// ES6
		'no-var': 'error',
		'prefer-const': 'error',
		'arrow-spacing': 'error',
		'constructor-super': 'error',
		'no-this-before-super': 'error',
		'object-shorthand': 'error',
		'prefer-spread': 'error',
		'no-class-assign': 'error',
		'require-await': 'error',

		// React
		'react/display-name': 'error',
		'react/jsx-boolean-value': 'error',
		'react/jsx-no-undef': 'error',
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react/no-danger': 'error',
		'react/no-did-mount-set-state': 'error',
		'react/no-did-update-set-state': 'error',
		'react/no-multi-comp': ['error', {ignoreStateless: true}],
		'react/no-unknown-property': 'error',
		'react/prop-types': 'error',
		'react/react-in-jsx-scope': 'error',
		'react/self-closing-comp': 'error',
		'react/jsx-wrap-multilines': 'error',
		'react/jsx-no-bind': 'error',
		'react/jsx-no-duplicate-props': 'error',
		'react/no-direct-mutation-state': 'error',
		'react/no-is-mounted': 'error',
		'react/sort-comp': ['error', {
			order: ['static-methods', 'constructor', 'lifecycle', 'everything-else', 'rendering'],
			groups: {rendering: ['/^render.+$/', 'render']}
		}],

		// Import
		'import/named': 'error',
		'import/namespace': 'error',
		'import/export': 'error',
		'import/no-named-as-default': 'error',
		'import/no-named-as-default-member': 'error',
		'import/no-mutable-exports': 'error',
		'import/first': 'error',
		'import/no-duplicates': 'error',
		'import/extensions': ['error', 'ignorePackages'],
		'import/order': 'error',
		'import/newline-after-import': 'error',
		'import/max-dependencies': ['error', {max: 20}],
		'import/no-deprecated': 'error',
		'import/no-unresolved': ['error', {commonjs: true}]
	},
};
