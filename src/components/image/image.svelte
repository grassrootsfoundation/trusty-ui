<script lang="ts" context="module">
	export interface ImageProps {
		alt?: string;
		cover?: boolean;
		fill?: boolean;
		radius?: RadiusProp | string;
		url?: string;
	}
</script>

<script lang="ts">
	import './image.css';

	import type { RadiusProp } from '$components/component';
	import When from '$components/when/when.svelte';

	export let alt: ImageProps['alt'],
		cover: ImageProps['cover'] = false,
		fill: ImageProps['fill'] = false,
		radius: ImageProps['radius'] = undefined,
		url: ImageProps['url'];
</script>

<When condition={Boolean(url?.length)}>
	<div
		class="image"
		data-cover={cover}
		data-fill={fill}
		style:--image-radius={radius}
		data-title={alt}
	>
		<img src={url} {alt} {...$$restProps} />
	</div>
</When>
