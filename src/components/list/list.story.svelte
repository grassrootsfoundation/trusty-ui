<script lang="ts">
	import ListItem from './list-item.svelte';
	import List from './list.svelte';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/List">
	<svelte:component this={Hst.Variant} title="default">
		<List type="decimal">
			<ListItem>Cool Stuff</ListItem>
			<ListItem>Cool Stuff</ListItem>
			<ListItem>Cool Stuff</ListItem>
			<ListItem>Cool Stuff</ListItem>
		</List>
		<List type="disc" position="inside">
			<ListItem>Cool Stuff</ListItem>
			<ListItem>Cool Stuff</ListItem>
			<ListItem>Cool Stuff</ListItem>
		</List>
	</svelte:component>
</svelte:component>
