<script lang="ts">
	import './badge.css';

	import type { IntentProp, SizeProp } from '$components/component';
	import type { TColor } from '$types/color';
	import type { TRadius } from '$types/radius';
	import type { TShadow } from '$types/shadow';
	import type { TTextSize } from '$types/text';
	import clsx from 'clsx';

	interface BadgeProps {
		bgColor?: TColor;
		className?: string;
		color?: TColor;
		content?: HTMLSpanElement;
		intent?: Extract<IntentProp, 'success' | 'error' | 'warning' | 'info'>;
		onDismiss?: () => void;
		radius?: TRadius;
		shadow?: TShadow;
		shape?: 'square' | 'rounded' | 'circle';
		size?: Extract<SizeProp, 'sm' | 'md' | 'lg' | 'xl'>;
		textSize?: TTextSize;
		visible: boolean;
	}

	export let bgColor: BadgeProps['bgColor'] = undefined,
		size: BadgeProps['size'] = 'md',
		color: BadgeProps['color'] = undefined,
		intent: BadgeProps['intent'] = undefined,
		radius: BadgeProps['radius'] = undefined,
		content: BadgeProps['content'] = undefined,
		shadow: BadgeProps['shadow'] = undefined,
		shape: BadgeProps['shape'] = 'circle',
		textSize: BadgeProps['textSize'] = undefined;

	let className: BadgeProps['className'] = $$restProps.class;
	export { className as class };
</script>

<div
	class={clsx('badge', className)}
	data-intent={intent}
	data-shape={content?.innerText?.length === 1 ? 'circle' : shape}
	data-size={size}
	style:--alert-bg-color={bgColor}
	style:--alert-color={color}
	style:--alert-radius={radius}
	style:--alert-shadow={shadow}
	style:--alert-text-size={textSize}
	{...$$restProps}
>
	<span bind:this={content}>
		<slot />
	</span>
</div>
