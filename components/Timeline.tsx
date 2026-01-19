
import React from 'react';
import { EXPERIENCES, EDUCATION } from '../constants';

const Timeline: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden transition-colors">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Experience Column */}
          <div>
            <h2 className="text-3xl font-bold mb-12 flex items-center space-x-4 text-slate-900 dark:text-white">
                <span className="p-3 glass rounded-xl text-sky-500 shadow-lg shadow-sky-500/10">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </span>
                <span>Experience</span>
            </h2>
            <div className="space-y-12 relative before:absolute before:inset-0 before:left-8 before:w-px before:bg-slate-200 dark:before:bg-slate-800">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative pl-20 group">
                  <div className="absolute left-[30px] top-2 w-4 h-4 bg-sky-500 rounded-full border-4 border-white dark:border-slate-950 z-10 group-hover:scale-150 transition-all duration-300 shadow-lg shadow-sky-500/50"></div>
                  <div className="glass p-8 rounded-3xl hover:border-sky-500/30 transition-all shadow-sm dark:shadow-none bg-white/50 dark:bg-slate-900/20 group-hover:bg-white dark:group-hover:bg-slate-800/40">
                    <span className="text-sky-500 dark:text-sky-400 font-bold text-xs uppercase tracking-widest">{exp.period}</span>
                    <h3 className="text-xl font-bold mt-2 text-slate-900 dark:text-white">{exp.role}</h3>
                    <div className="text-slate-500 dark:text-slate-400 text-sm mb-4 font-medium">{exp.company} | {exp.location}</div>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="text-slate-600 dark:text-slate-500 text-sm leading-relaxed flex items-start space-x-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 flex-shrink-0"></span>
                            <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-16">
            {/* Education Column */}
            <div>
              <h2 className="text-3xl font-bold mb-12 flex items-center space-x-4 text-slate-900 dark:text-white">
                  <span className="p-3 glass rounded-xl text-emerald-500 shadow-lg shadow-emerald-500/10">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>
                  </span>
                  <span>Education</span>
              </h2>
              <div className="space-y-8">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="glass p-8 rounded-3xl relative group overflow-hidden shadow-sm dark:shadow-none bg-white/50 dark:bg-slate-900/20 hover:bg-white dark:hover:bg-slate-800/40 transition-all">
                      <div className="absolute top-0 right-0 p-8 text-slate-100 dark:text-slate-800/10 -z-10 group-hover:text-emerald-500/10 transition-colors transform group-hover:scale-110">
                          <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"></path></svg>
                      </div>
                      <span className="text-emerald-500 dark:text-emerald-400 font-bold text-xs uppercase tracking-widest">{edu.period}</span>
                      <h3 className="text-2xl font-bold mt-2 text-slate-900 dark:text-white">{edu.degree}</h3>
                      <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Language Proficiency Premium Section */}
            <div className="relative glass p-8 md:p-10 rounded-[45px] border-none shadow-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 transition-all group overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-500/10 dark:bg-sky-500/10 blur-[80px] rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-1000"></div>
              
              <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                <div>
                  <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-[0.25em] text-sm mb-2">Language Mastery</h4>
                  <p className="text-slate-500 dark:text-slate-500 text-xs font-medium italic">Multilingual communications and localization skills.</p>
                </div>
                <div className="flex -space-x-3">
                   {[1,2,3].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full glass border-2 border-white dark:border-slate-900 flex items-center justify-center bg-sky-500 text-white text-[10px] font-bold">
                        {i === 1 ? 'BN' : i === 2 ? 'EN' : 'HI'}
                     </div>
                   ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                {[
                  { name: "Bangla", perc: 100, label: "Native", color: "#10b981", shadow: "shadow-emerald-500/40" },
                  { name: "English", perc: 85, label: "Expert", color: "#0ea5e9", shadow: "shadow-sky-500/40" },
                  { name: "Hindi", perc: 70, label: "Fluid", color: "#f59e0b", shadow: "shadow-amber-500/40" }
                ].map((lang, idx) => (
                  <div key={idx} className="flex flex-col items-center group/item">
                    <div className="relative w-28 h-28 mb-8">
                      {/* Decorative outer glow ring */}
                      <div className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover/item:opacity-20 transition-opacity duration-500 ${lang.shadow}`}></div>
                      
                      <svg className="w-full h-full transform -rotate-90 filter drop-shadow-[0_0_12px_rgba(0,0,0,0.05)]">
                        {/* Background track */}
                        <circle 
                          cx="56" cy="56" r="48" 
                          stroke="currentColor" strokeWidth="8" fill="transparent" 
                          className="text-slate-100 dark:text-slate-800" 
                        />
                        {/* Progress stroke with custom dasharray */}
                        <circle 
                          cx="56" cy="56" r="48" 
                          stroke={lang.color} strokeWidth="8" fill="transparent"
                          strokeDasharray={2 * Math.PI * 48}
                          strokeDashoffset={2 * Math.PI * 48 * (1 - lang.perc / 100)}
                          strokeLinecap="round"
                          className="transition-all duration-1000 ease-out drop-shadow-[0_0_8px_var(--tw-shadow-color)]"
                        />
                      </svg>
                      
                      <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-500 group-hover/item:scale-110">
                        <span className="text-xl font-black text-slate-900 dark:text-white leading-none">{lang.perc}%</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h5 className="font-black text-slate-900 dark:text-white tracking-wide text-sm">{lang.name}</h5>
                      <div className="mt-2 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full inline-block">
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">{lang.label}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-6 glass border-none bg-sky-500/5 dark:bg-sky-500/5 rounded-2xl flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center text-white shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
                    Capable of conducting technical interviews, business negotiations, and managing global teams in multiple languages.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
