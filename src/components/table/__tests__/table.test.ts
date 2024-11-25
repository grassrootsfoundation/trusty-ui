import { render } from '@testing-library/svelte';
import { describe, it } from 'vitest';

import Table from '$components/table/table.svelte';

describe('Table', () => {
	it('works', () => {
		render(Table, { props: {} });
	});
});
