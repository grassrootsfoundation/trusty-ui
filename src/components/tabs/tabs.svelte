<script lang="ts">
	import When from '$components/when/when.svelte';

	import TabsContent from './_tabs-content.svelte';
	import TabsSelector from './_tabs-selector.svelte';

	import './tabs.css';

	interface TabsItemProps {
		id: number;
		label: string;
		content: unknown;
		contentType?: string | unknown;
	}
	interface TabsProps {
		activeTab?: number;
		direction?: 'vertical' | 'horizontal';
		tabItems: TabsItemProps[];
		invert?: boolean;
	}

	export let activeTab: TabsProps['activeTab'] = 0,
		direction: TabsProps['direction'] = 'horizontal',
		invert: TabsProps['invert'] = false,
		tabItems: TabsProps['tabItems'] = [];

	const handleClick = (tabValue: number) => () => {
		return (activeTab = tabValue);
	};
</script>

<div class="tabs" {...$$restProps}>
	<div class="tabs-head" role="tablist" data-direction={direction} data-invert={invert}>
		{#each tabItems as item}
			<TabsSelector
				active={Boolean(item.id === activeTab)}
				handleClick={handleClick(item.id)}
				{activeTab}
				id={item.id}
			>
				{item.label}
			</TabsSelector>
		{/each}
	</div>
	{#each tabItems as item}
		<When condition={item.id === activeTab}>
			<TabsContent id={item.id} {activeTab} content={item.content} />
		</When>
	{/each}
</div>
