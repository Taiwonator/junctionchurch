
import React from 'react';
import type { Template } from 'tinacms';
import { tinaField } from 'tinacms/dist/react';
import { PageBlocksForm__Default } from '@/tina/__generated__/types';
import { Section, sectionBlockSchemaField } from '../layout/section';

export const FormBlock = ({ data }: { data: PageBlocksForm__Default }) => {
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

export const formBlockBlockSchema: Template = {
    name: 'form__default',
    label: 'Form Block',
    ui: {
        previewSrc: '/blocks/placeholder.png',
        defaultItem: {
            text: 'This is a Form Block block',
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
