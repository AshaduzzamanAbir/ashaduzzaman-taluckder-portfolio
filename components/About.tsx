
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block text-sky-500 dark:text-sky-400 font-bold tracking-widest text-sm mb-2 uppercase">About Me</div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900 dark:text-white">
              A Glimpse Into <br /> My World
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              I am <span className="text-slate-900 dark:text-white font-semibold">Ashaduzzaman Taluckder</span>, a dedicated MERN Stack Developer with a passion for building scalable, user-centric web applications. Expert in crafting seamless digital experiences using <span className="text-sky-500 dark:text-sky-400">MongoDB, Express.js, React, and Node.js</span>. I bridge the gap between robust backend architecture and intuitive frontend design to deliver high-performance applications that solve real-world problems.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-4xl font-black text-slate-900 dark:text-white mb-1">2+</div>
                <div className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold">Years Exp.</div>
              </div>
              <div>
                <div className="text-4xl font-black text-slate-900 dark:text-white mb-1">25+</div>
                <div className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold">Projects</div>
              </div>
              <div>
                <div className="text-4xl font-black text-slate-900 dark:text-white mb-1">15+</div>
                <div className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold">Tech Stack</div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl blur opacity-10 dark:opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative glass p-6 md:p-8 rounded-3xl overflow-hidden">
               <div className="grid grid-cols-2 gap-4">
                  <div className="glass p-6 rounded-2xl flex flex-col items-center text-center space-y-4 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center text-sky-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">Design Thinking</h4>
                  </div>
                  <div className="glass p-6 rounded-2xl flex flex-col items-center text-center space-y-4 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    </div>
                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">Web Development</h4>
                  </div>
                  <div className="glass p-6 rounded-2xl flex flex-col items-center text-center space-y-4 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </div>
                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">Leadership</h4>
                  </div>
                  <div className="glass p-6 rounded-2xl flex flex-col items-center text-center space-y-4 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center text-pink-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                    </div>
                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">Problem Solving</h4>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
