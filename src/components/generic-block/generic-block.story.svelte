<script lang="ts">
	import GenericBlock from './generic-block.svelte';
	import Text from '$components/text/text.svelte';
	import { tok } from '$utils/style';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/GenericBlock">
	<svelte:component this={Hst.Variant} title="Card">
		<GenericBlock
			style={`background-color: ${tok('color', 'neutral-100')}; padding:${tok('space', 10)}`}
		>
			<GenericBlock appearance="card">
				<Text preset="caption" size="xs" transform="uppercase">Supertitle</Text>
				<Text preset="display">Card Ttitle</Text>
				<Text preset="caption" size="md">Text in a card</Text>
			</GenericBlock>
		</GenericBlock>
	</svelte:component>
	<svelte:component this={Hst.Variant} title="Tile">
		<GenericBlock
			style={`background-color: ${tok('color', 'neutral-100')}; padding:${tok('space', 10)}`}
		>
			<GenericBlock appearance="tile">
				<Text preset="caption" size="xs" transform="uppercase">Supertitle</Text>
				<Text preset="display">Card Ttitle</Text>
				<Text preset="caption" size="md">Text in a card</Text>
			</GenericBlock>
		</GenericBlock>
	</svelte:component>
</svelte:component>
