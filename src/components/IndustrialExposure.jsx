import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, Lightbulb } from 'lucide-react';
import { industrialExposureData } from '../data/portfolioData';
import TiltCard from './3d/TiltCard';

export default function IndustrialExposure() {
  return (
    <section id="exposure" className="py-16 relative z-10 border-t border-slate-800/60 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100">Industrial Exposure & Training</h3>
            <p className="text-xs sm:text-sm text-slate-400">Corporate visits, technical symposiums, and hands-on industrial workshops</p>
          </div>
        </div>

        {/* Compact Horizontal Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {industrialExposureData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <TiltCard maxTilt={5} className="h-full rounded-xl">
                <div className="glass-panel glass-panel-hover rounded-xl p-5 border-slate-800 hover:border-cyan-500/40 flex flex-col justify-between h-full bg-slate-900/80">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2.5">
                      <span className="font-semibold text-cyan-400 font-mono px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/20">
                        {item.type}
                      </span>
                      <span className="text-slate-400 flex items-center gap-1 font-mono text-[11px]">
                        <Calendar className="w-3 h-3 text-cyan-500" /> {item.date}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-slate-100 mb-2">{item.company}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item.learning}</span>
                    </p>
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
