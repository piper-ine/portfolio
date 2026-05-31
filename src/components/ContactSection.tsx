import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { FaGithub, FaLinkedinIn, FaTelegram } from 'react-icons/fa6';
import { HiEnvelope } from 'react-icons/hi2';
import type { IconType } from 'react-icons';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ContactLink = {
    label: string;
    description: string;
    href: string;
    Icon: IconType;
};

const contactLinks: ContactLink[] = [
    {
        label: 'GitHub',
        description: 'Code and repositories',
        href: 'https://github.com/',
        Icon: FaGithub,
    },
    {
        label: 'Telegram',
        description: 'Fast direct messages',
        href: 'https://t.me/',
        Icon: FaTelegram,
    },
    {
        label: 'Email',
        description: 'Project details and offers',
        href: 'mailto:hello@example.com',
        Icon: HiEnvelope,
    },
    {
        label: 'LinkedIn',
        description: 'Professional profile',
        href: 'https://www.linkedin.com/',
        Icon: FaLinkedinIn,
    },
];

const ContactSection = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.set('.contact-panel', {
            autoAlpha: 0,
            y: 48,
            scale: 0.98,
        });
        gsap.set('.contact-heading-item', {
            autoAlpha: 0,
            y: 24,
        });
        gsap.set('.contact-link-card, .contact-form-field, .contact-submit', {
            autoAlpha: 0,
            y: 24,
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

        tl.to('.contact-panel', {
            autoAlpha: 1,
            y: 0,
            scale: 1,
        })
            .to('.contact-heading-item', {
                autoAlpha: 1,
                y: 0,
                stagger: 0.16,
            })
            .to(
                '.contact-link-card',
                {
                    autoAlpha: 1,
                    y: 0,
                    stagger: 0.1,
                },
                '-=0.14',
            )
            .to(
                '.contact-form-field, .contact-submit',
                {
                    autoAlpha: 1,
                    y: 0,
                    stagger: 0.1,
                },
                '-=0.25',
            );
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id='contact' className='min-h-dvh scroll-mt-4 py-6 sm:py-8'>
            <div className='contact-panel section-base w-full py-8 sm:py-10 lg:py-12'>
                <div className='grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14'>
                    <div>
                        <p className='contact-heading-item text-sm font-semibold text-accent sm:text-base'>Contact</p>
                        <h2 className='contact-heading-item mt-3 text-3xl font-bold text-primary-light sm:text-4xl lg:text-5xl'>
                            Let&apos;s build something useful
                        </h2>
                        <p className='contact-heading-item mt-4 max-w-xl text-sm leading-6 text-primary-light/60 sm:text-base'>
                            Send a short message about your project, collaboration idea or role. I will get back to you
                            through the contact method you leave.
                        </p>

                        <div className='mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1'>
                            {contactLinks.map(({ label, description, href, Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                                    rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
                                    className='contact-link-card group flex items-center gap-4 rounded-xl border border-secondary bg-primary-dark/80 p-4 transition-colors hover:border-accent/60 hover:bg-secondary'
                                >
                                    <span className='flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-primary-dark'>
                                        <Icon className='size-5' aria-hidden='true' />
                                    </span>
                                    <span>
                                        <span className='block text-sm font-semibold text-primary-light'>{label}</span>
                                        <span className='mt-1 block text-xs text-primary-light/50'>{description}</span>
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <form className='rounded-xl border border-secondary bg-primary-dark/80 p-5 sm:p-6'>
                        <label className='contact-form-field block'>
                            <span className='text-sm font-medium text-primary-light'>Name or company name</span>
                            <input
                                type='text'
                                name='name'
                                className='mt-2 w-full rounded-lg border border-secondary bg-primary-dark px-4 py-3 text-sm text-primary-light outline-none transition-colors placeholder:text-primary-light/30 focus:border-accent focus:ring-2 focus:ring-accent/30'
                                placeholder='Your name or company'
                            />
                        </label>

                        <label className='contact-form-field mt-5 block'>
                            <span className='text-sm font-medium text-primary-light'>Short message</span>
                            <textarea
                                name='message'
                                rows={5}
                                className='mt-2 w-full resize-none rounded-lg border border-secondary bg-primary-dark px-4 py-3 text-sm text-primary-light outline-none transition-colors placeholder:text-primary-light/30 focus:border-accent focus:ring-2 focus:ring-accent/30'
                                placeholder='Tell me about your idea, project or request'
                            />
                        </label>

                        <label className='contact-form-field mt-5 block'>
                            <span className='text-sm font-medium text-primary-light'>Email or phone number</span>
                            <input
                                type='text'
                                name='contact'
                                className='mt-2 w-full rounded-lg border border-secondary bg-primary-dark px-4 py-3 text-sm text-primary-light outline-none transition-colors placeholder:text-primary-light/30 focus:border-accent focus:ring-2 focus:ring-accent/30'
                                placeholder='email@example.com or +1 000 000 0000'
                            />
                        </label>

                        <button
                            type='submit'
                            className='contact-submit mt-6 inline-flex w-full items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-primary-dark transition-colors hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent/70 sm:w-auto'
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
