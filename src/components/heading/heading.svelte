<script lang="ts" context="module">
	export interface HeadingProps {
		align?: TextAlignProp;
		display?: HeadingLevelProp | string;
		level?: HeadingLevelProp | string;
		spacing?: LetterSpacingProp;
	}
</script>

<script lang="ts">
	import type { HeadingLevelProp, LetterSpacingProp, TextAlignProp } from '$components/component';

	import './heading.css';

	export let align: HeadingProps['align'] = undefined,
		display: HeadingProps['display'] = '1',
		level: HeadingProps['level'] = '1';
</script>

<svelte:element
	this={`h${level}`}
	data-level={display}
	style:--text-align={align}
	class="heading"
	{...$$restProps}
>
	<slot />
</svelte:element>
