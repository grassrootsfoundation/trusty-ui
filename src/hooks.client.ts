import { MediaQuery } from '$utils/constants';

/**
 * Used as a convience method for accessing pre-defined
 * breakpoints. Uses `useMediaQuery` under the hood.
 */
export function useBreakpoints() {
	const xs = MediaQuery.xs;
	const sm = MediaQuery.sm;
	const md = MediaQuery.md;
	const lg = MediaQuery.lg;
	const xl = MediaQuery.xl;

	return {
		xs,
		sm,
		md,
		lg,
		xl
	};
}
