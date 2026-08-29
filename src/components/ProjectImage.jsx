import React from 'react';
import { ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ProjectImage({
    src,
    alt = 'Project image',
    label = 'Project image',
    className,
}) {
    return (
        <div
            className={cn(
                'relative overflow-hidden rounded-xl border border-border bg-secondary',
                className
            )}
        >
            {src ? (
                <img
                    src={src}
                    alt={alt}
                    width={1920}
                    height={1080}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.015]"
                />
            ) : (
                <>
                    <div className="placeholder-grid absolute inset-0" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                        <ImageIcon
                            className="h-5 w-5 text-muted-foreground/60"
                            strokeWidth={1.5}
                        />

                        <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground/80">
                            {label}
                        </span>
                    </div>
                </>
            )}
        </div>
    );
}