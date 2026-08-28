import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { ArrowUpRight, CheckCircle2, ChevronDown, Send } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { cn } from '@/lib/utils';

/* ── EDIT: your contact details ─────────────────────────── */
const contactLinks = [
    { label: 'Email', value: 'hello@yourname.com', href: 'mailto:hello@yourname.com' },
    { label: 'Phone', value: '+1 (000) 000-0000', href: 'tel:+10000000000' },
    { label: 'GitHub', value: 'github.com/yourusername', href: 'https://github.com/yourusername' },
    { label: 'LinkedIn', value: 'linkedin.com/in/yourusername', href: 'https://linkedin.com/in/yourusername' },
];

const budgetOptions = [
    { value: '', label: 'Select a budget range (optional)' },
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-10k', label: '$5,000 – $10,000' },
    { value: '10k-25k', label: '$10,000 – $25,000' },
    { value: '25k-plus', label: '$25,000+' },
    { value: 'not-sure', label: 'Not sure yet' },
];

const initialValues = { name: '', email: '', company: '', budget: '', message: '' };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
    const errors = {};
    if (!values.name.trim()) errors.name = 'Please enter your name.';
    if (!values.email.trim()) {
        errors.email = 'Please enter your email address.';
    } else if (!emailPattern.test(values.email.trim())) {
        errors.email = 'Please enter a valid email address.';
    }
    if (!values.message.trim()) {
        errors.message = 'Please tell me a little about your project.';
    } else if (values.message.trim().length < 10) {
        errors.message = 'Your message should be at least 10 characters long.';
    }
    return errors;
}

const inputClass = (hasError) =>
    cn(
        'w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15',
        hasError ? 'border-destructive' : 'border-border hover:border-foreground/25'
    );

export default function ContactPage() {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (field) => (e) => {
        setValues((v) => ({ ...v, [field]: e.target.value }));
        if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const nextErrors = validate(values);
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length === 0) {
            // NOTE: this form currently validates and confirms on the client
            // only. Connect it to an email service or backend when you're ready.
            setSubmitted(true);
        }
    };

    const handleReset = () => {
        setValues(initialValues);
        setErrors({});
        setSubmitted(false);
    };

    return (
        <>
            <Helmet>
                <title>Contact — Your Name</title>
                <meta
                    name="description"
                    content="Get in touch with Your Name — available for freelance projects, collaborations, and full-time opportunities."
                />
            </Helmet>

            <section className="container max-w-6xl pb-32 pt-24 md:pt-32">
                <div className="grid gap-20 lg:grid-cols-2 lg:gap-24">
                    {/* Left: heading + contact links */}
                    <div>
                        <Reveal>
                            {/* EDIT: your contact heading + invitation */}
                            <h1 className="text-[clamp(2.25rem,6vw,3.75rem)] font-semibold leading-[1.06] tracking-tight text-foreground">
                                Let&apos;s work together
                            </h1>
                            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                                Replace this with a short invitation — the kind of projects
                                you&apos;re excited about, your typical availability, and how
                                soon people can expect a reply.
                            </p>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <ul className="mt-12 divide-y divide-border border-y border-border">
                                {contactLinks.map(({ label, value, href }) => (
                                    <li key={label}>
                                        <a
                                            href={href}
                                            target={href.startsWith('http') ? '_blank' : undefined}
                                            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className="group flex items-center justify-between gap-4 py-5"
                                        >
                                            <span>
                                                <span className="block text-xs font-medium uppercase tracking-widest text-muted-foreground">
                                                    {label}
                                                </span>
                                                <span className="mt-1 block text-lg font-medium text-foreground transition-colors group-hover:text-primary">
                                                    {value}
                                                </span>
                                            </span>
                                            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    </div>

                    {/* Right: form */}
                    <Reveal delay={0.12}>
                        <div className="rounded-2xl border border-border bg-background p-6 md:p-8">
                            {submitted ? (
                                <div className="flex min-h-[28rem] flex-col items-center justify-center text-center">
                                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                                        <CheckCircle2 className="h-7 w-7 text-primary" strokeWidth={1.75} />
                                    </span>
                                    <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">
                                        Message sent
                                    </h2>
                                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                                        Thanks for reaching out — I&apos;ll get back to you as
                                        soon as possible.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={handleReset}
                                        className="mt-8 rounded-xl border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-foreground/25 hover:bg-secondary active:scale-[0.98]"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} noValidate>
                                    <h2 className="text-xl font-semibold tracking-tight text-foreground">
                                        Send an inquiry
                                    </h2>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        Fields marked * are required.
                                    </p>

                                    <div className="mt-8 space-y-6">
                                        <div className="grid gap-6 sm:grid-cols-2">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-medium text-foreground">
                                                    Name *
                                                </label>
                                                <input
                                                    id="name"
                                                    type="text"
                                                    autoComplete="name"
                                                    placeholder="Your name"
                                                    value={values.name}
                                                    onChange={handleChange('name')}
                                                    aria-invalid={Boolean(errors.name)}
                                                    className={inputClass(errors.name)}
                                                />
                                                {errors.name && (
                                                    <p className="text-xs text-destructive">{errors.name}</p>
                                                )}
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-medium text-foreground">
                                                    Email *
                                                </label>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    placeholder="you@example.com"
                                                    value={values.email}
                                                    onChange={handleChange('email')}
                                                    aria-invalid={Boolean(errors.email)}
                                                    className={inputClass(errors.email)}
                                                />
                                                {errors.email && (
                                                    <p className="text-xs text-destructive">{errors.email}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="grid gap-6 sm:grid-cols-2">
                                            <div className="space-y-2">
                                                <label htmlFor="company" className="text-sm font-medium text-foreground">
                                                    Company <span className="font-normal text-muted-foreground">(optional)</span>
                                                </label>
                                                <input
                                                    id="company"
                                                    type="text"
                                                    autoComplete="organization"
                                                    placeholder="Company or project name"
                                                    value={values.company}
                                                    onChange={handleChange('company')}
                                                    className={inputClass(false)}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="budget" className="text-sm font-medium text-foreground">
                                                    Budget <span className="font-normal text-muted-foreground">(optional)</span>
                                                </label>
                                                <div className="relative">
                                                    <select
                                                        id="budget"
                                                        value={values.budget}
                                                        onChange={handleChange('budget')}
                                                        className={cn(inputClass(false), 'appearance-none pr-10', !values.budget && 'text-muted-foreground/70')}
                                                    >
                                                        {budgetOptions.map((opt) => (
                                                            <option key={opt.label} value={opt.value}>
                                                                {opt.label}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium text-foreground">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                rows={5}
                                                placeholder="Tell me about your project, timeline, and goals…"
                                                value={values.message}
                                                onChange={handleChange('message')}
                                                aria-invalid={Boolean(errors.message)}
                                                className={cn(inputClass(errors.message), 'resize-none')}
                                            />
                                            {errors.message && (
                                                <p className="text-xs text-destructive">{errors.message}</p>
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98]"
                                        >
                                            Send Inquiry
                                            <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
