import type { ResponsiveProp } from '$types/media';
import { SUPPORTED_BREAKPOINT_KEYS } from './constants';
import { tok, type DesignTokenCategory } from './style';

/**
 * Filters out undefined props.
 */
export function definedProps(props = {}) {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	return Object.fromEntries(Object.entries(props).filter(([k, v]) => v !== undefined));
}

/**
 * Determines if a prop conforms to the responsive prop
 * config shape.
 */

export function createResponsivePropCSSProperties<T = unknown>(
	prop: ResponsiveProp<T>,
	config: { name: string }
): Record<string, string | T | undefined> {
	if (!prop || typeof prop !== 'object') {
		// If not an object, create a single CSS variable
		return { [config.name]: prop as T };
	}

	// If it's a responsive object, map keys to CSS variables
	return Object.keys(prop).reduce(
		(acc, key) => {
			if (SUPPORTED_BREAKPOINT_KEYS.includes(key as any)) {
				acc[`${config.name}-${key}`] = (prop as Record<string, T>)[key];
			}
			return acc;
		},
		{} as Record<string, string | T | undefined>
	);
}

export function inlineStyles(mergedStyles: { [s: string]: unknown } | ArrayLike<unknown>) {
	return Object.entries(mergedStyles)
		.map(([key, value]) => `${key}: ${value}`)
		.join('; ');
}

export type ResponsiveConfig = Record<string, { name: string; category: DesignTokenCategory }>;

export function generateCustomProperties(
	props: Partial<Record<string, ResponsiveProp<string | number> | undefined>>,
	config: ResponsiveConfig
): Record<string, string> {
	const vars: Record<string, string> = {};

	for (const [propName, propValue] of Object.entries(props)) {
		// Check if the prop value is defined and in the config
		if (propValue !== undefined && config[propName]) {
			const { name, category } = config[propName];

			// Process single or responsive property
			if (typeof propValue === 'object' && propValue !== null) {
				for (const [breakpoint, value] of Object.entries(propValue)) {
					if (value !== undefined) {
						vars[`--${name}-${breakpoint}`] = tok(category, value);
					}
				}
			} else if (propValue !== null) {
				vars[`--${name}`] = tok(category, propValue);
			}
		}
	}

	return vars;
}

function generateCSSVariableName(category: string, name: string, breakpoint?: string): string {
	return breakpoint ? `--${name}-${breakpoint}` : `--${name}`;
}

// Helper: Processes a single prop value (single or responsive)
function processProp(
	prop: string | number | ResponsiveProp<string | number>,
	category: DesignTokenCategory,
	name: string,
	vars: Record<string, string>
): void {
	if (typeof prop === 'object' && prop !== null) {
		// Handle responsive props
		for (const [breakpoint, value] of Object.entries(prop)) {
			if (value !== undefined) {
				vars[generateCSSVariableName(category, name, breakpoint)] = tok(category, value);
			}
		}
	} else if (prop !== undefined) {
		// Handle single-value props
		vars[generateCSSVariableName(category, name)] = tok(category, prop);
	}
}
