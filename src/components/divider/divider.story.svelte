<script lang="ts">
	import { tok } from '$utils/style';

	import Divider from './divider.svelte';

	import Stack from '$components/stack/stack.svelte';
	import Text from '$components/text/text.svelte';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/Divider">
	<svelte:component this={Hst.Variant} title="Appearance">
		<Stack>
			<Stack>
				<Text preset="display">None but spaced</Text>
				<Divider appearance="solid" --divider-color={tok('color', 'neutral-200')} />
			</Stack>
			<Stack>
				<Text preset="display">Solid</Text>
				<Divider
					appearance="solid"
					color={tok('color', 'yellow-400')}
					height={tok('size', '0-5')}
				/>
			</Stack>
			<Stack>
				<Text preset="display">Dashed</Text>
				<Divider appearance="dashed" gap={tok('size', 8)} height={tok('size', 2)} />
			</Stack>
			<Stack>
				<Text preset="display">Dotted</Text>
				<Divider appearance="dotted" height={tok('size', 8)} width={tok('size', 4)} />
			</Stack>
		</Stack>
	</svelte:component>
	<svelte:component this={Hst.Variant} title="Spacing">
		<Stack>
			<Stack>
				<Text preset="display">No spacing</Text>
				<Divider appearance="solid" spacing="none" />
			</Stack>
			<Stack>
				<Text preset="display">Small spacing</Text>
				<Divider appearance="solid" spacing="sm" />
			</Stack>
			<Stack>
				<Text preset="display">Base spacing</Text>
				<Divider appearance="solid" />
			</Stack>
			<Stack>
				<Text preset="display">Large spacing</Text>
				<Divider appearance="solid" spacing="lg" />
			</Stack>
		</Stack>
	</svelte:component>
</svelte:component>
