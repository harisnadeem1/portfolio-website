import React, { useState, useMemo, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import {
    ChevronLeft,
    ChevronRight,
    CheckCircle2,
    CalendarDays,
    Clock,
    Globe,
    ArrowRight,
    FileSearch,
    MessagesSquare,
    Rocket,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import { cn } from '@/lib/utils';
import emailjs from '@emailjs/browser';

/* ── EDIT: timezone placeholder ─────────────────────────── */
const TIMEZONE_PLACEHOLDER = 'Central European Time (CET/CEST)';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
];

/* Sample 30-minute time slots (design only — not real availability) */
const TIME_SLOTS = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
];

/* Sample unavailable slot indexes (design only) */
const UNAVAILABLE_SLOT_INDEXES = new Set();

const MEETING_TYPES = [
    { value: 'none', label: 'Select what you need help with' },
    { value: 'website', label: 'Business Website or Landing Page' },
    { value: 'web-app', label: 'Custom Web Application / SaaS' },
    { value: 'ecommerce', label: 'E-commerce Store' },
    { value: 'dashboard', label: 'Admin Dashboard or Internal Tool' },
    { value: 'automation', label: 'Workflow Automation or API Integration' },
    { value: 'ai-feature', label: 'AI Feature or AI-Powered Workflow' },
    { value: 'payments', label: 'Payments, Subscriptions, or Checkout' },
    { value: 'maintenance', label: 'Improve, Fix, or Maintain an Existing App' },
    { value: 'other', label: 'Something Else' },
];

const NEXT_STEPS = [
    {
        title: 'I review your project',
        description:
            'I’ll review your goals, requirements, and any links or details you shared before our call.',
    },
    {
        title: 'We plan the solution',
        description:
            'On the call, we’ll discuss the right features, technology stack, timeline, and the best way to solve your problem.',
    },
    {
        title: 'We start with clarity',
        description:
            'If we are a good fit, I’ll share clear next steps, scope, and a development plan to move your project forward.',
    },
];

const initialValues = {
    name: '',
    email: '',
    company: '',
    subject: '',
    meetingType: 'none',
    details: '',
    consent: false,
    timezone: TIMEZONE_PLACEHOLDER,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function startOfDay(d) {
    const x = new Date(d);
    x.setHours(0, 0, 0, 0);
    return x;
}

function isSameDay(a, b) {
    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
}

/* Sample availability rule (design only): weekends unavailable */
/* All future dates are available */
function isSampleUnavailable() {
    return false;
}

function validate(values, hasSlot) {
    const errors = {};
    if (!values.name.trim()) errors.name = 'Please enter your full name.';
    if (!values.email.trim()) {
        errors.email = 'Please enter your email address.';
    } else if (!emailPattern.test(values.email.trim())) {
        errors.email = 'Please enter a valid email address.';
    }
    if (!values.subject.trim()) errors.subject = 'Please add a meeting subject.';
    if (!values.meetingType || values.meetingType === 'none') {
        errors.meetingType = 'Please choose a meeting type.';
    }
    if (!values.consent) errors.consent = 'Please agree to receive booking details by email.';
    if (!hasSlot) errors.slot = 'Please choose a date and time for your meeting.';
    return errors;
}

const inputClass = (hasError) =>
    cn(
        'w-full rounded-xl border bg-background px-4 py-3 text-base md:text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15',
        hasError ? 'border-destructive' : 'border-border hover:border-foreground/25'
    );

export default function BookACallPage() {
    const today = useMemo(() => startOfDay(new Date()), []);
    const [viewMonth, setViewMonth] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [confirmed, setConfirmed] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleChange = (field) => (e) => {
        const value = field === 'consent' ? e.target.checked : e.target.value;
        setValues((v) => ({ ...v, [field]: value }));
        if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }));
    };

    const prevMonth = () => {
        setViewMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1));
    };
    const nextMonth = () => {
        setViewMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1));
    };

    const canGoPrev = useMemo(() => {
        const firstOfCurrent = new Date(today.getFullYear(), today.getMonth(), 1);
        return viewMonth > firstOfCurrent;
    }, [viewMonth, today]);

    const selectDate = useCallback(
        (date) => {
            if (startOfDay(date) < today) return;
            if (isSampleUnavailable(date)) return;
            setSelectedDate(date);
            setSelectedTime(null);
            if (errors.slot) setErrors((err) => ({ ...err, slot: undefined }));
        },
        [today, errors.slot]
    );

    const selectTime = (slot, idx) => {
        if (UNAVAILABLE_SLOT_INDEXES.has(idx)) return;
        setSelectedTime(slot);
        if (errors.slot) setErrors((err) => ({ ...err, slot: undefined }));
    };

    /* Build calendar grid cells */
    const calendarCells = useMemo(() => {
        const year = viewMonth.getFullYear();
        const month = viewMonth.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const cells = [];
        for (let i = 0; i < firstDay; i++) cells.push(null);
        for (let d = 1; d <= daysInMonth; d++) {
            cells.push(new Date(year, month, d));
        }
        return cells;
    }, [viewMonth]);

    const hasSlot = Boolean(selectedDate && selectedTime);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nextErrors = validate(values, hasSlot);
        setErrors(nextErrors);
        setSubmitError('');

        if (Object.keys(nextErrors).length > 0) return;

        const formattedDate = selectedDate.toLocaleDateString('en-GB', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });

        const selectedType = MEETING_TYPES.find(
            (type) => type.value === values.meetingType
        );

        const templateParams = {
            client_name: values.name.trim(),
            client_email: values.email.trim(),
            company: values.company.trim() || 'Not provided',
            subject: values.subject.trim(),
            meeting_type: selectedType?.label || values.meetingType,
            project_details: values.details.trim() || 'Not provided',
            meeting_date: formattedDate,
            meeting_time: selectedTime,
            timezone: values.timezone,
            submitted_at: new Date().toLocaleString('en-GB', {
                dateStyle: 'medium',
                timeStyle: 'short',
            }),
        };

        try {
            setIsSending(true);

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            );

            setConfirmed(true);
        } catch (error) {
            console.error('EmailJS booking request error:', {
                status: error.status,
                text: error.text,
                fullError: error,
            });

            setSubmitError(
                'Your request could not be sent right now. Please try again in a moment.'
            );
        } finally {
            setIsSending(false);
        }
    };

    const handleReset = () => {
        setValues(initialValues);
        setErrors({});
        setSelectedDate(null);
        setSelectedTime(null);
        setConfirmed(false);
    };

    const selectedMeetingType = MEETING_TYPES.find((t) => t.value === values.meetingType);

    return (
        <>
            <Helmet>
                <title>Book a Free Call — Haris Nadeem | Full-Stack Developer</title>
                <meta
                    name="description"
                    content="Book a free discovery call to discuss your website, web application, e-commerce store, automation, AI feature, or payment integration."
                />
            </Helmet>

            <section className="container max-w-7xl pb-32 pt-8 md:pt-12">
                {/* Page header */}
                <Reveal>
                    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_412px] lg:gap-16">
                        {/* Left: Hero content */}
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                                Free Discovery Call
                            </p>

                            <h1 className="mt-4 max-w-2xl text-[clamp(2.25rem,6vw,3.75rem)] font-semibold leading-[1.06] tracking-tight text-foreground">
                                Let’s turn your idea into a working product.
                            </h1>

                            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                                Book a free 30-minute call to discuss what you want to build, improve,
                                or automate. Whether you need a high-converting website, a custom web
                                application, an internal dashboard, an e-commerce store, API
                                integration, or an AI-powered feature, we’ll clarify the best next
                                steps for your project.
                            </p>


                        </div>

                        {/* Right: Helpful call information */}
                        <aside className="relative overflow-hidden rounded-2xl border border-border bg-secondary/40 p-6 md:p-7">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/10 blur-2xl"
                            />

                            <div className="relative">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                                    Discovery call
                                </p>

                                <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-foreground">
                                    A focused conversation about your project.
                                </h2>

                                <p className="mt-3 text-base md:text-sm leading-relaxed text-muted-foreground">
                                    Bring your idea, challenge, or existing product. You do not need a
                                    finished brief before we talk.
                                </p>

                                <dl className="mt-6 divide-y divide-border border-y border-border">
                                    <div className="flex items-center justify-between gap-4 py-3">
                                        <dt className="text-base md:text-sm text-muted-foreground">Format</dt>
                                        <dd className="text-right text-base md:text-sm font-medium text-foreground">
                                            Online meeting
                                        </dd>
                                    </div>

                                    <div className="flex items-center justify-between gap-4 py-3">
                                        <dt className="text-base md:text-sm text-muted-foreground">Duration</dt>
                                        <dd className="text-right text-base md:text-sm font-medium text-foreground">
                                            30 minutes
                                        </dd>
                                    </div>

                                    <div className="flex items-center justify-between gap-4 py-3">
                                        <dt className="text-base md:text-sm text-muted-foreground">Cost</dt>
                                        <dd className="text-right text-base md:text-sm font-medium text-foreground">
                                            Free
                                        </dd>
                                    </div>

                                    <div className="flex items-center justify-between gap-4 py-3">
                                        <dt className="text-base md:text-sm text-muted-foreground">Commitment</dt>
                                        <dd className="text-right text-base md:text-sm font-medium text-foreground">
                                            No obligation
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </aside>
                    </div>
                </Reveal>

                <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* LEFT: calendar + time */}
                    <div className="space-y-10">
                        <Reveal>
                            <div className="rounded-2xl border border-border bg-background p-5 md:p-7">
                                {/* Calendar header */}
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg font-semibold tracking-tight text-foreground">
                                        {MONTHS[viewMonth.getMonth()]} {viewMonth.getFullYear()}
                                    </h2>
                                    <div className="flex items-center gap-2">
                                        <button
                                            type="button"
                                            onClick={prevMonth}
                                            disabled={!canGoPrev}
                                            aria-label="Previous month"
                                            className={cn(
                                                'inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground transition-colors',
                                                canGoPrev
                                                    ? 'hover:border-foreground/25 hover:bg-secondary active:scale-[0.98]'
                                                    : 'cursor-not-allowed opacity-40'
                                            )}
                                        >
                                            <ChevronLeft className="h-4 w-4" strokeWidth={2} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={nextMonth}
                                            aria-label="Next month"
                                            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:border-foreground/25 hover:bg-secondary active:scale-[0.98]"
                                        >
                                            <ChevronRight className="h-4 w-4" strokeWidth={2} />
                                        </button>
                                    </div>
                                </div>

                                {/* Weekday labels */}
                                <div className="mt-6 grid grid-cols-7 gap-1">
                                    {WEEKDAYS.map((day) => (
                                        <div
                                            key={day}
                                            className="pb-2 text-center text-[0.7rem] font-medium uppercase tracking-wider text-muted-foreground"
                                        >
                                            {day}
                                        </div>
                                    ))}
                                </div>

                                {/* Date grid */}
                                <div className="grid grid-cols-7 gap-1">
                                    {calendarCells.map((date, i) => {
                                        if (!date) return <div key={`blank-${i}`} className="aspect-square" />;
                                        const isPast = startOfDay(date) < today;
                                        const isToday = isSameDay(date, today);
                                        const unavailable = isSampleUnavailable(date);
                                        const disabled = isPast || unavailable;
                                        const selected = selectedDate && isSameDay(date, selectedDate);

                                        return (
                                            <button
                                                key={i}
                                                type="button"
                                                disabled={disabled}
                                                onClick={() => selectDate(date)}
                                                aria-label={date.toDateString()}
                                                aria-pressed={selected}
                                                className={cn(
                                                    'flex aspect-square items-center justify-center rounded-lg text-sm font-medium transition-colors',
                                                    selected &&
                                                    'bg-primary text-primary-foreground hover:bg-primary/90',
                                                    !selected &&
                                                    !disabled &&
                                                    'text-foreground hover:border hover:border-foreground/25 hover:bg-secondary',
                                                    !selected &&
                                                    isToday &&
                                                    'ring-1 ring-inset ring-primary/50',
                                                    disabled && 'cursor-not-allowed text-muted-foreground/35 line-through'
                                                )}
                                            >
                                                {date.getDate()}
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Legend */}
                                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
                                    <span className="flex items-center gap-1.5">
                                        <span className="h-3 w-3 rounded bg-primary" /> Selected
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <span className="h-3 w-3 rounded border border-border" /> Available
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <span className="h-3 w-3 rounded bg-secondary" /> Unavailable
                                    </span>
                                </div>
                            </div>
                        </Reveal>

                        {/* Time section */}
                        <Reveal delay={0.08}>
                            <div className="rounded-2xl border border-border bg-background p-5 md:p-7">
                                <div className="flex items-center justify-between gap-4">
                                    <h2 className="text-lg font-semibold tracking-tight text-foreground">
                                        Choose a time
                                    </h2>
                                    <span className="text-xs text-muted-foreground">30-minute online call</span>
                                </div>

                                {/* Timezone */}
                                <div className="mt-4">
                                    <label
                                        htmlFor="timezone"
                                        className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground"
                                    >
                                        <Globe className="h-3.5 w-3.5" strokeWidth={2} />
                                        Your timezone
                                    </label>
                                    <input
                                        id="timezone"
                                        type="text"
                                        value={values.timezone}
                                        onChange={handleChange('timezone')}
                                        placeholder={TIMEZONE_PLACEHOLDER}
                                        className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15"
                                    />
                                </div>

                                {/* Slots */}
                                <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                                    {TIME_SLOTS.map((slot, idx) => {
                                        const unavailable = UNAVAILABLE_SLOT_INDEXES.has(idx);
                                        const selected = selectedTime === slot;
                                        return (
                                            <button
                                                key={slot}
                                                type="button"
                                                disabled={unavailable}
                                                onClick={() => selectTime(slot, idx)}
                                                aria-pressed={selected}
                                                className={cn(
                                                    'inline-flex h-11 items-center justify-center rounded-lg border text-sm font-medium transition-colors',
                                                    selected &&
                                                    'border-primary bg-primary text-primary-foreground hover:bg-primary/90',
                                                    !selected &&
                                                    !unavailable &&
                                                    'border-border text-foreground hover:border-foreground/25 hover:bg-secondary active:scale-[0.98]',
                                                    unavailable &&
                                                    'cursor-not-allowed border-border bg-secondary text-muted-foreground/40 line-through'
                                                )}
                                            >
                                                {slot}
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Selected summary */}
                                <div className="mt-6 rounded-xl border border-border bg-secondary/50 p-4">
                                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                        Selected
                                    </p>
                                    {hasSlot ? (
                                        <p className="mt-2 text-sm font-medium text-foreground">
                                            {selectedDate.toLocaleDateString(undefined, {
                                                weekday: 'long',
                                                month: 'long',
                                                day: 'numeric',
                                                year: 'numeric',
                                            })}
                                            <span className="mx-2 text-muted-foreground">·</span>
                                            {selectedTime}
                                            <span className="mx-2 text-muted-foreground">·</span>
                                            <span className="text-muted-foreground">{values.timezone}</span>
                                        </p>
                                    ) : (
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            Choose a date and time to continue.
                                        </p>
                                    )}
                                    {errors.slot && (
                                        <p className="mt-2 text-xs text-destructive">{errors.slot}</p>
                                    )}
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* RIGHT: form / confirmation */}
                    <Reveal delay={0.12}>
                        <div className="rounded-2xl border border-border bg-background p-6 md:p-8">
                            {confirmed ? (
                                <div>
                                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                                        <CheckCircle2 className="h-7 w-7 text-primary" strokeWidth={1.75} />
                                    </span>
                                    <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">
                                        Your call request has been sent.
                                    </h2>

                                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                        Thanks for reaching out. A confirmation with your request details has been
                                        sent to your email address. I’ll review everything and reply to confirm the
                                        meeting time or suggest the closest available alternative.
                                    </p>

                                    <dl className="mt-8 divide-y divide-border border-y border-border">
                                        <SummaryRow icon={<CalendarDays className="h-4 w-4" />} label="Date" value={selectedDate.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })} />
                                        <SummaryRow icon={<Clock className="h-4 w-4" />} label="Time" value={`${selectedTime} · ${values.timezone}`} />
                                        <SummaryRow label="Name" value={values.name} />
                                        <SummaryRow label="Email" value={values.email} />
                                        <SummaryRow label="Meeting type" value={selectedMeetingType?.label} />
                                        <SummaryRow label="Subject" value={values.subject} />
                                    </dl>

                                    {/* Editable note */}
                                    <div className="mt-6 rounded-xl border border-dashed border-border bg-secondary/40 p-4">
                                        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                            What happens next
                                        </p>

                                        <p className="mt-2 text-sm leading-relaxed text-foreground">
                                            I’ll review your project details and contact you by email with the final
                                            confirmation and online meeting link.
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={handleReset}
                                        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:border-foreground/25 hover:bg-secondary active:scale-[0.98]"
                                    >
                                        Book another time
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} noValidate>
                                    <h2 className="text-xl font-semibold tracking-tight text-foreground">
                                        Tell me about your project
                                    </h2>
                                    <p className="mt-2 text-base text-muted-foreground">
                                        Share the essentials below. I’ll review your request before the call so we can use our time well.
                                    </p>

                                    <div className="mt-8 space-y-6">
                                        <div className="space-y-2">
                                            <label htmlFor="bk-name" className="text-base md:text-sm font-medium text-foreground">
                                                Full name *
                                            </label>
                                            <input
                                                id="bk-name"
                                                type="text"
                                                autoComplete="name"
                                                placeholder="Your full name"
                                                value={values.name}
                                                onChange={handleChange('name')}
                                                aria-invalid={Boolean(errors.name)}
                                                className={inputClass(errors.name)}
                                            />
                                            {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="bk-email" className="text-base md:text-sm font-medium text-foreground">
                                                Email address *
                                            </label>
                                            <input
                                                id="bk-email"
                                                type="email"
                                                autoComplete="email"
                                                placeholder="you@example.com"
                                                value={values.email}
                                                onChange={handleChange('email')}
                                                aria-invalid={Boolean(errors.email)}
                                                className={inputClass(errors.email)}
                                            />
                                            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="bk-company" className="text-base md:text-sm font-medium text-foreground">
                                                Company or business name{' '}
                                                <span className="font-normal text-muted-foreground">(optional)</span>
                                            </label>
                                            <input
                                                id="bk-company"
                                                type="text"
                                                autoComplete="organization"
                                                placeholder="Company or business name"
                                                value={values.company}
                                                onChange={handleChange('company')}
                                                className={inputClass(false)}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="bk-subject" className="text-base md:text-sm font-medium text-foreground">
                                                Meeting subject *
                                            </label>
                                            <input
                                                id="bk-subject"
                                                type="text"
                                                placeholder="What would you like to discuss?"
                                                value={values.subject}
                                                onChange={handleChange('subject')}
                                                aria-invalid={Boolean(errors.subject)}
                                                className={inputClass(errors.subject)}
                                            />
                                            {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="bk-type" className="text-base md:text-sm font-medium text-foreground">
                                                What would you like to build or improve? *
                                            </label>
                                            <div className="relative">
                                                <select
                                                    id="bk-type"
                                                    value={values.meetingType}
                                                    onChange={handleChange('meetingType')}
                                                    aria-invalid={Boolean(errors.meetingType)}
                                                    className={cn(
                                                        inputClass(errors.meetingType),
                                                        'appearance-none pr-10',
                                                        values.meetingType === 'none' && 'text-muted-foreground/70'
                                                    )}
                                                >
                                                    {MEETING_TYPES.map((opt) => (
                                                        <option key={opt.value} value={opt.value}>
                                                            {opt.label}
                                                        </option>
                                                    ))}
                                                </select>
                                                <ChevronRight className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-muted-foreground" />
                                            </div>
                                            {errors.meetingType && (
                                                <p className="text-xs text-destructive">{errors.meetingType}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="bk-details" className="text-base md:text-sm font-medium text-foreground">
                                                Brief project details{' '}
                                                <span className="font-normal text-muted-foreground">(optional, but helpful)</span>
                                            </label>
                                            <textarea
                                                id="bk-details"
                                                rows={4}
                                                placeholder="What problem are you solving? Include your goals, key features, preferred timeline, existing website/app link, and anything else that would help."
                                                value={values.details}
                                                onChange={handleChange('details')}
                                                className={cn(inputClass(false), 'resize-none')}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="flex cursor-pointer items-start gap-3">
                                                <input
                                                    type="checkbox"
                                                    checked={values.consent}
                                                    onChange={handleChange('consent')}
                                                    aria-invalid={Boolean(errors.consent)}
                                                    className="mt-0.5 h-5 w-5 shrink-0 rounded border-border text-primary outline-none focus:ring-2 focus:ring-primary/15"
                                                />
                                                <span className="text-base md:text-sm leading-relaxed text-foreground">
                                                    I agree to receive meeting details by email.
                                                </span>
                                            </label>
                                            {errors.consent && (
                                                <p className="text-xs text-destructive">{errors.consent}</p>
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSending}
                                            className={cn(
                                                'group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98]',
                                                isSending && 'cursor-not-allowed opacity-70'
                                            )}
                                        >
                                            {isSending ? 'Sending request…' : 'Request a free discovery call'}

                                            {!isSending && (
                                                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                                            )}
                                        </button>
                                        {submitError && (
                                            <p role="alert" className="text-center text-sm text-destructive">
                                                {submitError}
                                            </p>
                                        )}
                                    </div>
                                </form>
                            )}
                        </div>
                    </Reveal>
                </div>

                {/* What happens next */}
                <Reveal delay={0.1}>
                    <section className="relative mt-16 overflow-hidden rounded-2xl border border-border bg-secondary/40 p-6 md:mt-20 md:p-8 lg:p-10">
                        {/* Decorative background accent */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl"
                        />

                        <div className="relative">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                                Simple, collaborative process
                            </p>

                            <div className="mt-3 max-w-2xl">
                                <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                                    What happens after you request a call?
                                </h2>

                                <p className="mt-3 text-base  leading-relaxed text-muted-foreground md:text-base">
                                    I’ll make sure we use the call to understand your idea, find the
                                    right technical approach, and decide on the most practical next step.
                                </p>
                            </div>

                            <ol className="relative mt-8 grid gap-4 md:grid-cols-3 md:gap-5">
                                {[
                                    {
                                        icon: FileSearch,
                                        step: '01',
                                        title: 'I review your project',
                                        description:
                                            'I’ll review your goals, requirements, and any links or details you shared before our call.',
                                    },
                                    {
                                        icon: MessagesSquare,
                                        step: '02',
                                        title: 'We plan the solution',
                                        description:
                                            'On the call, we’ll discuss the right features, technology stack, timeline, and the best way to solve your problem.',
                                    },
                                    {
                                        icon: Rocket,
                                        step: '03',
                                        title: 'We start with clarity',
                                        description:
                                            'If we are a good fit, I’ll share clear next steps, scope, and a development plan to move your project forward.',
                                    },
                                ].map(({ icon: Icon, step, title, description }) => (
                                    <li
                                        key={step}
                                        className="group relative rounded-xl border border-border bg-background/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg hover:shadow-primary/5"
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                                <Icon className="h-5 w-5" strokeWidth={1.8} />
                                            </span>

                                            <span className="text-xs font-semibold tracking-wider text-muted-foreground">
                                                {step}
                                            </span>
                                        </div>

                                        <h3 className="mt-5 text-lg md:text-base font-semibold tracking-tight text-foreground">
                                            {title}
                                        </h3>

                                        <p className="mt-2 text-base md:text-sm leading-relaxed text-muted-foreground">
                                            {description}
                                        </p>
                                    </li>
                                ))}
                            </ol>

                            <p className="mt-7 text-center text-sm text-muted-foreground">
                                No pressure—this call is simply a chance to see whether we are a good fit.
                            </p>
                        </div>
                    </section>
                </Reveal>
            </section>
        </>
    );
}

function SummaryRow({ icon, label, value }) {
    return (
        <div className="flex items-center justify-between gap-4 py-3.5">
            <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {icon}
                {label}
            </dt>
            <dd className="text-right text-sm font-medium text-foreground">{value}</dd>
        </div>
    );
}
