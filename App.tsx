
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Parallax or global animations can be initialized here if using GSAP
  }, []);

  return (
    <div className="min-h-screen selection:bg-sky-500 selection:text-white bg-white dark:bg-[#020617] transition-colors duration-500 relative">
      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[5%] w-[1px] h-[400px] bg-gradient-to-b from-transparent via-sky-500/20 to-transparent"></div>
        <div className="absolute top-[40%] right-[8%] w-[1px] h-[300px] bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        {/* Expertise Mini-Section (Banner style) */}
        <div className="py-10 glass overflow-hidden flex whitespace-nowrap dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800 transition-colors">
            <div className="flex animate-[scroll_35s_linear_infinite] space-x-12 px-12 items-center">
                {["DESIGN THINKING", "WEB DEVELOPMENT", "LEADERSHIP", "PROBLEM SOLVING", "MERN STACK", "MANAGEMENT"].map((item, i) => (
                    <div key={i} className="flex items-center space-x-4">
                        <span className="text-sky-500 drop-shadow-[0_0_8px_rgba(14,165,233,0.5)]">✦</span>
                        <span className="text-sm font-black tracking-[0.2em] text-slate-400 dark:text-slate-500">{item}</span>
                    </div>
                ))}
                {["DESIGN THINKING", "WEB DEVELOPMENT", "LEADERSHIP", "PROBLEM SOLVING", "MERN STACK", "MANAGEMENT"].map((item, i) => (
                    <div key={i+10} className="flex items-center space-x-4">
                        <span className="text-sky-500 drop-shadow-[0_0_8px_rgba(14,165,233,0.5)]">✦</span>
                        <span className="text-sm font-black tracking-[0.2em] text-slate-400 dark:text-slate-500">{item}</span>
                    </div>
                ))}
            </div>
        </div>

        <Projects />
        <Testimonials />
        <About />
        <Skills />
        <Timeline />
        <Contact />
      </main>

      <Footer />

      <style>{`
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default App;
