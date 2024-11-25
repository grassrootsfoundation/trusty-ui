import { render } from '@testing-library/svelte';
import { describe, it } from 'vitest';

import RawHTML from '../raw-html.svelte';

describe('RawHTML', () => {
	it('works', () => {
		render(RawHTML, { content: '' });
	});
});
