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

## Observability
- Done: Umami (Analytics)
- Axiom (For now overkill. But will add when building out the quality app start boiletplate)

## Performance (SEO, Speed, Perceived performance)
- SEO / H1, H2, H3 etc...
- Asset optimisation
- Animations (loading, on hover, init etc)




## TODO:Cloudflare
Only allow Cloudflare IP addresses at your origin
Update your origin server's firewall (usually via your web hosting provider or server console) to block all incoming traffic that doesn't originate from Cloudflare.