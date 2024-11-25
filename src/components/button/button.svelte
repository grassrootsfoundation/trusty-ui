<script lang="ts">
	import type { SizeProp } from '$components/component';

	import Spinner from '$components/spinner/spinner.svelte';
	import When from '$components/when/when.svelte';

	import './button.css';

	interface ButtonProps {
		active?: boolean;
		appearance?: 'primary' | 'secondary' | 'tertiary' | 'control' | 'minimal' | 'link';
		busy?: boolean;
		className?: string;
		fill?: boolean;
		disabled?: boolean;
		hidden?: boolean;
		invert?: boolean;
		shape?: 'square' | 'circle';
		size?: Extract<SizeProp, 'xs' | 'sm' | 'md' | 'lg'> | undefined;
		underline?: boolean;
		variant?: 'default' | 'pill' | 'rounded';
	}

	export let active: ButtonProps['active'] = false,
		appearance: ButtonProps['appearance'] = undefined,
		busy: ButtonProps['busy'] = false,
		fill: ButtonProps['fill'] = false,
		disabled: ButtonProps['disabled'] = false,
		hidden: ButtonProps['hidden'] = false,
		invert: ButtonProps['invert'] = false,
		shape: ButtonProps['shape'] = undefined,
		size: ButtonProps['size'] = 'md',
		underline: ButtonProps['underline'] = false,
		variant: ButtonProps['variant'] = undefined;

	let className: ButtonProps['className'] = $$restProps.class;
	export { className as class };

	/**
	 * Determines the size of the spinner based on the size of
	 * the button.
	 */
	function getSpinnerSize(size?: ButtonProps['size']): ButtonProps['size'] {
		switch (size) {
			case 'xs':
			case 'sm':
				return 'xs';
			case 'md':
				return 'sm';
			case 'lg':
				return 'md';
			default:
				return 'md';
		}
	}
	/**
	 * Determines if the spinner should be inverted or not.
	 */
	function getSpinnerInvertedness(invert: ButtonProps['invert']): boolean {
		let inverted = invert;
		switch (appearance) {
			case 'primary':
				return inverted ? false : true;
			case 'secondary':
				return inverted ? true : false;
			case 'tertiary':
				return inverted ? true : false;
			case 'control':
				return inverted ? true : true;
			case 'minimal':
				return inverted ? true : false;
			case 'link':
				return inverted ? true : false;
			default:
				return false;
		}
	}
</script>

<When condition={$$restProps.href}>
	<a
		href={$$restProps.href}
		class="button {className}"
		data-appearance={appearance}
		data-busy={busy}
		data-fill={fill}
		data-invert={invert}
		data-shape={shape}
		data-size={size}
		data-underline={underline}
		data-variant={variant}
		{hidden}
		{...$$restProps}
	>
		<When condition={Boolean($$slots && $$slots.default)}>
			<span class="button-text">
				<slot />
			</span>
		</When>

		<When condition={Boolean(busy)}>
			<div class="button-spinner">
				<Spinner size={getSpinnerSize(size)} invert={getSpinnerInvertedness(invert)} />
			</div>
		</When>
	</a>
</When>
<When condition={!$$restProps.href}>
	<button
		class="button {className}"
		on:click
		on:mouseover
		on:focus
		on:mouseenter
		on:mouseleave
		data-appearance={appearance}
		data-busy={busy}
		data-fill={fill}
		data-invert={invert}
		data-shape={shape}
		data-size={size}
		data-underline={underline}
		data-variant={variant}
		disabled={disabled || busy}
		aria-pressed={Boolean(active)}
		{hidden}
		{...$$restProps}
	>
		<When condition={Boolean($$slots && $$slots.default)}>
			<span class="button-text">
				<slot />
			</span>
		</When>

		<When condition={Boolean(busy)}>
			<div class="button-spinner">
				<Spinner size={getSpinnerSize(size)} invert={getSpinnerInvertedness(invert)} />
			</div>
		</When>
	</button>
</When>
