<script lang="ts">
	import Text from '$components/text/text.svelte';
	import Table from './table.svelte';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/Table">
	<svelte:component this={Hst.Variant} title="default">
		<Table styled>
			<thead>
				<tr>
					<Text as="th" preset="display" size="xs">Stuff 1</Text>
					<Text as="th" preset="display" size="xs">Stuff 2</Text>
					<Text as="th" preset="display" size="xs">Stuff 3</Text>
				</tr>
			</thead>
			<tbody>
				<tr>
					<Text as="td" display="caption" size="md">Stuff 1</Text>
					<Text as="td" display="caption" size="md">Stuff 2</Text>
					<Text as="td" display="caption" size="md">Stuff 3</Text>
				</tr>
				<tr>
					<Text as="td" display="caption" size="md">Stuff 1</Text>
					<Text as="td" display="caption" size="md">Stuff 2</Text>
					<Text as="td" display="caption" size="md">Stuff 3</Text>
				</tr>
				<tr>
					<Text as="td" display="caption" size="md">Stuff 1</Text>
					<Text as="td" display="caption" size="md">Stuff 2</Text>
					<Text as="td" display="caption" size="md">Stuff 3</Text>
				</tr>
				<tr>
					<Text as="td" display="caption" size="md">Stuff 1</Text>
					<Text as="td" display="caption" size="md">Stuff 2</Text>
					<Text as="td" display="caption" size="md">Stuff 3</Text>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<Text as="th" preset="display" size="xs">Stuff 1</Text>
					<Text as="th" preset="display" size="xs">Stuff 2</Text>
					<Text as="th" preset="display" size="xs">Stuff 3</Text>
				</tr>
			</tfoot>
		</Table>
	</svelte:component>
</svelte:component>
