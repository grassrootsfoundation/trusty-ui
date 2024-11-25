<script lang="ts">
	import './truncate.css';

	export let lines: number | undefined = undefined,
		title: string | undefined = undefined;

	const customProperties = {
		'--truncate-line-limit': lines
	};
</script>

<div
	class="truncate"
	style:--truncate-line-limit={customProperties['--truncate-line-limit']}
	{title}
>
	<slot />
</div>
