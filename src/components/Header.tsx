import { useRef, useState } from 'react';
import {
    HiCodeBracket,
    HiEnvelope,
    HiMiniBars3,
    HiMiniXMark,
    HiOutlineFolder,
    HiUser,
} from 'react-icons/hi2';
import type { IconType } from 'react-icons';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type NavItem = {
    text: string;
    href: string;
    Icon: IconType;
};

const navItems: NavItem[] = [
    {
        text: 'About',
        href: '#about',
        Icon: HiUser,
    },
    {
        text: 'Tech',
        href: '#tech',
        Icon: HiCodeBracket,
    },
    {
        text: 'Projects',
        href: '#projects',
        Icon: HiOutlineFolder,
    },
    {
        text: 'Contact',
        href: '#contact',
        Icon: HiEnvelope,
    },
];

const Header = () => {
    const headerRef = useRef<HTMLElement>(null);
    const mobileNavRef = useRef<HTMLElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: {
                duration: 0.45,
                ease: 'power3.out',
            },
        });

        tl.from('.header-shell', {
            autoAlpha: 0,
            y: -32,
            scale: 0.98,
        }).from(
            '.header-domino',
            {
                autoAlpha: 0,
                y: 14,
                stagger: 0.08,
            },
            '-=0.1',
        );
    }, { scope: headerRef });

    useGSAP(() => {
        if (!isMenuOpen) {
            return;
        }

        const tl = gsap.timeline({
            defaults: {
                duration: 0.3,
                ease: 'power2.out',
            },
        });

        tl.from(mobileNavRef.current, {
            autoAlpha: 0,
            y: -10,
        }).from(
            '.mobile-menu-item',
            {
                autoAlpha: 0,
                x: -12,
                stagger: 0.06,
            },
            '-=0.12',
        );
    }, { scope: headerRef, dependencies: [isMenuOpen] });

    useGSAP(() => {
        let isHidden = false;

        const showHeader = () => {
            if (!headerRef.current || !isHidden) {
                return;
            }

            isHidden = false;
            gsap.to(headerRef.current, {
                autoAlpha: 1,
                duration: 0.28,
                ease: 'power2.out',
                overwrite: 'auto',
                yPercent: 0,
            });
        };

        const hideHeader = () => {
            if (!headerRef.current || isHidden || isMenuOpen) {
                return;
            }

            isHidden = true;
            gsap.to(headerRef.current, {
                autoAlpha: 0,
                duration: 0.28,
                ease: 'power2.out',
                overwrite: 'auto',
                yPercent: -120,
            });
        };

        const trigger = ScrollTrigger.create({
            end: 'max',
            onUpdate: (self) => {
                if (self.scroll() <= 24 || self.direction === -1) {
                    showHeader();
                    return;
                }

                hideHeader();
            },
            start: 0,
        });

        return () => trigger.kill();
    }, { dependencies: [isMenuOpen] });

    return (
        <header ref={headerRef} className='sticky top-0 z-50 shrink-0 py-4 text-primary-light sm:py-5' id='header'>
            <div className='header-shell flex items-center justify-between gap-4 section-base'>
                <a
                    href='#'
                    className='header-domino shrink-0 text-lg font-semibold sm:text-xl'
                    aria-label='N.E Developer home'
                >
                    <span className='text-accent'>{'<'}</span>
                    <span className='text-primary-light'>N.E</span>
                    <span className='text-accent'>{'/>'}</span>
                    <span className='ml-1 text-primary-light'>Developer</span>
                </a>

                <nav className='hidden items-center gap-2 md:flex' aria-label='Primary navigation'>
                    {navItems.map(({ text, href, Icon }) => (
                        <a
                            key={href}
                            className='header-domino inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-primary-light/80 transition-colors hover:bg-secondary hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/70 lg:text-base'
                            href={href}
                        >
                            <Icon className='size-4 text-accent' aria-hidden='true' />
                            <span>{text}</span>
                        </a>
                    ))}
                </nav>

                <button
                    type='button'
                    className='header-domino inline-flex size-10 items-center justify-center rounded-lg border border-secondary text-primary-light transition-colors hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/70 md:hidden'
                    aria-label='Toggle navigation menu'
                    aria-expanded={isMenuOpen}
                    aria-controls='mobile-navigation'
                    onClick={() => setIsMenuOpen((current) => !current)}
                >
                    {isMenuOpen ? (
                        <HiMiniXMark className='size-6' aria-hidden='true' />
                    ) : (
                        <HiMiniBars3 className='size-6' aria-hidden='true' />
                    )}
                </button>
            </div>

            <nav
                ref={mobileNavRef}
                id='mobile-navigation'
                className={`${isMenuOpen ? 'grid' : 'hidden'} mt-2 gap-2 rounded-xl border border-secondary bg-primary-dark p-2 md:hidden`}
                aria-label='Mobile navigation'
            >
                {navItems.map(({ text, href, Icon }) => (
                    <a
                        key={href}
                        className='mobile-menu-item flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-primary-light/80 transition-colors hover:bg-secondary hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/70'
                        href={href}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Icon className='size-5 text-accent' aria-hidden='true' />
                        <span>{text}</span>
                    </a>
                ))}
            </nav>
        </header>
    );
};

export default Header;
