<script lang="ts">
	import Text from '$components/text/text.svelte';

	import './list.css';

	let className: string = $$restProps.class;
	export { className as class };
</script>

<li class="list-item {className ?? ''}" {...$$restProps}>
	<Text as="p">
		<slot />
	</Text>
</li>
