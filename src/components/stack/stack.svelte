<script lang="ts">
	import { toPx } from '$utils/to-pixels';
	import { tok } from '$utils/style';

	import './stack.css';

	import type { TSize } from '$src/types/size';
	import type { TAlign, TDirection, TJustify } from '$src/types/display';

	interface StackProps {
		align?: TAlign;
		as?: keyof HTMLElementTagNameMap;
		direction?: TDirection;
		gap?: TSize;
		justify?: TJustify;
	}

	export let align: StackProps['align'] = undefined,
		as: StackProps['as'] = 'div',
		direction: StackProps['direction'] = 'column',
		gap: StackProps['gap'] = tok('size', 2),
		justify: StackProps['justify'] = undefined;
</script>

<svelte:element
	this={as}
	class="stack"
	style:--stack-align={align}
	style:--stack-direction={direction}
	style:--stack-gap={typeof gap === 'number' ? toPx(gap) : gap}
	style:--stack-justify={justify}
	{...$$restProps}
>
	<slot />
</svelte:element>
