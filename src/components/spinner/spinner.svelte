<script lang="ts">
	import './spinner.css';

	import type { TSizeLabel } from '$src/types/size';

	interface SpinnerProps {
		invert?: boolean;
		size?: TSizeLabel;
	}

	export let invert: SpinnerProps['invert'] = undefined,
		size: SpinnerProps['size'] = 'sm';
</script>

<div class="spinner" data-invert={invert} data-size={size} role="progressbar">
	<div />
</div>
