<script lang="ts">
	import Main from './page-body.svelte';
	import Page from './page.svelte';
	import Section from './page-section.svelte';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/Page layout">
	<svelte:component this={Hst.Variant} title="default">
		<Page>
			<Main>
				<Section as="article">Text in the mddle</Section>
			</Main>
		</Page>
	</svelte:component>
</svelte:component>
