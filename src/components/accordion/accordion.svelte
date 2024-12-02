<script lang="ts">
	import clsx from 'clsx';
	import { generateCustomProperties, inlineStyles } from '$utils/components';

	import './accordion.css';

	import type { ResponsiveConfig } from '$utils/components';
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
		spacingBlock?: TSize;
		spacingInline?: TSize;
		textSize?: TTextSize;
	}

	export let bgColor: AccordionProps['bgColor'] = undefined,
		borderColor: AccordionProps['borderColor'] = undefined,
		color: AccordionProps['color'] = undefined,
		gap: AccordionProps['gap'] = undefined,
		radius: AccordionProps['radius'] = undefined,
		shadow: AccordionProps['shadow'] = undefined,
		spacingBlock: AccordionProps['spacingBlock'] = undefined,
		spacingInline: AccordionProps['spacingInline'] = undefined,
		textSize: AccordionProps['textSize'] = undefined;

	let className: AccordionProps['className'] = $$restProps.class;
	export { className as class };

	const config: ResponsiveConfig = {
		bgColor: { name: 'accordion-bg-color', category: 'color' },
		borderColor: { name: 'accordion-border-color', category: 'color' },
		color: { name: 'accordion-color', category: 'color' },
		gap: { name: 'accordion-gap', category: 'size' },
		radius: { name: 'accordion-radius', category: 'radius' },
		shadow: { name: 'accordion-shadow', category: 'shadow' },
		spacingBlock: { name: 'accordion-spacing-block', category: 'size' },
		spacingInline: { name: 'accordion-spacing-inline', category: 'size' },
		textSize: { name: 'accordion-text-size', category: 'text' }
	};

	const mergedStyles = inlineStyles(
		generateCustomProperties(
			{
				bgColor,
				borderColor,
				color,
				gap,
				radius,
				shadow,
				spacingBlock,
				spacingInline,
				textSize
			},
			config
		)
	);
</script>

<div class={clsx('accordion', className)} style={mergedStyles} {...$$restProps}>
	<slot />
</div>
