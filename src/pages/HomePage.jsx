import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import ProjectImage from '@/components/ProjectImage';
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';

/* ── EDIT: capabilities shown in "What I Build" ─────────── */
const capabilities = [
    {
        title: 'Web Applications',
        text: 'Replace with a short description of the web apps you build — dashboards, SaaS products, internal tools, and the value they deliver.',
    },
    {
        title: 'Websites',
        text: 'Replace with a short description of the websites you build — marketing sites, portfolios, and content platforms that are fast and easy to maintain.',
    },
    {
        title: 'E-commerce',
        text: 'Replace with a short description of your e-commerce work — storefronts, checkout flows, payments, and integrations that convert.',
    },
    {
        title: 'Automation & Integrations',
        text: 'Replace with a short description of your automation work — connecting APIs, removing manual processes, and making systems talk to each other.',
    },
];

/* ── EDIT: stages shown in "From Idea to Launch" pipeline ─── */
const pipelineStages = [
    {
        num: '01',
        title: 'Interface',
        desc: 'Pixel-tuned, responsive interfaces built with component-driven React and utility-first styling.',
        tools: ['React.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
    },
    {
        num: '02',
        title: 'Application Logic',
        desc: 'Server-side APIs, realtime sockets, and business logic that stay fast and predictable under load.',
        tools: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets'],
    },
    {
        num: '03',
        title: 'Data Layer',
        desc: 'Modeled, indexed, and migrated databases — relational or document — with reliable access patterns.',
        tools: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase'],
    },
    {
        num: '04',
        title: 'Connected Systems',
        desc: 'Payments, AI, and automation wired together through webhooks, schedules, and bots.',
        tools: ['Payments', 'OpenAI API', 'n8n', 'Webhooks', 'Cron Jobs', 'Telegram Bots'],
    },
    {
        num: '05',
        title: 'Ship & Maintain',
        desc: 'Deployed to hardened VPS with reverse proxy and version control — then kept healthy.',
        tools: ['VPS', 'Nginx', 'Git', 'GitHub'],
    },
];

const featured = projects.filter((p) => p.featured).slice(0, 3);

export default function HomePage() {
    return (
        <>
            <Helmet>
                <title>Haris — Full-Stack Developer</title>
                <meta
                    name="description"
                    content="Portfolio of Your Name, a Full-Stack Developer building clean, reliable web applications, websites, e-commerce, and automation."
                />
            </Helmet>

            {/* ── Hero ─────────────────────────────────────── */}
            <section className="container max-w-6xl pb-28 pt-24 md:pb-17 md:pt-16">
                <Reveal>
                    <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
                        <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
                        Available for new projects
                    </div>
                </Reveal>

                <Reveal delay={0.08}>
                    {/* EDIT: your role headline */}
                    <h1 className="mt-10 max-w-4xl text-[clamp(2.25rem,7vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
                        Full-Stack Developer building clean, reliable digital products.
                    </h1>
                </Reveal>

                <Reveal delay={0.16}>
                    {/* EDIT: your short introduction */}
                    <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                        Replace this with a short introduction about who you are, what you
                        specialize in, and the kind of products you love to build — two or
                        three sentences is plenty.
                    </p>
                </Reveal>

                <Reveal delay={0.24}>
                    <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <Link
                            to="/work"
                            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98] sm:w-auto"
                        >
                            Explore Work
                            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:border-foreground/25 hover:bg-secondary active:scale-[0.98] sm:w-auto"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </Reveal>

                <Reveal delay={0.32}>
                    {/* EDIT: quick facts */}
                    <div className="mt-20 flex flex-wrap items-center gap-x-8 gap-y-3  pt-6 text-xs text-muted-foreground md:mt-4">
                        <span className="uppercase tracking-widest">Based in Your City</span>
                        <span className="uppercase tracking-widest">Open to freelance &amp; full-time</span>
                        <span className="uppercase tracking-widest">Working worldwide, remotely</span>
                    </div>
                </Reveal>
            </section>

            {/* ── Selected Work ────────────────────────────── */}
            <section className="border-t border-border">
                <div className="container max-w-6xl py-24 md:py-24">
                    <Reveal>
                        <div className="flex items-end justify-between gap-6">
                            <div>
                                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                                    01 — Selected Work
                                </p>
                                <h2 className="mt-4 text-[clamp(2rem,5vw,3rem)] font-semibold tracking-tight text-foreground">
                                    A few things I&apos;ve built
                                </h2>
                            </div>
                            <Link
                                to="/work"
                                className="group hidden items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary sm:inline-flex"
                            >
                                View all work
                                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </Reveal>

                    <div className="mt-16 space-y-24 md:mt-20 md:space-y-28">
                        {featured.map((project, i) => (
                            <Reveal key={project.slug} delay={0.05}>
                                <article
                                    className={cn(
                                        'grid items-center gap-8 md:grid-cols-12 md:gap-12'
                                    )}
                                >
                                    <Link
                                        to={`/work/${project.slug}`}
                                        className={cn(
                                            'group block md:col-span-7',
                                            i % 2 === 1 && 'md:order-2'
                                        )}
                                        aria-label={`View case study: ${project.title}`}
                                    >
                                        <ProjectImage
                                            className="aspect-[16/10]"
                                            label={`${project.title} — screenshot`}
                                        />
                                    </Link>

                                    <div className={cn('md:col-span-5', i % 2 === 1 && 'md:order-1')}>
                                        <div className="flex items-baseline gap-4">
                                            <span className="text-sm font-medium tabular-nums text-primary">
                                                {String(i + 1).padStart(2, '0')}
                                            </span>
                                            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                                                {project.category} · {project.year}
                                            </span>
                                        </div>
                                        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                                            {project.title}
                                        </h3>
                                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                                            {project.description}
                                        </p>
                                        <ul className="mt-5 flex flex-wrap gap-2">
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
                                            className="group mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                                        >
                                            View Case Study
                                            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal>
                        <div className="mt-16 sm:hidden">
                            <Link
                                to="/work"
                                className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                            >
                                View all work
                                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── What I Build ─────────────────────────────── */}
            <section className="border-y border-border bg-secondary/50">
                <div className="container max-w-6xl py-24 md:py-24">
                    <Reveal>
                        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                            02 — What I Build
                        </p>
                        <h2 className="mt-4 max-w-2xl text-[clamp(2rem,5vw,3rem)] font-semibold tracking-tight text-foreground">
                            Capabilities across the whole stack
                        </h2>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:mt-16 md:grid-cols-2">
                            {capabilities.map((cap, i) => (
                                <div
                                    key={cap.title}
                                    className="group bg-background p-8 transition-colors duration-200 hover:bg-secondary/60 md:p-10"
                                >
                                    <span className="text-sm font-medium tabular-nums text-primary">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                                        {cap.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                        {cap.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── From Idea to Launch ────────────────────── */}
            <section className="border-t border-border">
                <div className="container max-w-6xl py-24 md:py-24">
                    <Reveal>
                        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                            03 — From Idea to Launch
                        </p>
                        <h2 className="mt-4 max-w-2xl text-[clamp(2rem,5vw,3rem)] font-semibold tracking-tight text-foreground">
                            From idea to launch
                        </h2>
                        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                            The full build pipeline I can handle end to end — five connected
                            stages, from the first pixel to a shipped, maintained product.
                        </p>
                    </Reveal>

                    {/* Desktop: horizontal connected workflow */}
                    <Reveal delay={0.1}>
                        <div
                            className="mt-16 hidden md:grid md:grid-cols-5"
                            role="list"
                            aria-label="Build pipeline stages"
                        >
                            {pipelineStages.map((stage, i) => (
                                <div key={stage.num} role="listitem" className="group relative md:pr-6 last:md:pr-0">
                                    {/* connector line to the next stage */}
                                    {i < pipelineStages.length - 1 && (
                                        <span
                                            aria-hidden="true"
                                            className="absolute left-0 right-6 top-[30px] h-px bg-border transition-colors duration-300 group-hover:bg-[#B6F000]"
                                        />
                                    )}
                                    <span
                                        className="relative inline-block bg-background pr-4 text-5xl font-semibold tabular-nums text-muted-foreground transition-colors duration-300 group-hover:text-primary"
                                    >
                                        {stage.num}
                                    </span>
                                    <h3 className="mt-6 text-base font-semibold tracking-tight text-foreground">
                                        {stage.title}
                                    </h3>
                                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                                        {stage.desc}
                                    </p>
                                    <ul className="mt-4 flex flex-wrap gap-1.5">
                                        {stage.tools.map((tool) => (
                                            <li
                                                key={tool}
                                                className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors duration-200 group-hover:text-foreground"
                                            >
                                                {tool}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </Reveal>

                    {/* Mobile: vertical connected flow */}
                    <Reveal delay={0.1}>
                        <div
                            className="mt-12 md:hidden"
                            role="list"
                            aria-label="Build pipeline stages"
                        >
                            {pipelineStages.map((stage, i) => (
                                <div key={stage.num} role="listitem" className="group relative flex gap-4">
                                    {i < pipelineStages.length - 1 && (
                                        <span
                                            aria-hidden="true"
                                            className="absolute left-5 top-12 bottom-0 w-px bg-border"
                                        />
                                    )}
                                    <div className="w-10 shrink-0">
                                        <span className="text-3xl font-semibold tabular-nums text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                                            {stage.num}
                                        </span>
                                    </div>
                                    <div className="flex-1 pb-8 last:pb-0">
                                        <div className="rounded-xl border border-border bg-background p-5 transition-colors duration-200 group-hover:border-foreground/20">
                                            <h3 className="text-base font-semibold tracking-tight text-foreground">
                                                {stage.title}
                                            </h3>
                                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                                {stage.desc}
                                            </p>
                                            <ul className="mt-4 flex flex-wrap gap-1.5">
                                                {stage.tools.map((tool) => (
                                                    <li
                                                        key={tool}
                                                        className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground"
                                                    >
                                                        {tool}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── About ────────────────────────────────────── */}
            <section id="about" className="scroll-mt-20">
                <div className="container max-w-6xl py-24 md:py-24">
                    <div className="grid gap-10 md:grid-cols-12 md:gap-12">
                        <Reveal className="md:col-span-4">
                            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                                04 — About
                            </p>
                        </Reveal>
                        <div className="md:col-span-8">
                            <Reveal>
                                {/* EDIT: your about text */}
                                <p className="text-[clamp(1.75rem,4vw,2.25rem)] font-medium leading-snug tracking-tight text-foreground">
                                    Replace this with a short paragraph about yourself — your
                                    background, how you approach building products, and what
                                    clients or teams can expect when working with you.
                                </p>
                            </Reveal>
                            <Reveal delay={0.1}>
                                <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                                    Add a second, quieter paragraph here with more detail: how
                                    long you&apos;ve been building, the kinds of teams or
                                    industries you&apos;ve worked with, and what you care about
                                    most in your work.
                                </p>
                            </Reveal>
                            <Reveal delay={0.16}>
                                <Link
                                    to="/contact"
                                    className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                                >
                                    Get in touch
                                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </Link>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Final CTA ────────────────────────────────── */}
            <section className="border-t border-border bg-secondary/50">
                <div className="container max-w-6xl py-28 text-center md:py-36">
                    <Reveal>
                        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                            05 — Next Step
                        </p>
                        <h2 className="mx-auto mt-6 max-w-3xl text-[clamp(2.25rem,7vw,4.5rem)] font-semibold leading-[1.06] tracking-tight text-foreground">
                            Have a project in mind?
                        </h2>
                        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                            Replace this with a sentence about the kind of work you&apos;re
                            looking for and how quickly you usually reply.
                        </p>
                    </Reveal>
                    <Reveal delay={0.12}>
                        <Link
                            to="/contact"
                            className="group mt-10 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98]"
                        >
                            Start a Conversation
                            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </Link>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
