module.exports = {
	endOfLine: 'lf',
	semi: false,
	singleQuote: true,
	trailingComma: 'all',
	printWidth: 120,
	tabWidth: 2,
	bracketSpacing: true,
	useTabs: true,
	arrowParens: 'avoid',
	overrides: [
		{
			files: '*.sol',
			options: {
				printWidth: 120,
				singleQuote: false,
				explicitTypes: 'always',
				parser: 'solidity-parse',
			},
		},
	],
	plugins: [require('prettier-plugin-solidity')],
}
