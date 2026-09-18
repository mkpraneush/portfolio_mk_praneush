import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FolderKanban, Download, Mail, Database, BarChart2, Code, Sparkles, MapPin, GraduationCap } from 'lucide-react';
import DataVizScene from './3d/DataVizScene';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ theme }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* 3D Ambient Visual Scene */}
      <DataVizScene theme={theme} />

      {/* Subtle Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-mono mb-6 backdrop-blur-md shadow-lg shadow-cyan-950/30"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Final Year B.Tech IT Student • Velalar College of Engg & Tech</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-100 mb-4"
        >
          Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">{personalInfo.name}</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-300 mb-4"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Sub-description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 mb-8 leading-relaxed"
        >
          Transforming complex datasets into actionable business intelligence through DAX data modeling, relational SQL pipelines, and accessible UI/UX design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          {/* View Projects */}
          <a
            href="#projects"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-semibold text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-cyan-600/30 hover:scale-105 transition-all"
          >
            <FolderKanban className="w-5 h-5" /> View Projects
          </a>

          {/* Download Resume */}
          <a
            href={personalInfo.resumeUrl}
            className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-500/50 font-semibold text-sm sm:text-base flex items-center gap-2 backdrop-blur-md shadow-md hover:scale-105 transition-all"
          >
            <Download className="w-5 h-5 text-cyan-400" /> Download Resume
          </a>

          {/* Contact Me */}
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 font-semibold text-sm sm:text-base flex items-center gap-2 backdrop-blur-md hover:scale-105 transition-all"
          >
            <Mail className="w-5 h-5" /> Contact Me
          </a>
        </motion.div>

        {/* Core Tech Pill Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-400"
        >
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
            <BarChart2 className="w-4 h-4 text-cyan-400" /> Power BI DAX
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
            <Code className="w-4 h-4 text-indigo-400" /> Python Pandas
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
            <Database className="w-4 h-4 text-emerald-400" /> Advanced SQL
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
            <Sparkles className="w-4 h-4 text-amber-400" /> Accessible UI/UX
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <a href="#about" className="flex flex-col items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors">
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
