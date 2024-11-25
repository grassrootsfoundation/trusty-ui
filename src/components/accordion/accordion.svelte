<script lang="ts">
	import './accordion.css';

	import type { TColor } from '$types/color';
	import type { TRadius } from '$types/radius';
	import type { TShadow } from '$types/shadow';
	import type { TSize } from '$types/size';
	import type { TTextSize } from '$src/types/text';

	interface AccordionProps {
		borderColor?: TColor;
		bgColor?: TColor;
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
		className: AccordionProps['className'] = '',
		color: AccordionProps['color'] = undefined,
		gap: AccordionProps['gap'] = undefined,
		radius: AccordionProps['radius'] = undefined,
		shadow: AccordionProps['shadow'] = undefined,
		spacing: AccordionProps['spacing'] = undefined,
		textSize: AccordionProps['textSize'] = undefined;
</script>

<div
	class="accordion {className}"
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
