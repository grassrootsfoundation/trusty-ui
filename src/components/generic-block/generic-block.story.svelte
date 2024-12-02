<script lang="ts">
	import Divider from '$components/divider/divider.svelte';
	import GenericBlock from './generic-block.svelte';
	import Stack from '$components/stack/stack.svelte';
	import Text from '$components/text/text.svelte';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/GenericBlock">
	<Stack gap="6">
		<Stack>
			<Text preset="display">Card</Text>
			<GenericBlock appearance="card" gap="4">
				<Text preset="caption" size="xs" transform="uppercase">Supertitle</Text>
				<Text preset="display">Card Ttitle</Text>
				<Text preset="caption" size="md">Text in a card</Text>
			</GenericBlock>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Default</Text>
			<GenericBlock
				bgColor="light-blue-50"
				borderColor="light-blue-200"
				spacingBlock="4"
				spacingInline="3"
			>
				<Text preset="caption">
					The generic block has many features and can be used for multiple uses.
				</Text>
			</GenericBlock>
		</Stack>

		<GenericBlock appearance="tile"></GenericBlock>
	</Stack>
</svelte:component>
