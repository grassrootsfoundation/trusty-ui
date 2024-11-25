import { render } from '@testing-library/svelte';
import { describe, it } from 'vitest';

import Badge from '$components/badge/badge.svelte';

describe('Badge', () => {
	it('works', () => {
		render(Badge, { content: `Text here` });
	});
});
