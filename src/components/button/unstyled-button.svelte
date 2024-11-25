<script lang="ts">
	import './unstyled-button.css';

	interface UnstyledButtonProps {
		className?: string;
	}
	let className: UnstyledButtonProps['className'] = $$restProps.class;
	export { className as class };
</script>

<button
	class="unstyled-button {className}"
	on:click
	on:mouseover
	on:focus
	on:mouseenter
	on:mouseleave
	{...$$restProps}
>
	<slot />
</button>
