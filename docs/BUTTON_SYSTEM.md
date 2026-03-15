# Junction Church Button System

## Overview

The Junction Church button system uses custom Tailwind utilities prefixed with `jc-` to ensure no conflicts with external libraries. All buttons feature the brand's bold aesthetic with thick borders and vibrant colors.

## Brand Colors

- **Yellow**: `#ffde00` - Primary brand color
- **Pink**: `#FF006E` - Secondary accent
- **Blue**: `#3AFFDC` - Tertiary accent
- **Purple**: `#8338EC` - Quaternary accent
- **Black**: `#000` - Neutral dark
- **White**: `#fff` - Neutral light

## Button Variants

### Filled Variants
- `yellow` - Yellow background with black border and text
- `pink` - Pink background with black border and text
- `blue` - Blue background with black border and text
- `purple` - Purple background with black border and white text
- `black` - Black background with black border and white text
- `white` - White background with black border and black text

### Outline Variants
- `outline-yellow` - Transparent background with yellow border and text
- `outline-pink` - Transparent background with pink border and text
- `outline-blue` - Transparent background with blue border and text
- `outline-purple` - Transparent background with purple border and text
- `outline-black` - Transparent background with black border and text
- `outline-white` - Transparent background with white border and text

### Special Variants
- `ghost` - Minimal styling, subtle hover effect
- `link` - Text-only with underline on hover

## Button Sizes

- `sm` - Small (h-8, text-sm)
- `default` - Default (h-12, text-base) - **Recommended for hero sections**
- `lg` - Large (h-14, text-lg)
- `icon` - Square icon button (size-12)

## Usage Examples

### In React Components

```tsx
import { Button } from '@/components/ui/button';

// Yellow filled button (default)
<Button variant="yellow" size="lg">
  Get Connected
</Button>

// Pink filled button
<Button variant="pink" size="lg">
  Learn More
</Button>

// Black filled button
<Button variant="black" size="lg">
  Join Us
</Button>

// White filled button (great on dark backgrounds)
<Button variant="white" size="lg">
  Discover
</Button>

// Outline variants
<Button variant="outline-yellow" size="default">
  Explore
</Button>

<Button variant="outline-white" size="default">
  Learn More
</Button>

// With icon
<Button variant="blue" size="lg">
  <Icon name="arrow-right" />
  Continue
</Button>

// As a link
<Button variant="yellow" size="lg" asChild>
  <Link href="/contact">Contact Us</Link>
</Button>
```

### Direct Utility Classes

You can also use the utility classes directly in your HTML/JSX:

```tsx
<button className="jc-btn jc-btn-yellow jc-btn-lg">
  Get Connected
</button>

<button className="jc-btn jc-btn-pink jc-btn-default">
  Learn More
</button>

<button className="jc-btn jc-btn-outline-blue jc-btn-sm">
  Small Outline
</button>
```

## Features

All buttons include:
- **Oswald font** for headings/display text
- **Uppercase text** with tracking
- **0.2em thick borders** (matching brand style)
- **Smooth transitions** on hover
- **Scale animations** (1.02 on hover, 0.98 on active)
- **Focus ring** for accessibility
- **Disabled states** with reduced opacity

## TinaCMS Integration

In TinaCMS blocks, buttons use the `variant` field:

```typescript
{
  label: 'Variant',
  name: 'variant',
  type: 'string',
  options: [
    { label: 'Yellow (Filled)', value: 'yellow' },
    { label: 'Pink (Filled)', value: 'pink' },
    { label: 'Blue (Filled)', value: 'blue' },
    { label: 'Purple (Filled)', value: 'purple' },
    { label: 'Black (Filled)', value: 'black' },
    { label: 'White (Filled)', value: 'white' },
    { label: 'Yellow (Outline)', value: 'outline-yellow' },
    { label: 'Pink (Outline)', value: 'outline-pink' },
    { label: 'Blue (Outline)', value: 'outline-blue' },
    { label: 'Purple (Outline)', value: 'outline-purple' },
    { label: 'Black (Outline)', value: 'outline-black' },
    { label: 'White (Outline)', value: 'outline-white' },
    { label: 'Ghost', value: 'ghost' },
    { label: 'Link', value: 'link' },
  ],
}
```

## Customization

All button utilities are defined in `styles.css` under `@layer utilities`. You can modify:
- Border width: Change `border-[0.2em]` values
- Hover effects: Adjust `hover:scale-[1.02]` values
- Focus rings: Modify `focus-visible:ring-4` values
- Colors: Update the `@theme` color variables

## Migration from Old System

Old variants are still supported for backwards compatibility:
- `default` → Maps to `yellow`
- `destructive` → Red destructive button
- `outline` → Generic outline
- `secondary` → Secondary styling
- `ghost` → Minimal ghost button
- `link` → Text link

**Recommendation**: Update to the new color-specific variants for consistency with the Junction Church brand.

