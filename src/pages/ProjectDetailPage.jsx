import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import Reveal from '@/components/Reveal';
import ProjectImage from '@/components/ProjectImage';
import { getProject, getAdjacentProjects } from '@/data/projects';

function DetailSection({ title, children }) {
    return (
        <div className="grid gap-4 border-t border-border py-12 md:grid-cols-12 md:gap-12 md:py-16">
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground md:col-span-4">
                {title}
            </h2>
            <div className="md:col-span-8">{children}</div>
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
                    <title>Project Not Found — Your Name</title>
                    <meta name="description" content="This project could not be found." />
                </Helmet>
                <section className="container max-w-6xl py-32 text-center">
                    <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                        Project not found
                    </h1>
                    <p className="mt-4 text-sm text-muted-foreground">
                        The project you&apos;re looking for doesn&apos;t exist or was removed.
                    </p>
                    <Link
                        to="/work"
                        className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
                        Back to Work
                    </Link>
                </section>
            </>
        );
    }

    const { prev, next } = getAdjacentProjects(slug);

    return (
        <>
            <Helmet>
                <title>{`${project.title} — Your Name`}</title>
                <meta name="description" content={project.description} />
            </Helmet>

            <article className="container max-w-6xl pb-32 pt-16 md:pt-24">
                <Reveal>
                    <Link
                        to="/work"
                        className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
                        Back to Work
                    </Link>
                </Reveal>

                {/* Header */}
                <Reveal delay={0.06}>
                    <div className="mt-10">
                        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                            {project.category} · {project.year}
                        </p>
                        <h1 className="mt-4 max-w-3xl text-[clamp(2.25rem,7vw,4.5rem)] font-semibold leading-[1.06] tracking-tight text-foreground">
                            {project.title}
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                            {project.description}
                        </p>
                    </div>
                </Reveal>

                {/* Meta */}
                <Reveal delay={0.12}>
                    <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
                        <div className="bg-background p-5 md:p-6">
                            <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                                Year
                            </dt>
                            <dd className="mt-2 text-sm font-medium text-foreground">{project.year}</dd>
                        </div>
                        <div className="bg-background p-5 md:p-6">
                            <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                                Role
                            </dt>
                            <dd className="mt-2 text-sm font-medium text-foreground">{project.role}</dd>
                        </div>
                        <div className="bg-background p-5 md:p-6">
                            <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                                Category
                            </dt>
                            <dd className="mt-2 text-sm font-medium text-foreground">{project.category}</dd>
                        </div>
                        <div className="bg-background p-5 md:p-6">
                            <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                                Stack
                            </dt>
                            <dd className="mt-2 flex flex-wrap gap-1.5">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </dd>
                        </div>
                    </dl>
                </Reveal>

                {/* Links */}
                <Reveal delay={0.16}>
                    <div className="mt-6 flex flex-wrap gap-3">
                        {project.liveUrl ? (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex min-h-[44px] items-center gap-1.5 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98]"
                            >
                                View Live Site
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                        ) : (
                            <span className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl border border-dashed border-border px-5 py-3 text-sm font-medium text-muted-foreground">
                                Live link — add URL in projects.js
                            </span>
                        )}
                        {project.sourceUrl ? (
                            <a
                                href={project.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex min-h-[44px] items-center gap-1.5 rounded-xl border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-foreground/25 hover:bg-secondary active:scale-[0.98]"
                            >
                                View Source Code
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                        ) : (
                            <span className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl border border-dashed border-border px-5 py-3 text-sm font-medium text-muted-foreground">
                                Source link — add URL in projects.js
                            </span>
                        )}
                    </div>
                </Reveal>

                {/* Screenshot */}
                <Reveal delay={0.2}>
                    <ProjectImage
                        className="mt-16 aspect-[16/9]"
                        label="Main project screenshot"
                    />
                </Reveal>

                {/* Editable case-study sections */}
                <div className="mt-20 md:mt-24">
                    <DetailSection title="Overview">
                        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                            {project.overview}
                        </p>
                    </DetailSection>

                    <DetailSection title="Challenge">
                        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                            {project.challenge}
                        </p>
                    </DetailSection>

                    <DetailSection title="My Role">
                        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                            {project.myRole}
                        </p>
                    </DetailSection>

                    <DetailSection title="What I Built">
                        <ul className="space-y-3">
                            {project.built.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                        <Check className="h-3 w-3 text-primary" strokeWidth={2.5} />
                                    </span>
                                    <span className="text-sm leading-relaxed text-muted-foreground md:text-base">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </DetailSection>

                    <DetailSection title="Technical Approach">
                        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                            {project.approach}
                        </p>
                    </DetailSection>

                    <DetailSection title="Outcome">
                        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                            {project.outcome}
                        </p>
                    </DetailSection>
                </div>

                {/* Prev / Next */}
                <nav
                    className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2"
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
                            className="group bg-background p-6 text-left transition-colors hover:bg-secondary/60 sm:text-right md:p-8"
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
            </article>
        </>
    );
}
