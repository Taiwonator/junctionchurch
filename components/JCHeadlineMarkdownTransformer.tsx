// components/JCHeadlineMarkdownTransformer.tsx
import React from 'react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

type TinaMarkdownContent = React.ComponentProps<typeof TinaMarkdown>['content'];

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
 * Extracts heading elements from TinaCMS rich-text content and renders them as spans
 */
const renderHeadingsAsSpans = (
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

interface JCHeadlineMarkdownTransformerProps {
    content: TinaMarkdownContent | undefined;
    headingType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    spanClassName?: string;
    className?: string;
}

/**
 * JCHeadlineMarkdownTransformer
 * 
 * Transforms TinaCMS rich-text content containing multiple heading elements
 * into a single heading tag with each original heading rendered as a span child.
 * 
 * This allows for full control over styling individual lines within a single
 * semantic heading element.
 * 
 * @example
 * // TinaCMS content with 2 h1 elements:
 * // <h1>Welcome</h1>
 * // <h1>Home</h1>
 * 
 * // Renders as:
 * <JCHeadlineMarkdownTransformer 
 *   content={data.headlineRich} 
 *   headingType="h1"
 *   spanClassName="block"
 *   className="text-6xl font-bold"
 * />
 * 
 * // Output:
 * // <h1 class="text-6xl font-bold">
 * //   <span class="block">Welcome</span>
 * //   <span class="block">Home</span>
 * // </h1>
 */
export const JCHeadlineMarkdownTransformer: React.FC<JCHeadlineMarkdownTransformerProps> = ({
    content,
    headingType = 'h1',
    spanClassName,
    className,
}) => {
    const headlineSpans = renderHeadingsAsSpans(content, headingType, spanClassName);

    if (headlineSpans.length === 0) {
        return null;
    }

    const HeadingTag = headingType;

    return (
        <HeadingTag className={className}>
            {headlineSpans}
        </HeadingTag>
    );
};

