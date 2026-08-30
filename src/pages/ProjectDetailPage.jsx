import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    Check,
    Code2,
    ExternalLink,
    Layers3,
    Sparkles,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import ProjectImage from '@/components/ProjectImage';
import { getProject, getAdjacentProjects } from '@/data/projects';
import { cn } from '@/lib/utils';

function DetailSection({ title, children, className }) {
    return (
        <section
            className={cn(
                'grid gap-4 border-t border-border py-10 md:grid-cols-12 md:gap-12 md:py-16',
                className
            )}
        >
            <div className="md:col-span-4">
                <h2 className="text-sm md:text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {title}
                </h2>
            </div>

            <div className="md:col-span-8">{children}</div>
        </section>
    );
}

function MetaCard({ label, children }) {
    return (
        <div className="bg-background p-5 transition-colors hover:bg-secondary/30 md:p-6">
            <dt className="text-sm md:text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {label}
            </dt>

            <dd className="mt-3 text-base md:text-sm font-medium text-foreground">{children}</dd>
        </div>
    );
}

export default function ProjectDetailPage() {
    const { slug } = useParams();
    const project = getProject(slug);

    if (!project) {
        return (
            <>
                <Helmet>
                    <title>Project Not Found — Haris Nadeem</title>
                    <meta
                        name="description"
                        content="This project could not be found."
                    />
                </Helmet>

                <section className="container max-w-7xl py-32">
                    <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-border bg-secondary/40 p-8 text-center md:p-12">
                        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Layers3 className="h-6 w-6" strokeWidth={1.75} />
                        </span>

                        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                            Not found
                        </p>

                        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
                            This project is unavailable.
                        </h1>

                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                            The project you are looking for does not exist, may have been
                            moved, or is no longer publicly available.
                        </p>

                        <Link
                            to="/work"
                            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98]"
                        >
                            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
                            Browse all work
                        </Link>
                    </div>
                </section>
            </>
        );
    }

    const { prev, next } = getAdjacentProjects(slug);

    return (
        <>
            <Helmet>
                <title>{`${project.title} — Haris Nadeem | Full-Stack Developer`}</title>

                <meta name="description" content={project.description} />
            </Helmet>

            <article className="container max-w-7xl pb-32 pt-8 md:pt-12">
                {/* Back button */}
                {/* <Reveal>
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border transition-all group-hover:border-primary/35 group-hover:bg-primary/10 group-hover:text-primary">
              <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            </span>

            Back to work
          </Link>
        </Reveal> */}

                {/* Hero */}
                <Reveal delay={0.06}>
                    <div className="mt-0 grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                                {project.category}
                            </p>

                            <h1 className="mt-4 max-w-4xl text-[clamp(2.5rem,7vw,4.75rem)] font-semibold leading-[1.03] tracking-tight text-foreground">
                                {project.title}
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                                {project.description}
                            </p>
                        </div>

                        {/* Hero project snapshot */}
                        <aside className="relative overflow-hidden rounded-2xl border border-border bg-secondary/40 p-6">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/10 blur-2xl"
                            />

                            <div className="relative">
                                <p className="text-sm md:text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                                    Project snapshot
                                </p>

                                <div className="mt-5 space-y-4">
                                    <div className="flex items-start gap-3">
                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                            <Layers3 className="h-4 w-4" strokeWidth={1.8} />
                                        </span>

                                        <div>
                                            <p className="text-sm md:text-xs uppercase tracking-wider text-muted-foreground">
                                                Category
                                            </p>
                                            <p className="mt-1 text-base md:text-sm font-medium text-foreground">
                                                {project.category}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                            <Code2 className="h-4 w-4" strokeWidth={1.8} />
                                        </span>

                                        <div>
                                            <p className="text-sm md:text-xs uppercase tracking-wider text-muted-foreground">
                                                Role
                                            </p>
                                            <p className="mt-1 text-base md:text-sm font-medium text-foreground">
                                                {project.role}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                            <Sparkles className="h-4 w-4" strokeWidth={1.8} />
                                        </span>

                                        <div>
                                            <p className="text-sm md:text-xs uppercase tracking-wider text-muted-foreground">
                                                Year
                                            </p>
                                            <p className="mt-1 text-base md:text-sm font-medium text-foreground">
                                                {project.year}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </Reveal>

                {/* Action links */}
                <Reveal delay={0.12}>
                    <div className="mt-10 flex flex-wrap gap-3">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-5 py-3 text:base md:text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98]"
                            >
                                View live project
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        )}

                        {project.sourceUrl && (
                            <a
                                href={project.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex min-h-11 items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text:base md:text-sm font-semibold text-foreground transition-all hover:border-foreground/25 hover:bg-secondary active:scale-[0.98]"
                            >
                                View source code
                                <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        )}

                        {!project.liveUrl && !project.sourceUrl && (
                            <span className="inline-flex min-h-11 items-center rounded-xl border border-dashed border-border bg-secondary/30 px-5 py-3 text-sm text-muted-foreground">
                                Private project — links are not publicly available.
                            </span>
                        )}
                    </div>
                </Reveal>

                {/* Meta */}
                <Reveal delay={0.16}>
                    <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
                        <MetaCard label="Year">{project.year}</MetaCard>

                        <MetaCard label="Role">{project.role}</MetaCard>

                        <MetaCard label="Category">{project.category}</MetaCard>

                        <MetaCard label="Technology">
                            <span className="flex flex-wrap gap-1.5">
                                {project.tags?.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-border bg-background px-2.5 py-1 text-sm md:text-xs font-medium text-muted-foreground"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </span>
                        </MetaCard>
                    </dl>
                </Reveal>

                {/* Main screenshot */}
                <Reveal delay={0.2}>
                    <figure className="relative mt-16 overflow-hidden rounded-2xl border border-border bg-secondary/40 p-2 shadow-sm md:mt-20 md:p-3">
                        <ProjectImage
                            src={project.imageUrl}
                            alt={project.imageAlt || `${project.title} project preview`}
                            className="aspect-[16/9] w-full overflow-hidden rounded-xl"
                        />

                        <figcaption className="px-2 pb-1 pt-4 text-sm text-muted-foreground">
                            Project preview — {project.title}
                        </figcaption>
                    </figure>
                </Reveal>

                {/* Case study */}
                <div className="mt-20 md:mt-28">
                    <Reveal>
                        <div className="max-w-2xl">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                                Case study
                            </p>

                            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                                From challenge to a practical solution.
                            </h2>

                            <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-base">
                                A closer look at the problem, the build process, and the result
                                behind this project.
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-8">
                        <DetailSection title="Overview">
                            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-base">
                                {project.overview}
                            </p>
                        </DetailSection>

                        <DetailSection title="Challenge">
                            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-base">
                                {project.challenge}
                            </p>
                        </DetailSection>

                        <DetailSection title="My role">
                            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-base">
                                {project.myRole}
                            </p>
                        </DetailSection>

                        <DetailSection title="What I built">
                            <ul className="max-w-2xl space-y-4">
                                {project.built?.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                            <Check
                                                className="h-3 w-3 text-primary"
                                                strokeWidth={2.5}
                                            />
                                        </span>

                                        <span className="text-base leading-relaxed text-muted-foreground md:text-base">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </DetailSection>

                        <DetailSection title="Technical approach">
                            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-base">
                                {project.approach}
                            </p>
                        </DetailSection>

                        <DetailSection title="Outcome">
                            <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary/40 p-6 md:p-7">
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/10 blur-2xl"
                                />

                                <p className="relative max-w-2xl text-base leading-relaxed text-foreground md:text-base">
                                    {project.outcome}
                                </p>
                            </div>
                        </DetailSection>
                    </div>
                </div>

                {/* CTA */}
                <Reveal delay={0.08}>
                    <section className="relative mt-8 overflow-hidden rounded-2xl border border-border bg-secondary/40 p-6 md:mt-12 md:p-8">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl"
                        />

                        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                            <div className="max-w-2xl">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                                    Have a similar idea?
                                </p>

                                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                                    Let’s build something useful.
                                </h2>

                                <p className="mt-3 text-base md:text-sm leading-relaxed text-muted-foreground">
                                    If you need a website, web application, dashboard, e-commerce
                                    experience, or automation workflow, let’s discuss the best
                                    way to bring it to life.
                                </p>
                            </div>

                            <Link
                                to="/book-a-call"
                                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98] sm:w-auto"
                            >
                                Book a free call
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </Link>
                        </div>
                    </section>
                </Reveal>

                {/* Previous / next project navigation */}
                {(prev || next) && (
                    <nav
                        className={cn(
    'mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border',
    prev && next ? 'grid-cols-2' : 'grid-cols-1'
)}
                        aria-label="More projects"
                    >
                        {prev && (
                            <Link
                                to={`/work/${prev.slug}`}
                                className="group bg-background p-6 transition-colors hover:bg-secondary/60 md:p-8"
                            >
                                <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                                    <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
                                    Previous project
                                </span>

                                <p className="mt-3 text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                                    {prev.title}
                                </p>
                            </Link>
                        )}

                        {next && (
                            <Link
                                to={`/work/${next.slug}`}
                                className={cn(
                                    'group bg-background p-6 transition-colors hover:bg-secondary/60 md:p-8',
                                    prev && 'sm:text-right'
                                )}
                            >
                                <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                                    Next project
                                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                                </span>

                                <p className="mt-3 text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                                    {next.title}
                                </p>
                            </Link>
                        )}
                    </nav>
                )}
            </article>
        </>
    );
}