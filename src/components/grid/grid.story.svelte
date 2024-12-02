<script lang="ts">
	import GenericBlock from '$components/generic-block/generic-block.svelte';
	import Grid from './grid.svelte';
	import Text from '$components/text/text.svelte';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/Grid">
	<svelte:component this={Hst.Variant} title="Responsive grid">
		<Grid cols={{ lg: '3' }} gap={{ default: '4' }}>
			<GenericBlock bgColor="success" spacingBlock="6" spacingInline="6">
				<Text>The box in cell <strong>One</strong></Text>
			</GenericBlock>
			<GenericBlock bgColor="warning" spacingBlock="6" spacingInline="6">
				<Text>The box in cell <strong>Two</strong></Text>
			</GenericBlock>
			<GenericBlock bgColor="error" spacingBlock="6" spacingInline="6">
				<Text>The box in cell <strong>Three</strong></Text>
			</GenericBlock>
		</Grid>
	</svelte:component>
</svelte:component>
