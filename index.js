const evilApostropheRegExp = /\w+['‘](?:\w['‘])?\w*/g;
const evilApostrophe = /['‘]/g;
const goodApostrophe = '’';

function reporter(context) {
	const { Syntax, RuleError, report, fixer, getSource } = context;
	return {
		[Syntax.Str](node) {
			return new Promise(resolve => {
				const text = getSource(node);

				let match;
				while (match = evilApostropheRegExp.exec(text)) { // eslint-disable-line no-cond-assign
					const index = match.index;
					const matched = match[0];
					const replacement = matched.replace(evilApostrophe, goodApostrophe);
					const range = [index, index + matched.length];
					const fix = fixer.replaceTextRange(range, replacement);
					const message = `Incorrect usage of an apostrophe: “${matched}”, use “${replacement}” instead`;
					report(node, new RuleError(message, { index, fix }));
				}

				resolve();
			});
		},
	};
}

module.exports = {
	linter: reporter,
	fixer: reporter,
};
