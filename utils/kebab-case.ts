/**
 * Converts a string toLowerCase() with hyphens.
 * @returns string
 */
export function kebabCase(str: string) {
	return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
