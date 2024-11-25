<script lang="ts" context="module">
	export interface GenericBlockProps {
		appearance?: 'card' | 'tile';
		bgcolor?: string;
		radius?: RadiusProp | string;
	}
</script>

<script lang="ts">
	import './generic-block.css';

	import type { RadiusProp } from '$components/component';

	export let appearance: GenericBlockProps['appearance'] = undefined,
		bgcolor: GenericBlockProps['bgcolor'] = undefined,
		radius: GenericBlockProps['radius'] = undefined;
</script>

<div
	class="generic-block"
	style:--bg-color={bgcolor}
	style:--radius={radius}
	data-appearance={appearance}
	{...$$restProps}
>
	<slot />
</div>
