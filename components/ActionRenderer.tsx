'use client';

import React from 'react';
import Link from 'next/link';
import { tinaField } from 'tinacms/dist/react';
import { Button } from './ui/button';
import { PlayButton } from './ui/play-button';
import { Icon } from './icon';
import { useVideoDialog } from './ui/VideoDialogContext';

type ActionData = {
    __typename?: string;
    _template?: string;
    label?: string | null;
    variant?: string | null;
    size?: string | null;
    icon?: any;
    link?: string | null;
    videoSrc?: string | null;
    anchor?: string | null;
    file?: string | null;
    usePlayButton?: boolean | null;
};

interface ActionRendererProps {
    action: ActionData;
    className?: string;
}

export const ActionRenderer = ({ action, className }: ActionRendererProps) => {
    const raw = action._template || action.__typename?.split(/Actions/).pop() || '';
    const template = raw.charAt(0).toLowerCase() + raw.slice(1);
    const variant = (action.variant as any) || 'yellow';
    const size = (action.size as any) || 'default';
    const { openVideo } = useVideoDialog();

    const inner = (
        <>
            {action.icon && <Icon data={action.icon} />}
            <span className="text-nowrap">{action.label}</span>
        </>
    );

    switch (template) {
        case 'linkAction':
            return (
                <div data-tina-field={tinaField(action)} className={className}>
                    <Button asChild size={size} variant={variant}>
                        <Link href={action.link || '/'}>{inner}</Link>
                    </Button>
                </div>
            );

        case 'videoAction':
            if (action.usePlayButton) {
                return (
                    <div data-tina-field={tinaField(action)} className={className}>
                        <PlayButton
                            size={size}
                            variant={variant}
                            onClick={() => action.videoSrc && openVideo(action.videoSrc)}
                            aria-label={action.label || 'Play video'}
                        />
                    </div>
                );
            }
            return (
                <div data-tina-field={tinaField(action)} className={className}>
                    <Button
                        size={size}
                        variant={variant}
                        onClick={() => action.videoSrc && openVideo(action.videoSrc)}
                    >
                        {inner}
                    </Button>
                </div>
            );

        case 'scrollAction':
            return (
                <div data-tina-field={tinaField(action)} className={className}>
                    <Button
                        size={size}
                        variant={variant}
                        onClick={() => {
                            if (action.anchor) {
                                const el = document.getElementById(action.anchor);
                                el?.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        {inner}
                    </Button>
                </div>
            );

        case 'downloadAction':
            return (
                <div data-tina-field={tinaField(action)} className={className}>
                    <Button asChild size={size} variant={variant}>
                        <a href={action.file || '#'} download>
                            {inner}
                        </a>
                    </Button>
                </div>
            );

        default:
            return null;
    }
};

