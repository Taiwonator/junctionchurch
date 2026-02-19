# Block Registry

Format:  
**File Name | Block Name**

---

## Hero Blocks

hero--brand | Hero (Brand)  
hero--label | Hero (Label)  
hero--logo-subtle | Hero (Subtle Logo)  
hero--logo-dominant | Hero (Dominant Logo)  
hero--split-large | Hero (Split · Large)  
hero--split-compact | Hero (Split · Compact)

---

## Header Blocks

header--announcement | Header (Announcement)  
header--minimal | Header (Minimal)  
header--split | Header (Split)  
header--stacked | Header (Stacked)  
header--mega | Header (Mega)

---

## Section Blocks

section--feature | Feature Section (Standard)  
section--feature-compact | Feature Section (Compact)  
section--split | Feature Section (Split)

---

## Grid Blocks

grid--content | Content Grid  
grid--info | Info Grid  

grid--cards-standard | Card Grid (Standard)  
grid--cards-minimal | Card Grid (Minimal)  
grid--cards-tall | Card Grid (Tall)

grid--people | People Grid  
grid--images | Image Grid

---

## Carousel Blocks

carousel--media | Carousel (Media)  
carousel--cards | Carousel (Cards)

---

## List Blocks

list--ordered | List (Ordered)  
list--accordion | List (Accordion)  
list--split-sticky | List (Split Sticky)

---

## Media & Utility Blocks

media--video | Video Block  
embed--default | Embed Block  
form--default | Form Block  
prose--default | Prose

---

## Gallery Blocks

gallery--collage | Image Collage  
gallery--scrolling | Image (Scrolling Text)

# Steps for adding a new block
1. Create the block component in `components/blocks`
2. Create the block schema in `tina/collection/page.ts`
3. Import and add the block schema to the `Page` collection in `tina/collection/page.ts`
4. Add the block to the `Blocks` component in `components/blocks/index.tsx`
5. Add the block to the `components` object in `components/mdx-components.tsx`
