/**
 * @file Generates all the files for a new component.
 */

import * as fs from 'fs';
import * as path from 'path';

import { format } from 'prettier';
import { toKebabCase } from '../utils/to-kebab-case';

const CSS_TEMPLATE = (name: string) => `
.${toKebabCase(name)} {
  color: inherit;
}
`;

const TEST_TEMPLATE = (name: string) => `
import { render } from "@testing-library/svelte";
import { describe, it } from 'vitest';

import ${name} from "$components/${toKebabCase(name)}/${toKebabCase(name)}.svelte";

describe("${name}", () => {
  it("works", () => {
    render(${name}, {});
  });
});
`;

const COMPONENT_TEMPLATE = (name: string) => `
		<script lang="ts">
			import "./${toKebabCase(name)}.css";

			interface ${name}Props {
				props?: string
				className?: string
			}

			export let props: ${name}Props['props'] = undefined;

			let className: ${name}Props['className'] = $$restProps.class;
			export { className as class };

		</script>


		<div class="${toKebabCase(name)} {className}" {...$$restProps}>
		  <slot />
		</div>
`;

const STORY_TEMPLATE = (name: string) => `
<script lang="ts">
	import ${name} from './${toKebabCase(name)}.svelte';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/${name}">
	<svelte:component this={Hst.Variant} title="default">
		<${name} />
	</svelte:component>
</svelte:component>
`;

const name = process.argv.slice(2)[0];
const directory = toKebabCase(name);
const output = path.join.bind(import.meta.dirname, 'src/components');

async function run() {
	try {
		fs.mkdirSync(output(directory));
		fs.mkdirSync(output(directory, '__tests__'));

		fs.writeFileSync(
			output(directory, `${toKebabCase(name)}.css`),
			await format(CSS_TEMPLATE(name), { parser: 'css' })
		);
		fs.writeFileSync(
			output(directory, `${toKebabCase(name)}.svelte`),
			await format(COMPONENT_TEMPLATE(name), { parser: 'html' })
		);
		fs.writeFileSync(
			output(directory, `${toKebabCase(name)}.story.svelte`),
			await format(STORY_TEMPLATE(name), { parser: 'html' })
		);
		fs.writeFileSync(
			output(directory, '__tests__', `${toKebabCase(name)}.test.ts`),
			await format(TEST_TEMPLATE(name), { parser: 'typescript' })
		);
	} catch (error) {
		console.error(error);
	}
}

void run();
