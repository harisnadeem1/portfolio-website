import React from 'react';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

/* ── EDIT: your contact details and social links ────────── */
const email = 'hello@yourname.com';
const socials = [
    { label: 'GitHub', href: 'https://github.com/yourusername', icon: Github },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: Linkedin },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-[#2B2B2E] bg-[#18181B]">
            <div className="container max-w-6xl py-12 md:py-16">
                <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-xs">
                        <p className="text-lg font-semibold tracking-tight text-[#F2EFE8]">
                            yourname<span className="text-primary">.</span>
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-[#F2EFE8]/70">
                            Full-Stack Developer building clean, reliable digital products.
                        </p>
                    </div>

                    <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
                        <div>
                            <p className="text-xs font-medium uppercase tracking-widest text-[#F2EFE8]/60">
                                Email
                            </p>
                            <a
                                href={`mailto:${email}`}
                                className="group mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#F2EFE8] transition-colors hover:text-primary"
                            >
                                {email}
                                <ArrowUpRight className="h-3.5 w-3.5 text-[#F2EFE8]/60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                            </a>
                        </div>
                        <div>
                            <p className="text-xs font-medium uppercase tracking-widest text-[#F2EFE8]/60">
                                Elsewhere
                            </p>
                            <ul className="mt-3 space-y-2.5">
                                {socials.map(({ label, href, icon: Icon }) => (
                                    <li key={label}>
                                        <a
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group inline-flex items-center gap-2 text-sm font-medium text-[#F2EFE8] transition-colors hover:text-primary"
                                        >
                                            <Icon className="h-4 w-4 text-[#F2EFE8]/60 transition-colors group-hover:text-primary" strokeWidth={1.75} />
                                            {label}
                                            <ArrowUpRight className="h-3.5 w-3.5 text-[#F2EFE8]/60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-2 border-t border-[#2B2B2E] pt-6 text-xs text-[#F2EFE8]/55 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {year} Your Name. All rights reserved.</p>
                    <p>Designed &amp; built by Your Name</p>
                </div>
            </div>
        </footer>
    );
}
