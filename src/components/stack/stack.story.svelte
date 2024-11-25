<script lang="ts">
	import { tok } from '../../../utils/style';
	import GenericBlock from '../generic-block/generic-block.svelte';
	import Stack from './stack.svelte';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/Stack">
	<svelte:component this={Hst.Variant} title="Column ">
		<Stack gap={tok('size', 4)}>
			<GenericBlock
				style={`background-color: ${tok('color', 'success')}; padding: ${tok('space', 6)};`}
			>
				Text
			</GenericBlock>
			<GenericBlock
				style={`background-color: ${tok('color', 'warning')}; padding: ${tok('space', 6)};`}
			>
				Text
			</GenericBlock>
			<GenericBlock
				style={`background-color: ${tok('color', 'error')}; padding: ${tok('space', 6)};`}
			>
				Text
			</GenericBlock>
		</Stack>
	</svelte:component>
	<svelte:component this={Hst.Variant} title="Row ">
		<Stack direction="row" align="end" gap={tok('size', 4)}>
			<GenericBlock
				style={`background-color: ${tok('color', 'success')}; padding: ${tok('space', 6)};`}
			>
				Text
			</GenericBlock>
			<GenericBlock
				style={`background-color: ${tok('color', 'warning')}; padding: ${tok('space', 6)};`}
			>
				Text
			</GenericBlock>
			<GenericBlock
				style={`background-color: ${tok('color', 'error')}; padding: ${tok('space', 6)};`}
			>
				Text
			</GenericBlock>
		</Stack>
	</svelte:component>
</svelte:component>
