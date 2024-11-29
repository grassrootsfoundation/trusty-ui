<script lang="ts">
	import Skeleton from './skeleton.svelte';

	import Avatar from '$components/avatar/avatar.svelte';
	import Text from '$components/text/text.svelte';
	import Stack from '$components/stack/stack.svelte';
	import { tok } from '$utils/style';

	export let Hst;
	let isLoading = true;
	// setTimeout(() => {
	// 	isLoading = false;
	// }, 3000);
</script>

<svelte:component this={Hst.Story} title="Component/Skeleton">
	<svelte:component this={Hst.Variant} title="default">
		<Stack>
			<Text>
				<Skeleton loading={isLoading} width="25%" />
				Text after the loading...
			</Text>

			<Text>
				<Skeleton loading={isLoading} />
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore
				et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
				ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptatevelit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
				in culpa qui officia deserunt mollit anim id est laborum.
			</Text>

			<Stack direction="row">
				<Avatar
					shape="circle"
					name="Morgan Segura"
					--avatar-width="100px"
					font-size={tok('text', '4xl')}
					--avatar-bgcolor={tok('color', 'green-300')}
					--avatar-color={tok('color', 'white')}
				/>
				<Stack gap={tok('size', 1)}>
					<Text preset="display">
						This is a title on display for all
						<Skeleton loading={isLoading} />
					</Text>
					<Text>
						<Skeleton loading={isLoading} />
						This is description text that is going t make everyone happy
					</Text>
				</Stack>
			</Stack>
		</Stack>
	</svelte:component>
</svelte:component>
