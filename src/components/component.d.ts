export interface CommonProps {
	id?: string;
	blockName?: string;
	blockType?: string;
	type?: 'block';
}
export interface NavProps {
	label?: string;
	slug?: string;
	title?: string;
}

export interface MenuProps {
	title: string;
	nav: NavProps[];
}

export interface CSSProperties {
	[key: string]: string | number;
}

export interface CommonProps {
	id?: string;
	className?: string;
	style?: string;
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

export type AlignProp = 'stretch' | 'center' | 'start' | 'end';

export type DirectionProp = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export type FontFamilyProp = 'sans' | 'serif';

export type FontWeightProp = 'light' | 'normal' | 'medium' | 'bold' | 'semibold' | 'black';

export type GapProp = number | string;

export type HeadingLevelProp = '1' | '2' | '3' | '4' | '5' | '6';

export type IntentProp =
	| 'info'
	| 'success'
	| 'warning'
	| 'danger'
	| 'error'
	| 'app-buttons'
	| 'neutral'
	| 'notification';

export type LineHeightProp = 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose';

export type LetterSpacingProp = 'tight' | 'normal' | 'wide' | 'wider' | 'widest';

export type JustifyProp = 'stretch' | 'center' | 'start' | 'end' | 'space-between';

export type SizeProp =
	| '2xs'
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
	| '10xl';

export type TextAsProp =
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

export type StackAsProp =
	| 'div'
	| 'span'
	| 'menu'
	| 'main'
	| 'nav'
	| 'article'
	| 'section'
	| 'form'
	| 'label'
	| 'header'
	| 'ul'
	| 'li'
	| 'a';

export type TextAlignProp = 'inherit' | 'left' | 'center' | 'right' | 'justified';

export type TextPresetProp = 'caption' | 'display';

export type TextTransformProp = 'normal' | 'capitalize' | 'uppercase' | 'lowercase';

export type RadiusProp = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface TextProps extends CommonProps {
	align?: TextAlignProp;
	as?: TextAsProp;
	color?: string;
	family?: FontFamilyProp;
	title?: string;
}

export interface MenuListProps {
	href: string;
	label: string;
	title?: string;
	'data-title'?: string;
	target?: string;
}
