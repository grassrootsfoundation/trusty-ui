<script lang="ts">
	import clsx from 'clsx';

	import { generateCustomProperties, inlineStyles } from '$utils/components';

	import './divider.css';

	import type { ResponsiveConfig } from '$utils/components';
	import type { TColor } from '$src/types/color';
	import type { TSize } from '$src/types/size';

	interface DividerProps {
		appearance?: 'solid' | 'dotted' | 'dashed';
		className?: string;
		color?: TColor;
		gap?: TSize;
		height?: TSize;
		spacing?: TSize;
		width?: TSize;
	}

	export let appearance: DividerProps['appearance'] = undefined,
		color: DividerProps['color'] = undefined,
		gap: DividerProps['gap'] = undefined,
		height: DividerProps['height'] = undefined,
		spacing: DividerProps['spacing'] = undefined,
		width: DividerProps['width'] = undefined;

	let className: DividerProps['className'] = $$restProps.class;
	export { className as class };

	const config: ResponsiveConfig = {
		color: { name: 'divider-color', category: 'color' },
		gap: { name: 'divider-gap', category: 'size' },
		height: { name: 'divider-height', category: 'size' },
		spacing: { name: 'divider-spacing', category: 'size' },
		width: { name: 'divider-width', category: 'size' }
	};

	const mergedStyles = inlineStyles(
		generateCustomProperties(
			{
				color,
				gap,
				height,
				spacing,
				width
			},
			config
		)
	);
</script>

<div
	class={clsx('divider', className)}
	data-appearance={appearance}
	style={mergedStyles}
	{...$$restProps}
/>
