import React from 'react';
import { motion } from 'framer-motion';
import { FolderKanban, ExternalLink, Eye, AlertCircle, Wrench, CheckCircle2, BarChart2, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/portfolioData';
import TiltCard from './3d/TiltCard';

export default function Projects({ onOpenModal }) {
  return (
    <section id="projects" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3 shadow-md shadow-cyan-950/50"
          >
            <FolderKanban className="w-4 h-4" /> Core Portfolio Showcase
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight"
          >
            Featured Data & Full-Stack <span className="text-cyan-400">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base"
          >
            Hackathon solutions, accessibility-first web applications, and end-to-end data analytics pipelines built with Python, SQL, Power BI, and React.
          </motion.p>
        </div>

        {/* 4 Project Cards Grid (2x2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TiltCard maxTilt={6} className="h-full rounded-2xl">
                  <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between border-cyan-500/20 hover:border-cyan-500/40 relative group h-full bg-slate-900/80 shadow-xl">
                    {/* Ambient Glow */}
                    <div className="absolute -top-12 -right-12 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-colors pointer-events-none"></div>

                    <div>
                      {/* Category Tag & Number Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold">
                            {project.category}
                          </span>
                          {project.tag && (
                            <span className="px-2.5 py-0.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-[11px] font-mono">
                              {project.tag}
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-mono text-slate-400 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                          0{index + 1} / 04
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>

                      {/* Architecture & Metric Preview Summary Box */}
                      <div className="w-full bg-slate-950/90 rounded-xl p-4 border border-slate-800 mb-5 group-hover:border-cyan-500/30 transition-all shadow-inner">
                        <div className="flex items-center justify-between pb-2.5 border-b border-slate-800 mb-3">
                          <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Key Architecture & Metric Highlights
                          </span>
                          <button
                            onClick={() => onOpenModal(project, 'project')}
                            className="text-xs text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 cursor-pointer font-mono"
                          >
                            <Eye className="w-3.5 h-3.5" /> Interactive View
                          </button>
                        </div>

                        {/* Metric Highlights Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
                          {project.outputPreview.metrics.map((m, mIdx) => (
                            <div key={mIdx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                              <span className="text-[10px] text-slate-400 block truncate font-mono">{m.label}</span>
                              <span className="text-xs sm:text-sm font-bold text-cyan-300 block mt-0.5">{m.value}</span>
                              <span className="text-[10px] text-emerald-400 block truncate">{m.change}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Problem Statement & What I Did */}
                      <div className="space-y-3.5 text-xs sm:text-sm text-slate-300 mb-6">
                        {/* Problem */}
                        <div>
                          <span className="font-semibold text-rose-400 flex items-center gap-1.5 mb-1 text-xs font-mono">
                            <AlertCircle className="w-3.5 h-3.5" /> PROBLEM STATEMENT
                          </span>
                          <p className="text-slate-400 leading-relaxed text-xs">
                            {project.problem}
                          </p>
                        </div>

                        {/* What I Did */}
                        <div>
                          <span className="font-semibold text-emerald-400 flex items-center gap-1.5 mb-1 text-xs font-mono">
                            <CheckCircle2 className="w-3.5 h-3.5" /> SOLUTION & IMPLEMENTATION
                          </span>
                          <p className="text-slate-300 leading-relaxed text-xs">
                            {project.whatIDid}
                          </p>
                        </div>

                        {/* Key Features Bullet Points */}
                        {project.keyFeatures && (
                          <div>
                            <span className="font-semibold text-cyan-400 flex items-center gap-1.5 mb-1.5 text-xs font-mono">
                              <Layers className="w-3.5 h-3.5" /> KEY CAPABILITIES
                            </span>
                            <ul className="space-y-1">
                              {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></span>
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Tools Used Badges */}
                        <div>
                          <span className="font-semibold text-indigo-400 flex items-center gap-1.5 mb-1.5 text-xs font-mono">
                            <Wrench className="w-3.5 h-3.5" /> TECH STACK & TOOLS
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {project.tools.map((tool, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-cyan-300 border border-slate-800"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer Buttons: View Interactive Modal & GitHub Repository */}
                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                      <button
                        onClick={() => onOpenModal(project, 'project')}
                        className="w-full py-2.5 rounded-xl bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 border border-cyan-500/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" /> View Project Workflow & Architecture
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-cyan-500/40 transition-colors shrink-0"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
