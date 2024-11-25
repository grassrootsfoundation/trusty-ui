<script lang="ts">
	import type { IntentProp, SizeProp } from '../component';
	import './badge.css';

	interface BadgeProps {
		content?: HTMLSpanElement;
		intent: Extract<IntentProp, 'notification' | 'neutral' | 'success'>;
		size: Extract<SizeProp, 'sm' | 'md' | 'lg'>;
	}

	export let intent: BadgeProps['intent'] = 'notification',
		size: BadgeProps['size'] = 'md';

	let content: BadgeProps['content'];
</script>

<div
	class="badge"
	data-intent={intent}
	data-size={size}
	data-shape={content?.innerText?.length === 1 ? 'circle' : undefined}
	{...$$restProps}
>
	<span bind:this={content}>
		<slot />
	</span>
</div>
