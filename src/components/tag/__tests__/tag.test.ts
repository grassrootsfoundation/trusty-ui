import { render } from '@testing-library/svelte';
import { describe, it } from 'vitest';

import Tag from '$components/tag/tag.svelte';

describe('Tag', () => {
	it('works', () => {
		render(Tag, { props: {} });
	});
});
