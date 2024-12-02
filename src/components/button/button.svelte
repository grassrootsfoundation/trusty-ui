<script lang="ts">
	import clsx from 'clsx';
	import { generateCustomProperties, inlineStyles } from '$utils/components';

	import Spinner from '$components/spinner/spinner.svelte';
	import When from '$components/when/when.svelte';

	import type { TColor } from '$src/types/color';
	import type { TShadow } from '$src/types/shadow';
	import type { TSize } from '$src/types/size';
	import type { TTextSize } from '$src/types/text';

	import './button.css';

	import type { ResponsiveConfig } from '$utils/components';
	import type { TRadius } from '$src/types/radius';

	interface ButtonProps {
		active?: boolean;
		appearance?: 'primary' | 'secondary' | 'tertiary' | 'control' | 'minimal' | 'link';
		busy?: boolean;
		bgColor?: TColor;
		color?: TColor;
		className?: string;
		fill?: boolean;
		disabled?: boolean;
		hidden?: boolean;
		invert?: boolean;
		radius?: TRadius;
		shadow?: TShadow;
		shape?: 'square' | 'circle';
		spacing?: TSize;
		size?: TSize;
		textSize?: TTextSize;
		underline?: boolean;
		variant?: 'pill' | 'rounded';
	}

	export let active: ButtonProps['active'] = undefined,
		appearance: ButtonProps['appearance'] = undefined,
		bgColor: ButtonProps['bgColor'] = undefined,
		busy: ButtonProps['busy'] = undefined,
		color: ButtonProps['color'] = undefined,
		fill: ButtonProps['fill'] = undefined,
		disabled: ButtonProps['disabled'] = undefined,
		hidden: ButtonProps['hidden'] = undefined,
		invert: ButtonProps['invert'] = undefined,
		radius: ButtonProps['radius'] = 'md',
		shape: ButtonProps['shape'] = undefined,
		shadow: ButtonProps['shadow'] = undefined,
		size: ButtonProps['size'] = 'md',
		spacing: ButtonProps['spacing'] = undefined,
		textSize: ButtonProps['textSize'] = undefined,
		underline: ButtonProps['underline'] = undefined,
		variant: ButtonProps['variant'] = undefined;

	let className: ButtonProps['className'] = $$restProps.class;
	export { className as class };

	const config: ResponsiveConfig = {
		bgColor: { name: 'button-bg-color', category: 'color' },
		color: { name: 'button-color', category: 'color' },
		radius: { name: 'button-radius', category: 'radius' },
		shadow: { name: 'button-shadow', category: 'shadow' },
		spacing: { name: 'button-spacing', category: 'size' },
		textSize: { name: 'button-text-size', category: 'text' }
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

	/**
	 * Determines the size of the spinner based on the size of
	 * the button.
	 */
	function getSpinnerSize(size?: ButtonProps['size']): ButtonProps['size'] {
		switch (size) {
			case 'xs':
			case 'sm':
				return 'xs';
			case 'md':
				return 'sm';
			case 'lg':
				return 'md';
			default:
				return 'md';
		}
	}
	/**
	 * Determines if the spinner should be inverted or not.
	 */
	function getSpinnerInvertedness(invert: ButtonProps['invert']): boolean {
		let inverted = invert;
		switch (appearance) {
			case 'primary':
				return inverted ? false : true;
			case 'secondary':
				return inverted ? true : false;
			case 'tertiary':
				return inverted ? true : false;
			case 'control':
				return inverted ? true : true;
			case 'minimal':
				return inverted ? true : false;
			case 'link':
				return inverted ? true : false;
			default:
				return false;
		}
	}
</script>

<When condition={$$restProps.href}>
	<a
		href={$$restProps.href}
		class={clsx('button', { className })}
		data-active={active}
		data-appearance={appearance}
		data-busy={busy}
		data-disabled={disabled}
		data-fill={fill}
		data-invert={invert}
		data-shape={shape}
		data-size={size}
		data-underline={underline}
		data-variant={variant}
		style={mergedStyles}
		{hidden}
		{...$$restProps}
	>
		<When condition={Boolean($$slots && $$slots.default)}>
			<span class="button-text">
				<slot />
			</span>
		</When>

		<When condition={Boolean(busy)}>
			<div class="button-spinner">
				<Spinner size={getSpinnerSize(size)} invert={getSpinnerInvertedness(invert)} />
			</div>
		</When>
	</a>
</When>
<When condition={!$$restProps.href}>
	<button
		class={clsx('button', { className })}
		on:click
		on:mouseover
		on:focus
		on:mouseenter
		on:mouseleave
		data-active={active}
		data-appearance={appearance}
		data-busy={busy}
		data-disabled={disabled}
		data-fill={fill}
		data-invert={invert}
		data-shape={shape}
		data-size={size}
		data-underline={underline}
		data-variant={variant}
		style={mergedStyles}
		{hidden}
		{...$$restProps}
	>
		<When condition={Boolean($$slots && $$slots.default)}>
			<span class="button-text">
				<slot />
			</span>
		</When>

		<When condition={Boolean(busy)}>
			<div class="button-spinner">
				<Spinner size={getSpinnerSize(size)} invert={getSpinnerInvertedness(invert)} />
			</div>
		</When>
	</button>
</When>
