<script lang="ts">
	import Divider from '../divider/divider.svelte';
	import Stack from '../stack/stack.svelte';
	import Text from '../text/text.svelte';
	import Spinner from './spinner.svelte';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/Spinner">
	<svelte:component this={Hst.Variant} title="default">
		<Stack>
			<Stack>
				<Text preset="display">Extra Small: xs</Text>
				<Spinner size="xs" />
			</Stack>
			<Divider appearance="solid" />
			<Stack>
				<Text preset="display">Small: sm</Text>
				<Spinner size="sm" />
			</Stack>
			<Divider appearance="solid" />
			<Stack>
				<Text preset="display">Base: md</Text>
				<Spinner size="md" />
			</Stack>
			<Divider appearance="solid" />
			<Stack>
				<Text preset="display">Large: lg</Text>
				<Spinner size="lg" />
			</Stack>
		</Stack>
	</svelte:component>
</svelte:component>
