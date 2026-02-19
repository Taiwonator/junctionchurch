
import React from 'react';
import type { Template } from 'tinacms';
import { tinaField } from 'tinacms/dist/react';
import { PageBlocksCarouselMedia } from '@/tina/__generated__/types';
import { Section, sectionBlockSchemaField } from '../layout/section';

export const CarouselMedia = ({ data }: { data: PageBlocksCarouselMedia }) => {
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

export const carouselMediaBlockSchema: Template = {
    name: 'carousel__media',
    label: 'Carousel (Media)',
    ui: {
        previewSrc: '/blocks/placeholder.png',
        defaultItem: {
            text: 'This is a Carousel (Media) block',
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
