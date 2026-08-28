/**
 * ─────────────────────────────────────────────────────────────
 *  PROJECTS DATA — EDIT THIS FILE TO ADD YOUR OWN WORK
 * ─────────────────────────────────────────────────────────────
 *  Each object below is one project. Duplicate a block, change
 *  the values, and it will automatically appear on the Work
 *  page, the Home page (when `featured: true`), and get its own
 *  detail page at /work/<slug>.
 *
 *  - slug        → URL of the detail page (lowercase, hyphens)
 *  - category    → must be one of: 'Web Apps', 'Websites',
 *                  'E-commerce', 'Automation' (used by filters)
 *  - featured    → true = shown in "Selected Work" on Home
 *  - liveUrl / sourceUrl → leave '' to hide the link
 * ─────────────────────────────────────────────────────────────
 */

export const projects = [
    {
        slug: 'project-one',
        title: 'Project Title One',
        category: 'Web Apps',
        year: '2025',
        role: 'Design & Full-Stack Development',
        description:
            'A short one- or two-sentence summary of this project. Replace this text with what the product is, who it is for, and the problem it solves.',
        tags: ['React', 'Node.js', 'PostgreSQL'],
        featured: true,
        liveUrl: '',
        sourceUrl: '',
        overview:
            'Replace this paragraph with a high-level overview of the project: the client or context, the goals, and what the finished product does.',
        challenge:
            'Replace this paragraph with the main challenge: what made this project hard, ambiguous, or interesting from a technical or product perspective.',
        myRole:
            'Replace this paragraph with a description of your role: what you owned end-to-end, who you collaborated with, and how the work was organized.',
        built: [
            'Replace with a key feature or deliverable you built.',
            'Replace with another feature, integration, or system you built.',
            'Replace with a third deliverable, e.g. infrastructure, testing, or deployment work.',
        ],
        approach:
            'Replace this paragraph with your technical approach: architecture decisions, stack choices, trade-offs, and anything you would do differently.',
        outcome:
            'Replace this paragraph with the outcome: what shipped, what improved, and what you learned. Add real numbers here when you have them.',
    },
    {
        slug: 'project-two',
        title: 'Project Title Two',
        category: 'Websites',
        year: '2025',
        role: 'Design & Development',
        description:
            'A short one- or two-sentence summary of this project. Replace this text with what the site is, who it is for, and what makes it effective.',
        tags: ['Next.js', 'Tailwind CSS', 'CMS'],
        featured: true,
        liveUrl: '',
        sourceUrl: '',
        overview:
            'Replace this paragraph with a high-level overview of the project: the client or context, the goals, and what the finished site does.',
        challenge:
            'Replace this paragraph with the main challenge: what made this project hard, ambiguous, or interesting from a technical or product perspective.',
        myRole:
            'Replace this paragraph with a description of your role: what you owned end-to-end, who you collaborated with, and how the work was organized.',
        built: [
            'Replace with a key feature or deliverable you built.',
            'Replace with another feature, integration, or system you built.',
            'Replace with a third deliverable, e.g. performance or SEO work.',
        ],
        approach:
            'Replace this paragraph with your technical approach: architecture decisions, stack choices, trade-offs, and anything you would do differently.',
        outcome:
            'Replace this paragraph with the outcome: what shipped, what improved, and what you learned. Add real numbers here when you have them.',
    },
    {
        slug: 'project-three',
        title: 'Project Title Three',
        category: 'E-commerce',
        year: '2024',
        role: 'Full-Stack Development',
        description:
            'A short one- or two-sentence summary of this project. Replace this text with what the store sells, who it serves, and what you built.',
        tags: ['React', 'Stripe', 'Node.js'],
        featured: true,
        liveUrl: '',
        sourceUrl: '',
        overview:
            'Replace this paragraph with a high-level overview of the project: the client or context, the goals, and what the finished store does.',
        challenge:
            'Replace this paragraph with the main challenge: what made this project hard, ambiguous, or interesting from a technical or product perspective.',
        myRole:
            'Replace this paragraph with a description of your role: what you owned end-to-end, who you collaborated with, and how the work was organized.',
        built: [
            'Replace with a key feature or deliverable you built.',
            'Replace with another feature, integration, or system you built.',
            'Replace with a third deliverable, e.g. checkout, payments, or inventory work.',
        ],
        approach:
            'Replace this paragraph with your technical approach: architecture decisions, stack choices, trade-offs, and anything you would do differently.',
        outcome:
            'Replace this paragraph with the outcome: what shipped, what improved, and what you learned. Add real numbers here when you have them.',
    },
    {
        slug: 'project-four',
        title: 'Project Title Four',
        category: 'Automation',
        year: '2024',
        role: 'Development & Integrations',
        description:
            'A short one- or two-sentence summary of this project. Replace this text with what the automation does and the manual work it replaced.',
        tags: ['Node.js', 'APIs', 'Webhooks'],
        featured: false,
        liveUrl: '',
        sourceUrl: '',
        overview:
            'Replace this paragraph with a high-level overview of the project: the context, the goals, and what the finished automation does.',
        challenge:
            'Replace this paragraph with the main challenge: what made this project hard, ambiguous, or interesting from a technical or product perspective.',
        myRole:
            'Replace this paragraph with a description of your role: what you owned end-to-end, who you collaborated with, and how the work was organized.',
        built: [
            'Replace with a key feature or deliverable you built.',
            'Replace with another feature, integration, or system you built.',
            'Replace with a third deliverable, e.g. monitoring or error-handling work.',
        ],
        approach:
            'Replace this paragraph with your technical approach: architecture decisions, stack choices, trade-offs, and anything you would do differently.',
        outcome:
            'Replace this paragraph with the outcome: what shipped, what improved, and what you learned. Add real numbers here when you have them.',
    },
    {
        slug: 'project-five',
        title: 'Project Title Five',
        category: 'Web Apps',
        year: '2023',
        role: 'Full-Stack Development',
        description:
            'A short one- or two-sentence summary of this project. Replace this text with what the app does, who uses it, and why it matters.',
        tags: ['React', 'GraphQL', 'AWS'],
        featured: false,
        liveUrl: '',
        sourceUrl: '',
        overview:
            'Replace this paragraph with a high-level overview of the project: the client or context, the goals, and what the finished product does.',
        challenge:
            'Replace this paragraph with the main challenge: what made this project hard, ambiguous, or interesting from a technical or product perspective.',
        myRole:
            'Replace this paragraph with a description of your role: what you owned end-to-end, who you collaborated with, and how the work was organized.',
        built: [
            'Replace with a key feature or deliverable you built.',
            'Replace with another feature, integration, or system you built.',
            'Replace with a third deliverable, e.g. infrastructure, testing, or deployment work.',
        ],
        approach:
            'Replace this paragraph with your technical approach: architecture decisions, stack choices, trade-offs, and anything you would do differently.',
        outcome:
            'Replace this paragraph with the outcome: what shipped, what improved, and what you learned. Add real numbers here when you have them.',
    },
    {
        slug: 'project-six',
        title: 'Project Title Six',
        category: 'Websites',
        year: '2023',
        role: 'Design & Development',
        description:
            'A short one- or two-sentence summary of this project. Replace this text with what the site is, who it is for, and what makes it effective.',
        tags: ['Astro', 'Tailwind CSS', 'SEO'],
        featured: false,
        liveUrl: '',
        sourceUrl: '',
        overview:
            'Replace this paragraph with a high-level overview of the project: the client or context, the goals, and what the finished site does.',
        challenge:
            'Replace this paragraph with the main challenge: what made this project hard, ambiguous, or interesting from a technical or product perspective.',
        myRole:
            'Replace this paragraph with a description of your role: what you owned end-to-end, who you collaborated with, and how the work was organized.',
        built: [
            'Replace with a key feature or deliverable you built.',
            'Replace with another feature, integration, or system you built.',
            'Replace with a third deliverable, e.g. performance or accessibility work.',
        ],
        approach:
            'Replace this paragraph with your technical approach: architecture decisions, stack choices, trade-offs, and anything you would do differently.',
        outcome:
            'Replace this paragraph with the outcome: what shipped, what improved, and what you learned. Add real numbers here when you have them.',
    },
];

export const categories = ['All', 'Web Apps', 'Websites', 'E-commerce', 'Automation'];

export const getProject = (slug) => projects.find((p) => p.slug === slug);

export const getAdjacentProjects = (slug) => {
    const index = projects.findIndex((p) => p.slug === slug);
    if (index === -1) return { prev: null, next: null };
    return {
        prev: projects[(index - 1 + projects.length) % projects.length],
        next: projects[(index + 1) % projects.length],
    };
};
