<script lang="ts">
	import { slide } from 'svelte/transition';
	import Icon from '@iconify/svelte';

	import Button from '$components/button/unstyled-button.svelte';
	import Text from '$components/text/text.svelte';
	import Truncate from '$components/truncate/truncate.svelte';

	import './accordion.css';

	let open: boolean = false;
	let element: HTMLDivElement;

	const handleClick = () => (open = !open);
</script>

<div
	class="accordion-container {open ? 'accordion-intro-start' : 'accordion-outro-end'}"
	bind:this={element}
	{...$$restProps}
>
	<Button class="unstyled-button accordion-header" on:click={handleClick}>
		<Text class="accordion-text">
			<Truncate>
				<slot name="head" />
			</Truncate>
		</Text>

		<div class="accordion-icon">
			{#if open}
				<Icon icon="mdi:chevron-down" width={25} />
			{:else}
				<Icon icon="mdi:chevron-right" width={25} />
			{/if}
		</div>
	</Button>

	{#if open}
		<div class="accordion-details" transition:slide>
			<slot name="details" />
		</div>
	{/if}
</div>
