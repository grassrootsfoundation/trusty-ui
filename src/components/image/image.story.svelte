<script lang="ts">
	import { tok } from '$utils/style';

	import GenericBlock from '$components/generic-block/generic-block.svelte';
	import Grid from '$components/grid/grid.svelte';
	import Image from './image.svelte';
	import GridCell from '$components/grid/grid-cell.svelte';

	export let Hst;

	const image =
		'https://images.pexels.com/photos/28588325/pexels-photo-28588325/free-photo-of-close-up-of-lush-green-prickly-pear-cacti.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
</script>

<svelte:component this={Hst.Story} title="Component/Image">
	<svelte:component this={Hst.Variant} title="Default Image">
		<Image alt="Always needs an alt" url={image} />
	</svelte:component>
	<svelte:component this={Hst.Variant} title="Cover">
		<GenericBlock style={`max-width: ${tok('size', 35)};  max-height: ${tok('size', 35)};`}>
			<Image alt="Always needs an alt" cover url={image} />
		</GenericBlock>
	</svelte:component>
	<svelte:component this={Hst.Variant} title="Fill">
		<GenericBlock style={`max-width: ${tok('size', 60)};`}>
			<Image alt="Always needs an alt" fill url={image} />
		</GenericBlock>
	</svelte:component>
	<svelte:component this={Hst.Variant} title="Radius">
		<Grid
			cols={{
				default: 3
			}}
			gap={{
				default: '4'
			}}
		>
			<Image alt="Always needs an alt" cover url={image} aspectRatio="square" />
			<Image alt="Always needs an alt" cover radius="xs" url={image} aspectRatio="square" />
			<Image alt="Always needs an alt" cover radius="sm" url={image} aspectRatio="square" />
			<Image alt="Always needs an alt" cover radius="md" url={image} aspectRatio="square" />
			<Image alt="Always needs an alt" cover radius="lg" url={image} aspectRatio="square" />
			<Image alt="Always needs an alt" cover radius="xl" url={image} aspectRatio="square" />
			<Image alt="Always needs an alt" cover radius="2xl" url={image} aspectRatio="square" />
			<Image alt="Always needs an alt" cover radius="3xl" url={image} aspectRatio="square" />
			<Image alt="Always needs an alt" cover radius="full" url={image} aspectRatio="square" />
		</Grid>
	</svelte:component>
	<svelte:component this={Hst.Variant} title="Aspect Ratio">
		<Grid cols={{ default: 12 }}>
			<GridCell colStart={{ default: tok('col-start', 1) }} colEnd={{ default: tok('col-end', 5) }}>
				<Image alt="Always needs an alt" cover radius="xl" url={image} aspectRatio="square" />
			</GridCell>
			<GridCell
				colStart={{ default: tok('col-start', 5) }}
				colEnd={{ default: tok('col-end', 13) }}
			>
				<Image alt="Always needs an alt" cover radius="xl" url={image} aspectRatio="video" />
			</GridCell>
		</Grid>
	</svelte:component>
</svelte:component>
