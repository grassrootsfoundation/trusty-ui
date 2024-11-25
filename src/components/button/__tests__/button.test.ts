import { render } from '@testing-library/svelte';
import { describe, it } from 'vitest';

import Button from '$components/button/button.svelte';

describe('Button', () => {
	it('works', () => {
		render(Button, { props: {} });
	});
});
