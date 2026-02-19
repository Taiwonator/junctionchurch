import type { Collection } from 'tinacms';
import { heroBlockSchema } from '@/components/blocks/hero';
import { contentBlockSchema } from '@/components/blocks/content';
import { testimonialBlockSchema } from '@/components/blocks/testimonial';
import { featureBlockSchema } from '@/components/blocks/features';
import { videoBlockSchema } from '@/components/blocks/video';
import { placeholderBlockSchema } from '@/components/blocks/placeholder';
import { calloutBlockSchema } from '@/components/blocks/callout';
import { statsBlockSchema } from '@/components/blocks/stats';
import { ctaBlockSchema } from '@/components/blocks/call-to-action';
import { heroBrandBlockSchema } from '@/components/blocks/hero__brand';
import { heroLabelBlockSchema } from '@/components/blocks/hero__label';
import { heroSubtleLogoBlockSchema } from '@/components/blocks/hero__logo_subtle';
import { heroDominantLogoBlockSchema } from '@/components/blocks/hero__logo_dominant';
import { heroSplitLargeBlockSchema } from '@/components/blocks/hero__split_large';
import { heroSplitCompactBlockSchema } from '@/components/blocks/hero__split_compact';
import { headerAnnouncementBlockSchema } from '@/components/blocks/header__announcement';
import { headerMinimalBlockSchema } from '@/components/blocks/header__minimal';
import { headerSplitBlockSchema } from '@/components/blocks/header__split';
import { headerStackedBlockSchema } from '@/components/blocks/header__stacked';
import { headerMegaBlockSchema } from '@/components/blocks/header__mega';
import { featureSectionStandardBlockSchema } from '@/components/blocks/section__feature';
import { featureSectionCompactBlockSchema } from '@/components/blocks/section__feature_compact';
import { featureSectionSplitBlockSchema } from '@/components/blocks/section__split';
import { contentGridBlockSchema } from '@/components/blocks/grid__content';
import { infoGridBlockSchema } from '@/components/blocks/grid__info';
import { cardGridStandardBlockSchema } from '@/components/blocks/grid__cards_standard';
import { cardGridMinimalBlockSchema } from '@/components/blocks/grid__cards_minimal';
import { cardGridTallBlockSchema } from '@/components/blocks/grid__cards_tall';
import { peopleGridBlockSchema } from '@/components/blocks/grid__people';
import { imageGridBlockSchema } from '@/components/blocks/grid__images';
import { carouselMediaBlockSchema } from '@/components/blocks/carousel__media';
import { carouselCardsBlockSchema } from '@/components/blocks/carousel__cards';
import { listOrderedBlockSchema } from '@/components/blocks/list__ordered';
import { listAccordionBlockSchema } from '@/components/blocks/list__accordion';
import { listSplitStickyBlockSchema } from '@/components/blocks/list__split_sticky';
import { videoBlockBlockSchema } from '@/components/blocks/media__video';
import { embedBlockBlockSchema } from '@/components/blocks/embed__default';
import { formBlockBlockSchema } from '@/components/blocks/form__default';
import { proseBlockSchema } from '@/components/blocks/prose__default';
import { imageCollageBlockSchema } from '@/components/blocks/gallery__collage';
import { imageScrollingTextBlockSchema } from '@/components/blocks/gallery__scrolling';

const Page: Collection = {
  label: 'Pages',
  name: 'page',
  path: 'content/pages',
  format: 'mdx',
  ui: {
    router: ({ document }) => {
      const filepath = document._sys.breadcrumbs.join('/');
      if (filepath === 'home') {
        return '/';
      }
      return `/${filepath}`;
    },
  },
  fields: [
    {
      type: 'object',
      list: true,
      name: 'blocks',
      label: 'Sections',
      ui: {
        visualSelector: true,
      },
      templates: [
        calloutBlockSchema,
        cardGridMinimalBlockSchema,
        cardGridStandardBlockSchema,
        cardGridTallBlockSchema,
        carouselCardsBlockSchema,
        carouselMediaBlockSchema,
        contentBlockSchema,
        contentGridBlockSchema,
        ctaBlockSchema,
        embedBlockBlockSchema,
        featureBlockSchema,
        featureSectionCompactBlockSchema,
        featureSectionSplitBlockSchema,
        featureSectionStandardBlockSchema,
        formBlockBlockSchema,
        headerAnnouncementBlockSchema,
        headerMegaBlockSchema,
        headerMinimalBlockSchema,
        headerSplitBlockSchema,
        headerStackedBlockSchema,
        heroBlockSchema,
        heroBrandBlockSchema,
        heroDominantLogoBlockSchema,
        heroLabelBlockSchema,
        heroSplitCompactBlockSchema,
        heroSplitLargeBlockSchema,
        heroSubtleLogoBlockSchema,
        imageCollageBlockSchema,
        imageGridBlockSchema,
        imageScrollingTextBlockSchema,
        infoGridBlockSchema,
        listAccordionBlockSchema,
        listOrderedBlockSchema,
        listSplitStickyBlockSchema,
        peopleGridBlockSchema,
        placeholderBlockSchema,
        proseBlockSchema,
        statsBlockSchema,
        testimonialBlockSchema,
        videoBlockBlockSchema,
        videoBlockSchema,
      ],
    },
  ],
};

export default Page;
