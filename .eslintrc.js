module.exports = {
	parser: "vue-eslint-parser",
	// https://github.com/vuejs/vue-eslint-parser#parseroptionsparser
	parserOptions: {
		parser: "@typescript-eslint/parser",
	},

	env: {
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:vue/vue3-recommended",
	],
	rules: {
		"vue/no-unused-vars": "error",
	},
};
