<script lang="ts">
	import { tok } from '$utils/style';
	import Icon from '@iconify/svelte';
	import Divider from '../divider/divider.svelte';
	import GenericBlock from '../generic-block/generic-block.svelte';
	import Stack from '../stack/stack.svelte';
	import Text from '../text/text.svelte';
	import Button from './button.svelte';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/Button">
	<svelte:component this={Hst.Variant} title="Appearance">
		<Stack>
			<Text preset="display">Primary</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="primary">This is a button</Button>
				</GenericBlock>
				<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
					<Button appearance="primary" invert>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="solid" />

		<Stack>
			<Text preset="display">Secondary</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="secondary">This is a button</Button>
				</GenericBlock>
				<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
					<Button appearance="secondary" invert>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="solid" />

		<Stack>
			<Text preset="display">Tertiary</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="tertiary">This is a button</Button>
				</GenericBlock>
				<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
					<Button appearance="tertiary" invert>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="solid" />

		<Stack>
			<Text preset="display">Control</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="control">This is a button</Button>
				</GenericBlock>
				<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
					<Button appearance="control" invert>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="solid" />

		<Stack>
			<Text preset="display">Minimal</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="minimal">This is a button</Button>
				</GenericBlock>
				<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
					<Button appearance="minimal" invert>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="solid" />

		<Stack>
			<Text preset="display">Link</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="link" underline>This is a button</Button>
				</GenericBlock>
				<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
					<Button appearance="link" invert underline>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>
	</svelte:component>

	<svelte:component this={Hst.Variant} title="Busy">
		<Stack>
			<Text preset="display">Primary</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="primary" busy>This is a button</Button>
				</GenericBlock>
				<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
					<Button appearance="primary" busy invert>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="solid" />

		<Stack>
			<Text preset="display">Secondary</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="secondary" busy>This is a button</Button>
				</GenericBlock>
				<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
					<Button appearance="secondary" busy invert>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="solid" />

		<Stack>
			<Text preset="display">Tertiary</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="tertiary" busy>This is a button</Button>
				</GenericBlock>
				<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
					<Button appearance="tertiary" busy invert>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="solid" />

		<Stack>
			<Text preset="display">Control</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="control" busy>This is a button</Button>
				</GenericBlock>
				<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
					<Button appearance="control" busy invert>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="solid" />

		<Stack>
			<Text preset="display">Minimal</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="minimal" busy>This is a button</Button>
				</GenericBlock>
				<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
					<Button appearance="minimal" busy invert>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="solid" />

		<Stack>
			<Text preset="display">Link</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="link" busy>This is a button</Button>
				</GenericBlock>
				<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
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
				<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
					<Button appearance="primary" invert disabled>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="solid" />

		<Stack>
			<Text preset="display">Secondary</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="secondary" disabled>This is a button</Button>
				</GenericBlock>
				<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
					<Button appearance="secondary" invert disabled>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="solid" />

		<Stack>
			<Text preset="display">Tertiary</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="tertiary" disabled>This is a button</Button>
				</GenericBlock>
				<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
					<Button appearance="tertiary" invert disabled>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="solid" />

		<Stack>
			<Text preset="display">Control</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="control" disabled>This is a button</Button>
				</GenericBlock>
				<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
					<Button appearance="control" invert disabled>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="solid" />

		<Stack>
			<Text preset="display">Minimal</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="minimal" disabled>This is a button</Button>
				</GenericBlock>
				<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
					<Button appearance="minimal" invert disabled>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="solid" />

		<Stack>
			<Text preset="display">Link</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="link" disabled>This is a button</Button>
				</GenericBlock>
				<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
					<Button appearance="link" invert disabled>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>
	</svelte:component>

	<svelte:component this={Hst.Variant} title="Fill">
		<Stack>
			<Text preset="display">Primary</Text>
			<Stack direction="column">
				<GenericBlock appearance="card">
					<Button appearance="primary" fill>This is a button</Button>
				</GenericBlock>
				<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
					<Button appearance="primary" invert fill>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="solid" />

		<Stack>
			<Text preset="display">Secondary</Text>
			<Stack direction="column">
				<GenericBlock appearance="card">
					<Button appearance="secondary" fill>This is a button</Button>
				</GenericBlock>
				<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
					<Button appearance="secondary" invert fill>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="solid" />

		<Stack>
			<Text preset="display">Tertiary</Text>
			<Stack direction="column">
				<GenericBlock appearance="card">
					<Button appearance="tertiary" fill>This is a button</Button>
				</GenericBlock>
				<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
					<Button appearance="tertiary" invert fill>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="solid" />

		<Stack>
			<Text preset="display">Control</Text>
			<Stack direction="column">
				<GenericBlock appearance="card">
					<Button appearance="control" fill>This is a button</Button>
				</GenericBlock>
				<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
					<Button appearance="control" invert fill>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="solid" />

		<Stack>
			<Text preset="display">Minimal</Text>
			<Stack direction="column">
				<GenericBlock appearance="card">
					<Button appearance="minimal" fill>This is a button</Button>
				</GenericBlock>
				<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
					<Button appearance="minimal" invert fill>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="solid" />

		<Stack>
			<Text preset="display">Link</Text>
			<Stack direction="column">
				<GenericBlock appearance="card">
					<Button appearance="link" fill>This is a button</Button>
				</GenericBlock>
				<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
					<Button appearance="link" invert fill>This is an inverted button</Button>
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
			<Text preset="display">Primary inverted</Text>
			<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
				<Stack direction="row" align="center">
					<Button appearance="primary" size="xs" invert>X-Small</Button>
					<Button appearance="primary" size="sm" invert>Small</Button>
					<Button appearance="primary" size="md" invert>Medium</Button>
					<Button appearance="primary" size="lg" invert>Large</Button>
				</Stack>
			</GenericBlock>
			<Text preset="display">Primary inverted with Icon</Text>
			<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
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
			</GenericBlock>
		</Stack>

		<Divider appearance="solid" />

		<Stack>
			<Text preset="display">Secondary</Text>
			<Stack direction="row" align="center">
				<Button appearance="secondary" size="xs">X-Small</Button>
				<Button appearance="secondary" size="sm">Small</Button>
				<Button appearance="secondary" size="md">Medium</Button>
				<Button appearance="secondary" size="lg">Large</Button>
			</Stack>
			<Text preset="display">Secondary with Icon</Text>
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
			<Text preset="display">Secondary inverted</Text>
			<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
				<Stack direction="row" align="center">
					<Button appearance="secondary" size="xs" invert>X-Small</Button>
					<Button appearance="secondary" size="sm" invert>Small</Button>
					<Button appearance="secondary" size="md" invert>Medium</Button>
					<Button appearance="secondary" size="lg" invert>Large</Button>
				</Stack>
			</GenericBlock>
			<Text preset="display">Secondary inverted with Icon</Text>
			<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
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

		<Divider appearance="solid" />

		<Stack>
			<Text preset="display">Tertiary</Text>
			<Stack direction="row" align="center">
				<Button appearance="tertiary" size="xs">X-Small</Button>
				<Button appearance="tertiary" size="sm">Small</Button>
				<Button appearance="tertiary" size="md">Medium</Button>
				<Button appearance="tertiary" size="lg">Large</Button>
			</Stack>
			<Text preset="display">Tertiary with Icon</Text>
			<Stack direction="row" align="center">
				<Button appearance="tertiary" size="xs">
					X-Small
					<Icon icon="mdi:arrow-right-bold-circle-outline" />
				</Button>
				<Button appearance="tertiary" size="sm">
					Small
					<Icon icon="mdi:arrow-right-bold-circle-outline" />
				</Button>
				<Button appearance="tertiary" size="md">
					Medium
					<Icon icon="mdi:arrow-right-bold-circle-outline" />
				</Button>
				<Button appearance="tertiary" size="lg">
					Large
					<Icon icon="mdi:arrow-right-bold-circle-outline" />
				</Button>
			</Stack>
			<Text preset="display">Teriary inverted</Text>
			<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
				<Stack direction="row" align="center">
					<Button appearance="tertiary" size="xs" invert>X-Small</Button>
					<Button appearance="tertiary" size="sm" invert>Small</Button>
					<Button appearance="tertiary" size="md" invert>Medium</Button>
					<Button appearance="tertiary" size="lg" invert>Large</Button>
				</Stack>
			</GenericBlock>
			<Text preset="display">Teriary inverted with Icon</Text>
			<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
				<Stack direction="row" align="center">
					<Button appearance="tertiary" size="xs" invert>
						X-Small
						<Icon icon="mdi:arrow-right-bold-circle-outline" />
					</Button>
					<Button appearance="tertiary" size="sm" invert>
						Small
						<Icon icon="mdi:arrow-right-bold-circle-outline" />
					</Button>
					<Button appearance="tertiary" size="md" invert>
						Medium
						<Icon icon="mdi:arrow-right-bold-circle-outline" />
					</Button>
					<Button appearance="tertiary" size="lg" invert>
						Large
						<Icon icon="mdi:arrow-right-bold-circle-outline" />
					</Button>
				</Stack>
			</GenericBlock>
		</Stack>

		<Divider appearance="solid" />

		<Stack>
			<Text preset="display">Control</Text>
			<Stack direction="row" align="center">
				<Button appearance="control" size="xs">X-Small</Button>
				<Button appearance="control" size="sm">Small</Button>
				<Button appearance="control" size="md">Medium</Button>
				<Button appearance="control" size="lg">Large</Button>
			</Stack>
			<Text preset="display">Control with Icon</Text>
			<Stack direction="row" align="center">
				<Button appearance="control" size="xs">
					X-Small
					<Icon icon="mdi:arrow-right-bold-circle-outline" />
				</Button>
				<Button appearance="control" size="sm">
					Small
					<Icon icon="mdi:arrow-right-bold-circle-outline" />
				</Button>
				<Button appearance="control" size="md">
					Medium
					<Icon icon="mdi:arrow-right-bold-circle-outline" />
				</Button>
				<Button appearance="control" size="lg">
					Large
					<Icon icon="mdi:arrow-right-bold-circle-outline" />
				</Button>
			</Stack>
			<Text preset="display">Control inverted</Text>
			<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
				<Stack direction="row" align="center">
					<Button appearance="control" size="xs" invert>X-Small</Button>
					<Button appearance="control" size="sm" invert>Small</Button>
					<Button appearance="control" size="md" invert>Medium</Button>
					<Button appearance="control" size="lg" invert>Large</Button>
				</Stack>
			</GenericBlock>
			<Text preset="display">Control inverted with Icon</Text>
			<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
				<Stack direction="row" align="center">
					<Button appearance="control" size="xs" invert>
						X-Small
						<Icon icon="mdi:arrow-right-bold-circle-outline" />
					</Button>
					<Button appearance="control" size="sm" invert>
						Small
						<Icon icon="mdi:arrow-right-bold-circle-outline" />
					</Button>
					<Button appearance="control" size="md" invert>
						Medium
						<Icon icon="mdi:arrow-right-bold-circle-outline" />
					</Button>
					<Button appearance="control" size="lg" invert>
						Large
						<Icon icon="mdi:arrow-right-bold-circle-outline" />
					</Button>
				</Stack>
			</GenericBlock>
		</Stack>

		<Divider appearance="solid" />

		<Stack>
			<Text preset="display">Minimal</Text>
			<Stack direction="row" align="center">
				<Button appearance="minimal" size="xs">X-Small</Button>
				<Button appearance="minimal" size="sm">Small</Button>
				<Button appearance="minimal" size="md">Medium</Button>
				<Button appearance="minimal" size="lg">Large</Button>
			</Stack>
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

			<Text preset="display">Minimal inverted</Text>
			<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
				<Stack direction="row" align="center">
					<Button appearance="minimal" size="xs" invert>X-Small</Button>
					<Button appearance="minimal" size="sm" invert>Small</Button>
					<Button appearance="minimal" size="md" invert>Medium</Button>
					<Button appearance="minimal" size="lg" invert>Large</Button>
				</Stack>
			</GenericBlock>

			<Text preset="display">Minimal inverted with Icon</Text>
			<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
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

		<Divider appearance="solid" />

		<Stack>
			<Text preset="display">Link</Text>
			<Stack direction="row" align="center">
				<Button appearance="link" size="xs">X-Small</Button>
				<Button appearance="link" size="sm">Small</Button>
				<Button appearance="link" size="md">Medium</Button>
				<Button appearance="link" size="lg">Large</Button>
			</Stack>
			<Text preset="display">Link with Icon</Text>
			<Stack direction="row" align="center">
				<Button appearance="link" size="xs">
					X-Small
					<Icon icon="mdi:arrow-right-bold-circle-outline" />
				</Button>
				<Button appearance="link" size="sm">
					Small
					<Icon icon="mdi:arrow-right-bold-circle-outline" />
				</Button>
				<Button appearance="link" size="md">
					Medium
					<Icon icon="mdi:arrow-right-bold-circle-outline" />
				</Button>
				<Button appearance="link" size="lg">
					Large
					<Icon icon="mdi:arrow-right-bold-circle-outline" />
				</Button>
			</Stack>

			<Text preset="display">Link inverted</Text>
			<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
				<Stack direction="row" align="center">
					<Button appearance="link" size="xs" invert>X-Small</Button>
					<Button appearance="link" size="sm" invert>Small</Button>
					<Button appearance="link" size="md" invert>Medium</Button>
					<Button appearance="link" size="lg" invert>Large</Button>
				</Stack>
			</GenericBlock>
			<Text preset="display">Link inverted with Icon</Text>
			<GenericBlock bgcolor={tok('color', 'neutral-900')} appearance="card">
				<Stack direction="row" align="center">
					<Button appearance="link" size="xs" invert>
						X-Small
						<Icon icon="mdi:arrow-right-bold-circle-outline" />
					</Button>
					<Button appearance="link" size="sm" invert>
						Small
						<Icon icon="mdi:arrow-right-bold-circle-outline" />
					</Button>
					<Button appearance="link" size="md" invert>
						Medium
						<Icon icon="mdi:arrow-right-bold-circle-outline" />
					</Button>
					<Button appearance="link" size="lg" invert>
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
				<Button shape="circle">18</Button>
			</Stack>
		</Stack>

		<Divider appearance="solid" />

		<Stack>
			<Text preset="display">Square</Text>
			<Stack direction="row">
				<Button shape="square">MS</Button>
			</Stack>
		</Stack>
	</svelte:component>

	<svelte:component this={Hst.Variant} title="Variant">
		<Stack>
			<Text preset="display">Default</Text>
			<Stack direction="row">
				<Button variant="default">This is a button</Button>
			</Stack>
		</Stack>

		<Divider appearance="solid" />

		<Stack>
			<Text preset="display">Pill</Text>
			<Stack direction="row">
				<Button variant="pill">This is a button</Button>
			</Stack>
		</Stack>

		<Divider appearance="solid" />

		<Stack>
			<Text preset="display">Rounded</Text>
			<Stack direction="row">
				<Button variant="rounded">This is a button</Button>
			</Stack>
		</Stack>
	</svelte:component>
</svelte:component>
