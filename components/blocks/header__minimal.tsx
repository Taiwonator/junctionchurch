
import React from 'react';
import type { Template } from 'tinacms';
import { tinaField } from 'tinacms/dist/react';
import { PageBlocksHeader__Minimal } from '@/tina/__generated__/types';
import { Section, sectionBlockSchemaField } from '../layout/section';

export const HeaderMinimal = ({ data }: { data: PageBlocksHeader__Minimal }) => {
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

export const headerMinimalBlockSchema: Template = {
    name: 'header__minimal',
    label: 'Header (Minimal)',
    ui: {
        previewSrc: '/blocks/placeholder.png',
        defaultItem: {
            text: 'This is a Header (Minimal) block',
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
