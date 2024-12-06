<script lang="ts">
	import Button from './button.svelte';
	import Divider from '$components/divider/divider.svelte';
	import GenericBlock from '$components/generic-block/generic-block.svelte';
	import Heading from '$components/heading/heading.svelte';
	import Icon from '@iconify/svelte';
	import Stack from '$components/stack/stack.svelte';
	import Text from '$components/text/text.svelte';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/Button">
	<svelte:component this={Hst.Variant} title="Appearance">
		<Stack>
			<Heading display="2" leading="loose">Button Appearance</Heading>

			<Text preset="display">Primary</Text>
			<Stack direction="row" gap="6">
				<Button appearance="primary">This is a button</Button>
				<Button appearance="primary" invert>This is an inverted button</Button>
			</Stack>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Secondary</Text>
			<Stack direction="row" gap="6">
				<GenericBlock appearance="card" bgColor="grey-900">
					<Button appearance="secondary">This is a button</Button>
				</GenericBlock>
				<GenericBlock appearance="card" bgColor="grey-900">
					<Button appearance="secondary" invert>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Minimal</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="minimal">This is a button</Button>
				</GenericBlock>
				<GenericBlock appearance="card" bgColor="grey-900">
					<Button appearance="minimal" invert>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Link</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="link" underline={true}>This is a button</Button>
				</GenericBlock>
				<GenericBlock appearance="card" bgColor="grey-900">
					<Button appearance="link" invert underline>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>
	</svelte:component>

	<svelte:component this={Hst.Variant} title="Busy">
		<Stack>
			<Text preset="display">Primary</Text>
			<Stack direction="row">
				<Button appearance="primary" busy>This is a button</Button>
				<Button appearance="primary" busy invert>This is an inverted button</Button>
			</Stack>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Secondary</Text>
			<Stack direction="row">
				<GenericBlock appearance="card" bgColor="grey-900">
					<Button appearance="secondary" busy>This is a button</Button>
				</GenericBlock>
				<GenericBlock appearance="card" bgColor="grey-900">
					<Button appearance="secondary" busy invert>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Minimal</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="minimal" busy>This is a button</Button>
				</GenericBlock>
				<GenericBlock appearance="card" bgColor="grey-900">
					<Button appearance="minimal" busy invert>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Link</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="link" busy>This is a button</Button>
				</GenericBlock>
				<GenericBlock appearance="card" bgColor="grey-900">
					<Button appearance="link" busy invert>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>
	</svelte:component>

	<svelte:component this={Hst.Variant} title="Disabled">
		<Stack>
			<Text preset="display">Primary</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="primary" disabled>This is a button</Button>
				</GenericBlock>
				<GenericBlock bgColor="grey-900" appearance="card">
					<Button appearance="primary" invert disabled>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Secondary</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="secondary" disabled>This is a button</Button>
				</GenericBlock>
				<GenericBlock appearance="card" bgColor="grey-900">
					<Button appearance="secondary" invert disabled>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Minimal</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="minimal" disabled>This is a button</Button>
				</GenericBlock>
				<GenericBlock appearance="card" bgColor="grey-900">
					<Button appearance="minimal" invert disabled>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Link</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="link" disabled underline>This is a button</Button>
				</GenericBlock>
				<GenericBlock appearance="card" bgColor="grey-900">
					<Button appearance="link" invert disabled underline>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>
	</svelte:component>

	<svelte:component this={Hst.Variant} title="Size">
		<Stack>
			<Text preset="display">Primary</Text>
			<Stack direction="row" align="center">
				<Button appearance="primary" size="xs">X-Small</Button>
				<Button appearance="primary" size="sm">Small</Button>
				<Button appearance="primary" size="md">Medium</Button>
				<Button appearance="primary" size="lg">Large</Button>
			</Stack>
			<Text preset="display">Primary with Icon</Text>
			<Stack direction="row" align="center">
				<Button appearance="primary" size="xs">
					X-Small
					<Icon icon="mdi:arrow-right-bold-circle-outline" />
				</Button>
				<Button appearance="primary" size="sm">
					Small
					<Icon icon="mdi:arrow-right-bold-circle-outline" />
				</Button>
				<Button appearance="primary" size="md">
					Medium
					<Icon icon="mdi:arrow-right-bold-circle-outline" />
				</Button>
				<Button appearance="primary" size="lg">
					Large
					<Icon icon="mdi:arrow-right-bold-circle-outline" />
				</Button>
			</Stack>

			<Divider appearance="dashed" gap="8" />

			<Text preset="display">Primary inverted</Text>

			<Stack direction="row" align="center">
				<Button appearance="primary" size="xs" invert>X-Small</Button>
				<Button appearance="primary" size="sm" invert>Small</Button>
				<Button appearance="primary" size="md" invert>Medium</Button>
				<Button appearance="primary" size="lg" invert>Large</Button>
			</Stack>

			<Divider appearance="dashed" gap="8" />

			<Text preset="display">Primary inverted with Icon</Text>

			<Stack direction="row" align="center">
				<Button appearance="primary" size="xs" invert>
					X-Small
					<Icon icon="mdi:arrow-right-bold-circle-outline" />
				</Button>
				<Button appearance="primary" size="sm" invert>
					Small
					<Icon icon="mdi:arrow-right-bold-circle-outline" />
				</Button>
				<Button appearance="primary" size="md" invert>
					Medium
					<Icon icon="mdi:arrow-right-bold-circle-outline" />
				</Button>
				<Button appearance="primary" size="lg" invert>
					Large
					<Icon icon="mdi:arrow-right-bold-circle-outline" />
				</Button>
			</Stack>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Secondary</Text>
			<GenericBlock bgColor="grey-900" appearance="card">
				<Stack direction="row" align="center">
					<Button appearance="secondary" size="xs">X-Small</Button>
					<Button appearance="secondary" size="sm">Small</Button>
					<Button appearance="secondary" size="md">Medium</Button>
					<Button appearance="secondary" size="lg">Large</Button>
				</Stack>
			</GenericBlock>

			<Divider appearance="dashed" gap="8" />

			<Text preset="display">Secondary with Icon</Text>
			<GenericBlock bgColor="grey-900" appearance="card">
				<Stack direction="row" align="center">
					<Button appearance="secondary" size="xs">
						X-Small
						<Icon icon="mdi:arrow-right-bold-circle-outline" />
					</Button>
					<Button appearance="secondary" size="sm">
						Small
						<Icon icon="mdi:arrow-right-bold-circle-outline" />
					</Button>
					<Button appearance="secondary" size="md">
						Medium
						<Icon icon="mdi:arrow-right-bold-circle-outline" />
					</Button>
					<Button appearance="secondary" size="lg">
						Large
						<Icon icon="mdi:arrow-right-bold-circle-outline" />
					</Button>
				</Stack>
			</GenericBlock>

			<Divider appearance="dashed" gap="8" />

			<Text preset="display">Secondary inverted</Text>
			<GenericBlock bgColor="grey-900" appearance="card">
				<Stack direction="row" align="center">
					<Button appearance="secondary" size="xs" invert>X-Small</Button>
					<Button appearance="secondary" size="sm" invert>Small</Button>
					<Button appearance="secondary" size="md" invert>Medium</Button>
					<Button appearance="secondary" size="lg" invert>Large</Button>
				</Stack>
			</GenericBlock>

			<Divider appearance="dashed" gap="8" />

			<Text preset="display">Secondary inverted with Icon</Text>

			<GenericBlock bgColor="grey-900" appearance="card">
				<Stack direction="row" align="center">
					<Button appearance="secondary" size="xs" invert>
						X-Small
						<Icon icon="mdi:arrow-right-bold-circle-outline" />
					</Button>
					<Button appearance="secondary" size="sm" invert>
						Small
						<Icon icon="mdi:arrow-right-bold-circle-outline" />
					</Button>
					<Button appearance="secondary" size="md" invert>
						Medium
						<Icon icon="mdi:arrow-right-bold-circle-outline" />
					</Button>
					<Button appearance="secondary" size="lg" invert>
						Large
						<Icon icon="mdi:arrow-right-bold-circle-outline" />
					</Button>
				</Stack>
			</GenericBlock>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Minimal</Text>
			<Stack direction="row" align="center">
				<Button appearance="minimal" size="xs">X-Small</Button>
				<Button appearance="minimal" size="sm">Small</Button>
				<Button appearance="minimal" size="md">Medium</Button>
				<Button appearance="minimal" size="lg">Large</Button>
			</Stack>

			<Divider appearance="dashed" gap="8" />

			<Text preset="display">Minimal with Icon</Text>
			<Stack direction="row" align="center">
				<Button appearance="minimal" size="xs">
					X-Small
					<Icon icon="mdi:arrow-right-bold-circle-outline" />
				</Button>
				<Button appearance="minimal" size="sm">
					Small
					<Icon icon="mdi:arrow-right-bold-circle-outline" />
				</Button>
				<Button appearance="minimal" size="md">
					Medium
					<Icon icon="mdi:arrow-right-bold-circle-outline" />
				</Button>
				<Button appearance="minimal" size="lg">
					Large
					<Icon icon="mdi:arrow-right-bold-circle-outline" />
				</Button>
			</Stack>

			<Divider appearance="dashed" gap="8" />

			<Text preset="display">Minimal inverted</Text>
			<GenericBlock bgColor="grey-900" appearance="card">
				<Stack direction="row" align="center">
					<Button appearance="minimal" size="xs" invert>X-Small</Button>
					<Button appearance="minimal" size="sm" invert>Small</Button>
					<Button appearance="minimal" size="md" invert>Medium</Button>
					<Button appearance="minimal" size="lg" invert>Large</Button>
				</Stack>
			</GenericBlock>

			<Divider appearance="dashed" gap="8" />

			<Text preset="display">Minimal inverted with Icon</Text>
			<GenericBlock bgColor="grey-900" appearance="card">
				<Stack direction="row" align="center">
					<Button appearance="minimal" size="xs" invert>
						X-Small
						<Icon icon="mdi:arrow-right-bold-circle-outline" />
					</Button>
					<Button appearance="minimal" size="sm" invert>
						Small
						<Icon icon="mdi:arrow-right-bold-circle-outline" />
					</Button>
					<Button appearance="minimal" size="md" invert>
						Medium
						<Icon icon="mdi:arrow-right-bold-circle-outline" />
					</Button>
					<Button appearance="minimal" size="lg" invert>
						Large
						<Icon icon="mdi:arrow-right-bold-circle-outline" />
					</Button>
				</Stack>
			</GenericBlock>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Link</Text>
			<Stack direction="row" align="center">
				<Button appearance="link" size="xs" underline>X-Small</Button>
				<Button appearance="link" size="sm" underline>Small</Button>
				<Button appearance="link" size="md" underline>Medium</Button>
				<Button appearance="link" size="lg" underline>Large</Button>
			</Stack>

			<Divider appearance="dashed" gap="8" />

			<Text preset="display">Link with Icon</Text>
			<Stack direction="row" align="center">
				<Button appearance="link" underline size="xs">
					X-Small
					<Icon icon="mdi:arrow-right-bold-circle-outline" />
				</Button>
				<Button appearance="link" underline size="sm">
					Small
					<Icon icon="mdi:arrow-right-bold-circle-outline" />
				</Button>
				<Button appearance="link" underline size="md">
					Medium
					<Icon icon="mdi:arrow-right-bold-circle-outline" />
				</Button>
				<Button appearance="link" size="lg" underline>
					Large
					<Icon icon="mdi:arrow-right-bold-circle-outline" />
				</Button>
			</Stack>

			<Divider appearance="dashed" gap="8" />

			<Text preset="display">Link inverted</Text>
			<GenericBlock bgColor="grey-900" appearance="card">
				<Stack direction="row" align="center">
					<Button appearance="link" size="xs" invert underline>X-Small</Button>
					<Button appearance="link" size="sm" invert underline>Small</Button>
					<Button appearance="link" size="md" invert underline>Medium</Button>
					<Button appearance="link" size="lg" invert underline>Large</Button>
				</Stack>
			</GenericBlock>

			<Divider appearance="dashed" gap="8" />

			<Text preset="display">Link inverted with Icon</Text>
			<GenericBlock bgColor="grey-900" appearance="card">
				<Stack direction="row" align="center">
					<Button appearance="link" size="xs" invert underline>
						X-Small
						<Icon icon="mdi:arrow-right-bold-circle-outline" />
					</Button>
					<Button appearance="link" size="sm" invert underline>
						Small
						<Icon icon="mdi:arrow-right-bold-circle-outline" />
					</Button>
					<Button appearance="link" size="md" invert underline>
						Medium
						<Icon icon="mdi:arrow-right-bold-circle-outline" />
					</Button>
					<Button appearance="link" size="lg" invert underline>
						Large
						<Icon icon="mdi:arrow-right-bold-circle-outline" />
					</Button>
				</Stack>
			</GenericBlock>
		</Stack>
	</svelte:component>

	<svelte:component this={Hst.Variant} title="Shape">
		<Stack>
			<Text preset="display">Circle</Text>
			<Stack direction="row">
				<Button shape="circle">
					<Icon icon="mdi:instagram" width={20} />
				</Button>
			</Stack>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Square</Text>
			<Stack direction="row">
				<Button shape="square" bgColor="light-blue-400">
					<Icon icon="mdi:twitter" width={20} />
				</Button>
			</Stack>
		</Stack>
	</svelte:component>

	<svelte:component this={Hst.Variant} title="Variant">
		<Stack>
			<Text preset="display">Default</Text>
			<Stack direction="row">
				<Button>This is a button</Button>
			</Stack>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Pill</Text>
			<Stack direction="row">
				<Button variant="pill" invert>This is a button</Button>
			</Stack>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Rounded</Text>
			<Stack direction="row">
				<Button variant="rounded" invert appearance="primary">This is a button</Button>
			</Stack>
		</Stack>
	</svelte:component>
</svelte:component>
