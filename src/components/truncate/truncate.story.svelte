<script lang="ts">
	import { tok } from '$utils/style';

	import Text from '$components/text/text.svelte';
	import Truncate from './truncate.svelte';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/Truncate">
	<svelte:component this={Hst.Variant} title="default">
		<div
			style={`resize: horizontal; min-width: 200px; overflow: auto; border: 1px solid ${tok('color', 'neutral-200')}; padding: ${tok('space', 3)};`}
		>
			<Truncate
				lines={1}
				title="Resize this box to see the results of this component. This is the full text that will be visible when this is not truncated."
			>
				<Text>Resize this box to see the results of this component.</Text>
				<Text>This is the full text that will be visible when this is not truncated.</Text>
			</Truncate>
		</div>
	</svelte:component>
</svelte:component>
