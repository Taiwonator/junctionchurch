
import React from 'react';
import type { Template } from 'tinacms';
import { tinaField } from 'tinacms/dist/react';
import { PageBlocksFeatureSectionStandard } from '@/tina/__generated__/types';
import { Section, sectionBlockSchemaField } from '../layout/section';

export const FeatureSectionStandard = ({ data }: { data: PageBlocksFeatureSectionStandard }) => {
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

export const featureSectionStandardBlockSchema: Template = {
    name: 'section__feature',
    label: 'Feature Section (Standard)',
    ui: {
        previewSrc: '/blocks/placeholder.png',
        defaultItem: {
            text: 'This is a Feature Section (Standard) block',
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
