<script lang="ts">
	import clsx from 'clsx';
	import { generateCustomProperties, inlineStyles, type ResponsiveConfig } from '$utils/components';
	import type { ResponsiveProp } from '$src/types/media';

	import './grid.css';

	import type { TGridCell } from '$src/types/grid';
	import type { TSize } from '$src/types/size';

	interface GridProps {
		className?: string;
		cols?: ResponsiveProp<TGridCell>;
		rows?: ResponsiveProp<TGridCell>;
		gap?: ResponsiveProp<TSize>;
	}

	export let cols: GridProps['cols'] = undefined,
		gap: GridProps['gap'] = undefined,
		rows: GridProps['rows'] = undefined;

	let className: GridProps['className'] = $$restProps.class;
	export { className as class };

	const config: ResponsiveConfig = {
		cols: { name: 'grid-cols', category: 'grid-cols' },
		gap: { name: 'grid-gap', category: 'size' },
		rows: { name: 'grid-rows', category: 'grid-rows' }
	};

	const mergedStyles = inlineStyles(
		generateCustomProperties(
			{
				cols,
				rows,
				gap
			},
			config
		)
	);
</script>

<div class={clsx('grid', className)} style={mergedStyles} {...$$restProps}>
	<slot />
</div>
