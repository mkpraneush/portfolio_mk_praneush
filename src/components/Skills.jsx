import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Code2, Palette, Wrench, CheckCircle2 } from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';
import TiltCard from './3d/TiltCard';

const getCategoryIcon = (iconName) => {
  switch (iconName) {
    case 'BarChart3':
      return <BarChart3 className="w-6 h-6 text-cyan-400" />;
    case 'Code2':
      return <Code2 className="w-6 h-6 text-indigo-400" />;
    case 'Palette':
      return <Palette className="w-6 h-6 text-purple-400" />;
    case 'Wrench':
      return <Wrench className="w-6 h-6 text-emerald-400" />;
    default:
      return <BarChart3 className="w-6 h-6 text-cyan-400" />;
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 border-t border-slate-800/60 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3 shadow-md shadow-cyan-950/50"
          >
            <BarChart3 className="w-3.5 h-3.5" /> Technical Stack & Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight"
          >
            Skills & <span className="text-cyan-400">Competencies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-slate-400 max-w-xl mx-auto text-sm sm:text-base"
          >
            A tailored toolkit bridging statistical data analysis, relational database querying, and modern accessible user interface design.
          </motion.p>
        </div>

        {/* Grid of Skill Categories with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <TiltCard maxTilt={6} className="h-full rounded-2xl">
                <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full bg-slate-900/80 border-slate-800 hover:border-cyan-500/40">
                  <div>
                    {/* Category Title Header */}
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 shadow-md">
                        {getCategoryIcon(cat.icon)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-100">{cat.category}</h3>
                        <p className="text-xs text-slate-400">{cat.description}</p>
                      </div>
                    </div>

                    {/* Skill Badges Pill Container */}
                    <div className="flex flex-wrap gap-2.5 mt-6">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium flex items-center gap-2 transition-all hover:scale-105 ${
                            skill.badge === 'Primary'
                              ? 'bg-cyan-950/90 text-cyan-300 border border-cyan-500/50 shadow-sm shadow-cyan-900/40'
                              : skill.badge === 'Specialized'
                              ? 'bg-purple-950/90 text-purple-300 border border-purple-500/50 shadow-sm shadow-purple-900/40'
                              : 'bg-slate-950/80 text-slate-300 border border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          <CheckCircle2 className={`w-3.5 h-3.5 ${skill.badge ? 'text-cyan-400' : 'text-slate-500'}`} />
                          <span>{skill.name}</span>
                          {skill.badge && (
                            <span className="ml-1 px-1.5 py-0.2 rounded text-[10px] uppercase font-mono font-bold bg-cyan-500/20 text-cyan-300">
                              {skill.badge}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
