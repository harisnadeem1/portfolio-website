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
    //ronin
 {
    slug: 'ronin-charts',
    title: 'Ronin Charts',
    category: 'Web Apps',
    year: '2026',
    imageUrl: '/projects/ronin-charts.png',
    imageAlt: 'Ronin Charts dashboard showing trade planning, risk management, and position-sizing tools',
    role: 'Product Design & Full-Stack Development',
    description:
        'Ronin Charts is a private trading journal and risk-management platform built to help traders plan positions, control risk, manage trades, and evaluate performance over time. It combines position sizing, trade journaling, portfolio-risk visibility, analytics, and broker-integration foundations in one focused workspace.',
    tags: [
        'JavaScript',
        'Node.js',
        'Express',
        'PostgreSQL',
        'REST APIs',
        'JWT Authentication',
        'Nginx',
        'PM2',
        'VPS Deployment',
        'Interactive Brokers',
    ],
    featured: true,
    liveUrl: 'https://ronincharts.com',
    sourceUrl: '',
    overview:
        'Ronin Charts is a full-stack trading operating system designed around disciplined decision-making rather than flashy trading dashboards. I built the platform to give traders a single place to calculate risk before entering a trade, track open positions, record trade decisions and outcomes, analyze performance, project account growth, and document their personal trading system. The interface uses a calm parchment, ink, and aged-gold visual system that keeps attention on process, data, and risk management.',
    challenge:
        'The project required translating a detailed trading workflow into a secure, structured multi-user application. Key challenges included building reliable position-sizing and R-multiple calculations, modeling complete trade lifecycles with partial exits and updated stops, separating every user’s financial data securely, designing invite-only onboarding, and creating an architecture that could later support broker syncing without compromising sensitive credentials or user data.',
    myRole:
        'I led the project end to end, including product strategy, user-flow design, visual design, frontend development, backend architecture, PostgreSQL database design, authentication planning, API structure, broker-integration groundwork, and VPS deployment planning. I defined the product around a clear workflow: assess risk before entry, manage exposure during the trade, document the decision-making process, and use data to improve future trades.',
    built: [
        'Built a risk and position-sizing dashboard that calculates stop distance, risk amount, shares to buy, position size, maximum position exposure, target price, and R-multiple levels from 1R to 5R.',
        'Designed a position-management workflow for open, trimmed, and closed trades, including partial exits, remaining shares, updated stop prices, realized profit and loss, and cumulative trade history.',
        'Created a structured trade journal for recording setups, trade thesis, entries, stops, targets, screenshots, market conditions, management decisions, exit notes, lessons, dollar results, and R-multiple results.',
        'Developed a Node.js and Express backend foundation with PostgreSQL persistence, protected REST API routes, password hashing, JWT-style authentication, role-based access control, and secure user-data isolation.',
        'Designed an invite-only onboarding system with expiring invitation tokens, one-time signup links, account activation, admin controls, and user-status management.',
        'Built the data foundation for trading analytics including total profit and loss, total R, win rate, average winner, average loser, profit factor, maximum drawdown, equity curves, and setup-level performance breakdowns.',
        'Created a compounding calculator for projecting account growth while accounting for contributions and withdrawals.',
        'Prepared Interactive Brokers integration foundations for broker connections, trade imports, synchronization logs, open-order tracking, market-data services, price snapshots, and trade alerts.',
        'Planned secure production deployment using a VPS, PostgreSQL, Nginx reverse proxying, PM2 process management, environment variables, HTTPS, backups, logging, and scheduled background jobs.',
    ],
    approach:
        'I designed Ronin Charts as a modular full-stack application with a lightweight JavaScript frontend, a Node.js and Express API layer, and PostgreSQL as the durable source of truth for user data. The backend is organized into routes, controllers, middleware, services, authentication utilities, database modules, and background-job foundations. Each user-owned record is scoped to the authenticated user at the database-query level, helping protect sensitive journal, position, broker, and account data. I also developed a restrained design system that prioritizes dense financial information, readable tables, meaningful visual hierarchy, and risk signals that do not rely only on red and green.',
    outcome:
        'Ronin Charts became a comprehensive foundation for a private trading platform that brings risk planning, position management, trade documentation, performance analysis, compounding projections, and broker-connected workflows into one product. The project deepened my experience in full-stack architecture, PostgreSQL data modeling, secure authentication, financial calculation workflows, user-specific data access control, responsive interface design, and production deployment planning.',
},
//libenly
   {
    slug: 'libenly',
    title: 'Libenly',
    category: 'Web Apps',
    year: '2026',
    role: 'UI/UX Design & Full-Stack Development',
    description:
        'Libenly is a role-based dating and social-messaging platform with profile discovery, coin-based interactions, managed conversations, and a powerful administration workspace. It combines a responsive user experience with tools for admins and chat operators to manage profiles, conversations, engagement, and AI-assisted messaging workflows.',
    tags: [
        'React',
        'Vite',
        'Tailwind CSS',
        'Node.js',
        'Express',
        'PostgreSQL',
        'JWT Authentication',
        'REST APIs',
        'Role-Based Access Control',
        'Socket.IO',
    ],
    featured: true,

    imageUrl: '/projects/libenly.png',
    imageAlt:
        'Libenly dating platform dashboard showing profile discovery, messaging, and coin-based interactions',

    liveUrl: 'https://libenly.vercel.app',
    sourceUrl: '',

    overview:
        'Libenly is a full-stack dating platform designed around profile discovery, messaging, virtual interactions, and controlled conversation management. Users can browse profiles, view profile details, send winks, likes, messages, gifts, and manage their coin balance. The product also includes dedicated interfaces for administrators and chat operators, allowing the platform team to manage users, profiles, conversations, chat access, engagement activity, and platform operations from structured dashboards.',
    challenge:
        'The main challenge was building a dating platform that supports multiple user journeys while keeping permissions, conversations, virtual currency, and administrative controls organized. The system needed to distinguish between regular users, profile accounts, chat operators, administrators, and affiliates; ensure that coin-based actions are recorded consistently; support managed conversations without multiple chat operators replying at once; and create a database structure capable of handling growth in messages, engagement activity, notifications, gifts, referrals, and user profiles.',
    myRole:
        'I designed and developed Libenly end to end, including the responsive product interface, React application structure, role-specific dashboards, backend architecture, PostgreSQL schema design, authentication flow, API organization, coin economy logic, messaging workflows, and administrative tools. I planned the application around clear permission boundaries so each role sees only the features and data needed for its responsibilities.',
    built: [
        'Built a responsive React and Vite frontend with Tailwind CSS, including public pages, authentication screens, private user dashboards, profile browsing, profile-detail views, chat screens, settings, and profile-management flows.',
        'Created role-based access flows for regular users, administrators, girl-profile accounts, chat operators, and affiliate users, with protected routing and permission-focused dashboards.',
        'Designed a profile-discovery experience where users can browse available profiles, view profile details, manage their own profile, update personal information, and add or remove gallery images.',
        'Implemented a coin-based interaction model for winks, messages, profile boosts, gifts, and other virtual actions, with balance tracking, spend records, insufficient-balance feedback, and transaction history foundations.',
        'Built conversation and messaging workflows with conversation lists, recent-message ordering, message status tracking, automatic scrolling, image-message support, gift-message support, and notification foundations.',
        'Developed a dedicated chatter workspace where chat operators can view active conversations, respond through the appropriate profile context, and use conversation-locking controls to reduce the risk of duplicate replies.',
        'Created administration features for managing users, profile accounts, chat operators, administrators, account status, platform statistics, and profile creation workflows.',
        'Designed an AI-assisted chat workflow that supports managed responses alongside human chat operators, enabling operators or administrators to assist conversation handling while preserving the correct profile identity in each thread.',
        'Built PostgreSQL data models for users, profiles, profile images, coin balances, transactions, conversations, messages, winks, likes, boosts, notifications, gifts, engagement logs, message templates, referrals, and affiliate campaigns.',
        'Added scalable database considerations including foreign-key relationships, cascading deletion behavior, unique constraints, partial indexes, composite indexes, conversation activity indexes, unread-notification indexes, and message-threading indexes.',
        'Prepared backend modules for JWT authentication, password hashing, route authorization, validation, centralized error handling, REST APIs, real-time messaging with Socket.IO, payment integration, rate limiting, and application logging.',
        'Created automated engagement foundations using rotating interaction rules, activity logs, and reusable message-template records for controlled follow-up and re-engagement workflows.',
        'Added referral and affiliate tracking foundations with referral campaigns, unique campaign links, click tracking, attribution fields, and referral-performance data relationships.',
    ],
    approach:
        'I structured Libenly as a modular full-stack application. The frontend uses React, Vite, Tailwind CSS, reusable components, route-based pages, custom hooks, contexts, and responsive layouts. The backend is organized into configuration, controllers, middleware, models, routes, and shared utilities so that each domain—authentication, profiles, coins, transactions, conversations, messages, notifications, and engagement—can be developed and maintained independently. PostgreSQL is used as the central data layer, with indexed relationships and constraints to support common queries such as loading active conversations, displaying recent messages, checking a user’s coin balance, listing profiles, and retrieving unread notifications. JWT-based authentication and role middleware are used to protect user, administrator, and chatter functionality.',
    outcome:
        'Libenly became a comprehensive foundation for a modern dating and social-messaging product with a polished responsive interface and a substantial backend design. The project demonstrates my ability to build complex role-based platforms, model relational PostgreSQL data, create payment-adjacent virtual-currency workflows, design admin dashboards, manage chat workflows, implement secure authentication patterns, and plan scalable real-time communication features. It also strengthened my experience in balancing a consumer-facing product experience with the operational tools needed to run and manage the platform.',
},
//markefy
  {
    slug: 'markefy',
    title: 'Markefy',
    category: 'Websites',
    year: '2026',
    role: 'Frontend Development & Website Implementation',
    description:
        'Markefy is a Romania-based digital solutions company website built to present its web development, software, AI-powered SEO, paid advertising, and brand-marketing services. The platform gives potential clients a clear path from discovering the agency’s capabilities to understanding its process, results, and contact options.',
    tags: [
        'React',
        'Vite',
        'JavaScript',
        'Tailwind CSS',
        'Responsive Design',
        'SEO',
        'UI/UX',
        'Performance Optimization',
    ],
    featured: true,

    imageUrl: '/projects/markefy.png',
    imageAlt:
        'Markefy agency website showcasing digital solutions, web development, software, SEO, and marketing services',

    liveUrl: 'https://markefy.ai/',
    sourceUrl: '',

    overview:
        'Markefy is a digital-services agency based in Bragadiru, Romania, providing web design and development, custom software and app development, AI-powered SEO optimization, paid advertising, and content and brand marketing. I worked on a modern, responsive agency website that communicates these services clearly and supports the company’s goal of helping startups, SMEs, and enterprise clients turn ideas into scalable digital products and measurable marketing growth.',
    challenge:
        'The challenge was to present a broad range of technical and marketing services in a way that feels clear, credible, and easy to navigate for prospective clients. The website needed to balance strong visual presentation with practical conversion paths, explain an end-to-end delivery process, remain responsive across devices, and make it simple for visitors to explore services, view results, understand the company, and initiate contact.',
    myRole:
        'I contributed to the frontend development and website implementation, focusing on responsive layouts, reusable page sections, service-focused content presentation, user-interface consistency, and a clear lead-generation journey. My work supported the agency’s online presence by translating its service offering, process, and digital-growth positioning into a polished web experience.',
    built: [
        'Built responsive website sections that present Markefy’s web development, software development, AI-powered SEO, paid advertising, and content-marketing services.',
        'Created a clear information architecture for the homepage, services, process, results, about, and contact pages.',
        'Implemented responsive layouts and reusable UI patterns that adapt across desktop, tablet, and mobile screens.',
        'Designed conversion-focused calls to action that guide prospective clients toward service exploration and contact.',
        'Developed service-detail layouts that communicate technical capabilities, marketing deliverables, and business outcomes in an accessible format.',
        'Built a structured process section covering discovery and analysis, strategy and planning, design and development, testing and launch, and ongoing growth and optimization.',
        'Supported SEO-friendly page structure, readable content hierarchy, metadata-ready layouts, and performance-conscious frontend implementation.',
        'Created a modern visual experience that reflects Markefy’s positioning as an AI-enabled digital partner for businesses seeking web, software, SEO, and advertising support.',
    ],
    approach:
        'I approached the project as a conversion-focused agency website rather than a simple online brochure. The frontend was structured around reusable components, consistent spacing, responsive grids, clear typography, service cards, and focused calls to action. Content was organized so visitors can quickly understand what Markefy offers, how the team works, what type of businesses it supports, and how to make contact. The visual and technical decisions aimed to keep the website fast, professional, easy to scan, and credible across all screen sizes.',
    outcome:
        'The result is a polished digital presence for Markefy that brings its technology and marketing services into one coherent customer journey. The website supports the agency’s positioning around scalable software, high-performing websites, AI-powered SEO, and data-driven advertising while giving prospective clients straightforward routes to explore services and get in touch. The project strengthened my experience in agency-site architecture, responsive frontend implementation, conversion-oriented UI design, and communicating complex service offerings through a clear web experience.',
},
//n8n
  {
  slug: 'ai-social-media-automation',
  title: 'AI-Powered Social Media Automation',
  category: 'Automation',
  year: '2026',
  role: 'Workflow Development & API Integrations',
  imageUrl: '/projects/n8n.png',
  imageAlt:
    'n8n workflow automating AI content ideation, image generation, Google Sheets tracking, and Facebook publishing for three businesses.',
  description:
    'An n8n-based social-media automation system that generates tailored post ideas, creates AI visuals, records content in Google Sheets, and publishes posts to Facebook automatically. The workflow supports three separate brands: Scalable Insights, SemoBV, and Mabris Impex.',
  tags: [
    'n8n',
    'OpenAI',
    'Google Sheets API',
    'Facebook Graph API',
    'AI Image Generation',
    'Workflow Automation',
    'Social Media Automation',
  ],
  featured: true,
  liveUrl: '',
  sourceUrl: '',
  overview:
    'This project automates the end-to-end social-media content workflow for three independent businesses with different audiences and service offerings. On a scheduled basis, n8n triggers dedicated workflows for Scalable Insights, SemoBV, and Mabris Impex. Each workflow uses AI to generate a relevant post concept and caption, creates a matching visual, stores the content details in Google Sheets, and publishes the final image post to the appropriate Facebook Page.',
  challenge:
    'The main challenge was creating a reusable automation structure while preserving each company’s unique brand voice, services, and target audience. Since the businesses operate in different industries—AI-powered marketing, B2B vehicle import and export, and electrical, civil, and industrial installations—the content prompts, messaging, and visuals had to remain specific to each brand rather than feeling generic or repetitive.',
  myRole:
    'I designed and developed the complete n8n automation workflow, including the scheduled triggers, AI content-generation prompts, Google Sheets integration, image-generation steps, and Facebook Graph API publishing flow. I also structured separate content paths for each company so that every brand receives relevant, industry-specific social-media posts while using a consistent and scalable automation architecture.',
  built: [
    'Built scheduled n8n workflows that automatically generate content for three separate business Facebook Pages.',
    'Created AI prompt flows that generate brand-specific post ideas, captions, and marketing copy for Scalable Insights, SemoBV, and Mabris Impex.',
    'Integrated AI image generation to produce visuals aligned with each post concept before publishing.',
    'Connected Google Sheets to log generated post content, ideas, captions, and workflow activity for tracking and review.',
    'Integrated the Facebook Graph API to automatically publish generated image posts to the correct business page.',
    'Designed separate workflow branches to keep each company’s content strategy, branding, and audience requirements independent.',
  ],
  approach:
    'I used n8n as the central orchestration platform because it made it possible to connect scheduled triggers, AI models, Google Sheets, image generation, and Facebook publishing in one visual workflow. The automation begins with a schedule trigger and branches into separate company-specific paths. Each path generates an idea based on the company’s niche, turns that idea into social copy, saves the generated details to Google Sheets, produces a supporting image, and sends the completed post to Facebook through the Graph API. This approach reduces manual work while keeping the system modular enough to update prompts, posting frequency, or platforms later.',
  outcome:
    'The finished automation streamlines the social-media publishing process from idea generation to Facebook posting, reducing the need to manually brainstorm, write, design, organize, and publish every post. It provides a repeatable content system for three businesses while maintaining separate messaging for each brand. The project strengthened my experience with n8n workflow design, prompt engineering, third-party API integrations, automated content pipelines, and scalable social-media operations.',
},
//insta scrapepr
{
  slug: 'instanest-instagram-analytics',
  title: 'InstaNest',
  category: 'Web Apps',
  year: '2026',
  role: 'Full-Stack Development',
  imageUrl: '/projects/instanest.png',
  imageAlt:
    'InstaNest dashboard for organizing public Instagram profiles by member and tracking followers, posts, comments, and visible views.',
  description:
    'A multi-user Instagram analytics dashboard that organizes public Instagram profiles under member groups and tracks followers, posts, comments, and publicly visible post or Reel views in one place.',
  tags: [
    'React',
    'Node.js',
    'PostgreSQL',
    'Instagram Scraping',
    'REST APIs',
    'Authentication',
    'Dashboard',
  ],
  featured: true,
  liveUrl: '',
  sourceUrl: '',
  overview:
    'InstaNest is a full-stack analytics dashboard built to monitor multiple public Instagram accounts without requiring login access to the tracked profiles. A user can create member groups, such as creators, clients, or team members, add multiple Instagram usernames under each group, and view performance data at three levels: overall account totals, member-level totals, and individual profile statistics. The platform focuses on publicly available metrics, including followers, post count, comments, likes, and visible post or Reel views.',
  challenge:
    'The key challenge was designing a reliable way to collect and organize public Instagram data while accounting for platform limitations and inconsistent metric visibility. The system needed to handle multiple usernames per member, separate data by logged-in user, avoid duplicate profile records, keep the dashboard fast, and preserve historical scrape data for troubleshooting and future reporting. Publicly visible view counts can vary by post type and profile visibility, so the product needed to clearly distinguish visible data from private Instagram analytics.',
  myRole:
    'I planned the product structure and developed the application end to end, including the database schema, account and member relationship model, Instagram profile management flow, dashboard aggregation logic, and public-data scraping workflow. I designed a PostgreSQL structure with users, members, Instagram profiles, and profile-stat snapshot tables to support current dashboard metrics while retaining historical records and raw scrape payloads for debugging.',
  built: [
    'Built a multi-user authentication flow so each user can manage their own member groups and tracked Instagram profiles.',
    'Created member-based organization, allowing multiple public Instagram accounts to be grouped under a person, client, creator, or team label.',
    'Developed an Instagram scraping layer that collects publicly visible followers, posts, comments, likes, and available post or Reel view counts.',
    'Built dashboard calculations for overall account totals, member-level totals, and individual Instagram profile statistics.',
    'Designed PostgreSQL tables and relationships for users, members, Instagram profiles, and historical profile-stat snapshots.',
    'Stored current metrics directly on profile records for fast dashboard loading while saving snapshot history and raw payloads for future reporting and scraper debugging.',
    'Added database constraints and indexes to keep usernames normalized, prevent duplicate records, and improve query performance.',
  ],
  approach:
    'I used a full-stack architecture with a frontend dashboard, backend API, PostgreSQL database, and a public Instagram data-fetching layer. The data model follows a clear hierarchy: one user can create many members, each member can contain multiple Instagram profiles, and each profile can store many historical stat snapshots. The application saves the latest metrics on the instagram_profiles table for efficient dashboard queries, then stores each collection result in profile_stats_snapshots for history, debugging, and possible future growth charts. Usernames are normalized to lowercase before storage to ensure consistent matching and duplicate prevention.',
  outcome:
    'The result is a practical internal analytics tool that turns multiple separate Instagram profile checks into one organized dashboard. Users can track public accounts by group, compare performance across members, and view consolidated metrics without manually collecting data profile by profile. The project strengthened my experience in relational database design, PostgreSQL optimization, authenticated dashboard development, API architecture, scraping workflows, data aggregation, and managing the limitations of public third-party data sources.',
},
//mytrustedprop
{
  slug: 'my-trusted-prop',
  title: 'MyTrustedProp',
  category: 'Websites',
  year: '2026',
  role: 'Frontend Development & UI Implementation',
  imageUrl: '/projects/myprop.png',
  imageAlt:
    'MyTrustedProp website showcasing trusted prop firm reviews, comparisons, ratings, discount codes, and trading resources.',
  description:
    'A prop-trading comparison and review website that helps traders discover, evaluate, and compare proprietary trading firms, access verified ratings, explore funding options, and find available discount offers.',
  tags: [
    'React',
    'Frontend Development',
    'Responsive Design',
    'SEO Content',
    'Comparison Platform',
    'Financial Website',
    'UI/UX',
  ],
  featured: true,
  liveUrl: '',
  sourceUrl: '',
  overview:
    'MyTrustedProp is an informational and comparison-focused website for traders looking to choose a proprietary trading firm. The platform brings together prop-firm reviews, trust ratings, discount codes, firm comparisons, category-based recommendations, educational content, and frequently asked questions. It is designed to reduce the time users spend researching funding providers by presenting key firm details, offers, rules, and review information in one clear, easy-to-navigate experience.',
  challenge:
    'The primary challenge was organizing a large amount of financial and trading-related content without overwhelming new users. The site needed to make complex prop-firm information—such as firm types, funding models, ratings, discounts, rules, and trading conditions—easy to scan and compare. It also required a consistent design system across multiple content-heavy pages, including the homepage, best-offers pages, best prop-firm listings, comparison pages, individual review pages, legal pages, and educational resources.',
  myRole:
    'I developed and implemented the website interface, translating the product requirements into a structured, responsive, and user-friendly experience. My work included building reusable page sections and components, organizing navigation and content hierarchy, designing prop-firm cards and comparison-oriented layouts, implementing responsive behavior, and maintaining a consistent visual system across marketing, review, legal, and educational pages.',
  built: [
    'Built a responsive homepage focused on helping users discover trusted proprietary trading firms and current discount offers.',
    'Created reusable prop-firm listing cards with firm names, ratings, trust signals, categories, discount codes, review links, and call-to-action buttons.',
    'Implemented navigation for key discovery pages, including Best Offers, Best Prop Firms, Compare Prop Firms, and Easiest Prop Firms to Pass.',
    'Designed content sections for prop-firm reviews, trust indicators, featured firms, user testimonials, educational guides, and frequently asked questions.',
    'Developed comparison-focused layouts that make prop-firm information easier for traders to evaluate before purchasing a challenge or funding plan.',
    'Built responsive UI components and layouts optimized for browsing on desktop, tablet, and mobile devices.',
    'Included legal and disclaimer content areas to clearly distinguish educational information from financial or investment advice.',
  ],
  approach:
    'I approached the project as a content-first financial website with a strong focus on clarity, trust, and conversion. The interface uses clear content hierarchy: users can first browse top-rated firms and active offers, then move into detailed reviews, comparisons, and educational resources as needed. Reusable cards, sections, buttons, and page layouts keep the design consistent as new prop firms, reviews, and promotions are added. The responsive structure ensures that trading information, ratings, and calls to action remain readable and accessible across screen sizes.',
  outcome:
    'The completed website provides a structured destination for traders to research proprietary trading firms, compare options, access promotions, and understand common prop-trading concepts before choosing a funding provider. It transforms a complex research process into a clearer browsing journey by combining firm listings, ratings, comparisons, reviews, discounts, testimonials, and educational content in one platform. The project strengthened my experience in responsive frontend development, component-based UI design, content-heavy website architecture, conversion-focused layouts, and designing for financial-information audiences.',
},
];

export const categories = ['All', 'Web Apps', 'Websites', 'E-commerce', 'Custom Software', 'Automation'];

export const getProject = (slug) => projects.find((p) => p.slug === slug);

export const getAdjacentProjects = (slug) => {
    const index = projects.findIndex((p) => p.slug === slug);
    if (index === -1) return { prev: null, next: null };
    return {
        prev: projects[(index - 1 + projects.length) % projects.length],
        next: projects[(index + 1) % projects.length],
    };
};
