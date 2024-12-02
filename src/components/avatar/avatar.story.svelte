<script lang="ts">
	import Avatar from './avatar.svelte';
	import Divider from '$components/divider/divider.svelte';
	import GenericBlock from '$components/generic-block/generic-block.svelte';
	import Heading from '$components/heading/heading.svelte';
	import List from '$components/list/list.svelte';
	import ListItem from '$components/list/list-item.svelte';
	import Stack from '$components/stack/stack.svelte';
	import Text from '$components/text/text.svelte';
	import Tag from '$components/tag/tag.svelte';

	export let Hst;

	const image = 'https://avatarfiles.alphacoders.com/364/364547.png';
</script>

<svelte:component this={Hst.Story} title="Component/Avatar">
	<svelte:component this={Hst.Variant} title="Initials">
		<Stack>
			<GenericBlock bgColor="neutral-50" spacingBlock="3" spacingInline="4" radius="xl">
				<Heading level="4" display="4">Avatar Square</Heading>
				<br />
				<Heading level="5" display="5">Properties</Heading>
				<List type="none" position="outside">
					<ListItem>
						<Text preset="display">bgColor</Text>
						<List type="disc">
							<ListItem>
								<Text as="p">
									Controls the <Tag><code>background-color</code></Tag> CSS property
								</Text>
							</ListItem>
							<ListItem>
								<Text as="p">Controls the background color</Text>
							</ListItem>
						</List>
					</ListItem>
					<ListItem><b>color</b>: pass in any color from the color spectrum</ListItem>
				</List>
			</GenericBlock>
			<Stack direction="row" align="center">
				<Avatar name="Happy Go Lucky" bgColor="teal-300" color="white" />
				<Avatar name="Morgan" bgColor="lime-300" color="neutral-900" size="10" />
				<Avatar name="Adrian Segura" bgColor="deep-purple-200" color="deep-purple-900" size="12" />
			</Stack>

			<Divider appearance="dashed" gap="8" />

			<Stack direction="row" align="center">
				<Avatar name="Happy Go Lucky" shape="rounded" bgColor="teal-300" color="neutral-900" />
				<Avatar name="Morgan" bgColor="lime-300" color="neutral-900" shape="rounded" size="10" />
				<Avatar
					name="Adrian Segura"
					bgColor="deep-purple-200"
					color="deep-purple-900"
					shape="rounded"
					size="12"
				/>
				<Avatar name="Adrian Segura" bgColor="deep-orange-200" shape="rounded" size="14" />
			</Stack>
			<Divider />
			<Stack direction="row" align="center">
				<Avatar name="Happy Go Lucky" shape="circle" bgColor="teal-300" color="neutral-900" />
				<Avatar name="Morgan" bgColor="lime-300" color="neutral-900" shape="circle" size="10" />
				<Avatar
					name="Adrian Segura"
					bgColor="deep-purple-200"
					color="deep-purple-900"
					shape="circle"
					size="12"
				/>
				<Avatar name="Adrian Segura" bgColor="deep-orange-200" shape="circle" size="14" />
			</Stack>
			<Divider />
			<Stack direction="row" align="center">
				<Avatar url={image} size="sm" />
				<Avatar url={image} size="10" />
				<Avatar url={image} size="12" />
				<Avatar url={image} size="14" />
			</Stack>
			<Divider />
			<Stack direction="row" align="center">
				<Avatar url={image} shape="rounded" size="sm" />
				<Avatar url={image} shape="rounded" size="10" />
				<Avatar url={image} shape="rounded" size="12" />
				<Avatar url={image} shape="rounded" size="14" />
			</Stack>
			<Divider />
			<Stack direction="row" align="center">
				<Avatar url={image} shape="circle" size="sm" />
				<Avatar url={image} shape="circle" size="10" />
				<Avatar url={image} shape="circle" size="12" />
				<Avatar url={image} shape="circle" size="14" />
			</Stack>
		</Stack>
	</svelte:component>
</svelte:component>
