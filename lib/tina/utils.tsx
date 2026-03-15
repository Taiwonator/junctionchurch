// lib/tina/utils.tsx
import React from 'react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

type TinaMarkdownContent = React.ComponentProps<typeof TinaMarkdown>['content'];

export const flattenConsecutiveTags = (content: TinaMarkdownContent): TinaMarkdownContent => {
    return content;
};

/**
 * Renders a single text node with formatting (bold, italic, etc.)
 */
const renderTextNode = (node: any, index: number): React.ReactNode => {
    if (!node) return null;

    if (node.type === 'text') {
        let text = node.text || '';

        // Apply formatting
        if (node.bold && node.italic) {
            return (
                <strong key={index}>
                    <em className="text-yellow-400 not-italic">{text}</em>
                </strong>
            );
        }
        if (node.bold) {
            return <strong key={index}>{text}</strong>;
        }
        if (node.italic) {
            return <em key={index} className="text-yellow-400 not-italic">{text}</em>;
        }
        if (node.code) {
            return <code key={index}>{text}</code>;
        }

        return <React.Fragment key={index}>{text}</React.Fragment>;
    }

    return null;
};

/**
 * Extracts heading elements from TinaCMS rich-text content and renders them as HTML
 * with each heading wrapped in a span for styling control.
 * 
 * @param content - TinaCMS rich-text content
 * @param headingType - The heading type to extract (h1, h2, etc.)
 * @param spanClassName - Optional className to apply to each span wrapper
 * @returns Array of React elements, each representing a heading wrapped in a span
 */
export const renderHeadingsAsSpans = (
    content: TinaMarkdownContent | undefined,
    headingType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1',
    spanClassName?: string
): React.ReactNode[] => {
    if (!content || !content.children || !Array.isArray(content.children)) {
        return [];
    }

    // Filter for the specified heading type
    const headings = content.children.filter((child: any) => child.type === headingType);

    // Render each heading's content wrapped in a span
    return headings.map((heading: any, headingIndex: number) => {
        if (!heading.children || !Array.isArray(heading.children)) {
            return null;
        }

        return (
            <span key={headingIndex} className={spanClassName}>
                {heading.children.map((child: any, childIndex: number) =>
                    renderTextNode(child, childIndex)
                )}
            </span>
        );
    }).filter(Boolean);
};

/**
 * Extracts all text content from TinaCMS rich-text headings (without formatting)
 *
 * @param content - TinaCMS rich-text content
 * @param headingType - The heading type to extract (h1, h2, etc.)
 * @returns Array of plain text strings
 */
export const extractHeadingTexts = (
    content: TinaMarkdownContent | undefined,
    headingType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1'
): string[] => {
    if (!content || !content.children || !Array.isArray(content.children)) {
        return [];
    }

    return content.children
        .filter((child: any) => child.type === headingType)
        .map((heading: any) => {
            if (!heading.children || !Array.isArray(heading.children)) {
                return '';
            }

            return heading.children
                .filter((child: any) => child.type === 'text')
                .map((textNode: any) => textNode.text || '')
                .join('');
        })
        .filter(Boolean);
};

/**
 * Renders paragraph elements from TinaCMS rich-text content as HTML
 *
 * @param content - TinaCMS rich-text content
 * @param className - Optional className to apply to each paragraph
 * @returns Array of React paragraph elements
 */
export const renderParagraphs = (
    content: TinaMarkdownContent | undefined,
    className?: string
): React.ReactNode[] => {
    if (!content || !content.children || !Array.isArray(content.children)) {
        return [];
    }

    // Filter for paragraph elements
    const paragraphs = content.children.filter((child: any) => child.type === 'p');

    // Render each paragraph
    return paragraphs.map((paragraph: any, paragraphIndex: number) => {
        if (!paragraph.children || !Array.isArray(paragraph.children)) {
            return null;
        }

        return (
            <p key={paragraphIndex} className={className}>
                {paragraph.children.map((child: any, childIndex: number) =>
                    renderTextNode(child, childIndex)
                )}
            </p>
        );
    }).filter(Boolean);
};

