
import React from 'react';
import type { Template } from 'tinacms';
import { tinaField } from 'tinacms/dist/react';
import { PageBlocksCardGridStandard } from '@/tina/__generated__/types';
import { Section, sectionBlockSchemaField } from '../layout/section';

export const CardGridStandard = ({ data }: { data: PageBlocksCardGridStandard }) => {
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

export const cardGridStandardBlockSchema: Template = {
    name: 'grid__cards_standard',
    label: 'Card Grid (Standard)',
    ui: {
        previewSrc: '/blocks/placeholder.png',
        defaultItem: {
            text: 'This is a Card Grid (Standard) block',
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
