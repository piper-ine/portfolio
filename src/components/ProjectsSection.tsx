import ProjectCard from './ProjectCard';

const projects = [
    {
        title: 'Awwwards',
        description: 'A small pet project with an emphasis on animation based on an online course',
        technologies: ['React', 'TypeScript', 'Tailwind', 'GSAP', "Pet-project", "Mobile-first"],
        className: 'lg:col-span-2',
        src: '/project-1.png',
        href: "https://awward-web.vercel.app/"
    },
    {
        title: 'Kanban manager',
        description: 'Book-focused web app concept with clean UI components and structured content flows.',
        technologies: ['React', 'dnd', 'drag-and-drop', "Localhost"],
        src: '/project-2.png',
        href: "https://awward-web.vercel.app/"
    },
    {
        title: 'Admin Dashboard',
        description: 'Compact dashboard UI for scanning metrics, managing records and navigating dense data.',
        technologies: ['Next.js', 'Tailwind', 'Prisma'],
        src: '/project.png',
        href: "https://awward-web.vercel.app/"
    },
    {
        title: 'Automation Tools',
        description: 'Utility scripts and small tools for parsers, Telegram bots and workflow automation.',
        technologies: ['Python', 'Telegram bots', 'Parsers'],
        className: 'lg:col-span-2',
        src: '/project.png',
        href: "https://awward-web.vercel.app/"
    },
];

const ProjectsSection = () => {
    return (
        <section id='projects' className='min-h-dvh scroll-mt-4 py-6 sm:py-8'>
            <div className='section-base w-full py-8 sm:py-10 lg:py-12'>
                <div className='max-w-3xl'>
                    <p className='text-sm font-semibold text-accent sm:text-base'>Projects</p>
                    <h2 className='mt-3 text-3xl font-bold text-primary-light sm:text-4xl lg:text-5xl'>
                        Selected work
                    </h2>
                    <p className='mt-4 text-sm leading-6 text-primary-light/60 sm:text-base'>
                        A small collection of projects and concepts that show how I structure interfaces,
                        application logic and tooling.
                    </p>
                </div>

                <div className='mt-10 grid auto-rows-fr gap-4 lg:grid-cols-3'>
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
