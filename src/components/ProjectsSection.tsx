import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import ProjectCard from './ProjectCard';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
    {
        title: 'Awwwards',
        description: 'A small pet project with an emphasis on animation based on an online course',
        technologies: ['React', 'TypeScript', 'Tailwind', 'GSAP', "Pet-project", "Mobile-first"],
        className: 'lg:col-span-2',
        src: '/project-1.png',
        href: "https://awward-web.vercel.app/",
        githubHref: "https://github.com/"
    },
    {
        title: 'Kanban manager',
        description: 'A Kanban board for task management using drag-and-drop control. Data is stored in LocalStorage.',
        technologies: ['React', 'dnd', 'drag-and-drop', "Localhost"],
        src: '/project-2.png',
        href: "https://kanban-manager-ls.vercel.app/",
        githubHref: "https://github.com/"
    },
    {
        title: 'VIN-decoder demo',
        description: 'An app for checking a cars VIN code from the American API',
        technologies: ['Next.js', 'Tailwind', 'API', "Castom-hooks", "Async-fetch"],
        src: '/project-3.png',
        href: "https://vin-decoder-demo-ruddy.vercel.app/",
        githubHref: "https://github.com/"
    },
    {
        title: 'Exchange Rate',
        description: 'Online currency exchange rate tracking. The project was quite fun to develop. We used free APIs from European banks. The problem is that the data is only updated once a day.',
        technologies: ['JS/TS', 'API', 'Fetching', "Parsing", "Chart.js", "Mobile-first"],
        className: 'lg:col-span-2',
        src: '/project-4.png',
        href: "https://exchange-frankfurter.vercel.app/",
        githubHref: "https://github.com/"
    },
];

const ProjectsSection = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.set('.projects-panel', {
            autoAlpha: 0,
            y: 48,
            scale: 0.98,
        });
        gsap.set('.projects-heading-item', {
            autoAlpha: 0,
            y: 24,
        });
        gsap.set('.project-card', {
            autoAlpha: 0,
            y: 32,
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 72%',
                toggleActions: 'play none none reverse',
            },
            defaults: {
                duration: 0.65,
                ease: 'power3.out',
            },
        });

        tl.to('.projects-panel', {
            autoAlpha: 1,
            y: 0,
            scale: 1,
        })
            .to('.projects-heading-item', {
                autoAlpha: 1,
                y: 0,
                stagger: 0.22,
            })
            .to('.project-card', {
                autoAlpha: 1,
                y: 0,
                stagger: 0.12,
            }, '-=0.12');
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id='projects' className='min-h-dvh scroll-mt-4 py-6 sm:py-8'>
            <div className='projects-panel section-base w-full py-8 sm:py-10 lg:py-12'>
                <div className='max-w-3xl'>
                    <p className='projects-heading-item text-sm font-semibold text-accent sm:text-base'>Projects</p>
                    <h2 className='projects-heading-item mt-3 text-3xl font-bold text-primary-light sm:text-4xl lg:text-5xl'>
                        Selected work
                    </h2>
                    <p className='projects-heading-item mt-4 text-sm leading-6 text-primary-light/60 sm:text-base'>
                        A small collection of projects and concepts that show how I structure interfaces,
                        application logic and tooling.
                    </p>
                </div>

                <div className='mt-10 grid auto-rows-fr gap-4 lg:grid-cols-3'>
                    {projects.map((project) => (
                        <div key={project.title} className='project-card'>
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
