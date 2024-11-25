<script lang="ts">
	import './grid.css';

	interface GridColumnProps {
		span?: number | string;
	}

	export let span: GridColumnProps['span'] = undefined;
</script>

<div class="grid-column" style:--col-span={span} {...$$restProps}>
	<slot />
</div>
