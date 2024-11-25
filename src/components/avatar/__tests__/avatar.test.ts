import { render } from '@testing-library/svelte';
import { describe, it } from 'vitest';

import { tok } from '../../../../utils/style';

import Avatar from '../avatar.svelte';

describe('Avatar', () => {
	it('accepts size props', () => {
		render(Avatar, { props: { size: 'lg' } });
	});
	it('accepts styles', () => {
		render(Avatar, {
			props: { style: `color; ${tok('radius', 'full')}` }
		});
	});
});
