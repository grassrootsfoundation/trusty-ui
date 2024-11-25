<script lang="ts">
	import './page.css';

	import type { SizeProp, StackAsProp } from '$components/component';

	interface PageSectionProps {
		as?: StackAsProp;
		container: 'prose' | 'page' | 'none';
		spacingTop?: Extract<SizeProp, 'sm' | 'md' | 'lg' | 'xl' | '2xl'> | 'none';
		spacingBottom?: Extract<SizeProp, 'sm' | 'md' | 'lg' | 'xl' | '2xl'> | 'none';
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
