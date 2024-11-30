<script lang="ts">
	import clsx from 'clsx';
	import { createInitials } from '$utils/create-initials';

	import Image from '$components/image/image.svelte';
	import Text from '$components/text/text.svelte';

	import './avatar.css';

	import type { TTextSize } from '$src/types/text';
	import type { TColor } from '$src/types/color';
	import type { SizeProp } from '$components/component';

	interface AvatarProps {
		name: string;
		bgColor?: TColor;
		className?: string;
		color?: TColor;
		fontSize?: TTextSize;
		shape?: 'square' | 'rounded' | 'circle';
		size?: Extract<SizeProp, 'sm' | 'md' | 'lg' | 'xl'>;
		url?: string;
	}

	export let bgColor: AvatarProps['bgColor'] = undefined,
		color: AvatarProps['color'] = undefined,
		fontSize: AvatarProps['fontSize'] = undefined,
		name: AvatarProps['name'] = 'Avatar',
		shape: AvatarProps['shape'] = undefined,
		size: AvatarProps['size'] = undefined,
		url: AvatarProps['url'] = undefined;

	let className: AvatarProps['className'] = $$restProps.class;
	export { className as class };
</script>

<div
	class={clsx('avatar', className)}
	data-shape={shape}
	data-size={size}
	style:--avatar-color={color}
	style:--avatar-bg-color={bgColor}
	style:--avatar-font-size={fontSize}
	{...$$restProps}
>
	{#if url}
		<Image alt={name} {url} fill={true} cover={true} />
	{:else}
		<Text as="p" weight="bold">{createInitials(name, 2)}</Text>
	{/if}
</div>
