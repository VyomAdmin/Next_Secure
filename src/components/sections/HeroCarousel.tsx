'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 'home',
    image: '/crousel/IMG_home.PNG',
    title: 'Adding value & intelligence to technology',
    subtitle: 'Privacy • Security • AI',
    description: 'Simplify Compliance • Protect Data • Build Trust',
    link: '#home',
  },
  {
    id: 'allservices',
    image: '/crousel/IMG_allservices.PNG',
    title: 'Comprehensive Technology Assurance',
    subtitle: 'Intelligence-driven consulting',
    description: 'We provide expert guidance across every dimension of technology governance.',
    link: '#allservices',
  },
  {
    id: 'dpdpa',
    image: '/crousel/IMG_DPDPA.PNG',
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
      elem.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="home" className="relative h-[85vh] md:h-screen w-full overflow-hidden bg-[#050A18]">
      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Full-Screen Background Image - Maximized Vibrancy */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover transition-transform duration-[10000ms] ease-out"
                style={{
                  transform: 'scale(0.75)',
                  filter: 'brightness(2.2) saturate(1.8) contrast(1.1)',
                  opacity: 0.9,
                }}
              />
              {/* Lighter, more balanced gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#050A18]/70 via-[#050A18]/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A18]/80 via-transparent to-[#050A18]/10" />
            </div>

            {/* Content Overlay */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-6">
                <div className={`max-w-3xl transition-all duration-1000 delay-300 transform text-left ${
                  index === currentSlide ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                }`}>
                  <div className="mb-6 inline-block px-5 py-2 border border-white/20 rounded-full backdrop-blur-md bg-white/10">
                    <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-white uppercase">
                      {slide.title}
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight text-white mb-6 uppercase">
                    {slide.subtitle}
                  </h1>

                  <p className="text-lg md:text-xl text-indigo-100/90 mb-10 max-w-2xl leading-relaxed font-medium">
                    {slide.description}
                  </p>

                  <a
                    href={slide.link}
                    onClick={(e) => handleLinkClick(e, slide.link)}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 hover:bg-[#64ffda] hover:text-black hover:border-[#64ffda] text-white rounded-2xl transition-all duration-300 backdrop-blur-md font-bold uppercase tracking-widest text-sm"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              index === currentSlide ? 'w-8 bg-[#64ffda]' : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Controls (Optional, keeping minimal as requested) */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/50 hover:text-white transition-colors hidden md:block"
        aria-label="Previous slide"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/50 hover:text-white transition-colors hidden md:block"
        aria-label="Next slide"
      >
        <ChevronRight size={40} />
      </button>

      {/* Bottom Gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050A18] to-transparent pointer-events-none z-10"></div>
    </section>
  );
};

export default HeroCarousel;
