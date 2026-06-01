import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { FaGithub, FaLinkedinIn, FaTelegram } from 'react-icons/fa6';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const footerLinks = [
    {
        label: 'GitHub',
        href: 'https://github.com/piper-ine',
        Icon: FaGithub,
    },
    {
        label: 'Telegram',
        href: 'https://t.me/curacao46',
        Icon: FaTelegram,
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/nasan-yernur-401720365/',
        Icon: FaLinkedinIn,
    },
];

const Footer = () => {
    const footerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.set('.footer-item', {
            autoAlpha: 0,
            y: 18,
        });
        gsap.set('.footer-line', {
            scaleX: 0,
            transformOrigin: 'left center',
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: footerRef.current,
                start: 'top 88%',
                toggleActions: 'play none none reverse',
            },
            defaults: {
                duration: 0.5,
                ease: 'power3.out',
            },
        });

        tl.to('.footer-line', {
            scaleX: 1,
        }).to(
            '.footer-item',
            {
                autoAlpha: 1,
                y: 0,
                stagger: 0.08,
            },
            '-=0.2',
        );
    }, { scope: footerRef });

    return (
        <footer ref={footerRef} className='py-6 text-primary-light/55 sm:py-8'>
            <div className='footer-line h-px w-full bg-secondary' />
            <div className='flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between'>
                <div className='footer-item'>
                    <p className='text-sm font-semibold text-primary-light'>N.E Developer</p>
                    <p className='mt-1 text-xs'>© 2026 All rights reserved.</p>
                </div>

                <p className='footer-item text-sm'>Built with React, TypeScript, Tailwind and GSAP.</p>

                <div className='footer-item flex items-center gap-2'>
                    {footerLinks.map(({ label, href, Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target='_blank'
                            rel='noreferrer'
                            className='inline-flex size-9 items-center justify-center rounded-md text-primary-light/60 transition-colors hover:bg-secondary hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/70'
                            aria-label={label}
                        >
                            <Icon className='size-4' aria-hidden='true' />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
