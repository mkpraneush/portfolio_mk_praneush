import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Download, FileSpreadsheet } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Internship', href: '#internship' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Exposure', href: '#exposure' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section calculation
      const sections = ['hero', 'about', 'skills', 'projects', 'achievements', 'internship', 'certifications', 'exposure', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-slate-950/80 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2 text-lg sm:text-xl font-bold tracking-tight text-slate-100 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white text-xs font-mono font-bold shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            PMK
          </div>
          <span>
            Praneush<span className="text-cyan-400">.M K</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30'
                    : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-900/50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            aria-label="Toggle dark/light mode"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-cyan-600" />}
          </button>

          {/* Download Resume Button */}
          <a
            href={personalInfo.resumeUrl}
            className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-medium text-xs xl:text-sm flex items-center gap-1.5 shadow-md shadow-cyan-600/20 transition-all"
          >
            <Download className="w-3.5 h-3.5" /> Resume
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
            aria-label="Toggle dark/light mode"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-cyan-600" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 mt-2 backdrop-blur-xl">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-md text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
            <a
              href={personalInfo.resumeUrl}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-lg bg-cyan-600 text-white text-center font-medium text-sm flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
