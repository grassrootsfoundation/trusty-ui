<script lang="ts">
	import Accordion from './accordion.svelte';
	import AccordionItem from './accordion-item.svelte';

	import Text from '$components/text/text.svelte';
	import { tok } from '$utils/style';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/Accordion">
	<svelte:component this={Hst.Variant} title="default">
		<Accordion
			borderColor={tok('color', 'red-400')}
			bgColor={tok('color', 'red-300')}
			color={tok('color', 'neutral-900')}
			textSize={tok('text', '3lg')}
			gap={tok('size', 4)}
			radius={tok('radius', 'md')}
			spacing={tok('size', 2)}
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
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</Text>
				</div>
			</AccordionItem>
		</Accordion>
	</svelte:component>
</svelte:component>
