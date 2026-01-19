
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
            <span className="text-sky-500 dark:text-sky-400 text-xs font-black uppercase tracking-widest">Real-world results</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-slate-900 dark:text-white">Featured Projects</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">See how I transformed concepts into engaging digital experiences with performance-driven code.</p>
        </div>

        <div className="space-y-32">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row items-center gap-12 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 space-y-8">
                <div className="flex items-center space-x-4">
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold">CLIENT PROJECT • {project.year}</span>
                </div>
                <h3 className="text-4xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg">{project.description}</p>
                <ul className="space-y-4">
                  {project.improvements.map((imp, iIdx) => (
                    <li key={iIdx} className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center">
                        <svg className="w-3 h-3 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <span className="text-sm font-medium">{imp}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.liveUrl} className="inline-flex items-center space-x-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-sky-500 dark:hover:bg-sky-400 hover:text-white transition-all shadow-lg">
                  <span>Visit Live Site</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </a>
              </div>
              <div className="lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-sky-500/10 to-indigo-500/10 dark:from-sky-500/20 dark:to-indigo-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative glass p-4 rounded-[40px] overflow-hidden rotate-2 group-hover:rotate-0 transition-transform duration-700 shadow-xl">
                    <img src={project.imageUrl} alt={project.title} className="w-full h-auto rounded-[32px] shadow-2xl" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                        <div className="text-white">
                            <h4 className="text-2xl font-bold mb-2">Impact Case Study</h4>
                            <p className="text-slate-300 text-sm">Click to view deep-dive technical implementation.</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
