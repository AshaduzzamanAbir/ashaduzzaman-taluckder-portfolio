
import React, { useState, useEffect } from 'react';
import myProfilePic from '../src/assets/ashaduzzaman-taluckder.jpg';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax calculations
  const bgTranslateY = scrollY * 0.3;
  const avatarTranslateY = scrollY * 0.1;
  const contentTranslateY = scrollY * 0.05;

  return (
    <section id="home" className="relative pt-40 pb-20 overflow-hidden min-h-[90vh] flex items-center justify-center">
      {/* Background Parallax Glows */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-sky-400/20 dark:bg-sky-900/30 blur-[120px] rounded-full -z-10 transition-transform duration-75 ease-out"
        style={{ transform: `translate(-50%, ${bgTranslateY}px)` }}
      ></div>
      <div 
        className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-400/20 dark:bg-indigo-900/30 blur-[100px] rounded-full -z-10 transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${bgTranslateY * 1.2}px)` }}
      ></div>
      
      <div className="container mx-auto px-6 text-center" style={{ transform: `translateY(${contentTranslateY}px)` }}>
        <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full border border-sky-500/30 mb-8 animate-bounce shadow-xl">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-xs font-bold text-sky-600 dark:text-sky-300 tracking-wider">AVAILABLE FOR NEW PROJECTS</span>
        </div>

        <div className="relative inline-block mb-10" style={{ transform: `translateY(${avatarTranslateY}px)` }}>
          <div className="w-52 h-52 md:w-56 md:h-56 rounded-[2.5rem] overflow-hidden glass p-2 rotate-3 hover:rotate-0 transition-all duration-700 cursor-pointer shadow-2xl mx-auto ring-1 ring-slate-200 dark:ring-slate-800">
            <img 
              src={myProfilePic} 
              alt="Ashaduzzaman Taluckder" 
              className="w-full h-full object-cover rounded-[2rem] grayscale hover:grayscale-0 transition-all duration-700"
              onError={(e) => {
                e.currentTarget.src = 'https://picsum.photos/seed/ashad/400/400';
              }}
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-sky-500 p-4 rounded-3xl shadow-2xl shadow-sky-500/40 animate-float border-4 border-white dark:border-slate-950">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight tracking-tight text-slate-900 dark:text-white">
          Building Exceptional<br />
          <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-emerald-600 dark:from-sky-400 dark:via-indigo-400 dark:to-emerald-400 bg-clip-text text-transparent drop-shadow-sm">User Experiences</span>
        </h1>

        <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Full-Stack MERN Developer specializing in transforming complex problems into functional, high-performance web applications.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="#projects" className="w-full sm:w-auto px-10 py-4 glass rounded-2xl font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white shadow-lg">
            Explore My Work ↓
          </a>
          <a href="#contact" className="w-full sm:w-auto px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold hover:bg-sky-500 dark:hover:bg-sky-400 transition-all shadow-2xl shadow-sky-500/20">
            👋 Let's Connect
          </a>
        </div>
      </div>

      {/* Subtle bottom gradient for depth */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-[#020617] to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
