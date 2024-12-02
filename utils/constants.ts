import type { ResponsiveProp, ResponsivePropObject } from '$src/types/media';

export const global = {
	site: {
		long_name: import.meta.env.VITE_BRAND_LONG_NAME,
		short_name: import.meta.env.VITE_BRAND_SHORT_NAME,
		acronymn: import.meta.env.VITE_BRAND_ACRONYM,
		slogan: import.meta.env.VITE_BRAND_SLOGAN
	}
};
/**
 * The media queries used in the app.
 * @see theme.css
 */
export enum MediaQuery {
	xs = '(min-width: 0)',
	sm = '(min-width: 640px)',
	md = '(min-width: 768px)',
	lg = '(min-width: 1024px)',
	xl = '(min-width: 1280px)'
}

// The keys of the breakpoints used in the UI
export const SUPPORTED_BREAKPOINT_KEYS = ['default', ...Object.keys(MediaQuery)] as (
	| 'default'
	| keyof typeof MediaQuery
)[];

/**
 * Utility function to check if a property is a ResponsivePropObject.
 */
export function isResponsivePropObject<T>(prop: unknown): prop is ResponsivePropObject<T> {
	return (
		typeof prop === 'object' &&
		prop !== null &&
		!Array.isArray(prop) &&
		Object.keys(prop).some((key) => SUPPORTED_BREAKPOINT_KEYS.includes(key as any))
	);
}
