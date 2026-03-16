
import React from 'react';
import type { Template } from 'tinacms';
import { tinaField } from 'tinacms/dist/react';
import { PageBlocksHero__Split_Compact } from '@/tina/__generated__/types';
import { Section, sectionBlockSchemaField } from '../layout/section';

export const HeroSplitCompact = ({ data }: { data: PageBlocksHero__Split_Compact }) => {
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

export const heroSplitCompactBlockSchema: Template = {
    name: 'hero__split_compact',
    label: 'Hero (Split · Compact)',
    ui: {
        previewSrc: '/blocks/placeholder.png',
        defaultItem: {
            text: 'This is a Hero (Split · Compact) block',
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
