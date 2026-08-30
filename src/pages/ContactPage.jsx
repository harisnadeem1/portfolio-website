import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import emailjs from '@emailjs/browser';
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MessageCircle,
  Send,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import { cn } from '@/lib/utils';

/* ── EDIT: your contact details ─────────────────────────── */
const contactLinks = [
  {
    label: 'Email',
    value: 'nadeemharis781@gmail.com',
    href: 'mailto:nadeemharis781@gmail.com',
  },
  {
    label: 'Phone',
    value: '+92 327 0701833',
    href: 'tel:+923270701833',
  },
  {
    label: 'GitHub',
    value: 'github.com/harisnadeem1',
    href: 'https://github.com/harisnadeem1',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/muhammad-haris-nadeem-cs',
    href: 'https://linkedin.com/in/muhammad-haris-nadeem-cs',
  },
];

const initialValues = {
  name: '',
  email: '',
  company: '',
  message: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.';
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.message.trim()) {
    errors.message = 'Please enter a message.';
  } else if (values.message.trim().length < 5) {
    errors.message = 'Please write at least 5 characters.';
  }

  return errors;
}

const inputClass = (hasError) =>
  cn(
    'w-full rounded-xl border bg-background px-4 py-3 text-base md:text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15',
    hasError ? 'border-destructive' : 'border-border hover:border-foreground/25'
  );

export default function ContactPage() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (field) => (event) => {
    setValues((previousValues) => ({
      ...previousValues,
      [field]: event.target.value,
    }));

    if (errors[field]) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        [field]: undefined,
      }));
    }

    if (submitError) {
      setSubmitError('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validate(values);

    setErrors(nextErrors);
    setSubmitError('');

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const templateParams = {
      client_name: values.name.trim(),
      client_email: values.email.trim(),
      company: values.company.trim() || 'Not provided',
      message: values.message.trim(),
      submitted_at: new Date().toLocaleString('en-GB', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
    };

    try {
      setIsSending(true);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setSubmitted(true);
    } catch (error) {
      console.error('EmailJS contact form error:', {
        status: error?.status,
        text: error?.text,
        fullError: error,
      });

      setSubmitError(
        'Your message could not be sent right now. Please try again or contact me directly by email.'
      );
    } finally {
      setIsSending(false);
    }
  };

  const handleReset = () => {
    setValues(initialValues);
    setErrors({});
    setSubmitted(false);
    setIsSending(false);
    setSubmitError('');
  };

  return (
    <>
      <Helmet>
        <title>Contact — Haris Nadeem | Full-Stack Developer</title>

        <meta
          name="description"
          content="Contact Haris Nadeem, a full-stack developer, for questions, collaborations, freelance opportunities, and general inquiries."
        />
      </Helmet>

      <section className="container max-w-7xl pb-32 pt-8 md:pt-12">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-16">
          {/* Left side */}
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Contact
              </p>

              <h1 className="mt-4 max-w-xl text-[clamp(2.25rem,6vw,3.75rem)] font-semibold leading-[1.06] tracking-tight text-foreground">
                Let’s start a conversation.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Have a question, idea, collaboration opportunity, or just want
                to say hello? Send a message and I’ll get back to you as soon
                as possible.
              </p>
            </Reveal>

          

            <Reveal delay={0.14}>
              <div className="mt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Contact details
                </p>

                <ul className="mt-4 divide-y divide-border border-y border-border">
                  {contactLinks.map(({ label, value, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={
                          href.startsWith('http')
                            ? 'noopener noreferrer'
                            : undefined
                        }
                        className="group flex items-center justify-between gap-4 py-5"
                      >
                        <span className="min-w-0">
                          <span className="block text-xs font-medium uppercase tracking-widest text-muted-foreground">
                            {label}
                          </span>

                          <span className="mt-1 block break-all text-base font-medium text-foreground transition-colors group-hover:text-primary md:text-lg">
                            {value}
                          </span>
                        </span>

                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all duration-200 group-hover:border-primary/35 group-hover:bg-primary/10 group-hover:text-primary">
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right side: contact form */}
          <Reveal delay={0.12}>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-background p-6 md:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-primary/5 blur-3xl"
              />

              <div className="relative">
                {submitted ? (
                  <div className="flex min-h-[34rem] flex-col items-center justify-center text-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle2
                        className="h-7 w-7 text-primary"
                        strokeWidth={1.75}
                      />
                    </span>

                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      Message sent
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                      Thanks for reaching out.
                    </h2>

                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                      Your message has been sent successfully. I’ll reply to
                      your email as soon as possible.
                    </p>

                    <div className="mt-7 w-full max-w-sm rounded-xl border border-border bg-secondary/40 p-4 text-left">
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Confirmation sent to
                      </p>

                      <p className="mt-1 break-all text-sm font-medium text-foreground">
                        {values.email}
                      </p>
                    </div>

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
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                          Send a message
                        </p>

                        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                          How can I help?
                        </h2>

                        <p className="mt-2 max-w-md text-base md:text-sm leading-relaxed text-muted-foreground">
                          Fill in the form below and I’ll get back to you.
                        </p>
                      </div>

                      <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:flex">
                        <Mail className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                    </div>

                    <div className="mt-8 space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="name"
                            className="text-base md:text-sm font-medium text-foreground"
                          >
                            Your name *
                          </label>

                          <input
                            id="name"
                            type="text"
                            autoComplete="name"
                            placeholder="Your full name"
                            value={values.name}
                            onChange={handleChange('name')}
                            aria-invalid={Boolean(errors.name)}
                            className={inputClass(errors.name)}
                          />

                          {errors.name && (
                            <p className="text-xs text-destructive">
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-base md:text-sm font-medium text-foreground"
                          >
                            Email address *
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
                            <p className="text-xs text-destructive">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="company"
                          className="text-base md:text-sm font-medium text-foreground"
                        >
                          Company or organization{' '}
                          <span className="font-normal text-muted-foreground">
                            (optional)
                          </span>
                        </label>

                        <input
                          id="company"
                          type="text"
                          autoComplete="organization"
                          placeholder="Company, organization, or personal brand"
                          value={values.company}
                          onChange={handleChange('company')}
                          className={inputClass(false)}
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-base md:text-sm font-medium text-foreground"
                        >
                          Message *
                        </label>

                        <textarea
                          id="message"
                          rows={7}
                          placeholder="Write your message here…"
                          value={values.message}
                          onChange={handleChange('message')}
                          aria-invalid={Boolean(errors.message)}
                          className={cn(
                            inputClass(errors.message),
                            'resize-none'
                          )}
                        />

                        <div className="flex items-start justify-between gap-4">
                          {errors.message ? (
                            <p className="text-xs text-destructive">
                              {errors.message}
                            </p>
                          ) : (
                            <p className="text-xs text-muted-foreground">
                              I’ll reply to the email address you provide.
                            </p>
                          )}

                          <span className="shrink-0 text-xs text-muted-foreground">
                            {values.message.length} characters
                          </span>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSending}
                        className={cn(
                          'group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98]',
                          isSending && 'cursor-not-allowed opacity-70'
                        )}
                      >
                        {isSending ? 'Sending message…' : 'Send message'}

                        {!isSending && (
                          <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                        )}
                      </button>

                      {submitError && (
                        <p
                          role="alert"
                          className="text-center text-sm leading-relaxed text-destructive"
                        >
                          {submitError}
                        </p>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}