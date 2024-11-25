<script lang="ts">
	import When from '$components/when/when.svelte';

	interface TabsContentProps {
		content?: string | unknown;
		contentType?: 'html' | 'unist';
	}

	export let content: TabsContentProps['content'] = undefined,
		contentType: TabsContentProps['contentType'] = 'html';
</script>

<div class="tabs-content" {...$$restProps}>
	<When condition={Boolean(contentType === 'html')}>
		{content}
	</When>
	<When condition={Boolean(contentType === 'unist')}>
		<p>Units Body Content</p>
	</When>
</div>
