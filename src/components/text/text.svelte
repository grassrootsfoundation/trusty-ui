<script lang="ts">
	import clsx from 'clsx';
	import { tok } from '$utils/style';
	import { definedProps, inlineStyles } from '$utils/components';

	import './text.css';

	import type {
		TFontFamily,
		TFontWeight,
		TLeading,
		TTextAlign,
		TTextPreset,
		TTextSize,
		TTracking,
		TTransform
	} from '$src/types/text';
	import type { TColor } from '$src/types/color';

	interface TextProps {
		as?: keyof HTMLElementTagNameMap;
		align?: TTextAlign;
		className?: string;
		color?: TColor;
		family?: TFontFamily;
		height?: TLeading;
		preset?: TTextPreset;
		size?: TTextSize;
		spacing?: TTracking;
		underline?: boolean;
		transform?: TTransform;
		weight?: TFontWeight;
	}

	const PRESET_PROPS: Record<string, Partial<TextProps>> = {
		caption: { height: 'snug' },
		display: { height: 'tight', spacing: 'tight', weight: 'semibold' },
		default: {}
	};

	export let align: TextProps['align'] = undefined,
		as: TextProps['as'] = 'div',
		color: TextProps['color'] = undefined,
		height: TextProps['height'] = undefined,
		family: TextProps['family'] = undefined,
		preset: TextProps['preset'] = undefined,
		size: TextProps['size'] = undefined,
		spacing: TextProps['spacing'] = undefined,
		underline: TextProps['underline'] = undefined,
		transform: TextProps['transform'] = undefined,
		weight: TextProps['weight'] = undefined;

	let className: TextProps['className'] = $$restProps.class;
	export { className as class };

	function generateCustomProperties(props: TextProps) {
		const { align, color, height, preset, size, spacing, transform, weight } = props;
		const vars: Record<string, string> = {};

		// Add tokens for each style property
		if (align) vars['--text-align'] = align;
		if (color) vars['--text-color'] = tok('color', color);
		if (height) vars['--text-leading'] = tok('leading', height);

		if (size) {
			const sizeKey =
				preset === 'display' ? 'text-display' : preset === 'prose' ? 'text-prose' : 'text-caption';
			vars['--text-font-size'] = tok(sizeKey, size);
		}

		if (spacing) vars['--text-tracking'] = tok('tracking', spacing);
		if (transform) vars['--text-transform'] = transform;
		if (weight) vars['--text-font-weight'] = tok('font-weight', weight);

		return vars;
	}

	const mergedStyles = generateCustomProperties({
		...PRESET_PROPS[preset || 'default'], // Apply preset defaults
		...definedProps({
			align,
			color,
			family,
			height,
			preset,
			size,
			spacing,
			transform,
			weight
		})
	});
</script>

<svelte:element
	this={as}
	class={clsx('text', className)}
	data-underline={underline}
	style={inlineStyles(mergedStyles)}
	{...$$restProps}
>
	<slot />
</svelte:element>
