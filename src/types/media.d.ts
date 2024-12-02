export interface CSSProperties {
	[key: string]: string | number;
}

export type ResponsivePropObject<T> = {
	default?: T;
	xs?: T;
	sm?: T;
	md?: T;
	lg?: T;
	xl?: T;
};

export type ResponsiveProp<T> = T | ResponsivePropObject<T>;
