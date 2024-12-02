<script lang="ts">
	import clsx from 'clsx';

	import './list.css';

	interface ListItemProps {
		className?: string;
	}

	let className: ListItemProps['className'] = $$restProps.class;
	export { className as class };
</script>

<li class={clsx('list-item', className)} {...$$restProps}>
	<slot />
</li>
