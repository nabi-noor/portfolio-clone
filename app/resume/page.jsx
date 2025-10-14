"use client";

import {
    FaJs,
    FaReact,
    FaNodeJs,
    FaAws,
    FaDatabase,
    FaDocker,
    FaPython,
} from 'react-icons/fa';

import {
    SiNextdotjs,
    SiKubernetes,
    SiAwslambda,
    SiMicrosoftazure,
    SiTerraform,
} from 'react-icons/si';

//about data
const about = {
    title: 'About me',
    description: 'Backend and cloud engineer blending platform leadership with sleeves-rolled-up delivery. I specialise in building resilient infrastructure, realtime data systems, and AI-powered automation for fintech, SaaS, and regulated industries. Every engagement focuses on clarity of outcomes, rock-solid operations, and enabling teams to move faster with confidence.',
    info: [
        {
            fieldName: "Name",
            fieldValue: "Noor Nabi"
        },
        {
            fieldName: "Email",
            fieldValue: "panhwarnabinoor@gmail.com"
        },
        {
            fieldName: "Phone",
            fieldValue: "+13025561466"
        },
        {
            fieldName: "Experience",
            fieldValue: "6+ Years"
        },
        // {
        //     fieldName: "Skype",
        //     fieldValue: "luke.01"
        // },
        {
            fieldName: "Nationality",
            fieldValue: "Pakistani"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Timezone",
            fieldValue: "UTC+5 (flexible worldwide)"
        },
    ],
};

//experience data
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: "Selected engagements across fintech, AI, and cloud compliance—leading architecture, hands-on build, and operational enablement.",
    items: [
        {
            company: "Rulrr",
            position: "Cloud Engineer",
            duration: "Jul 2025 - Present"
        },
        {
            company: "Odea Integrations",
            position: "Backend Engineer",
            duration: "Apr 2025 - Jun 2025"
        },
        {
            company: "WeUno Technologies",
            position: "Backend Engineer",
            duration: "Feb 2024 - Apr 2025"
        },
        {
            company: "Icommunix",
            position: "Software Engineer",
            duration: "May 2022 - Feb 2024"
        },
        {
            company: "PhpLift",
            position: "Jr. Software Engineer",
            duration: "Jun 2020 - May 2022"
        },
    ],
};

//education data
const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description: "Grounded in computer science fundamentals with a continuous learning path across cloud architecture, distributed systems, and platform strategy.",
    items: [
        // {
        //     institution: "University of Bradford",
        //     degree: "M.S Computer Science",
        //     duration: "2022 - 2024"
        // },
        {
            institution: "Namal Institute, Mianwali",
            degree: "B.Sc Computer Science · Cloud & Distributed Systems Track",
            duration: "2018 - 2022"
        },
        
    ],
};

//skills data
const skills = {
    icon: '/assets/resume/cap.svg',
    title: 'My skills',
    description: "Tooling I lean on to deliver production-ready infrastructure, APIs, data pipelines, and automation for regulated, high-growth products.",
    skillList: [
        {
            icon: <FaJs />,
            name: "javascript"
        },
        {
            icon: <FaPython />,
            name: "python"
        },
        {
            icon: <FaReact />,
            name: "react.js"
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js"
        },
        {
            icon: <FaAws />,
            name: "Amazon Web Services"
        },
        {
            icon: <SiMicrosoftazure />,
            name: "Microsoft Azure"
        },
        {
            icon: <FaNodeJs />,
            name: "node.js"
        },
        {
            icon: <FaDatabase />,
            name: "PostgreSQL"
        },
        {
            icon: <FaDocker />,
            name: "Docker"
        },
        {
            icon: <SiKubernetes />,
            name: "Kubernetes"
        },
        {
            icon: <SiAwslambda />,
            name: "Lambda"
        },
        {
            icon: <SiTerraform />,
            name: "Terraform"
        }
    ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 0.3,
                    duration: 0.5,
                    ease: 'easeOut',
                },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <div className="mb-10 space-y-4 text-center xl:text-left">
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white/60">
                        Profile & Credentials
                    </span>
                    <h1 className="text-4xl font-semibold text-white md:text-5xl">
                        A platform engineer who pairs strategy with hands-on delivery.
                    </h1>
                    <p className="mx-auto max-w-3xl text-base text-white/70 xl:mx-0">
                        From fintech trading desks to AI automation programs, I help teams navigate architecture decisions, execute build plans, and
                        leave behind infrastructure that is observable, secure, and ready for the next milestone.
                    </p>
                </div>
                <Tabs defaultValue='about' className='flex flex-col xl:flex-row gap-[60px]'>
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="about">About me</TabsTrigger>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className='min-h-[70vh] w-full'>
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div>
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div>
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center">
                                                            <div className="text-6xl transition-all duration-300 group-hover:text-accent">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        {/* about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center gap-4 xl:justify-start">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
