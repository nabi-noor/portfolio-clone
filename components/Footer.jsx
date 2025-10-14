"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Social from "@/components/Social";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/resume", label: "Profile" },
    { href: "/contact", label: "Contact" },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: "easeOut" } }}
            className="border-t border-white/10 bg-black/40 backdrop-blur"
        >
            <div className="container mx-auto py-12">
                <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                    <div className="space-y-4 text-center lg:text-left">
                        <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                            Backend · Cloud · Platform
                        </p>
                        <p className="max-w-xl text-base text-white/70">
                            Partnering with product and platform teams to launch resilient infrastructure, AI automation, and compliant cloud workloads.
                        </p>
                        <div className="flex justify-center lg:justify-start">
                            <Social containerStyles="flex gap-4" iconStyles="w-9 h-9 border border-white/20 rounded-full flex justify-center items-center text-white/70 text-sm hover:border-accent hover:text-accent hover:bg-accent/10 transition" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-6 lg:items-end">
                        <nav className="flex flex-wrap justify-center gap-4 lg:justify-end">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-white/60 transition hover:text-accent"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                        <div className="text-center text-xs text-white/40 lg:text-right">
                            <p>© {currentYear} Noor Nabi. All rights reserved.</p>
                            <p className="mt-1">Available for distributed teams worldwide · UTC+5</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
