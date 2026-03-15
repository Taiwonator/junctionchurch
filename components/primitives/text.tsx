import React from 'react';
import { cn } from '@/lib/utils';

// Enum for background colors only
export enum ThemeColors {
    blue = 'blue',
    pink = 'pink',
    purple = 'purple',
    yellow = 'yellow',
    none = 'none',
}

type ThemeColorKeys = keyof typeof ThemeColors;



// Props interface with typed string literals
export interface HeadlineProps {
    children: React.ReactNode;
    style?: 'primary' | 'secondary';
    background?: ThemeColorKeys;
    color?: 'black' | 'white';
    size?: 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall';
    className?: string;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

// Headline component
export const Headline: React.FC<HeadlineProps> = ({
    children,
    style = 'primary',
    background = ThemeColors.none,
    color = 'black',
    size = 'medium',
    className,
    as: Tag = 'h1',
}) => {
    // Style mappings
    const styleClasses = {
        primary: 'font-bold tracking-tight',
        secondary: 'font-semibold tracking-normal',
    };

    // Background mappings using Junction Church brand colors
    const backgroundClasses = {
        [ThemeColors.blue]: 'bg-jc-blue',
        [ThemeColors.pink]: 'bg-jc-pink',
        [ThemeColors.purple]: 'bg-jc-purple',
        [ThemeColors.yellow]: 'bg-jc-yellow',
        [ThemeColors.none]: '',
    };

    // Color mappings
    const colorClasses = {
        black: 'text-jc-black',
        white: 'text-jc-white',
    };

    // Size mappings
    const sizeClasses = {
        xxlarge: 'text-7xl md:text-8xl lg:text-9xl',
        xlarge: 'text-6xl md:text-7xl lg:text-8xl',
        large: 'text-5xl md:text-6xl lg:text-7xl',
        medium: 'text-3xl md:text-4xl lg:text-5xl',
        small: 'text-2xl md:text-3xl lg:text-4xl',
        xsmall: 'text-xl md:text-2xl lg:text-3xl',
        xxsmall: 'text-lg md:text-xl lg:text-2xl',
    };

    // Add padding when background is applied
    const paddingClass = background !== ThemeColors.none ? 'px-4 py-2 inline-block' : '';

    return (
        <Tag
            className={cn(
                'font-display', // Oswald font for headings
                styleClasses[style],
                backgroundClasses[background],
                colorClasses[color],
                sizeClasses[size],
                paddingClass,
                className
            )}
        >
            {children}
        </Tag>
    );
};