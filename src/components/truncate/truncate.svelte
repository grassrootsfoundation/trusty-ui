<script lang="ts">
	import './truncate.css';

	interface TruncateProps {
		lines?: number;
		title?: string;
	}

	export let lines: TruncateProps['lines'] = undefined,
		title: TruncateProps['title'] = undefined;
</script>

<div class="truncate" style:--truncate-line-limit={lines} {title}>
	<slot />
</div>
