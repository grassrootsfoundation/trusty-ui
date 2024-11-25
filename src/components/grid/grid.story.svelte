<script lang="ts">
	import { tok } from '$utils/style';
	import GenericBlock from '$components/generic-block/generic-block.svelte';
	import Text from '$components/text/text.svelte';
	import Grid from './grid.svelte';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/Grid">
	<svelte:component this={Hst.Variant} title="Responsive grid">
		<Grid columns={{ md: 2, lg: 3 }} gap={tok('space', 4)}>
			<GenericBlock bgcolor={tok('color', 'success')} style={`padding: ${tok('space', 6)}`}>
				<Text>The box in cell <strong>One</strong></Text>
			</GenericBlock>
			<GenericBlock bgcolor={tok('color', 'warning')} style={`padding: ${tok('space', 6)}`}>
				<Text>The box in cell <strong>Two</strong></Text>
			</GenericBlock>
			<GenericBlock bgcolor={tok('color', 'error')} style={`padding: ${tok('space', 6)}`}>
				<Text>The box in cell <strong>Three</strong></Text>
			</GenericBlock>
		</Grid>
	</svelte:component>
</svelte:component>
