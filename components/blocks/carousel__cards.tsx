
import React from 'react';
import type { Template } from 'tinacms';
import { tinaField } from 'tinacms/dist/react';
import { PageBlocksCarouselCards } from '@/tina/__generated__/types';
import { Section, sectionBlockSchemaField } from '../layout/section';

export const CarouselCards = ({ data }: { data: PageBlocksCarouselCards }) => {
    return (
        <Section background={data.background!}>
            <div className="text-center">
                <p
                    data-tina-field={tinaField(data, 'text')}
                    className="text-lg"
                >
                    {data.text}
                </p>
            </div>
        </Section>
    );
};

export const carouselCardsBlockSchema: Template = {
    name: 'carousel__cards',
    label: 'Carousel (Cards)',
    ui: {
        previewSrc: '/blocks/placeholder.png',
        defaultItem: {
            text: 'This is a Carousel (Cards) block',
        },
    },
    fields: [
        sectionBlockSchemaField as any,
        {
            type: 'string',
            label: 'Text',
            name: 'text',
            ui: {
                component: 'textarea',
            },
        },
    ],
};
