import { HiArrowUpRight } from 'react-icons/hi2';

type ProjectCardProps = {
    title: string;
    description: string;
    technologies: string[];
    className?: string;
    src: string;
    href: string;
};

const ProjectCard = ({ title, description, technologies, className = '', src, href }: ProjectCardProps) => {
    return (
        <article
            className={`group flex min-h-[26rem] flex-col overflow-hidden rounded-xl border border-secondary bg-primary-dark/80 transition-colors hover:border-accent/50 ${className}`}
        >
            <div className='relative h-1/2 min-h-52 w-full overflow-hidden border-b border-secondary bg-secondary/60'>
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(176,232,96,0.16),transparent_36%)] opacity-70 transition-opacity group-hover:opacity-100' />
                <img
                    src={src}
                    alt={`${title} preview`}
                    className='relative block size-full object-cover object-center'
                />
            </div>

            <div className='flex flex-1 flex-col p-5 sm:p-6'>
                <h3 className='text-xl font-semibold text-primary-light sm:text-2xl'>{title}</h3>
                <p className='mt-3 max-w-2xl text-sm leading-6 text-primary-light/60'>{description}</p>

                <div className='mt-auto pt-6'>
                    <div className='flex flex-wrap gap-2'>
                        {technologies.map((technology) => (
                            <span
                                key={technology}
                                className='rounded-full border border-secondary bg-accent-soft px-3 py-1 text-xs font-medium text-accent'
                            >
                                {technology}
                            </span>
                        ))}
                    </div>

                    <a
                        href={href}
                        target='_blank'
                        rel='noreferrer'
                        className='mt-5 inline-flex items-center gap-2 rounded-md border border-secondary px-4 py-2 text-sm font-semibold text-primary-light transition-colors hover:border-accent hover:bg-accent hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-accent/70'
                        aria-label={`Open ${title} project`}
                    >
                        Open project
                        <HiArrowUpRight className='size-4' aria-hidden='true' />
                    </a>
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
