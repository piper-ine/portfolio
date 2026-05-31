import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const Hero = () => {
    const heroRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: {
                duration: 0.55,
                ease: 'power3.out',
            },
        });

        tl.from(heroRef.current, {
            autoAlpha: 0,
            y: 28,
            scale: 0.985,
        })
            .from(
                '.hero-copy-item',
                {
                    autoAlpha: 0,
                    y: 22,
                    stagger: 0.08,
                },
                '-=0.22',
            )
            .from(
                '.hero-image-glow',
                {
                    autoAlpha: 0,
                    scale: 0.65,
                    stagger: 0.08,
                },
                '-=0.38',
            )
            .from(
                '.hero-image',
                {
                    autoAlpha: 0,
                    x: 44,
                    scale: 0.96,
                    filter: 'grayscale(1) blur(8px)',
                },
                '-=0.32',
            );

        gsap.to('.hero-image-group', {
            y: -8,
            duration: 3.2,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
            delay: 1,
        });

        gsap.to('.hero-image-glow', {
            scale: 1.06,
            opacity: 0.75,
            duration: 2.8,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
            delay: 1,
        });
    }, { scope: heroRef });

    return (
        <section
            ref={heroRef}
            className='section-base flex flex-1 items-center overflow-hidden p-6 sm:p-8 lg:p-10'
            id='hero-section'
        >
            <div className='grid w-full items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.85fr)] lg:gap-16 xl:gap-20'>
                <div className='max-w-2xl self-center'>
                    <p className='hero-copy-item mb-3 text-sm font-semibold text-primary-light sm:text-xl'>
                        I am Ernur
                    </p>
                    <h1 className='hero-copy-item max-w-xl text-4xl font-bold leading-tight text-primary-light sm:text-5xl lg:text-6xl'>
                        Front-End
                        <span className='block'>Developer</span>
                    </h1>
                    <h2 className='hero-copy-item text-xl text-primary-light/30'>(Full-stack developer)</h2>
                    <p className='hero-copy-item mt-5 max-w-md text-sm leading-6 text-primary-light/70 sm:text-base'>
                        Building thoughtful UI design with clean, responsive development to create websites
                        that look great and perform flawlessly.
                    </p>
                    <p className='hero-copy-item mt-4 flex items-center gap-4 text-sm text-primary-light/50'>
                        <span className='size-2 rounded-full bg-accent animate-ping' />
                        Available for work
                    </p>
                    <div className='hero-copy-item mt-7'>
                        <a
                            href='/'
                            className='inline-flex items-center justify-center rounded-md border border-primary-light/20 bg-primary-light px-5 py-3 text-sm font-semibold text-primary-dark transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent/70'
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                <div className='hero-image-group relative flex items-center justify-center self-center md:justify-end'>
                    <div className='hero-image-glow absolute inset-x-6 bottom-4 top-10 rounded-full bg-accent/15 blur-3xl' />
                    <div className='hero-image-glow absolute right-8 top-1/2 size-56 -translate-y-1/2 rounded-full bg-primary-light/10 blur-3xl sm:size-72' />
                    <img
                        src='hero.jpg'
                        alt='N.E Developer portrait'
                        className='hero-image relative block h-auto max-h-[min(30rem,52dvh)] w-full max-w-sm object-contain object-center grayscale drop-shadow-[0_0_42px_rgba(176,232,96,0.18)] sm:max-w-md lg:max-w-lg'
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
