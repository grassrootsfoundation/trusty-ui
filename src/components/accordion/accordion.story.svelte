<script lang="ts">
	import Accordion from './accordion.svelte';
	import AccordionItem from './accordion-item.svelte';
	import Text from '$components/text/text.svelte';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/Accordion">
	<svelte:component this={Hst.Variant} title="default">
		<Accordion
			borderColor="grey-300"
			bgColor="grey-50"
			gap="3"
			textSize="md"
			spacingBlock="3"
			spacingInline="3"
		>
			<AccordionItem>
				<span slot="head">Eesse cillum dolore eu fugiat nulla pariatur.</span>
				<div slot="details">
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</Text>
				</div>
			</AccordionItem>
			<AccordionItem>
				<span slot="head">Eesse cillum dolore eu fugiat nulla pariatur.</span>
				<div slot="details">
					<!-- <Text> -->
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
					nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
					velit esse cillum dolore eu fugiat nulla pariatur.
					<!-- </Text> -->
				</div>
			</AccordionItem>
		</Accordion>
	</svelte:component>
</svelte:component>
