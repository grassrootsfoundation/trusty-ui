<script lang="ts">
	import clsx from 'clsx';
	import { fade } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import { generateCustomProperties, inlineStyles } from '$utils/components';

	import Text from '$components/text/text.svelte';
	import UnstyledButton from '$components/button/unstyled-button.svelte';
	import When from '$components/when/when.svelte';

	import './alert.css';

	import type { ResponsiveConfig } from '$utils/components';
	import type { TColor } from '$types/color';
	import type { TIntent } from '$types/intent';
	import type { TRadius } from '$types/radius';
	import type { TShadow } from '$types/shadow';
	import type { TSize } from '$types/size';
	import type { TTextSize } from '$types/text';

	interface AlertProps {
		bgColor?: TColor;
		className?: string;
		color?: TColor;
		intent?: Extract<TIntent, 'success' | 'error' | 'warning' | 'info'>;
		onDismiss?: () => void;
		radius?: TRadius;
		shadow?: TShadow;
		spacing?: TSize;
		textSize?: TTextSize;
		visible: boolean;
	}

	export let bgColor: AlertProps['bgColor'] = undefined,
		color: AlertProps['color'] = undefined,
		intent: AlertProps['intent'] = undefined,
		radius: AlertProps['radius'] = undefined,
		shadow: AlertProps['shadow'] = undefined,
		spacing: AlertProps['spacing'] = undefined,
		textSize: AlertProps['textSize'] = undefined,
		onDismiss: AlertProps['onDismiss'] = undefined,
		visible: AlertProps['visible'] = false;

	let className: AlertProps['className'] = $$restProps.class;
	export { className as class };

	const config: ResponsiveConfig = {
		bgColor: { name: 'alert-bg-color', category: 'color' },
		color: { name: 'alert-color', category: 'color' },
		radius: { name: 'alert-radius', category: 'radius' },
		shadow: { name: 'alert-shadow', category: 'shadow' },
		spacing: { name: 'alert-spacing', category: 'size' },
		textSize: { name: 'alert-text-size', category: 'text' }
	};

	const mergedStyles = inlineStyles(
		generateCustomProperties(
			{
				bgColor,
				color,
				radius,
				shadow,
				spacing,
				textSize
			},
			config
		)
	);

	function handleClick() {
		visible = !visible;
		onDismiss !== undefined && onDismiss();
	}
</script>

<When condition={Boolean(visible)}>
	<div
		class={clsx('alert', onDismiss && 'alert-dismissable', className)}
		data-intent={intent}
		style={mergedStyles}
		transition:fade
	>
		<Text as="p" weight="medium">
			<slot />
		</Text>
		<When condition={Boolean(onDismiss)}>
			<UnstyledButton class="alert-close-button" on:click={handleClick}>
				<Icon icon="mdi:close-circle-outline" />
			</UnstyledButton>
		</When>
	</div>
</When>
