# Accordion Component

Accordion is a component that allows content to be visibly hidden and toggled visible on user click.

## Accordion Properties

```
interface AccordionProps {
  bgColor?: TColor;
  borderColor?: TColor;
  className?: string;
  color?: TColor;
  gap?: TSize;
  radius?: TRadius;
  shadow?: TShadow;
  spacing?: TSize;
  textSize?: TTextSize;
}
```

### Additional Properties

- Speads in `$$restProps` allowing for additional properties
- Utilizes `class`

## CSS Variables

```
	--accordion-bg-color
	--accordion-border-color
	--accordion-color
	--accordion-gap
	--accordion-radius
	--accordion-shadow
	--accordion-spacing
	--accordion-text-size
```
