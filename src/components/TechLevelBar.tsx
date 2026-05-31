type TechLevelBarProps = {
    level: number;
};

const TechLevelBar = ({ level }: TechLevelBarProps) => {
    const safeLevel = Math.min(Math.max(level, 0), 100);

    return (
        <div className='h-1.5 overflow-hidden rounded-full bg-secondary'>
            <div
                className='tech-level-fill h-full rounded-full bg-accent'
                style={{ width: `${safeLevel}%` }}
                aria-hidden='true'
            />
        </div>
    );
};

export default TechLevelBar;
