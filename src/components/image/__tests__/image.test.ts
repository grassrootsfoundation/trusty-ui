import { render } from '@testing-library/svelte';
import { describe, it } from 'vitest';

import Image from '$components/image/image.svelte';

describe('Image', () => {
	it('works', () => {
		render(Image, {
			alt: 'Always needs and alt',
			url: 'https://images.pexels.com/photos/28588325/pexels-photo-28588325/free-photo-of-close-up-of-lush-green-prickly-pear-cacti.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
		});
	});
});
