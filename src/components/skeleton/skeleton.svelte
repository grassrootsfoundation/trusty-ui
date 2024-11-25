<script lang="ts">
	import When from '$components/when/when.svelte';
	import { fade } from 'svelte/transition';

	import './skeleton.css';

	interface SkeletonProps {
		loading: boolean;
		width?: string;
		className?: string;
	}
	export let loading: SkeletonProps['loading'] = false,
		width: SkeletonProps['width'] = '100%';

	let className: SkeletonProps['className'] = $$restProps.class ?? '';
	export { className as class };
</script>

{#if loading}
	<div class="skeleton {className}" transition:fade style:--skeleton-width={width}>
		<slot />
	</div>
{/if}
