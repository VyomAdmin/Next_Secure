'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 'home',
    image: '/crousel/IMG_home.PNG',
    mobileImage: '/crousel/mobile_backbround.jpeg',
    imagePosition: 'center center',
    title: 'For companies',
    subtitle: 'Consulting and services',
    description: 'Privacy, cybersecurity, and AI governance. Start with the work, a booking, or support.',
    link: '/services',
    cta: 'See the work',
  },
  {
    id: 'allservices',
    image: '/crousel/IMG_allservices.PNG',
    mobileImage: '/crousel/mobile_backbround.jpeg',
    imagePosition: '62% center',
    title: 'What we deliver',
    subtitle: 'Technology governance',
    description: 'Consulting across privacy, security, compliance, and AI for companies that need a clearer operating model.',
    link: '/services',
    cta: 'Explore services',
  },
  {
    id: 'dpdpa',
    image: '/crousel/IMG_DPDPA.PNG',
    mobileImage: '/crousel/mobile_backbround.jpeg',
    imagePosition: '64% center',
    title: 'DPDPA compliance',
    subtitle: "India's data protection law",
    description: 'A practical consulting path for companies preparing for the Digital Personal Data Protection Act.',
    link: '/dpdpa-compliance',
    cta: 'View DPDPA services',
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return;
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="home" className="relative h-[88svh] w-full overflow-hidden bg-[#050A18] md:h-screen">
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            aria-hidden={index !== currentSlide}
            inert={index !== currentSlide}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'pointer-events-none opacity-0 z-0'
            }`}
          >
            <div className="absolute inset-0 overflow-hidden bg-[#050A18]">
              <div
                className="absolute inset-0 hidden bg-cover bg-center transition-all duration-[10000ms] ease-out md:block"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundPosition: slide.imagePosition,
                  filter: 'brightness(1.35) contrast(1.08) saturate(1.12)',
                }}
              />
              <div
                className="absolute inset-0 bg-cover bg-right transition-all duration-[10000ms] ease-out md:hidden"
                style={{
                  backgroundImage: `url(${slide.mobileImage})`,
                  filter: 'brightness(1.35) contrast(1.12) saturate(1.12)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050A18]/58 via-[#050A18]/18 to-transparent md:from-[#050A18]/70 md:via-[#050A18]/8 md:to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A18]/72 via-transparent to-[#050A18]/8 md:from-[#050A18]/70 md:via-transparent md:to-transparent" />
            </div>

            <div className="relative flex min-h-[88svh] items-center py-24 md:h-full md:min-h-0 md:py-0">
              <div className="container mx-auto px-6">
                <div className={`mx-auto max-w-3xl text-center transition-all duration-1000 delay-300 transform md:mx-0 md:text-left ${
                  index === currentSlide ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                }`}>
                  <div className="mb-5 inline-flex justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md md:mb-6 md:justify-start">
                    <span className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-white md:text-sm">
                      {slide.title}
                    </span>
                  </div>

                  {index === 0 ? (
                    <h1 className="mx-auto mb-5 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl md:mx-0 md:mb-6 md:text-6xl">
                      {slide.subtitle}
                    </h1>
                  ) : (
                    <p className="mx-auto mb-5 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl md:mx-0 md:mb-6 md:text-6xl">
                      {slide.subtitle}
                    </p>
                  )}

                  <p className="mx-auto mb-8 max-w-xl text-base font-medium leading-relaxed text-slate-100 md:mx-0 md:mb-10 md:text-xl">
                    {slide.description}
                  </p>

                  <Link
                    href={slide.link}
                    className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:border-[#64ffda] hover:bg-[#64ffda] hover:text-black"
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-24 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 md:bottom-12">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className="inline-flex h-11 w-11 items-center justify-center"
            aria-label={`Go to slide ${index + 1}: ${slide.subtitle}`}
            aria-current={index === currentSlide}
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-[#64ffda]' : 'w-2 bg-white/50'
              }`}
            />
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 p-2 text-white/50 transition-colors hover:text-white md:block"
        aria-label="Previous slide"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 p-2 text-white/50 transition-colors hover:text-white md:block"
        aria-label="Next slide"
      >
        <ChevronRight size={40} />
      </button>

      <div className="absolute bottom-0 left-0 z-10 h-32 w-full bg-gradient-to-t from-[#050A18] to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroCarousel;
