<script lang="ts">
	import { convertStringToInitials } from '$utils/convert-string-to-initials';

	import Image from '$components/image/image.svelte';
	import Text from '$components/text/text.svelte';

	import './avatar.css';

	import type { TTextSize } from '$src/types/text';

	interface AvatarProps {
		name: string;
		bgcolor?: string;
		fontSize?: TTextSize;
		color?: string;
		shape?: 'square' | 'rounded' | 'circle';
		size?: string;
		url?: string;
	}

	export let color: AvatarProps['color'] = undefined,
		bgcolor: AvatarProps['bgcolor'] = undefined,
		fontSize: AvatarProps['fontSize'] = 'md',
		name: AvatarProps['name'] = 'Avatar',
		shape: AvatarProps['shape'] = undefined,
		size: AvatarProps['size'] = undefined,
		url: AvatarProps['url'] = undefined;
</script>

<div
	class="avatar"
	style:--avatar-color={color}
	style:--avatar-bgcolor={bgcolor}
	style:--avatar-font-size={fontSize}
	data-shape={shape}
	data-size={size}
	{...$$restProps}
>
	{#if url}
		<Image alt={name} {url} fill={true} cover={true} />
	{:else}
		<Text>{convertStringToInitials(name)}</Text>
	{/if}
</div>
