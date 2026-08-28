import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import ProjectImage from '@/components/ProjectImage';
import { projects, categories } from '@/data/projects';
import { cn } from '@/lib/utils';

export default function WorkPage() {
    const [filter, setFilter] = useState('All');

    const visible =
        filter === 'All' ? projects : projects.filter((p) => p.category === filter);

    return (
        <>
            <Helmet>
                <title>Work — Your Name</title>
                <meta
                    name="description"
                    content="Selected projects by Your Name — web applications, websites, e-commerce, and automation work."
                />
            </Helmet>

            <section className="container max-w-6xl pb-32 pt-24 md:pt-32">
                <Reveal>
                    <h1 className="text-[clamp(2.25rem,7vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
                        Work
                    </h1>
                    {/* EDIT: your work page introduction */}
                    <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                        Replace this with a short introduction to your work — the kinds of
                        projects you take on, who you build for, and what ties them together.
                    </p>
                </Reveal>

                {/* Filters */}
                <Reveal delay={0.08}>
                    <div
                        className="mt-12 flex flex-wrap gap-2"
                        role="group"
                        aria-label="Filter projects by category"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setFilter(cat)}
                                aria-pressed={filter === cat}
                                className={cn(
                                    'inline-flex items-center rounded-full border px-4 min-h-[44px] text-sm font-medium transition-all active:scale-[0.97]',
                                    filter === cat
                                        ? 'border-primary bg-primary text-primary-foreground'
                                        : 'border-border bg-background text-muted-foreground hover:border-foreground/25 hover:text-foreground'
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </Reveal>

                {/* Archive grid */}
                {visible.length > 0 ? (
                    <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 md:mt-20">
                        {visible.map((project, i) => (
                            <Reveal key={project.slug} delay={(i % 2) * 0.08}>
                                <article className="group">
                                    <Link
                                        to={`/work/${project.slug}`}
                                        aria-label={`View project: ${project.title}`}
                                    >
                                        <ProjectImage
                                            className="aspect-[16/10]"
                                            label={`${project.title} — image`}
                                        />
                                    </Link>
                                    <div className="mt-6">
                                        <div className="flex items-baseline justify-between gap-4">
                                            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                                                <Link
                                                    to={`/work/${project.slug}`}
                                                    className="transition-colors hover:text-primary"
                                                >
                                                    {project.title}
                                                </Link>
                                            </h2>
                                            <span className="shrink-0 text-sm tabular-nums text-muted-foreground">
                                                {project.year}
                                            </span>
                                        </div>
                                        <p className="mt-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                                            {project.category}
                                        </p>
                                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                            {project.description}
                                        </p>
                                        <ul className="mt-4 flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <li
                                                    key={tag}
                                                    className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
                                                >
                                                    {tag}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            to={`/work/${project.slug}`}
                                            className="group/link mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                                        >
                                            View Project
                                            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                                        </Link>
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                ) : (
                    <div className="mt-16 rounded-2xl border border-dashed border-border bg-secondary/40 px-8 py-16 text-center">
                        <p className="text-sm font-medium text-foreground">
                            No projects in this category yet.
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Add one in <code className="rounded bg-secondary px-1.5 py-0.5 text-xs">src/data/projects.js</code> and it will appear here automatically.
                        </p>
                    </div>
                )}
            </section>
        </>
    );
}
