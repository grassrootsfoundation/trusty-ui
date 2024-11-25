<script lang="ts">
	import Button from '$components/button/button.svelte';

	interface TabsSelectorProps {
		active: boolean;
		activeTab?: number;
		id: number;
	}

	export let active: TabsSelectorProps['active'] = false,
		activeTab: TabsSelectorProps['activeTab'] = 0,
		id: TabsSelectorProps['id'] = 0;
</script>

<Button
	appearance="secondary"
	class="tabs-selector {id === activeTab ? 'tabs-selector-active' : ''}"
	disabled={active}
	{id}
	role="tab"
	type="button"
	on:click={$$restProps.handleClick}
>
	<slot />
</Button>
