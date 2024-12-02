export type TTextSize =
	| 'xs'
	| 'sm'
	| 'md'
	| 'lg'
	| 'xl'
	| '2xl'
	| '3xl'
	| '4xl'
	| '5xl'
	| '6xl'
	| '7xl'
	| '8xl'
	| '9xl'
	| '10xl'
	| string;

export type TFontWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'black';

export type TLeading =
	| 3
	| 4
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10
	| 'none'
	| 'tight'
	| 'snug'
	| 'tight'
	| 'snug'
	| 'normal'
	| 'relaxed'
	| 'loose';

export type TTracking = 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';

export type TTransform = 'uppercase' | 'lowercase' | 'captialize' | 'none' | 'ucfirst';

export type TTextPreset = 'caption' | 'display' | 'prose';

export type TTextAs =
	| 'div'
	| 'figcaption'
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'label'
	| 'legend'
	| 'p'
	| 'small'
	| 'span'
	| 'strong'
	| 'em'
	| 'th'
	| 'td'
	| 'script';

export type TTextAlign = 'inherit' | 'left' | 'center' | 'right' | 'justified';

export type TFontFamily = 'sans' | 'serif';

export type TTextPreset = 'display' | 'caption' | 'prose';

export interface IText {
	align?: TTextAlign;
	as?: TTextAs;
	family?: FontFamilyProp;
	height?: TLeading;
	preset?: TTextPreset;
	size?: TTextSize;
	spacing?: TTracking;
	transform?: TTransform;
	weight?: TFontWeight;
}

export type THeadingLevel = 1 | 2 | 3 | 4 | 5 | 6 | string;
