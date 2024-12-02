<script lang="ts">
	import clsx from 'clsx';
	import { generateCustomProperties, inlineStyles } from '$utils/components';

	import './generic-block.css';

	import type { ResponsiveConfig } from '$utils/components';
	import type { TColor } from '$src/types/color';
	import type { TSize } from '$src/types/size';
	import type { TRadius } from '$src/types/radius';
	import type { TShadow } from '$src/types/shadow';

	interface GenericBlockProps {
		as?: keyof HTMLElementTagNameMap;
		appearance?: 'card' | 'tile';
		bgColor?: TColor;
		borderColor?: TColor;
		className?: string;
		color?: TColor;
		gap?: TSize;
		radius?: TRadius;
		shadow?: TShadow;
		spacingBlock?: TSize;
		spacingInline?: TSize;
	}

	export let appearance: GenericBlockProps['appearance'] = undefined,
		as: GenericBlockProps['as'] = 'div',
		bgColor: GenericBlockProps['bgColor'] = undefined,
		borderColor: GenericBlockProps['borderColor'] = undefined,
		color: GenericBlockProps['color'] = undefined,
		gap: GenericBlockProps['gap'] = undefined,
		shadow: GenericBlockProps['shadow'] = undefined,
		spacingBlock: GenericBlockProps['spacingBlock'] = undefined,
		spacingInline: GenericBlockProps['spacingInline'] = undefined,
		radius: GenericBlockProps['radius'] = undefined;

	let className: GenericBlockProps['className'] = $$restProps.class;
	export { className as class };

	const config: ResponsiveConfig = {
		bgColor: { name: 'block-bg-color', category: 'color' },
		borderColor: { name: 'block-border-color', category: 'color' },
		color: { name: 'block-color', category: 'color' },
		gap: { name: 'block-gap', category: 'size' },
		radius: { name: 'block-radius', category: 'radius' },
		shadow: { name: 'block-shadow', category: 'shadow' },
		spacingBlock: { name: 'block-spacing-block', category: 'size' },
		spacingInline: { name: 'block-spacing-inline', category: 'size' }
	};

	const mergedStyles = inlineStyles(
		generateCustomProperties(
			{
				bgColor,
				borderColor,
				color,
				gap,
				radius,
				shadow,
				spacingBlock,
				spacingInline
			},
			config
		)
	);
</script>

<svelte:element
	this={as}
	class={clsx('generic-block', className)}
	data-appearance={appearance}
	style={mergedStyles}
	{...$$restProps}
>
	<slot />
</svelte:element>
