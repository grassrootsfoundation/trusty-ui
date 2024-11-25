<script lang="ts">
	import './tag.css';

	interface TagProps {
		color?: string;
		bgcolor?: string;
	}

	export let color: TagProps['color'] = undefined,
		bgcolor: TagProps['bgcolor'] = undefined;
</script>

<div class="tag" style:--tag-bg-color={bgcolor} style:--tag-text-color={color} {...$$restProps}>
	<slot />
</div>
