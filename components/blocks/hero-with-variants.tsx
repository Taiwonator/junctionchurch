'use client';
import { iconSchema } from '@/tina/fields/icon';
import * as React from 'react';
import type { Template } from 'tinacms';
import { PageBlocksHeroWithVariations } from '../../tina/__generated__/types';
import { Section, sectionBlockSchemaField } from '../layout/section';

export const HeroWithVariants = ({ data }: { data: PageBlocksHeroWithVariations }) => {
    // Extract the background style logic into a more readable format
    let gradientStyle: React.CSSProperties | undefined = undefined;
    if (data.background) {
        const colorName = data.background
            .replace(/\/\d{1,2}$/, '')
            .split('-')
            .slice(1)
            .join('-');
        const opacity = data.background.match(/\/(\d{1,3})$/)?.[1] || '100';

        gradientStyle = {
            '--tw-gradient-to': `color-mix(in oklab, var(--color-${colorName}) ${opacity}%, transparent)`,
        } as React.CSSProperties;
    }

    return (
        <Section background={data.background!}>
            I am a section
        </Section>
    );
};

export const heroWithVariationsBlockSchema: Template = {
    name: 'heroWithVariants',
    label: 'Hero With Variants',
    ui: {
        previewSrc: '/blocks/hero.png',
        defaultItem: {
            tagline: "Here's some text above the other text",
            headline: 'This Big Text is Totally Awesome',
            text: 'Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.',
        },
    },
    fields: [
        sectionBlockSchemaField as any,
        {
            type: 'string',
            label: 'Headline',
            name: 'headline',
        },
        {
            type: 'string',
            label: 'Tagline',
            name: 'tagline',
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
        {
            type: 'object',
            label: 'Image',
            name: 'image',
            fields: [
                {
                    name: 'src',
                    label: 'Image Source',
                    type: 'image',
                },
                {
                    name: 'alt',
                    label: 'Alt Text',
                    type: 'string',
                },
                {
                    name: 'videoUrl',
                    label: 'Video URL',
                    type: 'string',
                    description: 'If using a YouTube video, make sure to use the embed version of the video URL',
                },
            ],
        },
    ],
};
