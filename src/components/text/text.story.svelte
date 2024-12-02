<script lang="ts">
	import { tok } from '$utils/style';

	import Text from './text.svelte';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/Text">
	<svelte:component this={Hst.Variant} title="Caption ⇢ Size">
		<Text size="2xl" preset="caption">
			Caption test in size <Text as="span" color={tok('color', 'success')}>2xl</Text>
		</Text>
		<Text size="xl" preset="caption">
			Caption test in size <Text as="span" color={tok('color', 'success')}>xl</Text>
		</Text>
		<Text size="lg" preset="caption">
			Caption test in size <Text as="span" color={tok('color', 'success')}>lg</Text>
		</Text>
		<Text size="md" preset="caption">
			Caption test in size <Text as="span" color={tok('color', 'success')}>md</Text>
		</Text>
		<Text size="sm" preset="caption">
			Caption test in size <Text as="span" color={tok('color', 'success')}>sm</Text>
		</Text>
		<Text size="xs" preset="caption">
			Caption test in size <Text as="span" color={tok('color', 'success')}>xs</Text>
		</Text>
	</svelte:component>

	<svelte:component this={Hst.Variant} title="Display ⇢ Size">
		<Text size="2xl" preset="display">
			Display test in size <Text as="span" color={tok('color', 'success')}>2xl</Text>
		</Text>
		<Text size="xl" preset="display">
			Display test in size <Text as="span" color={tok('color', 'success')}>xl</Text>
		</Text>
		<Text size="lg" preset="display">
			Display test in size <Text as="span" color={tok('color', 'success')}>lg</Text>
		</Text>
		<Text size="md" preset="display">
			Display test in size <Text as="span" color={tok('color', 'success')}>md</Text>
		</Text>
		<Text size="sm" preset="display">
			Display test in size <Text as="span" color={tok('color', 'success')}>sm</Text>
		</Text>
		<Text size="xs" preset="display">
			Display test in size <Text as="span" color={tok('color', 'success')}>xs</Text>
		</Text>
	</svelte:component>
</svelte:component>
