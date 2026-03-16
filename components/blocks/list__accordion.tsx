
import React from 'react';
import type { Template } from 'tinacms';
import { tinaField } from 'tinacms/dist/react';
import { PageBlocksList__Accordion } from '@/tina/__generated__/types';
import { Section, sectionBlockSchemaField } from '../layout/section';

export const ListAccordion = ({ data }: { data: PageBlocksList__Accordion }) => {
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

export const listAccordionBlockSchema: Template = {
    name: 'list__accordion',
    label: 'List (Accordion)',
    ui: {
        previewSrc: '/blocks/placeholder.png',
        defaultItem: {
            text: 'This is a List (Accordion) block',
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
