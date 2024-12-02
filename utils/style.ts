export type DesignTokenCategory =
	| 'aspect-ratio'
	| 'color'
	| 'duration'
	| 'ease'
	| 'grid-cols'
	| 'grid-rows'
	| 'grid-gap'
	| 'col-start'
	| 'col-span'
	| 'col-end'
	| 'list'
	| 'row-start'
	| 'row-span'
	| 'row-end'
	| 'text'
	| 'text-align'
	| 'text-size'
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
