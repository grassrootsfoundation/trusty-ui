<script lang="ts">
	import type { SizeProp } from '../component';

	import './spinner.css';

	interface SpinnerProps {
		invert?: boolean;
		size?: Extract<SizeProp, 'xs' | 'sm' | 'md' | 'lg'>;
	}

	export let invert: SpinnerProps['invert'] = false,
		size: SpinnerProps['size'] = undefined;
</script>

<div class="spinner" data-invert={invert} data-size={size} role="progressbar">
	<div />
</div>
