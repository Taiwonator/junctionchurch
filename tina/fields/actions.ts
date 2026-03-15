import type { Template } from 'tinacms';
import { iconSchema } from './icon';

export const sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'default' },
    { label: 'Large', value: 'lg' },
];

export const variantOptions = [
    { label: 'Yellow (Filled)', value: 'yellow' },
    { label: 'Pink (Filled)', value: 'pink' },
    { label: 'Blue (Filled)', value: 'blue' },
    { label: 'Purple (Filled)', value: 'purple' },
    { label: 'Black (Filled)', value: 'black' },
    { label: 'White (Filled)', value: 'white' },
    { label: 'Yellow (Outline)', value: 'outline-yellow' },
    { label: 'Pink (Outline)', value: 'outline-pink' },
    { label: 'Blue (Outline)', value: 'outline-blue' },
    { label: 'Purple (Outline)', value: 'outline-purple' },
    { label: 'Black (Outline)', value: 'outline-black' },
    { label: 'White (Outline)', value: 'outline-white' },
    { label: 'Ghost', value: 'ghost' },
    { label: 'Link', value: 'link' },
];

const sharedActionFields = [
    {
        label: 'Label',
        name: 'label',
        type: 'string',
    },
    {
        label: 'Variant',
        name: 'variant',
        type: 'string',
        options: variantOptions,
    },
    {
        label: 'Size',
        name: 'size',
        type: 'string',
        options: sizeOptions,
    },
    iconSchema as any,
];

export const linkActionTemplate: Template = {
    name: 'linkAction',
    label: 'Link',
    ui: {
        defaultItem: {
            label: 'Learn More',
            variant: 'yellow',
            link: '/',
        },
        itemProps: (item: any) => ({ label: item.label || 'Link Action' }),
    },
    fields: [
        ...sharedActionFields,
        {
            label: 'URL',
            name: 'link',
            type: 'string',
            required: true,
        },
    ],
};

export const videoActionTemplate: Template = {
    name: 'videoAction',
    label: 'Play Video',
    ui: {
        defaultItem: {
            label: 'Watch Video',
            variant: 'yellow',
            videoSrc: '',
            usePlayButton: false,
        },
        itemProps: (item: any) => ({ label: item.label || 'Video Action' }),
    },
    fields: [
        ...sharedActionFields,
        {
            label: 'Video URL',
            name: 'videoSrc',
            type: 'string',
            required: true,
            description: 'URL to the video (MP4 or YouTube embed URL)',
        },
        {
            label: 'Use Play Button',
            name: 'usePlayButton',
            type: 'boolean',
            description: 'Show a circular play button instead of a text button',
        },
    ],
};

export const scrollActionTemplate: Template = {
    name: 'scrollAction',
    label: 'Scroll To',
    ui: {
        defaultItem: {
            label: 'See More',
            variant: 'ghost',
            anchor: '',
        },
        itemProps: (item: any) => ({ label: item.label || 'Scroll Action' }),
    },
    fields: [
        ...sharedActionFields,
        {
            label: 'Section ID',
            name: 'anchor',
            type: 'string',
            required: true,
            description: 'The ID of the section to scroll to (e.g. "locations")',
        },
    ],
};

export const downloadActionTemplate: Template = {
    name: 'downloadAction',
    label: 'Download',
    ui: {
        defaultItem: {
            label: 'Download',
            variant: 'yellow',
            file: '',
        },
        itemProps: (item: any) => ({ label: item.label || 'Download Action' }),
    },
    fields: [
        ...sharedActionFields,
        {
            label: 'File',
            name: 'file',
            type: 'image',
            required: true,
            description: 'The file to download',
        },
    ],
};

export const actionTemplates: Template[] = [
    linkActionTemplate,
    videoActionTemplate,
    scrollActionTemplate,
    downloadActionTemplate,
];

export const actionsFieldSchema = {
    label: 'Actions',
    name: 'actions',
    type: 'object',
    list: true,
    templates: actionTemplates,
};

