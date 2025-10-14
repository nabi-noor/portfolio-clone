"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

const contactChannels = [
    {
        icon: <FaEnvelope className="text-lg" />,
        label: "Email",
        value: "panhwarnabinoor@gmail.com",
        helper: "Best for proposals, scopes, and async collaboration.",
    },
    {
        icon: <FaPhoneAlt className="text-lg" />,
        label: "Phone / WhatsApp",
        value: "+13025561466",
        helper: "Available for quick alignment Mon–Fri · 10am–6pm PKT.",
    },
    {
        icon: <FaMapMarkerAlt className="text-lg" />,
        label: "Location",
        value: "Bahria Town · Karachi, Pakistan",
        helper: "Remote-first; travel for key onsites and workshops.",
    },
];

const responseHighlights = [
    {
        title: "Reliable response times",
        description: "Expect a reply within one business day. Same-day turnarounds for active engagements.",
    },
    {
        title: "Discovery-first approach",
        description: "We start every engagement with a short discovery session to align on scope, success metrics, and timelines.",
    },
    {
        title: "Hands-on partnership",
        description: "You work directly with me—no handoffs, no layers—alongside any specialists we bring in.",
    },
];

const defaultForm = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
};

const Contact = () => {
    const [form, setForm] = useState(defaultForm);
    const [status, setStatus] = useState({ state: "idle", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const updateField = (key) => (event) => {
        setForm((prev) => ({
            ...prev,
            [key]: event.target.value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!form.firstName || !form.email || !form.message) {
            setStatus({
                state: "error",
                message: "Please provide your first name, email, and a short message.",
            });
            return;
        }

        setIsSubmitting(true);
        setStatus({ state: "loading", message: "Sending your message…" });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (!response.ok || !data.ok) {
                throw new Error(data.error || "Failed to send message.");
            }

            setStatus({
                state: "success",
                message: "Thanks for reaching out — I’ll be in touch within one business day.",
            });
            setForm(defaultForm);
        } catch (error) {
            console.error(error);
            setStatus({
                state: "error",
                message: error.message || "Something went wrong. Please try again later.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.5, ease: "easeOut" } }}
            className="py-12"
        >
            <div className="container mx-auto">
                <div className="grid gap-12 xl:grid-cols-[minmax(0,0.9fr)_1.1fr]">
                    <div className="space-y-10">
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white/60">
                            Let&apos;s collaborate
                        </span>
                        <div className="space-y-5 max-w-xl">
                            <h1 className="text-4xl font-semibold text-white md:text-5xl">
                                Architecting dependable platforms starts with a focused conversation.
                            </h1>
                            <p className="text-base text-white/70">
                                Share a few details about your roadmap—fintech launches, AI initiatives, compliance programs, or platform upgrades.
                                I&apos;ll respond with next steps, availability, and an initial perspective on scope so we can dive in quickly.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {contactChannels.map((channel) => (
                                <div
                                    key={channel.label}
                                    className="flex gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-5 backdrop-blur transition duration-300 hover:border-accent/60"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/40 bg-accent/10 text-accent">
                                        {channel.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm uppercase tracking-[0.2em] text-white/40">{channel.label}</p>
                                        <p className="mt-1 text-lg font-medium text-white">{channel.value}</p>
                                        <p className="mt-1 text-sm text-white/60">{channel.helper}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 backdrop-blur">
                            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white/40">
                                <FiClock className="text-base" />
                                Response commitments
                            </div>
                            <div className="mt-4 grid gap-4">
                                {responseHighlights.map((item) => (
                                    <div key={item.title}>
                                        <p className="text-sm font-semibold text-accent">{item.title}</p>
                                        <p className="mt-1 text-sm text-white/70">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 shadow-[0_30px_90px_rgba(14,165,233,0.12)] backdrop-blur xl:max-w-[520px] xl:justify-self-end">
                        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                            <div>
                                <h2 className="text-3xl font-semibold text-white">Project kickoff form</h2>
                                <p className="mt-2 text-sm text-white/60">
                                    Tell me where you are today and what a successful handoff looks like. I&apos;ll review and respond with a suggested next step within 24 hours.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                <Input
                                    type="text"
                                    placeholder="First name"
                                    className="bg-black/30"
                                    value={form.firstName}
                                    onChange={updateField("firstName")}
                                    autoComplete="given-name"
                                    required
                                />
                                <Input
                                    type="text"
                                    placeholder="Last name"
                                    className="bg-black/30"
                                    value={form.lastName}
                                    onChange={updateField("lastName")}
                                    autoComplete="family-name"
                                />
                                <Input
                                    type="email"
                                    placeholder="Work email"
                                    className="bg-black/30"
                                    value={form.email}
                                    onChange={updateField("email")}
                                    autoComplete="email"
                                    required
                                />
                                <Input
                                    type="tel"
                                    placeholder="Phone or WhatsApp"
                                    className="bg-black/30"
                                    value={form.phone}
                                    onChange={updateField("phone")}
                                    autoComplete="tel"
                                />
                            </div>
                            <Select
                                value={form.service}
                                onValueChange={(value) =>
                                    setForm((prev) => ({
                                        ...prev,
                                        service: value,
                                    }))
                                }
                            >
                                <SelectTrigger className="w-full bg-black/30 text-left">
                                    <SelectValue
                                        placeholder="How can I help?"
                                        className="text-white/70"
                                    />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Engagement focus</SelectLabel>
                                        <SelectItem value="platform-foundations">Platform foundations & IaC</SelectItem>
                                        <SelectItem value="data-ai">Data & AI product delivery</SelectItem>
                                        <SelectItem value="compliance">Compliance & reliability programs</SelectItem>
                                        <SelectItem value="fractional-leadership">Fractional platform leadership</SelectItem>
                                        <SelectItem value="other">Something else (let me know below)</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea
                                className="h-[140px] resize-none bg-black/30"
                                placeholder="Share your goals, team context, timelines, and any links that help me prepare."
                                value={form.message}
                                onChange={updateField("message")}
                                required
                            />
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <Button
                                    size="lg"
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full rounded-full bg-accent px-6 py-3 text-black hover:bg-accent/80 disabled:cursor-not-allowed disabled:bg-accent/60 sm:w-auto"
                                >
                                    {isSubmitting ? "Sending…" : "Send message"}
                                </Button>
                                <p className="text-xs text-white/50">
                                    By submitting, you&apos;ll receive a follow-up email with a calendar link for a 30-min discovery call.
                                </p>
                            </div>
                            {status.state !== "idle" && (
                                <p
                                    className={`text-sm ${
                                        status.state === "success"
                                            ? "text-emerald-400"
                                            : status.state === "error"
                                            ? "text-red-400"
                                            : "text-white/60"
                                    }`}
                                    role="status"
                                    aria-live="polite"
                                >
                                    {status.message}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
