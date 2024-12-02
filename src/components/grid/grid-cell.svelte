<script lang="ts">
	import clsx from 'clsx';

	import { generateCustomProperties, inlineStyles } from '$utils/components';

	import './grid-cell.css';

	import type { ResponsiveConfig } from '$utils/components';
	import type { ResponsiveProp } from '$src/types/media';
	import type { TGridCellSpan, TGridCellStartEnd } from '$src/types/grid';

	interface GridCellProps {
		className?: string;
		colSpan?: ResponsiveProp<TGridCellSpan>;
		colStart?: ResponsiveProp<TGridCellStartEnd>;
		colEnd?: ResponsiveProp<TGridCellStartEnd>;
		rowSpan?: ResponsiveProp<TGridCellSpan>;
		rowStart?: ResponsiveProp<TGridCellStartEnd>;
		rowEnd?: ResponsiveProp<TGridCellStartEnd>;
	}

	export let colSpan: GridCellProps['colSpan'] = undefined,
		colStart: GridCellProps['colStart'] = undefined,
		colEnd: GridCellProps['colEnd'] = undefined,
		rowSpan: GridCellProps['rowSpan'] = undefined,
		rowStart: GridCellProps['rowStart'] = undefined,
		rowEnd: GridCellProps['rowEnd'] = undefined;

	let className: GridCellProps['className'] = $$restProps.class;
	export { className as class };

	const config: ResponsiveConfig = {
		colSpan: { name: 'col-span', category: 'col-span' },
		colStart: { name: 'col-start', category: 'col-start' },
		colEnd: { name: 'col-end', category: 'col-end' },
		rowSpan: { name: 'row-span', category: 'row-span' },
		rowStart: { name: 'row-start', category: 'row-start' },
		rowEnd: { name: 'row-end', category: 'row-end' }
	};

	const mergedStyles = inlineStyles(
		generateCustomProperties(
			{
				colSpan,
				colStart,
				colEnd,
				rowSpan,
				rowStart,
				rowEnd
			},
			config
		)
	);
</script>

<div class={clsx('grid-cell', className)} style={mergedStyles} {...$$restProps}>
	<slot />
</div>
