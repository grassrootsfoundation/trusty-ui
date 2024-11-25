<script lang="ts">
	import './table.css';

	export let styled: boolean = false;
</script>

<table class="table" data-styled={styled} {...$$restProps}>
	<slot />
</table>
