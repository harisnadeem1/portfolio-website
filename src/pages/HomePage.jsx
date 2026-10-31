import { useState, React } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight, ArrowUpRight, GraduationCap, BookOpen, ExternalLink,Award } from 'lucide-react';
import Reveal from '@/components/Reveal';
import ProjectImage from '@/components/ProjectImage';
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';


function ToolPill({ children }) {
    const [position, setPosition] = useState({ x: 50, y: 50 });

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();

        setPosition({
            x: ((event.clientX - rect.left) / rect.width) * 100,
            y: ((event.clientY - rect.top) / rect.height) * 100,
        });
    };

    return (
        <li
            onMouseMove={handleMouseMove}
            style={{
                '--mouse-x': `${position.x}%`,
                '--mouse-y': `${position.y}%`,
            }}
            className="tool-pill-reflective rounded-full border border-border bg-background px-2.5 py-1 text-sm md:text-xs font-medium text-muted-foreground transition-all duration-200 hover:border-primary/45 hover:text-foreground"
        >
            {children}
        </li>
    );
}

/* ── EDIT: capabilities shown in "What I Build" ─────────── */
const capabilities = [
    {
        title: 'Full-Stack Web Applications',
        text: 'Responsive, scalable web applications spanning polished frontend interfaces, backend APIs, authentication, databases, and deployment—powered by React, Next.js, TypeScript, Node.js, Express, and PostgreSQL.',
    },
    {
        title: 'E-Commerce & Payments',
        text: 'Conversion-focused digital stores with product management, streamlined checkout, automated delivery, and secure payment integrations including Shopify Payments, NowPayments, Malum, Bunq, and many more.',
    },
    {
        title: 'AI & Workflow Automation',
        text: 'AI API integrations, OpenAI-powered chat, n8n workflows, scheduled messaging, onboarding sequences, email updates, Telegram bots, and background-job automation.',
    },
    {
        title: 'Custom Software & Trading Tools',
        text: 'Tailored solutions for complex workflows, including IBKR Gateway integrations, market-data collection, risk-based order placement, desktop utilities, operational dashboards, and custom automations.',
    },
];

/* ── EDIT: stages shown in "From Idea to Launch" pipeline ─── */
const pipelineStages = [
    {
        num: '01',
        title: 'Interface',
        desc: 'Clean, responsive interfaces designed for usability and built with reusable, component-driven frontend architecture.',
        tools: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
        num: '02',
        title: 'Application Logic',
        desc: 'Reliable backend APIs, real-time features, and business logic designed to support practical product workflows.',
        tools: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'WebSockets'],
    },
    {
        num: '03',
        title: 'Data Layer',
        desc: 'Well-structured databases with dependable data models, efficient queries, and secure access patterns.',
        tools: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase'],
    },
    {
        num: '04',
        title: 'Connected Systems',
        desc: 'Payments, AI API integrations, and automated workflows connected through webhooks, schedules, bots, and n8n.',
        tools: ['Payments', 'AI APIs', 'n8n', 'Webhooks', 'Cron Jobs', 'Telegram Bots'],
    },
    {
        num: '05',
        title: 'Ship & Maintain',
        desc: 'Production deployment, server configuration, version control, and ongoing maintenance for reliable performance.',
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
                    content="Portfolio of Haris Nadeem, a Full-Stack Developer building clean, reliable web applications, websites, e-commerce, and automation."
                />
            </Helmet>

            {/* ── Hero ─────────────────────────────────────── */}
            <section className="container max-w-7xl pb-12 pt-8 sm:pt-36 md:pb-24 md:pt-12">
                <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_390px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_440px]">
                    {/* Left: Hero content */}
                    <div className="order-2 lg:order-1">
                        {/* <Reveal>
                            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-background px-3.5 py-1.5 text-sm font-medium text-muted-foreground shadow-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                                </span>
                                Crafting software that works
                            </div>
                        </Reveal> */}

                        <Reveal delay={0.08}>
                            <h1 className="mt-0 max-w-4xl text-[clamp(2.7rem,6.2vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-foreground">
                                Full-stack developer building{' '}
                                <span className="text-primary">clean, reliable</span>{' '}
                                digital products.
                            </h1>
                        </Reveal>

                        <Reveal delay={0.16}>
                            <p className="mt-8 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                                    I build thoughtful web experiences that combine clean interfaces,
                                    dependable engineering, and practical solutions for real businesses.
                                    I’ve delivered 70+ web and software projects for clients across Europe
                                    and beyond.
                                </p>
                        </Reveal>

                        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <Link
                                to="/work"
                                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-[0_8px_20px_rgba(198,93,50,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_12px_26px_rgba(198,93,50,0.3)] active:translate-y-0 active:scale-[0.98] sm:w-auto"
                            >
                                Explore work
                                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                            </Link>

                            <Link
                                to="/contact"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3.5 text-base font-semibold text-foreground transition-all duration-200 hover:border-foreground/25 hover:bg-secondary active:scale-[0.98] sm:w-auto"
                            >
                                Get in touch
                            </Link>
                        </div>


                        <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3  pt-6 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:text-xs">
                            <span>From idea to deployment</span>
                            <span>Open to freelance & full-time</span>
                            <span>Working worldwide, remotely</span>
                        </div>
                    </div>

                    {/* Right: Editorial portrait */}
                    <Reveal delay={0.18} className="order-1 lg:order-2">
                        <div className="relative isolate mx-auto w-full max-w-[360px] sm:max-w-[410px] lg:max-w-none">

                            {/* Soft-sand backing panel */}
                            <div className="absolute inset-x-7 inset-y-6 z-0 bg-secondary" />

                            {/* Decorative grid dots */}
                            <div className="pointer-events-none absolute -bottom-4 -right-4 z-0 grid grid-cols-4 gap-1.5 opacity-80">
                                {Array.from({ length: 16 }).map((_, index) => (
                                    <span
                                        key={index}
                                        className="h-1.5 w-1.5 rounded-full bg-primary/70"
                                    />
                                ))}
                            </div>

                            {/* Offset copper frame */}
                            <div
                                className="absolute inset-3 z-[1] border-2 border-primary"
                                style={{
                                    clipPath:
                                        'polygon(12% 0%, 100% 0%, 100% 86%, 86% 100%, 0% 100%, 0% 12%)',
                                }}
                            />

                            {/* Decorative copper circle */}
                            <div className="absolute -right-3 top-8 z-20 h-7 w-7 rounded-full border-2 border-background bg-primary shadow-sm sm:-right-4 sm:h-9 sm:w-9" />

                            {/* Main image shape */}
                            <div
                                className="relative z-10 aspect-[4/5] overflow-hidden bg-muted shadow-[0_20px_50px_rgba(24,24,27,0.16)]"
                                style={{
                                    clipPath:
                                        'polygon(12% 0%, 100% 0%, 100% 86%, 86% 100%, 0% 100%, 0% 12%)',
                                }}
                            >
                                <img
                                    src="/profile.png"
                                    alt="Haris Nadeem, full-stack developer"
                                    className="h-full w-full object-cover object-center grayscale-[12%] transition duration-700 hover:scale-105 hover:grayscale-0"
                                />

                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foreground/35 to-transparent" />
                            </div>

                            {/* Vertical side label */}
                            <div className="absolute -left-4 bottom-12 z-20 hidden -rotate-90 origin-bottom-left items-center gap-3 lg:flex">
                                <span className="h-px w-10 bg-primary" />
                                <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground">
                                    Always learning, always building
                                </span>
                            </div>

                            {/* Photo caption */}
                            <div className="absolute bottom-4 left-4 z-20 rounded-lg border border-background/50 bg-background/85 px-3 py-2 backdrop-blur-sm">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground">
                                    Based in Lahore, Pakistan
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── Selected Work ────────────────────────────── */}
            <section className="border-t border-border">
                <div className="container max-w-7xl py-12 md:py-24">
                    <Reveal>
                        <div className="flex items-end justify-between gap-6">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                                    01 — Selected Work
                                </p>
                                <h2 className="mt-4 text-[clamp(2rem,5vw,3rem)] font-semibold tracking-tight text-foreground">
                                    Products built for real-world use
                                </h2>
                            </div>
                            <Link
                                to="/work"
                                className="group hidden items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary sm:inline-flex"
                            >
                                View all projects
                                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </Reveal>

                    <div className="mt-8 space-y-16 md:mt-20 md:space-y-28">
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
                                            src={project.imageUrl}
                                            alt={project.imageAlt || `${project.title} — project screenshot`}
                                            label={`${project.title} — screenshot`}
                                            className="aspect-[16/9]"
                                        />
                                    </Link>

                                    <div className={cn('md:col-span-5', i % 2 === 1 && 'md:order-1')}>
                                        <div className="flex items-baseline gap-4">
                                            <span className="text-sm font-medium tabular-nums text-primary">
                                                {String(i + 1).padStart(2, '0')}
                                            </span>
                                            <span className="text-sm md:text-xs font-medium uppercase tracking-widest text-muted-foreground">
                                                {project.category} · {project.year}
                                            </span>
                                        </div>
                                        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                                            {project.title}
                                        </h3>
                                        <p className="mt-4  text-base leading-relaxed text-muted-foreground md:text-base">
                                            {project.description}
                                        </p>
                                        <ul className="mt-5 flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <li
                                                    key={tag}
                                                    className="rounded-full border border-border bg-background px-3 py-1 text-sm md:text-xs font-medium text-muted-foreground"
                                                >
                                                    {tag}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            to={`/work/${project.slug}`}
                                            className="group mt-7 inline-flex items-center gap-1.5 text-base md:text-sm font-semibold text-primary transition-colors hover:text-primary/80"
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
                                className="group inline-flex items-center gap-1.5 text-base md:text-sm font-medium text-foreground transition-colors hover:text-primary"
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
                <div className="container max-w-7xl py-12 md:py-24">
                    <Reveal>
                        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                            02 — What I Build
                        </p>
                        <h2 className="mt-4 max-w-2xl text-[clamp(2rem,5vw,3rem)] leading-[0.98] font-semibold tracking-tight text-foreground">
                            Digital solutions to real problems
                        </h2>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:mt-16 md:grid-cols-2">
                            {capabilities.map((cap, i) => (
                                <div
                                    key={cap.title}
                                    className="group bg-background p-8 transition-colors duration-200 hover:bg-secondary/60 md:p-10"
                                >
                                    <span className="text-base md:text-sm font-medium tabular-nums text-primary">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                                        {cap.title}
                                    </h3>
                                    <p className="mt-3 text-base md:text-sm leading-relaxed text-muted-foreground">
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
                <div className="container max-w-7xl py-12 md:py-24">
                    <Reveal>
                        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                            03 — From Idea to Launch
                        </p>
                        <h2 className="mt-4 max-w-2xl text-[clamp(2rem,5vw,3rem)] leading-[0.98] font-semibold tracking-tight text-foreground">
                            A practical process for building better products
                        </h2>
                        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-base">
                            From product planning and interface design to development, integrations, deployment, and ongoing improvements—each stage is focused on delivering reliable software that works in the real world.


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
                                            className="absolute left-0 right-6 top-[30px] h-px bg-border transition-colors duration-300 group-hover:bg-primary"
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
                                            <ToolPill key={tool}>{tool}</ToolPill>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </Reveal>

                    {/* Mobile: vertical connected flow */}
                    <Reveal delay={0.1}>
                        <div
                            className="mt-8 md:hidden"
                            role="list"
                            aria-label="Build pipeline stages"
                        >
                            {pipelineStages.map((stage, i) => (
                                <div key={stage.num} role="listitem" className="group mt-4 relative flex gap-4">
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
                                            <h3 className="text-lg font-semibold tracking-tight text-foreground">
                                                {stage.title}
                                            </h3>
                                            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                                                {stage.desc}
                                            </p>
                                            <ul className="mt-4 flex flex-wrap gap-1.5">
                                                {stage.tools.map((tool) => (
                                                    <ToolPill key={tool}>{tool}</ToolPill>
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
            <section id="about" className="scroll-mt-20 border-t border-border">
                <div className="container max-w-7xl py-12 md:py-24">
                    <div className="grid gap-10 md:grid-cols-12 md:gap-12">
                        {/* Left: label + editorial image */}
                        <Reveal className="md:col-span-4">
                            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                                04 — About
                            </p>

                            <div className="relative isolate mt-10 w-full max-w-sm">
                                {/* Soft-sand backing panel */}
                                <div className="absolute inset-x-7 inset-y-6 z-0 bg-secondary" />

                                {/* Decorative grid dots */}
                                <div className="pointer-events-none absolute -bottom-4 -left-4 z-0 grid grid-cols-4 gap-1.5 opacity-80">
                                    {Array.from({ length: 16 }).map((_, index) => (
                                        <span
                                            key={index}
                                            className="h-1.5 w-1.5 rounded-full bg-primary/70"
                                        />
                                    ))}
                                </div>

                                {/* Reversed offset copper frame */}
                                <div
                                    className="absolute inset-3 z-[1] border-2 border-primary"
                                    style={{
                                        clipPath:
                                            'polygon(0% 0%, 88% 0%, 100% 12%, 100% 100%, 12% 100%, 0% 88%)',
                                    }}
                                />

                                {/* Square image with reversed editorial corners */}
                                <div
                                    className="relative z-10 aspect-square overflow-hidden bg-muted shadow-[0_20px_50px_rgba(24,24,27,0.16)]"
                                    style={{
                                        clipPath:
                                            'polygon(0% 0%, 88% 0%, 100% 12%, 100% 100%, 12% 100%, 0% 88%)',
                                    }}
                                >
                                    <img
                                        src="/about-3.png"
                                        alt="Muhammad Haris Nadeem working on a software project"
                                        className="h-full w-full object-cover object-center grayscale-[12%] transition duration-700 hover:scale-105 hover:grayscale-0"
                                    />

                                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foreground/35 to-transparent" />
                                </div>

                                {/* Decorative copper circle — reversed to left */}
                                <div className="absolute -left-3 top-8 z-20 h-7 w-7 rounded-full border-2 border-background bg-primary shadow-sm sm:-left-4 sm:h-9 sm:w-9" />

                                {/* About photo caption — reversed to right */}
                                <div className="absolute bottom-4 right-4 z-20 rounded-lg border border-background/50 bg-background/85 px-3 py-2 backdrop-blur-sm">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground">
                                        Lahore, Pakistan
                                    </p>
                                </div>
                            </div>
                        </Reveal>

                        {/* Right: About copy */}
                        <div className="md:col-span-8 flex flex-col justify-center">
                            <Reveal>
                                <p className="text-[clamp(1.75rem,4vw,2.25rem)] font-medium leading-snug tracking-tight text-foreground">
                                    I’m Muhammad Haris Nadeem, a full-stack developer focused on
                                    creating practical software for businesses, teams, and ambitious
                                    product ideas.
                                </p>
                            </Reveal>

                            <Reveal delay={0.1}>
                                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-base">
                                    My work combines product thinking with hands-on engineering across
                                    client platforms, e-commerce, AI-enabled workflows, and custom
                                    operational tools. I value direct communication, thoughtful
                                    details, and solutions that remain easy to operate as needs evolve.
                                </p>
                            </Reveal>

                            <Reveal delay={0.16}>
                                <Link
                                    to="/contact"
                                    className="group mt-8 inline-flex items-center gap-1.5 text-base font-semibold text-primary transition-colors hover:text-primary/80"
                                >
                                    Let’s work together
                                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </Link>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            <section id="experience" className="scroll-mt-20 border-t border-border">
    <div className="container max-w-7xl py-12 md:py-24">

        {/* Section Header */}
        <Reveal>
            <div className="mb-12 flex flex-col justify-between gap-4 md:mb-16 md:flex-row md:items-end">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                        05 — Experience
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                        Where I've worked
                        <span className="text-primary"> & contributed.</span>
                    </h2>
                </div>

                <p className="max-w-md text-base leading-relaxed text-muted-foreground">
                    My professional journey through software development,
                    building web applications, backend systems, and
                    custom solutions for different business needs.
                </p>
            </div>
        </Reveal>

        {/* Experience Timeline */}
        <div className="relative">

            {/* Timeline Line */}
            <div className="absolute bottom-8 left-[7px] top-3 w-px bg-border md:left-[11px]" />

            <div className="space-y-12 md:space-y-16">

                {/* Experience 01 — Markefy */}
                <Reveal>
                    <div className="relative grid gap-6 pl-9 md:grid-cols-12 md:gap-12 md:pl-0">

                        {/* Timeline Dot */}
                        <div className="absolute left-0 top-2 z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-background md:left-[0px] md:h-[22px] md:w-[22px]">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary md:h-2 md:w-2" />
                        </div>

                        {/* Left Column */}
                        <div className="md:col-span-4 md:pl-12">
                            <p className="text-sm font-semibold text-primary">
                                August 2025 — Present
                            </p>

                            <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                                Full-Stack Developer
                            </h3>

                            <p className="mt-1 text-base text-muted-foreground">
                                Markefy SRL
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                                    Full-time
                                </span>
                                <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                                    Remote
                                </span>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="md:col-span-8">
                            <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 md:p-8">

                                <p className="text-base leading-relaxed text-muted-foreground">
                                    Working on the development and maintenance of
                                    web applications, SaaS platforms, and custom
                                    software solutions. Responsible for building
                                    frontend interfaces, developing backend
                                    functionality, managing databases, and
                                    integrating external services.
                                </p>

                                <div className="mt-7">
                                    <h4 className="text-sm font-semibold text-foreground">
                                        Key Responsibilities
                                    </h4>

                                    <ul className="mt-4 space-y-3">
                                        {[
                                            'Develop responsive web applications and user interfaces using React.js and modern JavaScript.',
                                            'Build backend services, REST APIs, and application business logic using Node.js and Express.js.',
                                            'Design and manage relational databases using PostgreSQL.',
                                            'Implement authentication systems, payment gateways, and third-party API integrations.',
                                            'Develop e-commerce platforms, digital product stores, and multilingual website functionality.',
                                            'Deploy, maintain, and troubleshoot production applications.'
                                        ].map((item, index) => (
                                            <li key={index} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-7 border-t border-border pt-6">
                                    <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                        Technologies
                                    </h4>

                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {[
                                            'React.js',
                                            'JavaScript',
                                            'Node.js',
                                            'Express.js',
                                            'PostgreSQL',
                                            'REST APIs',
                                            'Git',
                                            'Third-party Integrations'
                                        ].map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Experience 02 — Freelance */}
                <Reveal delay={0.1}>
                    <div className="relative grid gap-6 pl-9 md:grid-cols-12 md:gap-12 md:pl-0">

                        {/* Timeline Dot */}
                        <div className="absolute left-0 top-2 z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-background md:left-[4px] md:h-[22px] md:w-[22px]">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary md:h-2 md:w-2" />
                        </div>

                        {/* Left Column */}
                        <div className="md:col-span-4 md:pl-12">
                            <p className="text-sm font-semibold text-primary">
                                March 2025 — Present
                            </p>

                            <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                                Freelance Full-Stack Software Engineer
                            </h3>

                            <p className="mt-1 text-base text-muted-foreground">
                                Self-employed
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                                    Freelance
                                </span>
                                <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                                    Remote
                                </span>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="md:col-span-8">
                            <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 md:p-8">

                                <p className="text-base leading-relaxed text-muted-foreground">
                                    Working independently with clients to design,
                                    develop, and maintain custom web applications,
                                    business platforms, e-commerce solutions, and
                                    software integrations. Managing projects from
                                    initial requirements and development through
                                    deployment and ongoing improvements.
                                </p>

                                <div className="mt-7">
                                    <h4 className="text-sm font-semibold text-foreground">
                                        Key Responsibilities
                                    </h4>

                                    <ul className="mt-4 space-y-3">
                                        {[
                                            'Develop custom web applications and business management platforms based on client requirements.',
                                            'Build frontend interfaces using React.js, JavaScript, and modern web technologies.',
                                            'Develop backend systems, REST APIs, and server-side functionality using Node.js and Express.js.',
                                            'Design and manage databases using PostgreSQL, MySQL, and MongoDB.',
                                            'Develop and customise WordPress and Shopify websites, including e-commerce functionality.',
                                            'Integrate payment gateways, third-party services, authentication systems, and external APIs.',
                                            'Handle application deployment, hosting configuration, maintenance, and technical troubleshooting.'
                                        ].map((item, index) => (
                                            <li key={index} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-7 border-t border-border pt-6">
                                    <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                        Technologies
                                    </h4>

                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {[
                                            'React.js',
                                            'Node.js',
                                            'Express.js',
                                            'PostgreSQL',
                                            'MySQL',
                                            'MongoDB',
                                            'WordPress',
                                            'Shopify',
                                            'REST APIs',
                                            'Payment Integrations'
                                        ].map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Reveal>

            </div>
        </div>
    </div>
</section>

<section id="education" className="scroll-mt-20 border-t border-border">
    <div className="container max-w-7xl py-12 md:py-24">

        {/* Section Header */}
        <Reveal>
            <div className="mb-12 flex flex-col justify-between gap-4 md:mb-16 md:flex-row md:items-end">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                        06 — Education
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                        Academic background
                        <span className="text-primary"> & learning.</span>
                    </h2>
                </div>

                <p className="max-w-md text-base leading-relaxed text-muted-foreground">
                    My academic journey in computer science, building
                    a foundation in computing, software engineering,
                    and problem-solving.
                </p>
            </div>
        </Reveal>

        {/* Education Cards */}
        <div className="grid gap-6 md:grid-cols-2">

            {/* Bachelor's Degree */}
            <Reveal>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 md:p-8">

                    {/* Decorative Accent */}
                    <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-secondary/70 transition-transform duration-500 group-hover:scale-125" />

                    <div className="relative z-10 flex items-start justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-primary">
                            <GraduationCap className="h-6 w-6" />
                        </div>

                        <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary">
                            2021 — 2025
                        </span>
                    </div>

                    <div className="relative z-10 mt-8">
                        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                            Bachelor's Degree
                        </p>

                        <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                            Bachelor of Science in Computer Science
                        </h3>

                        <p className="mt-3 text-base font-medium text-foreground">
                            Information Technology University (ITU)
                        </p>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Lahore, Pakistan
                        </p>

                        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                            Completed an undergraduate degree in Computer
                            Science, developing knowledge across programming,
                            algorithms, data structures, databases, operating
                            systems, computer networks, and software development.
                        </p>
                    </div>

                    {/* Academic Details */}
                    <div className="relative z-10 mt-auto pt-8">
                        <div className="grid grid-cols-2 gap-3 border-t border-border pt-6">
                            <div>
                                <p className="text-xs text-muted-foreground">
                                    CGPA
                                </p>
                                <p className="mt-1 text-lg font-semibold text-foreground">
                                    3.05 / 4.00
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-muted-foreground">
                                    Duration
                                </p>
                                <p className="mt-1 text-lg font-semibold text-foreground">
                                    4 Years
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>

            {/* Intermediate */}
            <Reveal delay={0.1}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 md:p-8">

                    {/* Decorative Accent */}
                    <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-secondary/70 transition-transform duration-500 group-hover:scale-125" />

                    <div className="relative z-10 flex items-start justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-primary">
                            <BookOpen className="h-6 w-6" />
                        </div>

                        <span className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                            2019 — 2021
                        </span>
                    </div>

                    <div className="relative z-10 mt-8">
                        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                            Higher Secondary Education
                        </p>

                        <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                            Intermediate — Pre-Engineering
                        </h3>

                        <p className="mt-3 text-base font-medium text-foreground">
                            Government Graduate College, Township
                        </p>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Lahore, Pakistan
                        </p>

                        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                            Completed higher secondary education in the
                            Pre-Engineering stream, building a foundation
                            in mathematics, physics, and analytical
                            problem-solving.
                        </p>
                    </div>

                    {/* Academic Details */}
                    <div className="relative z-10 mt-auto pt-8">
                        <div className="grid grid-cols-2 gap-3 border-t border-border pt-6">
                            <div>
                                <p className="text-xs text-muted-foreground">
                                    Percentage
                                </p>
                                <p className="mt-1 text-lg font-semibold text-foreground">
                                    70.64%
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-muted-foreground">
                                    Qualification
                                </p>
                                <p className="mt-1 text-lg font-semibold text-foreground">
                                    HSSC
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>

        </div>
    </div>
</section>

<section id="certifications" className="scroll-mt-20 border-t border-border">
    <div className="container max-w-7xl py-12 md:py-24">

        {/* Header */}
        <Reveal>
            <div className="mb-12 flex flex-col justify-between gap-4 md:mb-16 md:flex-row md:items-end">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                        07 — Certifications
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                        Certifications
                        <span className="text-primary"> & achievements.</span>
                    </h2>
                </div>

                <p className="max-w-md text-base leading-relaxed text-muted-foreground">
                    Professional certifications and technical training
                    reflecting my continued learning across software
                    development and emerging technologies.
                </p>
            </div>
        </Reveal>

        {/* Certificate Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* 01 — Artificial Intelligence */}
            <Reveal>
                <div className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">

                    <a
                        href="/certificates/ai.jpg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-secondary p-3"
                    >
                        <img
                            src="/certificates/ai.jpg"
                            alt="Udemy Artificial Intelligence + LLM & ChatGPT Certificate"
                            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                    </a>

                    <div className="p-5 md:p-6">
                        <div className="flex items-center justify-between gap-3">
                            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                                Certificate of Completion
                            </span>
                            <span className="text-xs text-muted-foreground">
                                2024
                            </span>
                        </div>

                        <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                            Artificial Intelligence + LLM & ChatGPT
                        </h3>

                        <p className="mt-2 text-sm text-muted-foreground">
                            Udemy
                        </p>

                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                           Developed foundational knowledge of artificial intelligence, machine learning, neural networks, and deep learning, with practical exposure to building AI models and understanding modern language models (LLMs) and their applications.
                        </p>

                        <a
                            href="https://ude.my/UC-22534976-99a8-44f4-afd5-f692dab1a114"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
                        >
                            Verify Certificate
                            <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </a>
                    </div>
                </div>
            </Reveal>

            {/* 02 — SQL Advanced */}
            <Reveal delay={0.1}>
                <div className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">

                    <a
                        href="/certificates/sql.png"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-secondary p-3"
                    >
                        <img
                            src="/certificates/sql.png"
                            alt="HackerRank SQL Advanced Certificate of Accomplishment"
                            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                    </a>

                    <div className="p-5 md:p-6">
                        <div className="flex items-center justify-between gap-3">
                            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                                Certificate of Accomplishment
                            </span>
                            <span className="text-xs text-muted-foreground">
                                2023
                            </span>
                        </div>

                        <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                            SQL (Advanced)
                        </h3>

                        <p className="mt-2 text-sm text-muted-foreground">
                            HackerRank
                        </p>

                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          Demonstrated advanced SQL proficiency through a practical skill assessment, covering complex queries, data retrieval, aggregation, joins, subqueries, and efficient database operations.
                        </p>

                        <p className="mt-4 text-xs text-muted-foreground">
                            Credential ID: D31933DEB931
                        </p>

                        <a
                            href="https://www.hackerrank.com/certificates/d31933deb931"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
                        >
                            View Certificate
                            <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </a>
                    </div>
                </div>
            </Reveal>

            {/* 03 — Cloud Computing */}
            <Reveal delay={0.2}>
                <div className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">

                    <a
                        href="/certificates/cloud-computing.png"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-secondary p-3"
                    >
                        <img
                            src="/certificates/cloud-computing.png"
                            alt="Cloud Computing Certificate of Merit from Corvit Systems"
                            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                    </a>

                    <div className="p-5 md:p-6">
                        <div className="flex items-center justify-between gap-3">
                            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                                Certificate of Merit
                            </span>
                            <span className="text-xs text-muted-foreground">
                                2023
                            </span>
                        </div>

                        <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                            Cloud Computing
                        </h3>

                        <p className="mt-2 text-sm text-muted-foreground">
                            Corvit Systems
                        </p>

                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          Developed an understanding of cloud computing concepts, service models, deployment models, cloud infrastructure, virtualisation, and the role of cloud technologies in hosting, managing, securing, and scaling modern software applications.
                        </p>

                        <a
                            href="/certificates/cloud-computing.png"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
                        >
                            View Certificate
                            <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </a>
                    </div>
                </div>
            </Reveal>

        </div>
    </div>
</section>

            {/* ── Final CTA ────────────────────────────────── */}
            <section className="border-t border-border bg-secondary/50">
                <div className="container max-w-7xl py-28 text-center md:py-36">
                    <Reveal>
                        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                            05 — Next Step
                        </p>

                        <h2 className="mx-auto mt-6 max-w-3xl text-[clamp(2.25rem,7vw,4.5rem)] font-semibold leading-[1.06] tracking-tight text-foreground">
                            Have a project in mind?
                        </h2>

                        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-base">
                            Need a web application, a smarter workflow, or a developer who can
                            turn an ambitious concept into a working product? Tell me what you’re
                            working on.
                        </p>
                    </Reveal>

                    <Reveal delay={0.12}>
                        <Link
                            to="/contact"
                            className="group mt-10 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98]"
                        >
                            Send a Message
                            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </Link>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
