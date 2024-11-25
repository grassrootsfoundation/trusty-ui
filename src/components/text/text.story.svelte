<script lang="ts">
	import Text from './text.svelte';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/Text">
	<svelte:component this={Hst.Variant} title="Caption ⇢ Size">
		<Text size="2xl" preset="caption">
			Caption test in size <span style="color: var(--color-success)">2xl</span>
		</Text>
		<Text size="xl" preset="caption">
			Caption test in size <span style="color: var(--color-success)">xl</span>
		</Text>
		<Text size="lg" preset="caption">
			Caption test in size <span style="color: var(--color-success)">lg</span>
		</Text>
		<Text size="md" preset="caption">
			Caption test in size <span style="color: var(--color-success)">md</span>
		</Text>
		<Text size="sm" preset="caption">
			Caption test in size <span style="color: var(--color-success)">sm</span>
		</Text>
		<Text size="xs" preset="caption">
			Caption test in size <span style="color: var(--color-success)">xs</span>
		</Text>
	</svelte:component>

	<svelte:component this={Hst.Variant} title="Display ⇢ Size">
		<Text size="2xl" preset="display">
			Display test in size <span style="color: var(--color-success)">2xl</span>
		</Text>
		<Text size="xl" preset="display">
			Display test in size <span style="color: var(--color-success)">xl</span>
		</Text>
		<Text size="lg" preset="display">
			Display test in size <span style="color: var(--color-success)">lg</span>
		</Text>
		<Text size="md" preset="display">
			Display test in size <span style="color: var(--color-success)">md</span>
		</Text>
		<Text size="sm" preset="display">
			Display test in size <span style="color: var(--color-success)">sm</span>
		</Text>
		<Text size="xs" preset="display">
			Display test in size <span style="color: var(--color-success)">xs</span>
		</Text>
	</svelte:component>
</svelte:component>
