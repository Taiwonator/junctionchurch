
import React from 'react';
import type { Template } from 'tinacms';
import { tinaField } from 'tinacms/dist/react';
import { PageBlocksHeader__Mega } from '@/tina/__generated__/types';
import { Section, sectionBlockSchemaField } from '../layout/section';

export const HeaderMega = ({ data }: { data: PageBlocksHeader__Mega }) => {
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

export const headerMegaBlockSchema: Template = {
    name: 'header__mega',
    label: 'Header (Mega)',
    ui: {
        previewSrc: '/blocks/placeholder.png',
        defaultItem: {
            text: 'This is a Header (Mega) block',
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
