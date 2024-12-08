import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],

	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser
			}
		}
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/']
	},
	{
		rules: {
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
			],
			'import/order': [
				'warn',
				{
					pathGroups: [
						{
							pattern: '*.css',
							group: 'type',
							patternOptions: { matchBase: true },
							position: 'before'
						}
					],
					groups: ['builtin', 'external', 'internal', ['parent', 'index', 'sibling'], 'type'],
					'newlines-between': 'always',
					warnOnUnassignedImports: true
				}
			]
		}
	}
);
