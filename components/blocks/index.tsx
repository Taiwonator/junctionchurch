import { tinaField } from "tinacms/dist/react";
import { Page, PageBlocks } from "../../tina/__generated__/types";
import { Hero } from "./hero";
import { Content } from "./content";
import { Features } from "./features";
import { Testimonial } from "./testimonial";
import { Video } from "./video";
import { Callout } from "./callout";
import { Stats } from "./stats";
import { CallToAction } from "./call-to-action";
import { Placeholder } from "./placeholder";
import { HeroBrand } from "./hero__brand";
import { HeroLabel } from "./hero__label";
import { HeroSubtleLogo } from "./hero__logo_subtle";
import { HeroDominantLogo } from "./hero__logo_dominant";
import { HeroSplitLarge } from "./hero__split_large";
import { HeroSplitCompact } from "./hero__split_compact";
import { HeaderAnnouncement } from "./header__announcement";
import { HeaderMinimal } from "./header__minimal";
import { HeaderSplit } from "./header__split";
import { HeaderStacked } from "./header__stacked";
import { HeaderMega } from "./header__mega";
import { FeatureSectionStandard } from "./section__feature";
import { FeatureSectionCompact } from "./section__feature_compact";
import { FeatureSectionSplit } from "./section__split";
import { ContentGrid } from "./grid__content";
import { InfoGrid } from "./grid__info";
import { CardGridStandard } from "./grid__cards_standard";
import { CardGridMinimal } from "./grid__cards_minimal";
import { CardGridTall } from "./grid__cards_tall";
import { PeopleGrid } from "./grid__people";
import { ImageGrid } from "./grid__images";
import { CarouselMedia } from "./carousel__media";
import { CarouselCards } from "./carousel__cards";
import { ListOrdered } from "./list__ordered";
import { ListAccordion } from "./list__accordion";
import { ListSplitSticky } from "./list__split_sticky";
import { VideoBlock } from "./media__video";
import { EmbedBlock } from "./embed__default";
import { FormBlock } from "./form__default";
import { Prose } from "./prose__default";
import { ImageCollage } from "./gallery__collage";
import { ImageScrollingText } from "./gallery__scrolling";

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
  if (!props.blocks) return null;
  return (
    <>
      {props.blocks.map(function (block, i) {
        return (
          <div key={i} data-tina-field={tinaField(block)}>
            <Block {...block} />
          </div>
        );
      })}
    </>
  );
};

const Block = (block: PageBlocks) => {
  switch (block.__typename) {
    case "PageBlocksVideo":
      return <Video data={block} />;
    case "PageBlocksHero":
      return <Hero data={block} />;
    case "PageBlocksCallout":
      return <Callout data={block} />;
    case "PageBlocksStats":
      return <Stats data={block} />;
    case "PageBlocksContent":
      return <Content data={block} />;
    case "PageBlocksFeatures":
      return <Features data={block} />;
    case "PageBlocksTestimonial":
      return <Testimonial data={block} />;
    case "PageBlocksCta":
      return <CallToAction data={block} />;
    case "PageBlocksPlaceholder":
      return <Placeholder data={block} />;
    case "PageBlocksHero__brand":
      return <HeroBrand data={block} />;
    case "PageBlocksHero__label":
      return <HeroLabel data={block} />;
    case "PageBlocksHero__logo_subtle":
      return <HeroSubtleLogo data={block} />;
    case "PageBlocksHero__logo_dominant":
      return <HeroDominantLogo data={block} />;
    case "PageBlocksHero__split_large":
      return <HeroSplitLarge data={block} />;
    case "PageBlocksHero__split_compact":
      return <HeroSplitCompact data={block} />;
    case "PageBlocksHeader__announcement":
      return <HeaderAnnouncement data={block} />;
    case "PageBlocksHeader__minimal":
      return <HeaderMinimal data={block} />;
    case "PageBlocksHeader__split":
      return <HeaderSplit data={block} />;
    case "PageBlocksHeader__stacked":
      return <HeaderStacked data={block} />;
    case "PageBlocksHeader__mega":
      return <HeaderMega data={block} />;
    case "PageBlocksSection__feature":
      return <FeatureSectionStandard data={block} />;
    case "PageBlocksSection__feature_compact":
      return <FeatureSectionCompact data={block} />;
    case "PageBlocksSection__split":
      return <FeatureSectionSplit data={block} />;
    case "PageBlocksGrid__content":
      return <ContentGrid data={block} />;
    case "PageBlocksGrid__info":
      return <InfoGrid data={block} />;
    case "PageBlocksGrid__cards_standard":
      return <CardGridStandard data={block} />;
    case "PageBlocksGrid__cards_minimal":
      return <CardGridMinimal data={block} />;
    case "PageBlocksGrid__cards_tall":
      return <CardGridTall data={block} />;
    case "PageBlocksGrid__people":
      return <PeopleGrid data={block} />;
    case "PageBlocksGrid__images":
      return <ImageGrid data={block} />;
    case "PageBlocksCarousel__media":
      return <CarouselMedia data={block} />;
    case "PageBlocksCarousel__cards":
      return <CarouselCards data={block} />;
    case "PageBlocksList__ordered":
      return <ListOrdered data={block} />;
    case "PageBlocksList__accordion":
      return <ListAccordion data={block} />;
    case "PageBlocksList__split_sticky":
      return <ListSplitSticky data={block} />;
    case "PageBlocksMedia__video":
      return <VideoBlock data={block} />;
    case "PageBlocksEmbed__default":
      return <EmbedBlock data={block} />;
    case "PageBlocksForm__default":
      return <FormBlock data={block} />;
    case "PageBlocksProse__default":
      return <Prose data={block} />;
    case "PageBlocksGallery__collage":
      return <ImageCollage data={block} />;
    case "PageBlocksGallery__scrolling":
      return <ImageScrollingText data={block} />;
    default:
      return null;
  }
};
