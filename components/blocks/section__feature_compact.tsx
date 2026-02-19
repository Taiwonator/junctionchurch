
import React from 'react';
import type { Template } from 'tinacms';
import { tinaField } from 'tinacms/dist/react';
import { PageBlocksFeatureSectionCompact } from '@/tina/__generated__/types';
import { Section, sectionBlockSchemaField } from '../layout/section';

export const FeatureSectionCompact = ({ data }: { data: PageBlocksFeatureSectionCompact }) => {
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

export const featureSectionCompactBlockSchema: Template = {
    name: 'section__feature_compact',
    label: 'Feature Section (Compact)',
    ui: {
        previewSrc: '/blocks/placeholder.png',
        defaultItem: {
            text: 'This is a Feature Section (Compact) block',
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
