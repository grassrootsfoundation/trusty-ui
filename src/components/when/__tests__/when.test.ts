import { render } from '@testing-library/svelte';
import { describe, it } from 'vitest';
import When from '$components/when/when.svelte';

describe('When', () => {
	it('works', () => {
		render(When, { props: { condition: true } });
	});
});
