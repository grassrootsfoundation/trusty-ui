<script lang="ts">
	import clsx from 'clsx';
	import { generateCustomProperties, inlineStyles } from '$utils/components';

	import './badge.css';

	import type { ResponsiveConfig } from '$utils/components';
	import type { TColor } from '$types/color';
	import type { TIntent } from '$src/types/intent';
	import type { TRadius } from '$types/radius';
	import type { TShadow } from '$types/shadow';
	import type { TTextSize } from '$types/text';
	import type { TSize } from '$src/types/size';

	interface BadgeProps {
		bgColor?: TColor;
		className?: string;
		color?: TColor;
		content?: HTMLSpanElement;
		intent?: Extract<TIntent, 'success' | 'error' | 'warning' | 'info'>;
		radius?: TRadius;
		shadow?: TShadow;
		size?: TSize;
		textSize?: TTextSize;
		visible: boolean;
	}

	export let bgColor: BadgeProps['bgColor'] = undefined,
		color: BadgeProps['color'] = undefined,
		intent: BadgeProps['intent'] = undefined,
		content: BadgeProps['content'] = undefined,
		radius: BadgeProps['radius'] = undefined,
		shadow: BadgeProps['shadow'] = undefined,
		size: BadgeProps['size'] = undefined,
		textSize: BadgeProps['textSize'] = undefined;

	let className: BadgeProps['className'] = $$restProps.class;
	export { className as class };

	const config: ResponsiveConfig = {
		bgColor: { name: 'badge-bg-color', category: 'color' },
		color: { name: 'badge-color', category: 'color' },
		radius: { name: 'badge-radius', category: 'radius' },
		shadow: { name: 'badge-shadow', category: 'shadow' },
		size: { name: 'badge-size', category: 'size' },
		textSize: { name: 'badge-text-size', category: 'text' }
	};

	const mergedStyles = inlineStyles(
		generateCustomProperties(
			{
				bgColor,
				color,
				radius,
				shadow,
				size,
				textSize
			},
			config
		)
	);
</script>

<div class={clsx('badge', className)} data-intent={intent} style={mergedStyles} {...$$restProps}>
	<span bind:this={content}>
		<slot />
	</span>
</div>
