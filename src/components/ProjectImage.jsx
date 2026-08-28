import React from 'react';
import { ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Placeholder image slot for projects.
 * Replace this component's contents with a real <img> (or pass an
 * `src` prop and render it) when you add your own screenshots.
 */
export default function ProjectImage({ label = 'Project image', className }) {
    return (
        <div
            className={cn(
                'relative overflow-hidden rounded-xl border border-border bg-secondary',
                className
            )}
        >
            <div className="placeholder-grid absolute inset-0" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <ImageIcon className="h-5 w-5 text-muted-foreground/60" strokeWidth={1.5} />
                <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground/80">
                    {label}
                </span>
            </div>
        </div>
    );
}
