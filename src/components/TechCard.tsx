import type { IconType } from 'react-icons';
import TechLevelBar from './TechLevelBar';

export type Tech = {
    name: string;
    Icon: IconType;
    level: number;
};

type TechCardProps = {
    title: string;
    description: string;
    Icon: IconType;
    items: Tech[];
};

const TechCard = ({ title, description, Icon, items }: TechCardProps) => {
    return (
        <article className='rounded-xl border border-secondary bg-primary-dark/80 p-5 transition-colors hover:border-accent/50'>
            <div className='flex items-start justify-between gap-4'>
                <div>
                    <h3 className='text-xl font-semibold text-primary-light'>{title}</h3>
                    <p className='mt-2 text-sm leading-6 text-primary-light/50'>{description}</p>
                </div>
                <div className='flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent'>
                    <Icon className='size-5' aria-hidden='true' />
                </div>
            </div>

            <div className='mt-6 space-y-4'>
                {items.map(({ name, Icon: ItemIcon, level }) => (
                    <div key={name}>
                        <div className='mb-2 flex items-center justify-between gap-3'>
                            <div className='flex items-center gap-2 text-sm font-medium text-primary-light/80'>
                                <ItemIcon className='size-4 text-accent' aria-hidden='true' />
                                <span>{name}</span>
                            </div>
                            <span className='text-xs text-primary-light/40'>{level}%</span>
                        </div>
                        <TechLevelBar level={level} />
                    </div>
                ))}
            </div>
        </article>
    );
};

export default TechCard;
