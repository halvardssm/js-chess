module.exports = {
	env: {
		node: true,
		es6: true,
	},
	extends: "eslint:recommended",
	parserOptions: {
		ecmaVersion: 2015,
		sourceType: "module"
	},
	rules: {
		indent: ['error', 'tab',{ 'SwitchCase': 1 }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'comma-spacing': ['error', { 'before': false, 'after': true }],
		'arrow-spacing': ['error', { 'before': true, 'after': true }],
		'key-spacing': ['error', { afterColon: true, mode: 'strict' }],
		'eol-last': ['error', 'always'],
		'no-undef': ['off'],
		'no-unused-vars': ['warn'],
		'no-mixed-spaces-and-tabs': ['error'],
		'object-curly-spacing': ['error', 'always', { 'arraysInObjects': false, 'objectsInObjects': false }],
		'array-bracket-spacing': ['error', 'never', { 'objectsInArrays': false, 'singleValue': false, 'arraysInArrays': false }],
		'computed-property-spacing': ['error', 'never', { 'enforceForClassMembers': true }],
		'space-infix-ops': 'error',
		'semi-spacing': 'error'
	}
};
