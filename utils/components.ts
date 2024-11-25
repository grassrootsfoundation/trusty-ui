import type { ResponsiveProp, ResponsivePropObject } from '../src/components/component';
import { SUPPORTED_BREAKPOINT_KEYS } from './constants';

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
export function isResponsivePropObject<T = unknown>(prop: ResponsiveProp<T>) {
	if (!prop) return false;
	if (typeof prop !== 'object') return false;
	const keys = Object.keys(prop) as typeof SUPPORTED_BREAKPOINT_KEYS;
	return Boolean(keys.length) && keys.every((k) => SUPPORTED_BREAKPOINT_KEYS.includes(k));
}
/**
 * Creates CSS custom properties for responsive props.
 */
export function createResponsivePropCSSProperties<T = unknown>(
	prop: ResponsiveProp<T>,
	config: { name: string }
) {
	if (!isResponsivePropObject(prop)) {
		return {
			[config.name]: prop as T
		};
	}

	const propObj = prop as ResponsivePropObject<T>;

	return {
		...SUPPORTED_BREAKPOINT_KEYS.reduce((obj, bp) => {
			return {
				...obj,
				[`${config.name}-${bp}`]: propObj[bp]
			};
		}, {})
	};
}
