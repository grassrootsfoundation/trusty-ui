<script lang="ts">
	import clsx from 'clsx';

	import { generateCustomProperties, inlineStyles } from '$utils/components';
	import When from '$components/when/when.svelte';

	import './image.css';

	interface ImageProps {
		alt?: string;
		aspectRatio?: TAspectRatio;
		cover?: boolean;
		className?: boolean;
		fill?: boolean;
		radius?: TRadius;
		url?: string;
	}

	import type { ResponsiveConfig } from '$utils/components';
	import type { TAspectRatio } from '$src/types/aspect-ratio';
	import type { TRadius } from '$src/types/radius';

	export let alt: ImageProps['alt'],
		aspectRatio: ImageProps['aspectRatio'] = undefined,
		cover: ImageProps['cover'] = undefined,
		fill: ImageProps['fill'] = undefined,
		radius: ImageProps['radius'] = undefined,
		url: ImageProps['url'];

	let className: ImageProps['className'] = $$restProps.class;
	export { className as class };

	const config: ResponsiveConfig = {
		radius: { name: 'image-radius', category: 'radius' }
	};

	const mergedStyles = inlineStyles(
		generateCustomProperties(
			{
				radius
			},
			config
		)
	);
</script>

<When condition={Boolean(url?.length)}>
	<div
		class={clsx('image', className)}
		data-aspect-ratio={aspectRatio}
		data-cover={cover}
		data-fill={fill}
		data-title={alt}
		style={mergedStyles}
	>
		<img src={url} {alt} {...$$restProps} />
	</div>
</When>
