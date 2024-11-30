/**
 * Converts a CSS variable's value to an rgba string with specified transparency.
 * @param {string} varName - The name of the CSS variable (e.g., '--primary-color').
 * @param {number} transparency - The transparency value (0 to 1).
 * @returns {string | null} - The rgba string or null if the variable is not found.
 */
function rgba(varName: any, transparency?: number): string | null {
	// Get the computed style of the root element
	const rootStyles = getComputedStyle(document.documentElement);

	// Get the value of the CSS variable
	const cssValue = rootStyles.getPropertyValue(varName).trim();

	if (!cssValue) return null; // Return null if the variable doesn't exist

	// If the CSS value is already in rgba format
	if (cssValue.startsWith('rgb')) {
		const rgbaValue = cssValue.replace(')', `, ${transparency})`).replace('rgb', 'rgba');
		return rgbaValue;
	}

	// Convert hex to rgba
	if (cssValue.startsWith('#')) {
		const hex = cssValue.replace('#', '');
		const r = parseInt(hex.substring(0, 2), 16);
		const g = parseInt(hex.substring(2, 4), 16);
		const b = parseInt(hex.substring(4, 6), 16);
		return `rgba(${r}, ${g}, ${b}, ${transparency})`;
	}

	return null; // Unsupported format
}
