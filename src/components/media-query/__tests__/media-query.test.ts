import { render } from '@testing-library/svelte';
import { describe, it } from 'vitest';

import MediaQuery from '$components/media-query/media-query.svelte';
import { useBreakpoints } from '$src/hooks.client';

const { xs } = useBreakpoints();

describe('MediaQuery', () => {
	it('Accepts a query string', () => {
		render(MediaQuery, { props: { query: '(min-width: 1280px)' } });
	});
	it('Accepts media query predefined variables', () => {
		render(MediaQuery, { props: { query: xs } });
	});
});
