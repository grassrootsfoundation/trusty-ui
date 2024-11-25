<script lang="ts">
	import Icon from '@iconify/svelte';

	import Text from '$components/text/text.svelte';
	import UnstyledButton from '$components/button/unstyled-button.svelte';
	import When from '$components/when/when.svelte';

	import './alert.css';

	import type { IntentProp } from '../component';

	interface AlertProps {
		intent?: Extract<IntentProp, 'success' | 'error' | 'warning' | 'info'>;
		onDismiss?: () => void;
	}

	export let intent: AlertProps['intent'] = 'info',
		onDismiss: AlertProps['onDismiss'] = undefined;
</script>

<div class="alert {onDismiss && 'alert-dismissable'}" data-intent={intent}>
	<Text align="center" size="md">
		<slot />
	</Text>
	<When condition={Boolean(onDismiss)}>
		<UnstyledButton class="alert-close-button" on:click={onDismiss}>
			<Icon icon="mdi:close-circle-outline" />
		</UnstyledButton>
	</When>
</div>
