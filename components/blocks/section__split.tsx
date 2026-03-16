
import React from 'react';
import type { Template } from 'tinacms';
import { tinaField } from 'tinacms/dist/react';
import { PageBlocksSection__Split } from '@/tina/__generated__/types';
import { Section, sectionBlockSchemaField } from '../layout/section';

export const FeatureSectionSplit = ({ data }: { data: PageBlocksSection__Split }) => {
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

export const featureSectionSplitBlockSchema: Template = {
    name: 'section__split',
    label: 'Feature Section (Split)',
    ui: {
        previewSrc: '/blocks/placeholder.png',
        defaultItem: {
            text: 'This is a Feature Section (Split) block',
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
