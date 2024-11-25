import { render } from '@testing-library/svelte';
import { describe, it } from 'vitest';

import Spinner from '../spinner.svelte';

describe('Spinner', () => {
	it('works', () => {
		render(Spinner, { props: {} });
	});
});
