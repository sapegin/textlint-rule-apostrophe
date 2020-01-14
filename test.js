const TextLintTester = require('textlint-tester');
const rule = require('./index');

const tester = new TextLintTester();

tester.run('apostrophe', rule, {
	valid: [
		'I’m looking forward',
		'rock’n’roll',
		'my sisters’ friends’ investments',
	],
	invalid: [
		{
			text: "as in the eagle's feathers",
			output: 'as in the eagle’s feathers',
			errors: [
				{
					message:
						"Incorrect usage of an apostrophe: “eagle's”, use “eagle’s” instead",
				},
			],
		},
		{
			text: "rock'n'roll",
			output: 'rock’n’roll',
			errors: [
				{
					message:
						"Incorrect usage of an apostrophe: “rock'n'roll”, use “rock’n’roll” instead",
				},
			],
		},
		{
			text: "my sisters' friends' investments",
			output: 'my sisters’ friends’ investments',
			errors: [
				{
					message:
						"Incorrect usage of an apostrophe: “sisters'”, use “sisters’” instead",
				},
				{
					message:
						"Incorrect usage of an apostrophe: “friends'”, use “friends’” instead",
				},
			],
		},
	],
});
