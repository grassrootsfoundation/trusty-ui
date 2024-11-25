<script lang="ts" context="module">
	export interface DividerProps {
		appearance?: 'solid' | 'dotted' | 'dashed';
		color?: string;
		height?: string;
		spacing?: Extract<SizeProp, 'sm' | 'md' | 'lg'> | 'none';
	}
</script>

<script lang="ts">
	import type { SizeProp } from '$components/component';
	import './divider.css';

	export let appearance: DividerProps['appearance'] = undefined,
		color: DividerProps['color'] = undefined,
		height: DividerProps['height'] = undefined,
		spacing: DividerProps['spacing'] = undefined;
</script>

<div
	class="divider"
	data-appearance={appearance}
	data-spacing={spacing}
	style:--divider-height={height}
	style:--divider-color={color}
	{...$$restProps}
/>
