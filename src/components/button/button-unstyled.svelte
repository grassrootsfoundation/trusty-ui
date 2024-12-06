<script lang="ts">
	import './button-unstyled.css';

	interface UnstyledButtonProps {
		className?: string;
	}
	let className: UnstyledButtonProps['className'] = $$restProps.class;
	export { className as class };
</script>

<button
	class="button-unstyled {className}"
	on:click
	on:mouseover
	on:focus
	on:mouseenter
	on:mouseleave
	{...$$restProps}
>
	<slot />
</button>
