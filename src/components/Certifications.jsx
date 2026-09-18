import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, CheckCircle2, FileCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import TiltCard from './3d/TiltCard';

export default function Certifications({ onOpenModal }) {
  return (
    <section id="certifications" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3 shadow-md shadow-cyan-950/50"
          >
            <Award className="w-3.5 h-3.5 text-yellow-400" /> Professional Credentials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight"
          >
            Certifications & <span className="text-cyan-400">Badges</span>
          </motion.h2>
        </div>

        {/* 4-Card Grid with 3D Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard maxTilt={6} className="h-full rounded-2xl">
                <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between border-slate-800 hover:border-cyan-500/40 h-full bg-slate-900/80">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-md bg-slate-950 text-cyan-400 border border-slate-800 text-xs font-mono font-medium">
                        {cert.issuer}
                      </span>
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-cyan-500" /> {cert.year}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-100 mb-3 group-hover:text-cyan-300 transition-colors">
                      {cert.title}
                    </h3>

                    {/* Skills Learned Badges */}
                    <div className="space-y-2 mb-6">
                      <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">
                        Verified Competencies
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skillsLearned.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-md text-xs bg-slate-950 text-slate-300 border border-slate-800 font-mono"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* View Certificate Action */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified Badge
                    </span>
                    <button
                      onClick={() => onOpenModal(cert, 'certificate')}
                      className="px-3.5 py-2 rounded-xl bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 border border-cyan-500/40 text-xs font-medium flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
                    >
                      <FileCheck className="w-3.5 h-3.5" /> View Credential
                    </button>
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
