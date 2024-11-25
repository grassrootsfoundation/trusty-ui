<script lang="ts">
	import Badge from './badge.svelte';
	import Divider from '$components/divider/divider.svelte';
	import Stack from '$components/stack/stack.svelte';
	import Text from '$components/text/text.svelte';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/Badge">
	<svelte:component this={Hst.Variant} title="Intent">
		<Stack direction="row">
			<Badge intent="notification">0</Badge>
			<Badge intent="success">100</Badge>
			<Badge intent="neutral">2000</Badge>
		</Stack>
	</svelte:component>
	<svelte:component this={Hst.Variant} title="Sizes">
		<Stack>
			<Text preset="display">Small</Text>
			<Stack direction="row">
				<Badge intent="notification" size="sm">0</Badge>
				<Badge intent="success" size="sm">100</Badge>
				<Badge intent="neutral" size="sm">2000</Badge>
			</Stack>
		</Stack>
		<Divider appearance="solid" />
		<Stack>
			<Text preset="display">Default</Text>
			<Stack direction="row">
				<Badge intent="notification">0</Badge>
				<Badge intent="success">100</Badge>
				<Badge intent="neutral">2000</Badge>
			</Stack>
		</Stack>
		<Divider appearance="solid" />
		<Stack>
			<Text preset="display">Large</Text>
			<Stack direction="row">
				<Badge intent="notification" size="lg">0</Badge>
				<Badge intent="success" size="lg">100</Badge>
				<Badge intent="neutral" size="lg">2000</Badge>
			</Stack>
		</Stack>
	</svelte:component>
</svelte:component>
