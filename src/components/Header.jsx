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
    const closeBtnRef = useRef(null);

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
        const timeout = setTimeout(() => closeBtnRef.current?.focus(), 50);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            clearTimeout(timeout);
        };
    }, [open]);

    // Close mobile menu when clicking outside the header/panel.
    useEffect(() => {
        if (!open) return;

        const onPointerDown = (event) => {
            const clickedPanel =
                panelRef.current && panelRef.current.contains(event.target);
            const clickedHeader =
                headerRef.current && headerRef.current.contains(event.target);

            if (!clickedPanel && !clickedHeader) {
                setOpen(false);
            }
        };

        document.addEventListener('pointerdown', onPointerDown);

        return () => document.removeEventListener('pointerdown', onPointerDown);
    }, [open]);

    const desktopNavClass =
        'text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:text-foreground';

    return (
        <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
            <div className="pointer-events-auto w-full max-w-7xl">
                <header
                    ref={headerRef}
                    className={cn(
                        'flex h-14 items-center justify-between rounded-2xl border border-border/70 px-4 shadow-[0_8px_30px_rgba(24,24,27,0.08)] backdrop-blur-md sm:h-20 sm:px-6',
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
                            ref={closeBtnRef}
                            type="button"
                            onClick={() => setOpen((value) => !value)}
                            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-secondary md:hidden"
                            aria-label={open ? 'Close menu' : 'Open menu'}
                            aria-expanded={open}
                            aria-controls="mobile-nav-panel"
                        >
                            {open ? (
                                <X className="h-5 w-5" strokeWidth={1.75} />
                            ) : (
                                <Menu className="h-5 w-5" strokeWidth={1.75} />
                            )}
                        </button>
                    </div>
                </header>

                {/* Mobile dropdown */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            id="mobile-nav-panel"
                            ref={panelRef}
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{
                                duration: 0.22,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="mt-2 overflow-hidden rounded-2xl border border-border/70 bg-background/95 shadow-[0_12px_40px_rgba(24,24,27,0.12)] backdrop-blur-md md:hidden"
                            role="menu"
                            aria-label="Mobile navigation"
                        >
                            <nav className="flex flex-col p-2">
                                {mobileLinks.map((item) => {
                                    const isAbout =
                                        item.label === 'About' && aboutActive;

                                    return (
                                        <Link
                                            key={item.label}
                                            to={item.to}
                                            onClick={() => setOpen(false)}
                                            className={cn(
                                                'flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-colors hover:bg-secondary hover:text-primary',
                                                isAbout
                                                    ? 'text-primary'
                                                    : 'text-foreground'
                                            )}
                                            role="menuitem"
                                            aria-current={
                                                isAbout ? 'page' : undefined
                                            }
                                        >
                                            {item.label}
                                            <ArrowUpRight
                                                className={cn(
                                                    'h-4 w-4',
                                                    isAbout
                                                        ? 'text-primary'
                                                        : 'text-muted-foreground'
                                                )}
                                                strokeWidth={2}
                                            />
                                        </Link>
                                    );
                                })}

                                <Link
                                    to="/contact"
                                    onClick={() => setOpen(false)}
                                    className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98]"
                                    role="menuitem"
                                >
                                    Let&apos;s Talk
                                    <ArrowUpRight
                                        className="h-4 w-4"
                                        strokeWidth={2}
                                    />
                                </Link>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}