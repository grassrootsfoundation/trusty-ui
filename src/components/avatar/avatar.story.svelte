<script lang="ts">
	import { tok } from '$utils/style';

	import Avatar from './avatar.svelte';

	import Stack from '$components/stack/stack.svelte';
	import Divider from '../divider/divider.svelte';

	export let Hst;

	const image = 'https://avatarfiles.alphacoders.com/364/364547.png';
</script>

<svelte:component this={Hst.Story} title="Component/Avatar">
	<svelte:component this={Hst.Variant} title="Initials">
		<Stack>
			<Stack direction="row" align="center">
				<Avatar
					name="Happy Go Lucky"
					bgColor={tok('color', 'teal-300')}
					color={tok('color', 'neutral-900')}
					size="sm"
				/>
				<Avatar
					name="Morgan"
					bgColor={tok('color', 'lime-300')}
					color={tok('color', 'neutral-900')}
					size="md"
				/>
				<Avatar
					name="Adrian Segura"
					bgColor={tok('color', 'deep-purple-200')}
					color={tok('color', 'deep-purple-900')}
					size="lg"
				/>
				<Avatar
					name="Adrian Segura"
					bgColor={tok('color', 'deep-orange-200')}
					color={tok('color', 'deep-neutral-900')}
					size="xl"
				/>
			</Stack>
			<Divider />
			<Stack direction="row" align="center">
				<Avatar
					name="Happy Go Lucky"
					shape="rounded"
					bgColor={tok('color', 'teal-300')}
					color={tok('color', 'neutral-900')}
					size="sm"
				/>
				<Avatar
					name="Morgan"
					bgColor={tok('color', 'lime-300')}
					color={tok('color', 'neutral-900')}
					shape="rounded"
					size="md"
				/>
				<Avatar
					name="Adrian Segura"
					bgColor={tok('color', 'deep-purple-200')}
					color={tok('color', 'deep-purple-900')}
					shape="rounded"
					size="lg"
				/>
				<Avatar
					name="Adrian Segura"
					bgColor={tok('color', 'deep-orange-200')}
					color={tok('color', 'deep-neutral-900')}
					shape="rounded"
					size="xl"
				/>
			</Stack>
			<Divider />
			<Stack direction="row" align="center">
				<Avatar
					name="Happy Go Lucky"
					shape="circle"
					bgColor={tok('color', 'teal-300')}
					color={tok('color', 'neutral-900')}
					size="sm"
				/>
				<Avatar
					name="Morgan"
					bgColor={tok('color', 'lime-300')}
					color={tok('color', 'neutral-900')}
					shape="circle"
					size="md"
				/>
				<Avatar
					name="Adrian Segura"
					bgColor={tok('color', 'deep-purple-200')}
					color={tok('color', 'deep-purple-900')}
					shape="circle"
					size="lg"
				/>
				<Avatar
					name="Adrian Segura"
					bgColor={tok('color', 'deep-orange-200')}
					color={tok('color', 'deep-neutral-900')}
					shape="circle"
					size="xl"
				/>
			</Stack>
			<Divider />
			<Stack direction="row" align="center">
				<Avatar url={image} size="sm" />
				<Avatar url={image} size="md" />
				<Avatar url={image} size="lg" />
				<Avatar url={image} size="xl" />
			</Stack>
			<Divider />
			<Stack direction="row" align="center">
				<Avatar url={image} shape="rounded" size="sm" />
				<Avatar url={image} shape="rounded" size="md" />
				<Avatar url={image} shape="rounded" size="lg" />
				<Avatar url={image} shape="rounded" size="xl" />
			</Stack>
			<Divider />
			<Stack direction="row" align="center">
				<Avatar url={image} shape="circle" size="sm" />
				<Avatar url={image} shape="circle" size="md" />
				<Avatar url={image} shape="circle" size="lg" />
				<Avatar url={image} shape="circle" size="xl" />
			</Stack>
		</Stack>
	</svelte:component>
</svelte:component>
