// Bun run tools/create-block-template.ts


// # Steps for adding a new block
// 1. Create the block component in `components/blocks`
// 2. Create the block schema in `tina/collection/page.ts`
// 3. Import and add the block schema to the `Page` collection in `tina/collection/page.ts`
// 4. Add the block to the `Blocks` component in `components/blocks/index.tsx`
// 5. Add the block to the `components` object in `components/mdx-components.tsx`

// import Bun
import Bun from 'bun';

const blockTemplates = [
    // Hero Blocks
    { name: 'hero__brand', label: 'Hero (Brand)' },
    { name: 'hero__label', label: 'Hero (Label)' },
    { name: 'hero__logo_subtle', label: 'Hero (Subtle Logo)' },
    { name: 'hero__logo_dominant', label: 'Hero (Dominant Logo)' },
    { name: 'hero__split_large', label: 'Hero (Split · Large)' },
    { name: 'hero__split_compact', label: 'Hero (Split · Compact)' },

    // Header Blocks
    { name: 'header__announcement', label: 'Header (Announcement)' },
    { name: 'header__minimal', label: 'Header (Minimal)' },
    { name: 'header__split', label: 'Header (Split)' },
    { name: 'header__stacked', label: 'Header (Stacked)' },
    { name: 'header__mega', label: 'Header (Mega)' },

    // Section Blocks
    { name: 'section__feature', label: 'Feature Section (Standard)' },
    { name: 'section__feature_compact', label: 'Feature Section (Compact)' },
    { name: 'section__split', label: 'Feature Section (Split)' },

    // Grid Blocks
    { name: 'grid__content', label: 'Content Grid' },
    { name: 'grid__info', label: 'Info Grid' },
    { name: 'grid__cards_standard', label: 'Card Grid (Standard)' },
    { name: 'grid__cards_minimal', label: 'Card Grid (Minimal)' },
    { name: 'grid__cards_tall', label: 'Card Grid (Tall)' },
    { name: 'grid__people', label: 'People Grid' },
    { name: 'grid__images', label: 'Image Grid' },

    // Carousel Blocks
    { name: 'carousel__media', label: 'Carousel (Media)' },
    { name: 'carousel__cards', label: 'Carousel (Cards)' },

    // List Blocks
    { name: 'list__ordered', label: 'List (Ordered)' },
    { name: 'list__accordion', label: 'List (Accordion)' },
    { name: 'list__split_sticky', label: 'List (Split Sticky)' },

    // Media & Utility Blocks
    { name: 'media__video', label: 'Video Block' },
    { name: 'embed__default', label: 'Embed Block' },
    { name: 'form__default', label: 'Form Block' },
    { name: 'prose__default', label: 'Prose' },

    // Gallery Blocks
    { name: 'gallery__collage', label: 'Image Collage' },
    { name: 'gallery__scrolling', label: 'Image (Scrolling Text)' },
];

const createBlockTemplate: (name: string, label: string) => string = (name, label) => {
    const variableName = label.replace(/[^a-zA-Z0-9]/g, '');
    const lowercasedVariableName = variableName.charAt(0).toLowerCase() + variableName.slice(1);
    console.log('variableName: ', variableName)
    return (`
import React from 'react';
import type { Template } from 'tinacms';
import { tinaField } from 'tinacms/dist/react';
import { PageBlocks${variableName} } from '@/tina/__generated__/types';
import { Section, sectionBlockSchemaField } from '../layout/section';

export const ${variableName} = ({ data }: { data: PageBlocks${variableName} }) => {
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

export const ${lowercasedVariableName}BlockSchema: Template = {
    name: '${name}',
    label: '${label}',
    ui: {
        previewSrc: '/blocks/placeholder.png',
        defaultItem: {
            text: 'This is a ${label} block',
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
`)
}

// Create tmp directory if it doesn't exist
const dir = './components/blocks';
await Bun.write(`${dir}/.gitkeep`, ''); // This creates the directory

// Iterate over blockTemplates and create files
for await (const block of blockTemplates) {
    const blockTemplate = createBlockTemplate(block.name, block.label);
    const fileName = `${dir}/${block.name}.tsx`;
    await Bun.write(fileName, blockTemplate);
    console.log(`Created: ${fileName}`);
}

console.log('\n\n=== TEMPLATES TO ADD ===\n');
console.log('templates: [');
for (const block of blockTemplates) {
    const variableName = block.label.replace(/[^a-zA-Z0-9]/g, '');
    const lowercasedVariableName = variableName.charAt(0).toLowerCase() + variableName.slice(1);
    console.log(`  ${lowercasedVariableName}BlockSchema,`);
}
console.log('],\n');

console.log('\n=== BLOCK COMPONENT CASES ===\n');
console.log('const Block = (block: PageBlocks) => {');
console.log('  switch (block.__typename) {');
for (const block of blockTemplates) {
    const variableName = block.label.replace(/[^a-zA-Z0-9]/g, '');
    const pascalCaseName = block.name.split(/[-_]/).map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join('');
    const typeNameSuffix = block.name.split(/[-_]/).map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join('');
    console.log(`    case "PageBlocks${typeNameSuffix}":`);
    console.log(`      return <${variableName} data={block} />;`);
}
console.log('    default:');
console.log('      return null;');
console.log('  }');
console.log('}\n');

console.log('\n=== SCHEMA IMPORTS ===\n');
for (const block of blockTemplates) {
    const variableName = block.label.replace(/[^a-zA-Z0-9]/g, '');
    const lowercasedVariableName = variableName.charAt(0).toLowerCase() + variableName.slice(1);
    console.log(`import { ${lowercasedVariableName}BlockSchema } from '@/components/blocks/${block.name}';`);
}

console.log('\n=== COMPONENT IMPORTS ===\n');
for (const block of blockTemplates) {
    const variableName = block.label.replace(/[^a-zA-Z0-9]/g, '');
    console.log(`import { ${variableName} } from "./${block.name}";`);
}

export { }