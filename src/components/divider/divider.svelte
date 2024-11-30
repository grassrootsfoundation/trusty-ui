<script lang="ts">
	import type { SizeProp } from '$components/component';
	import clsx from 'clsx';
	import type { TColor } from '$src/types/color';
	import type { TSize } from '$src/types/size';

	import './divider.css';

	interface DividerProps {
		appearance?: 'solid' | 'dotted' | 'dashed';
		className?: string;
		color?: TColor;
		gap?: TSize;
		height?: TSize;
		spacing?: Extract<SizeProp, 'sm' | 'md' | 'lg'> | 'none';
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
</script>

<div
	class={clsx('divider', className)}
	data-appearance={appearance}
	data-spacing={spacing}
	style:--divider-color={color}
	style:--divider-gap={gap}
	style:--divider-height={height}
	style:--divider-width={width}
	{...$$restProps}
/>
