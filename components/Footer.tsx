
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-100 dark:border-slate-900 transition-colors">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-slate-500 dark:text-slate-500 text-sm">
            © 2026 <span className="text-sky-500 dark:text-slate-300 font-bold">Ashaduzzaman Taluckder</span>. All rights reserved.
          </div>
          <div className="flex space-x-8 text-sm font-bold text-slate-500 dark:text-slate-400">
            <a href="https://github.com/AshaduzzamanAbir" className="hover:text-slate-900 dark:hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/ashaduzzamanabir/" className="hover:text-slate-900 dark:hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Instagram</a>
          </div>
          <div className="text-slate-400 dark:text-slate-500 text-xs tracking-widest uppercase font-bold">
            Built with <span className="text-sky-500">MERN Stack</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
