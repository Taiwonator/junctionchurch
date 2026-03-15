import React from 'react';
import { cn } from '../../lib/utils';

interface StackProps extends React.HTMLProps<HTMLDivElement> {
    direction?: 'vertical' | 'horizontal';
    gap?: string;
    align?: 'start' | 'center' | 'end' | 'stretch';
    justify?: 'start' | 'center' | 'end' | 'between' | 'around';
}

export const Stack: React.FC<StackProps> = ({
    direction = 'vertical',
    gap = '4',
    align = 'stretch',
    justify = 'start',
    className,
    children,
    ...props
}) => {
    const directionClass = direction === 'horizontal' ? 'flex-row' : 'flex-col';
    const gapClass = `gap-${gap}`;

    const alignMap = {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
        stretch: 'items-stretch',
    };

    const justifyMap = {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between',
        around: 'justify-around',
    };

    return (
        <div
            className={cn(
                'flex',
                directionClass,
                gapClass,
                alignMap[align],
                justifyMap[justify],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};
