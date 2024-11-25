<script lang="ts">
	import MediaQuery from './media-query.svelte';
	import { tok } from '$utils/style';
	import { useBreakpoints } from '$src/hooks.client';

	import Heading from '$components/heading/heading.svelte';
	import Text from '$components/text/text.svelte';

	export let Hst;

	const { xs, md, lg } = useBreakpoints();
</script>

<svelte:component this={Hst.Story} title="Component/MediaQuery">
	<svelte:component this={Hst.Variant} title="default">
		<div style={`background-color: ${tok('color', 'neutral-100')}; padding: ${tok('space', 4)}`}>
			<Heading level="1" display="1">This heading is responsive.</Heading>
			<Text preset="caption" height="loose">
				You are viewing this content at
				<strong>
					<MediaQuery query={`${xs} and (max-width: 767px)`} let:matches>
						{#if matches}mobile{/if}
					</MediaQuery>
					<MediaQuery query={`${md} and (max-width: 1023px)`} let:matches>
						{#if matches}tablet{/if}
					</MediaQuery>
					<MediaQuery query={lg} let:matches>
						{#if matches}desktop{/if}
					</MediaQuery>
				</strong>
			</Text>
		</div>
	</svelte:component>
</svelte:component>
