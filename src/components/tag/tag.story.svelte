<script lang="ts">
	import { tok } from '$utils/style';
	import Tag from './tag.svelte';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/Tag">
	<svelte:component this={Hst.Variant} title="Default Tag">
		<Tag>A default Tag</Tag>
		<Tag>A default Tag</Tag>
		<Tag>A default Tag</Tag>
	</svelte:component>
	<svelte:component this={Hst.Variant} title="Tag with color">
		<Tag bgcolor={tok('color', 'success')}>A default Tag</Tag>
		<Tag bgcolor={tok('color', 'warning')}>A default Tag</Tag>
		<Tag bgcolor={tok('color', 'error')} color={tok('color', 'white')}>A default Tag</Tag>
	</svelte:component>
</svelte:component>
