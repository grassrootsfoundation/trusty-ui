import { render } from '@testing-library/svelte';
import { describe, it } from 'vitest';

import Grid from '$components/grid/grid.svelte';

describe('Grid', () => {
	it('works', () => {
		render(Grid, { props: {} });
	});
});
