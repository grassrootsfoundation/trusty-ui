<script lang="ts">
	import { createResponsivePropCSSProperties, definedProps } from '$utils/components';

	import './grid.css';

	import type { ResponsiveProp } from '$components/component';

	interface GridProps {
		columns?: ResponsiveProp<number>;
		gap?: ResponsiveProp<number> | ResponsiveProp<string>;
	}

	export let columns: GridProps['columns'] = undefined,
		gap: GridProps['gap'] = undefined;

	function getCustomProperties({ gap, columns }: GridProps) {
		const base: Record<string, unknown> = {};

		if (gap) {
			base['--grid-gap'] = gap;
		}

		return Object.assign(
			base,
			createResponsivePropCSSProperties(columns, {
				name: '--grid-column-count'
			})
		);
	}

	const mergedStyles = {
		...getCustomProperties({
			...definedProps({
				gap,
				columns
			})
		})
	};
</script>

<div
	class="grid"
	style:--grid-column-count-default={mergedStyles['--grid-column-count-default']}
	style:--grid-column-count-sm={mergedStyles['--grid-column-count-sm']}
	style:--grid-column-count-md={mergedStyles['--grid-column-count-md']}
	style:--grid-column-count-lg={mergedStyles['--grid-column-count-lg']}
	style:--grid-column-count-xl={mergedStyles['--grid-column-count-xl']}
	style:--grid-gap={mergedStyles['--grid-gap']}
	{...$$restProps}
>
	<slot />
</div>
