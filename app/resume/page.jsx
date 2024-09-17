"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
    FaAws,
    FaDatabase,
    FaDocker
} from 'react-icons/fa';

import {
    SiTailwindcss, SiNextdotjs,
    SiKubernetes,
    SiAwslambda
} from 'react-icons/si';

//about data
const about = {
    title: 'About me',
    description: 'Experienced Software Engineer with a background in Computer Science and a strong skill set in JavaScript, TypeScript, Node.js, Angular, React, Python, AWS Lambdas, CloudFront, IAM, and CloudFormation. Director of Finance volunteer experience exhibits leadership and financial acumen. Looking for a role as a Backend Developer focusing on Node.js to further lead to innovative projects.',
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
            fieldValue: "(+92) 336 0080 304"
        },
        {
            fieldName: "Experience",
            fieldValue: "5+ Years"
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
            fieldName: "Languages",
            fieldValue: "English"
        },
    ],
};

//experience data
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: "A seasoned software engineer with a background in Computer Science and a strong skill set in JavaScript, TypeScript, Node.js, Angular, React, Python, AWS Lambdas, CloudFront, IAM, and CloudFormation.",
    items: [
        {
            company: "WeUno Technologies.",
            position: "NodeJS Developer",
            duration: "Feb 2024 - Present"
        },
        {
            company: "Icommunix Pvt. Ltd.",
            position: "Full Stack Developer",
            duration: "May 2022 - Sep 2023"
        },
        {
            company: "Jr. Software Developer",
            position: "PHP Lift",
            duration: "Jun 2020 - May 2022"
        },
    ],
};

//education data
const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description: "Qualified software developer with a background in Computer Science and a strong skill set in JavaScript, TypeScript, Node.js, Angular, React, Python, AWS Lambdas, CloudFront, IAM, and CloudFormation.",
    items: [
        {
            institution: "University of Bradford",
            degree: "M.S Computer Science",
            duration: "2022 - 2024"
        },
        {
            institution: "Namal Institute, Mianwali",
            degree: "B.Sc Computer Science",
            duration: "2018 - 2022"
        },
        
    ],
};

//skills data
const skills = {
    icon: '/assets/resume/cap.svg',
    title: 'My skills',
    description: "Skilled in multiple technologies and infrastructures which may include Javascript, TypeScript, Node.js, Angular, React, Python, AWS Lambdas, CloudFront, IAM, and CloudFormation.",
    skillList: [
        {
            icon: <FaJs />,
            name: "javascript"
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
            icon: <FaNodeJs />,
            name: "node.js"
        },
        {
            icon: <FaDatabase />,
            name: "MySQL"
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
        }
    ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{
            opacity: 1, transition: {
                delay: 2.4,
                duration: 0.4,
                ease: 'easeIn'
            }
        }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
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
