<script lang="ts">
	import clsx from 'clsx';

	import './accordion.css';

	import type { TColor } from '$types/color';
	import type { TRadius } from '$types/radius';
	import type { TShadow } from '$types/shadow';
	import type { TSize } from '$types/size';
	import type { TTextSize } from '$types/text';

	interface AccordionProps {
		bgColor?: TColor;
		borderColor?: TColor;
		className?: string;
		color?: TColor;
		gap?: TSize;
		radius?: TRadius;
		shadow?: TShadow;
		spacing?: TSize;
		textSize?: TTextSize;
	}

	export let bgColor: AccordionProps['bgColor'] = undefined,
		borderColor: AccordionProps['borderColor'] = undefined,
		color: AccordionProps['color'] = undefined,
		gap: AccordionProps['gap'] = undefined,
		radius: AccordionProps['radius'] = undefined,
		shadow: AccordionProps['shadow'] = undefined,
		spacing: AccordionProps['spacing'] = undefined,
		textSize: AccordionProps['textSize'] = undefined;

	let className: AccordionProps['className'] = $$restProps.class;
	export { className as class };
</script>

<div
	class={clsx('accordion', className)}
	style:--accordion-bg-color={bgColor}
	style:--accordion-border-color={borderColor}
	style:--accordion-color={color}
	style:--accordion-gap={gap}
	style:--accordion-radius={radius}
	style:--accordion-shadow={shadow}
	style:--accordion-spacing={spacing}
	style:--accordion-text-size={textSize}
	{...$$restProps}
>
	<slot />
</div>
