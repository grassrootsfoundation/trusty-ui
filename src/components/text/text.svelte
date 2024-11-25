<script lang="ts">
	import { tok } from '$utils/style';
	import { definedProps } from '$utils/components';

	import './text.css';

	import type { IText } from '$src/types/text';
	import type { TColor } from '$src/types/color';

	interface TextProps extends IText {
		className?: string;
		color?: TColor;
		underline?: boolean;
	}

	function getPresetProps(preset: TextProps['preset']): Partial<TextProps> {
		switch (preset) {
			case 'caption':
				return {
					height: 'snug'
				};
			case 'display':
				return {
					height: 'tight',
					spacing: 'tight',
					weight: 'semibold'
				};
			default:
				return {};
		}
	}

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

	let className: TextProps['className'] = $$restProps.class ?? '';
	export { className as class };

	function getCustomProperties({
		align,
		color,
		height,
		preset,
		size,
		spacing,
		transform,
		weight
	}: TextProps) {
		const customProperties = {} as Record<string, string>;

		if (align) {
			customProperties['--text-align'] = align;
		}

		if (color) {
			customProperties['--text-color'] = tok('color', color);
		}

		if (height) {
			customProperties['--text-leading'] = tok('leading', height);
		}

		if (size) {
			if (preset === 'display') {
				customProperties['--text-font-size'] = tok('text-display', size);
			} else if (preset === 'prose') {
				customProperties['--text-font-size'] = tok('text-prose', size);
			} else {
				customProperties['--text-font-size'] = tok('text-caption', size);
			}
		}

		if (spacing) {
			customProperties['--text-tracking'] = tok('tracking', spacing);
		}

		if (transform) {
			customProperties['--text-transform'] = transform;
		}

		if (weight) {
			customProperties['--text-font-weight'] = tok('font-weight', weight);
		}
		return customProperties;
	}

	const mergedStyles = {
		...getCustomProperties({
			...getPresetProps(preset),
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
		})
	};
</script>

<svelte:element
	this={as}
	class="text {className}"
	data-underline={underline}
	style:--text-align={mergedStyles['--text-align']}
	style:--text-color={mergedStyles['--text-color']}
	style:--text-line-height={mergedStyles['--text-line-height']}
	style:--text-font-size={mergedStyles['--text-font-size']}
	style:--text-letter-spacing={mergedStyles['--text-letter-height']}
	style:--text-transform={mergedStyles['--text-transform']}
	style:--text-font-weight={mergedStyles['--text-font-weight']}
	style:--text-font-family={mergedStyles['--text-font-family']}
	{...$$restProps}
>
	<slot />
</svelte:element>
