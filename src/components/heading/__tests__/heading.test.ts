import { render } from '@testing-library/svelte';
import { describe, it } from 'vitest';

import Heading from '$components/heading/heading.svelte';

describe('Heading', () => {
	it('works', () => {
		render(Heading, { props: { level: '1' } });
	});
	it('Displays a level one heading, styled as data-level 1', () => {
		render(Heading, { props: { level: '1', display: '1' } });
	});
});
