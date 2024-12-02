<script lang="ts">
	import './page.css';

	import type { TSizeLabel } from '$src/types/size';

	interface PageSectionProps {
		as?: keyof HTMLElementTagNameMap;
		container: 'prose' | 'page' | 'none';
		spacingTop?: Extract<TSizeLabel, 'sm' | 'md' | 'lg' | 'xl' | '2xl'> | 'none';
		spacingBottom?: Extract<TSizeLabel, 'sm' | 'md' | 'lg' | 'xl' | '2xl'> | 'none';
	}

	export let as: PageSectionProps['as'] = 'div',
		container: PageSectionProps['container'] = 'page',
		spacingBottom: PageSectionProps['spacingBottom'] = 'none',
		spacingTop: PageSectionProps['spacingTop'] = 'none';
</script>

<svelte:element
	this={as}
	class="page-section"
	data-spacing-bottom={spacingBottom}
	data-spacing-top={spacingTop}
	data-container={container}
	{...$$restProps}
>
	<slot />
</svelte:element>
