import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const Logo = () => (
    <Link
        to="/"
        className="group flex items-baseline gap-[2px] font-display text-xl font-semibold tracking-tight text-foreground transition-opacity hover:opacity-100"
        aria-label="Muhammad Haris Nadeem — Home"
    >
        <span className="font-mono text-primary transition-colors group-hover:text-primary-dark">
            &lt;
        </span>
        Muhammad&nbsp;Haris&nbsp;Nadeem
        <span className="font-mono text-primary transition-colors group-hover:text-primary-dark">
            /&gt;
        </span>
    </Link>
);

const mobileLinks = [
    { to: '/#about', label: 'About' },

    { to: '/work', label: 'Work' },
    { to: '/book-a-call', label: 'Book a Free Call' },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const [aboutActive, setAboutActive] = useState(false);
    const location = useLocation();
    const headerRef = useRef(null);
    const panelRef = useRef(null);
    const menuButtonRef = useRef(null);
    const sheetCloseButtonRef = useRef(null);

    // Close mobile menu whenever the route or hash changes.
    useEffect(() => {
        setOpen(false);
    }, [location.pathname, location.hash]);

    // Scroll to the About section after navigating to /#about.
    useEffect(() => {
        if (location.pathname !== '/' || location.hash !== '#about') return;

        const scrollToAbout = () => {
            document.getElementById('about')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        };

        requestAnimationFrame(scrollToAbout);
    }, [location.pathname, location.hash]);




    useEffect(() => {
        if (!open) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [open]);




    // Detect when the About section is in view.
    useEffect(() => {
        if (location.pathname !== '/') {
            setAboutActive(false);
            return;
        }

        const aboutSection = document.getElementById('about');

        if (!aboutSection) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setAboutActive(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '-35% 0px -45% 0px',
                threshold: 0,
            }
        );

        observer.observe(aboutSection);

        return () => observer.disconnect();
    }, [location.pathname]);

    // Close mobile menu with Escape and move focus to close control.
    useEffect(() => {
        if (!open) return;

        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                setOpen(false);
            }
        };

        document.addEventListener('keydown', onKeyDown);

        const timeout = setTimeout(() => {
            sheetCloseButtonRef.current?.focus();
        }, 50);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            clearTimeout(timeout);
            menuButtonRef.current?.focus();
        };
    }, [open]);

    // Close mobile menu when clicking outside the header/panel.
    // useEffect(() => {
    //     if (!open) return;

    //     const onPointerDown = (event) => {
    //         const clickedPanel =
    //             panelRef.current && panelRef.current.contains(event.target);
    //         const clickedHeader =
    //             headerRef.current && headerRef.current.contains(event.target);

    //         if (!clickedPanel && !clickedHeader) {
    //             setOpen(false);
    //         }
    //     };

    //     document.addEventListener('pointerdown', onPointerDown);

    //     return () => document.removeEventListener('pointerdown', onPointerDown);
    // }, [open]);

    const desktopNavClass =
        'text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:text-foreground';

    return (
        <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
            <div className="pointer-events-auto w-full max-w-7xl">
                <header

                    className={cn(
                        'flex h-20 items-center justify-between rounded-2xl border border-border/70 px-4 shadow-[0_8px_30px_rgba(24,24,27,0.08)] backdrop-blur-md sm:h-20 sm:px-6',
                        'bg-background/75'
                    )}
                >
                    <Logo />

                    {/* Desktop navigation */}
                    <nav
                        className="hidden items-center gap-10 md:flex"
                        aria-label="Main navigation"
                    >

                        <Link
                            to="/#about"
                            aria-current={aboutActive ? 'page' : undefined}
                            className={cn(
                                desktopNavClass,
                                aboutActive
                                    ? 'text-primary'
                                    : 'text-muted-foreground'
                            )}
                        >
                            About
                        </Link>

                        <NavLink
                            to="/work"
                            className={({ isActive }) =>
                                cn(
                                    desktopNavClass,
                                    isActive ? 'text-primary' : 'text-muted-foreground'
                                )
                            }
                        >
                            Work
                        </NavLink>



                        <NavLink
                            to="/book-a-call"
                            className={({ isActive }) =>
                                cn(
                                    desktopNavClass,
                                    isActive ? 'text-primary' : 'text-muted-foreground'
                                )
                            }
                        >
                            Book a Free Call
                        </NavLink>
                    </nav>

                    {/* Desktop CTA + mobile menu button */}
                    <div className="flex items-center gap-3">
                        <Link
                            to="/contact"
                            className="hidden items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98] md:inline-flex"
                        >
                            Let&apos;s Talk
                            <ArrowUpRight
                                className="h-3.5 w-3.5"
                                strokeWidth={2}
                            />
                        </Link>

                        <button
                            ref={menuButtonRef}
                            type="button"
                            onClick={() => setOpen((value) => !value)}
                            className="inline-flex h-11 w-11 items-center justify-center   text-foreground  hover:bg-secondary md:hidden"
                            aria-label={open ? 'Close menu' : 'Open menu'}
                            aria-expanded={open}
                            aria-controls="mobile-nav-panel"
                        >
                            
                                <Menu className="h-7 w-7" strokeWidth={2} />
                            
                        </button>
                    </div>
                </header>

                {/* Mobile bottom-sheet navigation */}
                <AnimatePresence>
                    {open && (
                        <>
                            {/* Dark page overlay */}
                            <motion.button
                                type="button"
                                aria-label="Close navigation menu"
                                className="fixed inset-0 z-40 cursor-default bg-foreground/35 backdrop-blur-[2px] md:hidden"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                onClick={() => setOpen(false)}
                            />

                            {/* Bottom sheet */}
                            <motion.div
                                id="mobile-nav-panel"
                                ref={panelRef}
                                role="dialog"
                                aria-modal="true"
                                aria-label="Mobile navigation"
                                initial={{ y: '100%' }}
                                animate={{ y: 0 }}
                                exit={{ y: '100%' }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 340,
                                    damping: 32,
                                    mass: 0.8,
                                }}
                                className="fixed inset-x-0 bottom-0 z-50 rounded-t-[2rem] border border-border/70 bg-background shadow-[0_-12px_40px_rgba(24,24,27,0.18)] md:hidden"
                            >
                                {/* Safe area and drag-handle visual */}
                                <div className="px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3">
                                    <div className="mx-auto h-1.5 w-12 rounded-full bg-border" />

                                    <div className="mt-5 flex items-center justify-between px-2">
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                                                Navigation
                                            </p>

                                            <p className="mt-1 text-sm text-muted-foreground">
                                                Explore my portfolio
                                            </p>
                                        </div>

                                        <button
                                            ref={sheetCloseButtonRef}
                                            type="button"
                                            onClick={() => setOpen(false)}
                                            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-secondary/50 text-foreground transition-colors hover:bg-secondary"
                                            aria-label="Close navigation menu"
                                        >
                                            <X className="h-5 w-5" strokeWidth={1.75} />
                                        </button>
                                    </div>

                                    <nav
                                        className="mt-6 flex flex-col gap-1"
                                        aria-label="Mobile navigation"
                                    >
                                        {mobileLinks.map((item) => {
                                            const isAbout =
                                                item.label === 'About' && aboutActive;

                                            return (
                                                <Link
                                                    key={item.label}
                                                    to={item.to}
                                                    onClick={() => setOpen(false)}
                                                    className={cn(
                                                        'group flex min-h-14 items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold transition-colors',
                                                        isAbout
                                                            ? 'bg-primary/10 text-primary'
                                                            : 'text-foreground hover:bg-secondary'
                                                    )}
                                                    aria-current={
                                                        isAbout ? 'page' : undefined
                                                    }
                                                >
                                                    {item.label}

                                                    <span
                                                        className={cn(
                                                            'flex h-9 w-9 items-center justify-center rounded-xl transition-colors',
                                                            isAbout
                                                                ? 'bg-primary text-primary-foreground'
                                                                : 'bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
                                                        )}
                                                    >
                                                        <ArrowUpRight
                                                            className="h-4 w-4"
                                                            strokeWidth={2}
                                                        />
                                                    </span>
                                                </Link>
                                            );
                                        })}
                                    </nav>

                                    <Link
                                        to="/contact"
                                        onClick={() => setOpen(false)}
                                        className="group mt-5 flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98]"
                                    >
                                        Let&apos;s Talk
                                        <ArrowUpRight
                                            className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                            strokeWidth={2}
                                        />
                                    </Link>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}