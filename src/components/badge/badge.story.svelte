<script lang="ts">
	import Badge from './badge.svelte';
	import Divider from '$components/divider/divider.svelte';
	import Stack from '$components/stack/stack.svelte';
	import Text from '$components/text/text.svelte';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/Badge">
	<svelte:component this={Hst.Variant} title="Sizes">
		<Stack>
			<Text preset="display">Small</Text>
			<Stack direction="row">
				<Badge intent="info">0</Badge>
				<Badge intent="success">100</Badge>
				<Badge intent="warning">2000</Badge>
				<Badge intent="error">2000</Badge>
			</Stack>
		</Stack>
		<Divider appearance="solid" />
		<Stack>
			<Text preset="display">Default</Text>
			<Stack direction="row">
				<Badge intent="info">0</Badge>
				<Badge intent="success">100</Badge>
				<Badge intent="warning">2000</Badge>
				<Badge intent="error">2000</Badge>
			</Stack>
		</Stack>
		<Divider appearance="solid" />
		<Stack>
			<Text preset="display">Large</Text>
			<Stack direction="row">
				<Badge intent="info" size="lg">0</Badge>
				<Badge intent="success" size="lg">100</Badge>
				<Badge intent="warning" size="lg">2000</Badge>
				<Badge intent="error" size="lg">2000</Badge>
			</Stack>
		</Stack>
	</svelte:component>
</svelte:component>
