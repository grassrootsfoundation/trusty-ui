<script lang="ts">
	import { generateCustomProperties, inlineStyles } from '$utils/components';

	import './tag.css';

	import type { ResponsiveConfig } from '$utils/components';

	interface TagProps {
		color?: string;
		bgColor?: string;
	}

	export let color: TagProps['color'] = undefined,
		bgColor: TagProps['bgColor'] = undefined;

	const config: ResponsiveConfig = {
		bgColor: { name: 'tag-bg-color', category: 'color' },
		color: { name: 'tag-color', category: 'color' }
	};

	const mergedStyles = inlineStyles(
		generateCustomProperties(
			{
				bgColor,
				color
			},
			config
		)
	);
</script>

<div class="tag" style={mergedStyles} {...$$restProps}>
	<slot />
</div>
