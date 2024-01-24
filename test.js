const TextLintTester = require('textlint-tester').default;
const rule = require('./index');

const tester = new TextLintTester();

tester.run('apostrophe', rule, {
	valid: [
		'I’m looking forward',
		'rock’n’roll',
		'my sisters’ friends’ investments',
		'Summer of ’69',
		'Personal best: 00\'03"48',
		'Latitude: 49° 53\' 08"',
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
		{
			text: "Summer of '69",
			output: 'Summer of ’69',
			errors: [
				{
					message: "Incorrect usage of an apostrophe: “'69”, use “’69” instead",
				},
			],
		},
		{
			text: 'Summer of ‘69',
			output: 'Summer of ’69',
			errors: [
				{
					message: 'Incorrect usage of an apostrophe: “‘69”, use “’69” instead',
				},
			],
		},
	],
});
