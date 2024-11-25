export type DesignTokenCategory =
	| 'bgcolor'
	| 'color'
	| 'duration'
	| 'ease'
	| 'text'
	| 'text-display'
	| 'text-caption'
	| 'text-prose'
	| 'font-weight'
	| 'leading'
	| 'tracking'
	| 'opacity'
	| 'radius'
	| 'shadow'
	| 'size'
	| 'space'
	| 'z';

/**
 * Builds a CSS Custom property name for a given token
 * category and value.
 */
export function tok(category: DesignTokenCategory, value: string | number) {
	return `var(--${category}-${value})`;
}
