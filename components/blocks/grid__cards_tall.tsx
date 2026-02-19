
import React from 'react';
import type { Template } from 'tinacms';
import { tinaField } from 'tinacms/dist/react';
import { PageBlocksCardGridTall } from '@/tina/__generated__/types';
import { Section, sectionBlockSchemaField } from '../layout/section';

export const CardGridTall = ({ data }: { data: PageBlocksCardGridTall }) => {
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

export const cardGridTallBlockSchema: Template = {
    name: 'grid__cards_tall',
    label: 'Card Grid (Tall)',
    ui: {
        previewSrc: '/blocks/placeholder.png',
        defaultItem: {
            text: 'This is a Card Grid (Tall) block',
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
