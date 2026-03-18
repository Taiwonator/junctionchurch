# Steps for adding a new block
1. Create the block component in `components/blocks`
2. Create the block schema in `tina/collection/page.ts`
3. Import and add the block schema to the `Page` collection in `tina/collection/page.ts`
4. Add the block to the `Blocks` component in `components/blocks/index.tsx`
5. Add the block to the `components` object in `components/mdx-components.tsx`

## Main Components to build
- Done: TinaMarkdownHeadlineTransformer (For rich text fields which don't want to allow paragraphs, just 1 headline but new lines are ok)
- Done: Header Highlighting
- Done: Typography for the whole project
- Cancelled/Done: Padding and margin system
- Cancelled: Grid system

- SEO / H1, H2, H3 etc...
- Animations (loading, on hover, init etc)

Starting with TinaMarkdownHeadlineTransformer...