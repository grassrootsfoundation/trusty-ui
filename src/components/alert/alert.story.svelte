<script lang="ts">
	import Alert from './alert.svelte';
	import Divider from '$components/divider/divider.svelte';
	import { tok } from '$utils/style';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/Alert">
	<svelte:component this={Hst.Variant} title="default">
		<Alert
			intent="info"
			radius={tok('radius', 'md')}
			spacing={tok('size', '3')}
			visible={true}
			onDismiss={() => console.log('closed')}
		>
			An alert that displays Info intent and fades on toggle.
		</Alert>
		<Divider />
		<Alert
			intent="success"
			radius={tok('radius', 'md')}
			spacing={tok('size', '3')}
			visible={true}
			onDismiss={() => console.log('closed')}
		>
			You did it! Congratulations.
		</Alert>
		<Divider />
		<Alert
			intent="warning"
			radius={tok('radius', 'md')}
			spacing={tok('size', '3')}
			visible={true}
			onDismiss={() => console.log('closed')}
		>
			You have been warned.
		</Alert>
		<Divider />
		<Alert
			intent="error"
			radius={tok('radius', 'md')}
			spacing={tok('size', '3')}
			visible={true}
			onDismiss={() => console.log('closed')}
		>
			Oh no, what have you done!?
		</Alert>
		<Divider />
	</svelte:component>
</svelte:component>
