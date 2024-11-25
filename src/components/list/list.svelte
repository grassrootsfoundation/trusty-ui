<script lang="ts">
	import './list.css';

	interface ListProps {
		type?: 'number' | 'bullet' | 'check';
	}

	export let type: ListProps['type'] = 'bullet';

	let className: string = $$restProps.class;
	export { className as class };

	const as = type === 'number' ? 'ol' : 'ul';
</script>

<svelte:element this={as} class="list {className}" {...$$restProps}>
	<slot />
</svelte:element>
