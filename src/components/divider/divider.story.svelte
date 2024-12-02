<script lang="ts">
	import { tok } from '$utils/style';

	import Divider from './divider.svelte';
	import GenericBlock from '$components/generic-block/generic-block.svelte';
	import Stack from '$components/stack/stack.svelte';
	import Text from '$components/text/text.svelte';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/Divider">
	<svelte:component this={Hst.Variant} title="Appearance">
		<Stack>
			<Stack>
				<Text preset="display">None but spaced</Text>
				<Divider />
			</Stack>
			<Stack>
				<Text preset="display">Solid</Text>
				<Divider appearance="solid" />
				<Divider appearance="solid" height="0-5" />
				<Divider appearance="solid" height="1" />
			</Stack>
			<Stack>
				<Text preset="display">Dashed</Text>
				<Divider appearance="dashed" gap="3" />
				<Divider appearance="dashed" gap="3" height="0-5" />
				<Divider appearance="dashed" gap="4" height="1" />
			</Stack>
			<Stack>
				<Text preset="display">Dotted</Text>
				<Divider appearance="dotted" height="1" width="1" />
				<Divider appearance="dotted" spacing="sm" height="1-5" width="1-5" />
				<Divider appearance="dotted" height="2" width="2" />
			</Stack>
		</Stack>
	</svelte:component>
	<svelte:component this={Hst.Variant} title="Spacing">
		<Stack>
			<Stack>
				<Text preset="display">No spacing</Text>
				<Divider appearance="solid" spacing="0" />
			</Stack>
			<Stack>
				<Text preset="display">Small spacing</Text>
				<GenericBlock bgColor="grey-50">
					<Divider appearance="solid" />
				</GenericBlock>
			</Stack>
			<Stack>
				<Text preset="display">Base spacing</Text>
				<GenericBlock bgColor="grey-50">
					<Divider appearance="solid" spacing="6" />
				</GenericBlock>
			</Stack>
			<Stack>
				<Text preset="display">Large spacing</Text>
				<GenericBlock bgColor="grey-50">
					<Divider appearance="solid" spacing="8" />
				</GenericBlock>
			</Stack>
		</Stack>
	</svelte:component>
</svelte:component>
