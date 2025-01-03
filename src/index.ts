import type { TxtNode } from '@textlint/ast-node-types';
import type {
	TextlintFixableRuleModule,
	TextlintRuleContext,
} from '@textlint/types';

const evilApostropheRegExp = /(?:(?<=\s)|[^\d\W])+['‘](?:\w['‘])?\w*/g;
const evilApostrophe = /['‘]/g;
const goodApostrophe = '’';

function reporter(context: TextlintRuleContext) {
	const { Syntax, RuleError, report, fixer, getSource } = context;
	return {
		[Syntax.Str](node: TxtNode) {
			return new Promise<void>((resolve) => {
				const text = getSource(node);

				let match;

				while ((match = evilApostropheRegExp.exec(text))) {
					const index = match.index;
					const matched = match[0];
					const replacement = matched.replaceAll(
						evilApostrophe,
						goodApostrophe
					);
					const fix = fixer.replaceTextRange(
						[index, index + matched.length],
						replacement
					);
					const message = `Incorrect usage of an apostrophe: “${matched}”, use “${replacement}” instead`;
					report(
						node,
						new RuleError(message, {
							index,
							fix,
						})
					);
				}

				resolve();
			});
		},
	};
}

const rule: TextlintFixableRuleModule = {
	linter: reporter,
	fixer: reporter,
};

export default rule;
