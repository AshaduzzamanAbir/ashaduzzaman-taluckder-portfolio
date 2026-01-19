
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    // Initialize state from document class
    setIsDarkMode(document.documentElement.classList.contains('dark'));

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const menuLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-6">
        <div className={`flex items-center justify-between glass rounded-full px-4 md:px-8 py-3 transition-all ${isScrolled ? 'shadow-2xl' : ''}`}>
          <div className="text-xl font-bold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
            AT.
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            {menuLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-sky-400 dark:hover:text-sky-400 transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex items-center space-x-2 md:space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full glass hover:bg-slate-200 dark:hover:bg-slate-800 transition-all text-slate-600 dark:text-slate-300"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.95 16.95l.707.707M7.05 7.05l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full glass hover:bg-slate-200 dark:hover:bg-slate-800 transition-all text-slate-600 dark:text-slate-300"
              aria-label="Toggle Mobile Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>

            <a href="#contact" className="hidden sm:inline-block bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-4 md:px-6 py-2 rounded-full text-sm font-bold hover:bg-sky-500 dark:hover:bg-sky-400 hover:text-white transition-all">
              Connect
            </a>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden fixed inset-0 z-[-1] bg-white dark:bg-slate-950 transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
           <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
              {menuLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-bold text-slate-900 dark:text-white hover:text-sky-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-sky-500 text-white px-12 py-4 rounded-2xl font-black text-xl shadow-2xl shadow-sky-500/30"
              >
                Let's Talk
              </a>
           </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
