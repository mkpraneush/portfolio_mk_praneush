import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Star, Target } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';
import TiltCard from './3d/TiltCard';

const iconMap = {
  Trophy: Trophy,
  Medal: Medal,
  Star: Star
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3 shadow-md shadow-cyan-950/50"
          >
            <Target className="w-3.5 h-3.5 text-rose-400" /> Milestones & Accolades
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight"
          >
            Key <span className="text-cyan-400">Achievements</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Trophy;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TiltCard maxTilt={5} className="h-full rounded-2xl">
                  <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 flex flex-col h-full bg-slate-900/80 border-slate-800 hover:border-cyan-500/40 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <IconComponent className="w-24 h-24 text-cyan-500" />
                    </div>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400">
                        <IconComponent className="w-6 h-6 text-amber-400" />
                      </div>
                      <span className="text-sm font-mono text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded border border-cyan-500/20">{item.year}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors relative z-10">
                      {item.title}
                    </h3>
                    <h4 className="text-sm font-semibold text-slate-300 mb-3 relative z-10 font-mono">
                      {item.event}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed relative z-10">
                      {item.description}
                    </p>
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
