<script lang="ts">
	import Divider from '$components/divider/divider.svelte';
	import Heading from './heading.svelte';
	import Text from '$components/text/text.svelte';
	import Stack from '$components/stack/stack.svelte';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/Heading">
	<svelte:component this={Hst.Variant} title="Level 1-6">
		<Stack>
			<Text preset="display">Level 1 through 6</Text>
			<Heading display="1">Heading displayed as level 1</Heading>
			<Divider appearance="dashed" gap="8" />
			<Heading display="2">Heading displayed as level 2</Heading>
			<Divider appearance="dashed" gap="8" />
			<Heading display="3">Heading displayed as level 3</Heading>
			<Divider appearance="dashed" gap="8" />
			<Heading display="4">Heading displayed as level 4</Heading>
			<Divider appearance="dashed" gap="8" />
			<Heading display="5">Heading displayed as level 5</Heading>
			<Divider appearance="dashed" gap="8" />
			<Heading display="6">Heading displayed as level 6</Heading>
		</Stack>
	</svelte:component>
</svelte:component>
