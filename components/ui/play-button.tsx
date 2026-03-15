import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const playButtonVariants = cva(
    'jc-play-btn',
    {
        variants: {
            variant: {
                yellow: 'jc-play-btn-yellow',
                pink: 'jc-play-btn-pink',
                blue: 'jc-play-btn-blue',
                purple: 'jc-play-btn-purple',
                black: 'jc-play-btn-black',
                white: 'jc-play-btn-white',
                'outline-yellow': 'jc-play-btn-outline-yellow',
                'outline-pink': 'jc-play-btn-outline-pink',
                'outline-blue': 'jc-play-btn-outline-blue',
                'outline-purple': 'jc-play-btn-outline-purple',
                'outline-black': 'jc-play-btn-outline-black',
                'outline-white': 'jc-play-btn-outline-white',
            },
            size: {
                sm: 'jc-play-btn-sm',
                default: 'jc-play-btn-default',
                lg: 'jc-play-btn-lg',
            },
        },
        defaultVariants: {
            variant: 'pink',
            size: 'default',
        },
    }
);

const playIconSizeMap = {
    sm: { width: 16, height: 18, offset: 1 },
    default: { width: 24, height: 28, offset: 2 },
    lg: { width: 36, height: 42, offset: 3 },
} as const;

function PlayButton({
    className,
    variant,
    size,
    ...props
}: React.ComponentProps<'button'> &
    VariantProps<typeof playButtonVariants>) {
    const sizeKey = size || 'default';
    const iconSize = playIconSizeMap[sizeKey];

    return (
        <button
            type="button"
            data-slot="play-button"
            className={cn(playButtonVariants({ variant, size, className }))}
            {...props}
        >
            <svg
                viewBox="0 0 24 28"
                fill="currentColor"
                width={iconSize.width}
                height={iconSize.height}
                style={{ marginLeft: iconSize.offset }}
                aria-hidden="true"
            >
                <path d="M0 0 L24 14 L0 28 Z" />
            </svg>
        </button>
    );
}

export { PlayButton, playButtonVariants };

