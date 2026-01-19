
import React from 'react';
import { SKILL_GROUPS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">My Toolbox</h2>
          <p className="text-slate-600 dark:text-slate-400">Explore the technologies and tools I use to craft exceptional digital experiences.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl hover:border-sky-500/50 transition-all duration-500 group dark:hover:bg-slate-800/40">
              <h3 className="text-sky-500 dark:text-sky-400 font-bold uppercase tracking-widest text-xs mb-6">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800/50 rounded-xl text-sm font-medium border border-slate-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-500 hover:text-sky-500 dark:hover:text-sky-400 transition-all cursor-default text-slate-700 dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
