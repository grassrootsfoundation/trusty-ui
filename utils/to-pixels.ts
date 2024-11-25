/**
 * Converts a prop value to pixels.
 * @returns string
 */
export function toPx(value: unknown) {
	if (value == null || value === '') return undefined;
	return `${String(value).replace(/px$/, '')}px`;
}
