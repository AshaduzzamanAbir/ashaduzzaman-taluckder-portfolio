
import React, { useRef, useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide logic
  useEffect(() => {
    if (isHovered || isDragging) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        // If we're near the end, reset to start, else move by one card width
        if (scrollLeft >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          const cardWidth = 450 + 32; // card width + gap
          scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, isDragging]);

  // Mouse Drag Logic
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section 
      className="py-24 relative overflow-hidden transition-colors bg-white dark:bg-transparent"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center">
          <span className="text-sky-500 dark:text-sky-400 text-xs font-black uppercase tracking-widest">Global Feedback</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-slate-900 dark:text-white">What People Say</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">Insights from the teams and individuals I've had the pleasure of working with.</p>
        </div>
      </div>

      {/* Draggable Scroll Area */}
      <div className="relative group cursor-grab active:cursor-grabbing">
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex overflow-x-auto pb-12 pt-4 px-6 gap-8 no-scrollbar scroll-smooth snap-x snap-mandatory lg:px-[10%] ${isDragging ? 'scroll-auto snap-none select-none' : ''}`}
        >
          {/* Repeat testimonials multiple times to ensure continuous-feeling scroll */}
          {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
            <div 
              key={idx} 
              className="min-w-[320px] md:min-w-[450px] glass p-10 rounded-[40px] relative transition-all duration-500 shadow-xl dark:shadow-sky-900/10 snap-center dark:bg-slate-900/40 pointer-events-none"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-sky-500 to-indigo-500 rounded-2xl blur opacity-30"></div>
                  <img src={t.avatar} alt={t.name} className="relative w-16 h-16 rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white">{t.name}</h4>
                  <p className="text-slate-500 text-sm font-medium">{t.role}</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-lg italic leading-relaxed relative z-10">
                "{t.content}"
              </p>
              <div className="absolute bottom-10 right-10 text-slate-100 dark:text-slate-800/20">
                 <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 32 32"><path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8.2c.4-1.2 1.6-2 2.8-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-5.8c.4-1.2 1.6-2 2.8-2V8z"/></svg>
              </div>
            </div>
          ))}
        </div>
        
        {/* Subtle Fade Edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-[#020617] to-transparent pointer-events-none hidden lg:block"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-[#020617] to-transparent pointer-events-none hidden lg:block"></div>
      </div>

      {/* Manual Controls Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        <div className="w-8 h-1 bg-sky-500 rounded-full"></div>
        <div className="w-2 h-1 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
        <div className="w-2 h-1 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
