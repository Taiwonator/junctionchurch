
import React from 'react';
import type { Template } from 'tinacms';
import { tinaField } from 'tinacms/dist/react';
import { PageBlocksHeroSplitLarge } from '@/tina/__generated__/types';
import { Section, sectionBlockSchemaField } from '../layout/section';

export const HeroSplitLarge = ({ data }: { data: PageBlocksHeroSplitLarge }) => {
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

export const heroSplitLargeBlockSchema: Template = {
    name: 'hero__split_large',
    label: 'Hero (Split · Large)',
    ui: {
        previewSrc: '/blocks/placeholder.png',
        defaultItem: {
            text: 'This is a Hero (Split · Large) block',
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
