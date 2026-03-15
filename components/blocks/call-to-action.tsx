import type { Template } from 'tinacms';
import { tinaField } from 'tinacms/dist/react';
import { actionsFieldSchema } from '@/tina/fields/actions';
import { PageBlocksCta } from '@/tina/__generated__/types';
import { ActionRenderer } from '../ActionRenderer';
import { Section } from '../layout/section';

export const CallToAction = ({ data }: { data: PageBlocksCta }) => {
    return (
        <Section>
            <div className="text-center">
                <h2 className="text-balance text-4xl font-semibold lg:text-5xl" data-tina-field={tinaField(data, 'title')}>{data.title}</h2>
                <p className="mt-4" data-tina-field={tinaField(data, 'description')}>{data.description}</p>

                <div className="mt-12 flex flex-wrap justify-center gap-4">
                    {data.actions && data.actions.map((action: any) => (
                        <ActionRenderer
                            key={action.label}
                            action={action}
                            className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                        />
                    ))}
                </div>
            </div>
        </Section>
    )
}


export const ctaBlockSchema: Template = {
    name: "cta",
    label: "CTA",
    ui: {
        previewSrc: "/blocks/cta.png",
        defaultItem: {
            title: "Start Building",
            description: "Get started with TinaCMS today and take your content management to the next level.",
            actions: [
                {
                    _template: 'linkAction',
                    label: 'Get Started',
                    variant: 'yellow',
                    link: '/',
                },
                {
                    _template: 'linkAction',
                    label: 'Book Demo',
                    variant: 'ghost',
                    link: '/',
                },
            ],
        },
    },
    fields: [
        {
            type: "string",
            label: "Title",
            name: "title",
        },
        {
            type: "string",
            label: "Description",
            name: "description",
            ui: {
                component: "textarea",
            },
        },
        actionsFieldSchema as any,
    ],
};
