import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const Logo = () => (
    <Link
        to="/"
        className="text-xl font-semibold tracking-tight text-foreground transition-opacity hover:opacity-70"
        aria-label="Home"
    >
        Muhammad Haris Nadeem<span className="text-primary">.</span>
    </Link>
);

const navLinkClass = ({ isActive }) =>
    cn(
        'text-sm transition-colors hover:text-foreground',
        isActive ? 'text-primary font-medium' : 'text-muted-foreground'
    );

const mobileLinks = [
    { to: '/work', label: 'Work' },
    { to: '/#about', label: 'About' },
    { to: '/book-a-call', label: 'Book a Free Call' },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const headerRef = useRef(null);
    const panelRef = useRef(null);
    const closeBtnRef = useRef(null);

    // Close on route change
    useEffect(() => {
        setOpen(false);
    }, [location.pathname, location.hash]);

    // Keyboard support: Escape closes, focus management
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => {
            if (e.key === 'Escape') {
                setOpen(false);
            }
        };
        document.addEventListener('keydown', onKey);
        // Focus the first interactive element in the panel
        const t = setTimeout(() => closeBtnRef.current?.focus(), 50);
        return () => {
            document.removeEventListener('keydown', onKey);
            clearTimeout(t);
        };
    }, [open]);

    // Outside-click closing (clicks on header bar itself don't close)
    useEffect(() => {
        if (!open) return;
        const onPointer = (e) => {
            if (
                panelRef.current &&
                !panelRef.current.contains(e.target) &&
                headerRef.current &&
                !headerRef.current.contains(e.target)
            ) {
                setOpen(false);
            }
        };
        document.addEventListener('pointerdown', onPointer);
        return () => document.removeEventListener('pointerdown', onPointer);
    }, [open]);

    return (
        <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
            <div className="pointer-events-auto w-full max-w-[1180px]">
                <header
                    ref={headerRef}
                    className={cn(
                        'flex h-14 items-center justify-between rounded-2xl border border-border/70 px-4 shadow-[0_8px_30px_rgba(24,24,27,0.08)] backdrop-blur-md sm:h-20 sm:px-6',
                        'bg-background/75'
                    )}
                >
                    <Logo />

                    {/* Center navigation (desktop) */}
                    <nav
                        className="hidden items-center gap-10 md:flex"
                        aria-label="Main navigation"
                    >
                        <NavLink
                            to="/work"
                            className={({ isActive }) =>
                                cn(
                                    'text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:text-foreground',
                                    isActive ? 'text-primary' : 'text-muted-foreground'
                                )
                            }
                        >
                            Work
                        </NavLink>

                        <Link
                            to="/#about"
                            className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
                        >
                            About
                        </Link>

                        <NavLink
                            to="/book-a-call"
                            className={({ isActive }) =>
                                cn(
                                    'text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:text-foreground',
                                    isActive ? 'text-primary' : 'text-muted-foreground'
                                )
                            }
                        >
                            Book a Free Call
                        </NavLink>
                    </nav>

                    {/* Right cluster */}
                    <div className="flex items-center gap-3">
                        <Link
                            to="/contact"
                            className="hidden items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98] md:inline-flex"
                        >
                            Let&apos;s Talk
                            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setOpen((v) => !v)}
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

                {/* Mobile dropdown panel */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            id="mobile-nav-panel"
                            ref={panelRef}
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-2 overflow-hidden rounded-2xl border border-border/70 bg-background/95 shadow-[0_12px_40px_rgba(24,24,27,0.12)] backdrop-blur-md md:hidden"
                            role="menu"
                            aria-label="Mobile navigation"
                        >
                            <nav className="flex flex-col p-2">
                                {mobileLinks.map((item) => (
                                    <Link
                                        key={item.label}
                                        to={item.to}
                                        onClick={() => setOpen(false)}
                                        className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
                                        role="menuitem"
                                    >
                                        {item.label}
                                        <ArrowUpRight
                                            className="h-4 w-4 text-muted-foreground"
                                            strokeWidth={2}
                                        />
                                    </Link>
                                ))}
                                <Link
                                    to="/contact"
                                    onClick={() => setOpen(false)}
                                    className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98]"
                                    role="menuitem"
                                >
                                    Let&apos;s Talk
                                    <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                                </Link>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
