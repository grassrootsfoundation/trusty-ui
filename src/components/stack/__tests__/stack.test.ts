import { render } from '@testing-library/svelte';
import { describe, it } from 'vitest';

import Stack from '../stack.svelte';

describe('Stack', () => {
	it('exposes styling hooks', () => {
		const { container } = render(Stack, {
			props: {
				as: 'div',
				direction: 'row',
				gap: 'var(--size-2)',
				style: { margin: '0 0 12px 0', padding: '48px' },
				slot: 'Some Text'
			}
		});
		expect(container.querySelector('div')).not.toBeNull();
	});

	it('can render as a different element', () => {
		const { container } = render(Stack, { props: { as: 'span' } });
		expect(container.querySelector('div')).toBeNull();
		expect(container.querySelector('span')).not.toBeNull();
	});
});
