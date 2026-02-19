
import React from 'react';
import type { Template } from 'tinacms';
import { tinaField } from 'tinacms/dist/react';
import { PageBlocksCardGridMinimal } from '@/tina/__generated__/types';
import { Section, sectionBlockSchemaField } from '../layout/section';

export const CardGridMinimal = ({ data }: { data: PageBlocksCardGridMinimal }) => {
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

export const cardGridMinimalBlockSchema: Template = {
    name: 'grid__cards_minimal',
    label: 'Card Grid (Minimal)',
    ui: {
        previewSrc: '/blocks/placeholder.png',
        defaultItem: {
            text: 'This is a Card Grid (Minimal) block',
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
