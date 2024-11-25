<script lang="ts">
	import type { TextAsProp } from '../component';

	interface RawHTMLProps {
		as?: TextAsProp;
		content?: unknown;
		className?: string;
	}

	export let as: RawHTMLProps['as'] = 'span',
		content: RawHTMLProps['content'] = undefined;

	let className: RawHTMLProps['className'] = $$restProps.class ?? ``;
	export { className as class };

	function html(node: { innerHTML: unknown }, content: unknown) {
		node.innerHTML = content;
		return {
			update(content: unknown) {
				node.innerHTML = content;
			}
		};
	}
</script>

<svelte:element this={as} class={className} use:html={content} {...$$restProps} />
