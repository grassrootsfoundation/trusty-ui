/**
 * Converts a string toUpperCase() with splitting each string, taking the first letter of each string.
 * @returns string
 */
export function convertStringToInitials(str?: string) {
	return str
		? str
				.trim()
				.split(/\s+/)
				.map((part) => part[0].toUpperCase())
				.join('')
		: undefined;
}
