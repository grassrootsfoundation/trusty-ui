<script lang="ts">
	import Tabs from './tabs.svelte';

	export let Hst;
	const tabItems = [
		{
			id: 0,
			label: 'Tab 1',
			content: `
			<p>Cool Man</p>
			`
		},
		{
			id: 1,
			label: 'Tab 2',
			content: `
			<p>Cool Man again</p>
			`
		},
		{
			id: 2,
			label: 'Tab 3',
			content: `
			<Heading>Cool Man again 2</Heading>
			<p>Cool Man again 2</p>
			`
		}
	];
	const tabItemsUnist = [
		{
			id: 0,
			label: 'Tab 1',
			content: [
				{
					id: '',
					__typename: 'text',
					label: 'string'
				}
			]
		},
		{
			id: 1,
			label: 'Tab 2',
			content: `
			<p>Cool Man again</p>
			`
		},
		{
			id: 2,
			label: 'Tab 3',
			content: `
			<Heading>Cool Man again 2</Heading>
			<p>Cool Man again 2</p>
			`
		}
	];
</script>

<svelte:component this={Hst.Story} title="Component/Tabs">
	<svelte:component this={Hst.Variant} title="HTML">
		<Tabs {tabItems} />
	</svelte:component>
	<svelte:component this={Hst.Variant} title="UNIST">
		<Tabs {tabItemsUnist} />
	</svelte:component>
</svelte:component>
