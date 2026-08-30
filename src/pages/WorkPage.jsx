import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Layers3,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import ProjectImage from '@/components/ProjectImage';
import { projects, categories } from '@/data/projects';
import { cn } from '@/lib/utils';

export default function WorkPage() {
  const [filter, setFilter] = useState('All');

  const visibleProjects = useMemo(() => {
    if (filter === 'All') return projects;

    return projects.filter((project) => project.category === filter);
  }, [filter]);

  const totalProjects = projects.length;

  return (
    <>
      <Helmet>
        <title>Work — Haris Nadeem | Full-Stack Developer</title>

        <meta
          name="description"
          content="Explore selected work by Haris Nadeem, including web applications, business websites, e-commerce stores, dashboards, automation, APIs, and full-stack development projects."
        />
      </Helmet>

      <section className="container max-w-7xl pb-32 pt-8 md:pt-12">
        {/* Hero */}
        <Reveal>
          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Selected work
              </p>

              <h1 className="mt-4 max-w-3xl text-[clamp(2.5rem,7vw,4.75rem)] font-semibold leading-[1.03] tracking-tight text-foreground">
                Digital products built to solve real problems.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                A selection of websites, web applications, dashboards,
                e-commerce experiences, and automation workflows. Each project
                is built with a focus on clarity, usability, performance, and
                practical business outcomes.
              </p>
            </div>

            {/* Desktop right-side summary */}
            <aside className="relative overflow-hidden rounded-2xl border border-border bg-secondary/40 p-6">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/10 blur-2xl"
              />

              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Portfolio snapshot
                </p>

                <p className="mt-3 text-4xl font-semibold tracking-tight text-foreground">
                  {String(totalProjects).padStart(2, '0')}
                </p>

                <p className="mt-1 text-base md:text-sm text-muted-foreground">
                  Selected projects and case studies
                </p>

                <div className="mt-6 space-y-3 border-t border-border pt-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Code2 className="h-4 w-4" strokeWidth={1.8} />
                    </span>

                    <span className="text-base md:text-sm text-foreground">
                      Full-stack development
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Layers3 className="h-4 w-4" strokeWidth={1.8} />
                    </span>

                    <span className="text-base md:text-sm text-foreground">
                      Web products and systems
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <BriefcaseBusiness className="h-4 w-4" strokeWidth={1.8} />
                    </span>

                    <span className="text-base md:text-sm text-foreground">
                      Built for real use cases
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Reveal>

        {/* Filter section */}
        <Reveal delay={0.08}>
          <div className="mt-14 border-y border-border py-5 md:mt-16">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Explore by category
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Showing{' '}
                  <span className="font-medium text-foreground">
                    {visibleProjects.length}
                  </span>{' '}
                  {visibleProjects.length === 1 ? 'project' : 'projects'}
                  {filter !== 'All' && (
                    <>
                      {' '}
                      in{' '}
                      <span className="font-medium text-foreground">
                        {filter}
                      </span>
                    </>
                  )}
                  .
                </p>
              </div>

              <div
                className="flex flex-wrap gap-2"
                role="group"
                aria-label="Filter projects by category"
              >
                {categories.map((category) => {
                  const isActive = filter === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setFilter(category)}
                      aria-pressed={isActive}
                      className={cn(
                        'inline-flex min-h-10 items-center rounded-full border px-4 text-base md:text-sm font-medium transition-all active:scale-[0.97]',
                        isActive
                          ? 'border-primary bg-primary text-primary-foreground shadow-sm shadow-primary/20'
                          : 'border-border bg-background text-muted-foreground hover:border-foreground/25 hover:bg-secondary hover:text-foreground'
                      )}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Project grid */}
        {visibleProjects.length > 0 ? (
          <div className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 md:mt-16 lg:gap-x-10 lg:gap-y-20">
            {visibleProjects.map((project, index) => (
              <Reveal key={project.slug} delay={(index % 2) * 0.08}>
                <article className="group">
                  <Link
                    to={`/work/${project.slug}`}
                    aria-label={`View project: ${project.title}`}
                    className="block overflow-hidden rounded-2xl border border-border bg-secondary/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/35 group-hover:shadow-xl group-hover:shadow-foreground/5"
                  >
                    <div className="overflow-hidden">
                      <ProjectImage
                        src={project.imageUrl}
                        alt={project.imageAlt || `${project.title} — project screenshot`}
                        label={`${project.title} — screenshot`}
                        className="aspect-[16/10]"
                      />
                    </div>
                  </Link>

                  <div className="mt-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                          {project.category}
                        </p>

                        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                          <Link
                            to={`/work/${project.slug}`}
                            className="transition-colors hover:text-primary"
                          >
                            {project.title}
                          </Link>
                        </h2>
                      </div>

                      <span className="mt-1 shrink-0 rounded-full border border-border bg-background px-3 py-1 text-sm md:text-xs font-medium tabular-nums text-muted-foreground">
                        {project.year}
                      </span>
                    </div>

                    <p className="mt-3 max-w-xl text-base md:text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    {project.tags?.length > 0 && (
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-sm md:text-xs font-medium text-muted-foreground"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}

                    <Link
                      to={`/work/${project.slug}`}
                      className="group/link mt-6 inline-flex items-center gap-2 text-base md:text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                    >
                      Explore project

                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/25 transition-all duration-200 group-hover/link:border-primary group-hover/link:bg-primary group-hover/link:text-primary-foreground">
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
                      </span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="mt-16 rounded-2xl border border-dashed border-border bg-secondary/40 px-8 py-16 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <BriefcaseBusiness className="h-5 w-5" strokeWidth={1.8} />
              </span>

              <h2 className="mt-5 text-lg font-semibold text-foreground">
                No projects found in this category.
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                Select another category to explore more work, or return to all
                projects.
              </p>

              <button
                type="button"
                onClick={() => setFilter('All')}
                className="mt-6 inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/25 hover:bg-secondary"
              >
                View all projects
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        )}

        {/* Bottom CTA */}
        <Reveal delay={0.08}>
          <section className="relative mt-20 overflow-hidden rounded-2xl border border-border bg-secondary/40 p-6 md:mt-28 md:p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl"
            />

            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm md:text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Have something in mind?
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  Let’s build the next project together.
                </h2>

                <p className="mt-3 text-base  leading-relaxed text-muted-foreground md:text-base">
                  Whether you are starting with an idea or improving an
                  existing product, I can help you plan and build a useful,
                  reliable digital solution.
                </p>
              </div>

              <Link
                to="/book-a-call"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base md:text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98] sm:w-auto"
              >
                Book a free call
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </section>
        </Reveal>
      </section>
    </>
  );
}