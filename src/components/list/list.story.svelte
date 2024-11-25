<script lang="ts">
	import List from './list.svelte';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/List">
	<svelte:component this={Hst.Variant} title="default">
		<List type="number" />
	</svelte:component>
</svelte:component>
