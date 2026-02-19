'use client';
import React from 'react';
import type { Template } from 'tinacms';
import { tinaField } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { PageBlocksHero__Brand } from '@/tina/__generated__/types';
import { iconSchema } from '@/tina/fields/icon';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Icon } from '../icon';

export const HeroBrand = ({ data }: { data: PageBlocksHero__Brand }) => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
                {/* Headline */}
                {data.headlineRich && (
                    <div
                        data-tina-field={tinaField(data, 'headlineRich')}
                        className="prose prose-invert prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-6xl md:prose-headings:text-7xl xl:prose-headings:text-8xl prose-strong:text-yellow-400 max-w-none"
                    >
                        <TinaMarkdown content={data.headlineRich} />
                    </div>
                )}

                {/* Subtext */}
                {data.subtextRich && (
                    <div
                        data-tina-field={tinaField(data, 'subtextRich')}
                        className="mt-6 prose prose-invert prose-p:text-white prose-p:text-lg md:prose-p:text-xl prose-strong:text-yellow-400 max-w-2xl mx-auto"
                    >
                        <TinaMarkdown content={data.subtextRich} />
                    </div>
                )}

                {/* Action Buttons */}
                {data.actions && data.actions.length > 0 && (
                    <div className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row">
                        {data.actions.map((action) => (
                            <div
                                key={action!.label}
                                data-tina-field={tinaField(action)}
                            >
                                <Button
                                    asChild
                                    size="lg"
                                    variant={action!.type === 'link' ? 'ghost' : 'default'}
                                    className="px-8 py-6 text-lg font-semibold"
                                >
                                    <Link href={action!.link!}>
                                        {action?.icon && <Icon data={action?.icon} />}
                                        <span className="text-nowrap">{action!.label}</span>
                                    </Link>
                                </Button>
                            </div>
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
            subtextRich: {
                type: 'root',
                children: [
                    {
                        type: 'p',
                        children: [
                            { type: 'text', text: 'One Church in Three Locations' },
                        ],
                    },
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
                    label: 'GET CONNECTED',
                    type: 'button',
                    link: '/',
                },
            ],
        },
    },
    fields: [
        {
            type: 'rich-text',
            label: 'Headline',
            name: 'headlineRich',
            description: 'Use bold formatting to highlight words (they will appear in yellow)',
        },
        {
            type: 'rich-text',
            label: 'Subtext',
            name: 'subtextRich',
            description: 'Supporting text below the headline',
        },
        {
            type: 'string',
            label: 'Background Video (MP4)',
            name: 'videoSrc',
            description: 'URL or path to the MP4 video file',
        },
        {
            label: 'Actions',
            name: 'actions',
            type: 'object',
            list: true,
            ui: {
                defaultItem: {
                    label: 'Action Label',
                    type: 'button',
                    icon: {
                        name: "Tina",
                        color: "white",
                        style: "float",
                    },
                    link: '/',
                },
                itemProps: (item) => ({ label: item.label }),
            },
            fields: [
                {
                    label: 'Label',
                    name: 'label',
                    type: 'string',
                },
                {
                    label: 'Type',
                    name: 'type',
                    type: 'string',
                    options: [
                        { label: 'Button', value: 'button' },
                        { label: 'Link', value: 'link' },
                    ],
                },
                iconSchema as any,
                {
                    label: 'Link',
                    name: 'link',
                    type: 'string',
                },
            ],
        },
    ],
};
