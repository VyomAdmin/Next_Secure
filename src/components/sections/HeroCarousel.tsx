'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 'home',
    image: '/crousel/IMG_home.PNG',
    mobileImage: '/crousel/mobile_backbround.jpeg',
    imagePosition: 'center center',
    title: 'Adding value & intelligence to technology',
    subtitle: 'Privacy • Security • AI',
    description: 'Simplify Compliance • Protect Data • Build Trust',
    link: '#allservices',
  },
  {
    id: 'allservices',
    image: '/crousel/IMG_allservices.PNG',
    mobileImage: '/crousel/mobile_backbround.jpeg',
    imagePosition: '62% center',
    title: 'Comprehensive Technology Assurance',
    subtitle: 'Intelligence-driven consulting',
    description: 'We provide expert guidance across every dimension of technology governance.',
    link: '#allservices',
  },
  {
    id: 'dpdpa',
    image: '/crousel/IMG_DPDPA.PNG',
    mobileImage: '/crousel/mobile_backbround.jpeg',
    imagePosition: '64% center',
    title: 'DPDPA Compliance Services',
    subtitle: "India's Data Protection Act 2023",
    description: "Systematic frameworks for India's modern data protection requirements.",
    link: '#dpdpa',
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
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      const headerOffset = 96;
      const top = elem.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.history.pushState(null, '', href);
      window.scrollTo({
        top: Math.max(top, 0),
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative h-[88svh] w-full overflow-hidden bg-[#050A18] md:h-screen">
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
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
                  <div className="mb-5 inline-flex w-full max-w-[18rem] justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md md:mb-6 md:w-auto md:max-w-full md:px-5">
                    <span className="block whitespace-normal text-center text-[9px] font-bold uppercase leading-snug tracking-[0.14em] text-white md:text-xs md:tracking-[0.3em]">
                      {slide.title}
                    </span>
                  </div>

                  <h1 className="mx-auto mb-5 max-w-[20rem] text-3xl font-black uppercase leading-tight tracking-normal text-white sm:text-5xl md:mx-0 md:mb-6 md:max-w-3xl md:text-6xl lg:text-6xl">
                    {slide.subtitle}
                  </h1>

                  <p className="mx-auto mb-8 max-w-[17rem] text-sm font-medium leading-relaxed text-indigo-100/90 sm:max-w-[20rem] sm:text-base md:mx-0 md:mb-10 md:max-w-2xl md:text-xl">
                    {slide.description}
                  </p>

                  <a
                    href={slide.link}
                    onClick={(e) => handleLinkClick(e, slide.link)}
                    className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all duration-300 hover:border-[#64ffda] hover:bg-[#64ffda] hover:text-black"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4 md:bottom-12">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-[#64ffda]' : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 p-2 text-white/50 transition-colors hover:text-white md:block"
        aria-label="Previous slide"
      >
        <ChevronLeft size={40} />
      </button>
      <button
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
