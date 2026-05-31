import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import {
    SiExpress,
    SiFigma,
    SiGit,
    SiNextdotjs,
    SiNodedotjs,
    SiPrisma,
    SiPython,
    SiReact,
    SiTailwindcss,
    SiTelegram,
    SiTypescript,
    SiVercel,
} from 'react-icons/si';

import { HiCommandLine, HiServerStack, HiSparkles, HiWrenchScrewdriver } from 'react-icons/hi2';
import TechCard, { type Tech } from './TechCard';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type TechGroup = {
    title: string;
    description: string;
    Icon: typeof HiCommandLine;
    items: Tech[];
};

const techGroups: TechGroup[] = [
    {
        title: 'Front-end',
        description: 'Interfaces, components, responsive layouts and smooth client experience.',
        Icon: HiCommandLine,
        items: [
            { name: 'React ecosystem', Icon: SiReact, level: 88 },
            { name: 'Next.js', Icon: SiNextdotjs, level: 78 },
            { name: 'Tailwind CSS', Icon: SiTailwindcss, level: 90 },
        ],
    },
    {
        title: 'Back-end',
        description: 'API logic, typed server code, database models and application structure.',
        Icon: HiServerStack,
        items: [
            { name: 'Express', Icon: SiExpress, level: 76 },
            { name: 'Node.js', Icon: SiNodedotjs, level: 80 },
            { name: 'TypeScript', Icon: SiTypescript, level: 84 },
            { name: 'Prisma', Icon: SiPrisma, level: 72 },
        ],
    },
    {
        title: 'Tools',
        description: 'Daily workflow tools for design, version control and faster development.',
        Icon: HiWrenchScrewdriver,
        items: [
            { name: 'Git', Icon: SiGit, level: 82 },
            { name: 'AI tools', Icon: HiSparkles, level: 86 },
            { name: 'Figma', Icon: SiFigma, level: 70 },
            { name: 'Vercel', Icon: SiVercel, level: 50 },
        ],
    },
];

const additionalSkills = [
    { name: 'Python', Icon: SiPython },
    { name: 'Telegram bots', Icon: SiTelegram },
    { name: 'Parsers', Icon: HiCommandLine },
];

const TechSection = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.set('.tech-panel', {
            autoAlpha: 0,
            y: 48,
            scale: 0.98,
        });
        gsap.set('.tech-heading-item', {
            autoAlpha: 0,
            y: 24,
        });
        gsap.set('.tech-card', {
            autoAlpha: 0,
            y: 56,
            scale: 0.96,
        });
        gsap.set('.tech-level-fill', {
            scaleX: 0,
            transformOrigin: 'left center',
        });
        gsap.set('.tech-extra-skill', {
            autoAlpha: 0,
            y: 18,
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 65%',
                end: 'bottom bottom',
                scrub: 0.85,
            },
            defaults: {
                duration: 1,
                ease: 'power3.out',
            },
        });

        tl.to('.tech-panel', {
            autoAlpha: 1,
            y: 0,
            scale: 1,
        })
            .to(
                '.tech-heading-item',
                {
                    autoAlpha: 1,
                    y: 0,
                    stagger: 0.22,
                },
            )
            .to(
                '.tech-card',
                {
                    autoAlpha: 1,
                    y: 0,
                    scale: 1,
                    stagger: 0.34,
                },
            )
            .to(
                '.tech-level-fill',
                {
                    scaleX: 1,
                    stagger: 0.08,
                    duration: 1.2,
                },
                '-=0.45',
            )
            .to(
                '.tech-extra-skill',
                {
                    autoAlpha: 1,
                    y: 0,
                    stagger: 0.18,
                },
            );
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id='tech' className='flex min-h-dvh scroll-mt-4 items-center py-6 sm:py-8'>
            <div className='tech-panel section-base w-full py-8 sm:py-10 lg:py-12'>
                <div className='mx-auto max-w-3xl text-center'>
                    <p className='tech-heading-item text-sm font-semibold text-accent sm:text-base'>Tech stack</p>
                    <h2 className='tech-heading-item mt-3 text-3xl font-bold text-primary-light sm:text-4xl lg:text-5xl'>
                        Technologies I use
                    </h2>
                    <p className='tech-heading-item mt-4 text-sm leading-6 text-primary-light/60 sm:text-base'>
                        A focused set of tools for building modern web applications from interface to API.
                    </p>
                </div>

                <div className='mt-10 grid gap-4 lg:grid-cols-3'>
                    {techGroups.map((group) => (
                        <div key={group.title} className='tech-card'>
                            <TechCard {...group} />
                        </div>
                    ))}
                </div>

                <div className='mt-8 flex flex-wrap items-center justify-center gap-3 border-t border-secondary pt-6'>
                    {additionalSkills.map(({ name, Icon }) => (
                        <span
                            key={name}
                            className='tech-extra-skill inline-flex items-center gap-2 rounded-full border border-secondary bg-primary-dark/80 px-4 py-2 text-sm font-medium text-primary-light/70'
                        >
                            <Icon className='size-4 text-accent' aria-hidden='true' />
                            {name}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechSection;
