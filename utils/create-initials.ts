/**
 * Converts a string toUpperCase() with splitting each string, taking the first letter of each string.
 * @returns string
 */
export function createInitials(str?: string, limit?: number) {
	return str
		? str
				.trim()
				.split(/\s+/)
				.map((part) => part[0].toUpperCase())
				.join('')
				.slice(0, limit)
		: undefined;
}
