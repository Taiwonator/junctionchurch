'use client';
import React from 'react';
import type { Template } from 'tinacms';
import { tinaField } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { PageBlocksHero__Brand } from '@/tina/__generated__/types';
import { actionsFieldSchema } from '@/tina/fields/actions';
import { components } from '../mdx-components';
import { headlineRenderer } from '../primitives/hero';
import { ActionRenderer } from '../ActionRenderer';

export const HeroBrand = ({ data }: { data: PageBlocksHero__Brand }) => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden" id='hero'>
            {/* Video Background */}
            {data.videoSrc && (
                <div className="absolute inset-0 z-0">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        data-tina-field={tinaField(data, 'videoSrc')}
                    >
                        <source src={data.videoSrc} type="video/mp4" />
                    </video>
                    {/* Dark overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/50" />
                </div>
            )}

            {/* Content */}
            <div className="relative z-10 text-center px-6 py-12 max-w-7xl mx-auto">
                {/* Logo */}
                {data.logo && (
                    <div className="flex justify-center mb-6" data-tina-field={tinaField(data, 'logo')}>
                        <img src={data.logo} alt="" className="max-w-25 h-auto" />
                    </div>
                )}

                {/* Headline - Transformed to single h1 with span children */}
                {data.headlineRich && (
                    <div data-tina-field={tinaField(data, 'headlineRich')}>
                        {/* <TinaMarkdown content={data.headlineRich} components={{ ...components }} /> */}
                        {headlineRenderer(data.headlineRich)}
                    </div>
                )}

                {/* Subheadline */}
                {data.subheadlineRich && (
                    <div
                        data-tina-field={tinaField(data, 'subheadlineRich')}
                        className="mt-6 prose prose-invert prose-p:text-white prose-p:text-lg md:prose-p:text-xl prose-em:text-yellow-400 prose-em:not-italic max-w-2xl mx-auto"
                    >
                        <TinaMarkdown content={data.subheadlineRich} components={{ ...components }} />
                    </div>
                )}

                {/* Body */}
                {data.bodyRich && (
                    <div
                        data-tina-field={tinaField(data, 'bodyRich')}
                        className="mt-4 prose prose-invert prose-p:text-white/90 prose-p:text-base md:prose-p:text-lg prose-em:text-yellow-400 prose-em:not-italic max-w-3xl mx-auto"
                    >
                        <TinaMarkdown content={data.bodyRich} components={{ ...components }} />
                    </div>
                )}

                {/* Action Buttons */}
                {data.actions && data.actions.length > 0 && (
                    <div className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row">
                        {data.actions.map((action: any) => (
                            <ActionRenderer key={action.label} action={action} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export const heroBrandBlockSchema: Template = {
    name: 'hero__brand',
    label: 'Hero (Brand)',
    ui: {
        previewSrc: '/blocks/hero-brand.png',
        defaultItem: {
            headlineRich: {
                type: 'root',
                children: [
                    {
                        type: 'h1',
                        children: [
                            { type: 'text', text: 'WELCOME ' },
                            { type: 'text', text: 'HOME', bold: true },
                            { type: 'text', text: '.' },
                        ],
                    },
                ],
            },
            subheadlineRich: {
                type: 'root',
                children: [
                    {
                        type: 'p',
                        children: [
                            { type: 'text', text: 'One Church in Three Locations' },
                        ],
                    },
                ],
            },
            bodyRich: {
                type: 'root',
                children: [
                    {
                        type: 'p',
                        children: [
                            { type: 'text', text: 'Loughborough, Leicester, Nottingham' },
                        ],
                    },
                ],
            },
            actions: [
                {
                    _template: 'linkAction',
                    label: 'GET CONNECTED',
                    variant: 'yellow',
                    link: '/',
                },
            ],
        },
    },
    fields: [
        {
            type: 'image',
            label: 'Logo',
            name: 'logo',
            description: 'Logo image displayed at the top of the hero (supports SVG, PNG, JPG, etc.)',
        },
        {
            type: 'rich-text',
            label: 'Headline',
            name: 'headlineRich',
            description: 'Main hero heading - use the BOLD button (B) to highlight words (they will appear with yellow background)',
            overrides: {
                toolbar: ['bold', 'italic', 'link'],
                showFloatingToolbar: false,
            },
        },
        {
            type: 'rich-text',
            label: 'Subheadline',
            name: 'subheadlineRich',
            description: 'Supporting text below the headline',
        },
        {
            type: 'rich-text',
            label: 'Body',
            name: 'bodyRich',
            isBody: true,
            description: 'Additional descriptive text (optional)',
        },
        {
            type: 'string',
            label: 'Background Video (MP4)',
            name: 'videoSrc',
            description: 'URL or path to the MP4 video file',
        },
        actionsFieldSchema as any,
    ],
};
