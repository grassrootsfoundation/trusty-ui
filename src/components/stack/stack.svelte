<script lang="ts">
	import { toPx } from '$utils/to-pixels';
	import { tok } from '$utils/style';

	import type {
		AlignProp,
		DirectionProp,
		GapProp,
		JustifyProp,
		StackAsProp
	} from '$components/component';

	import './stack.css';

	interface StackProps {
		align?: AlignProp;
		as?: StackAsProp;
		direction?: DirectionProp;
		gap?: GapProp;
		justify?: JustifyProp;
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
