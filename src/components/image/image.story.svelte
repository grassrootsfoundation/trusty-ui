<script lang="ts">
	import { tok } from '$utils/style';
	import GenericBlock from '../generic-block/generic-block.svelte';
	import Image from './image.svelte';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/Image">
	<svelte:component this={Hst.Variant} title="Default Image">
		<Image
			alt="Always needs an alt"
			url="https://images.pexels.com/photos/28588325/pexels-photo-28588325/free-photo-of-close-up-of-lush-green-prickly-pear-cacti.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
		/>
	</svelte:component>
	<svelte:component this={Hst.Variant} title="Image with cover">
		<GenericBlock style={`max-width: ${tok('size', 35)};  max-height: ${tok('size', 35)};`}>
			<Image
				alt="Always needs an alt"
				cover
				url="https://images.pexels.com/photos/28588325/pexels-photo-28588325/free-photo-of-close-up-of-lush-green-prickly-pear-cacti.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
			/>
		</GenericBlock>
	</svelte:component>
	<svelte:component this={Hst.Variant} title="Image with fill">
		<GenericBlock style={`max-width: ${tok('size', 60)};`}>
			<Image
				alt="Always needs an alt"
				fill
				url="https://images.pexels.com/photos/28588325/pexels-photo-28588325/free-photo-of-close-up-of-lush-green-prickly-pear-cacti.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
			/>
		</GenericBlock>
	</svelte:component>
	<svelte:component this={Hst.Variant} title="Image with radius">
		<GenericBlock style={`max-width: ${tok('size', 60)};`}>
			<Image
				alt="Always needs an alt"
				cover
				radius={tok('radius', 'xl')}
				url="https://images.pexels.com/photos/28588325/pexels-photo-28588325/free-photo-of-close-up-of-lush-green-prickly-pear-cacti.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
			/>
		</GenericBlock>
	</svelte:component>
</svelte:component>
