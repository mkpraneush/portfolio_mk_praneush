import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  Award,
  CheckCircle2,
  ExternalLink,
  Wrench,
  FileText,
  Sparkles,
  Layers,
  Database,
  TrendingUp,
  BarChart3,
  Eye,
  Check,
  ShieldCheck,
  Share2,
  PieChart,
  Upload,
  Image as ImageIcon
} from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';
import { internshipData } from '../data/portfolioData';
import TiltCard from './3d/TiltCard';

export default function Internship({ onOpenModal }) {
  const [hasCustomCert, setHasCustomCert] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('user_internship_certificate');
      if (saved) setHasCustomCert(true);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleDirectUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result;
        if (result) {
          try {
            localStorage.setItem('user_internship_certificate', result);
            setHasCustomCert(true);
            onOpenModal(internshipData, 'internship');
          } catch (err) {
            console.warn(err);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="internship" className="py-24 relative z-10 border-t border-slate-800/60 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hidden File Input for Direct Upload */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,application/pdf"
          className="hidden"
          onChange={handleDirectUpload}
        />

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3 shadow-md shadow-cyan-950/50"
          >
            <Briefcase className="w-3.5 h-3.5" /> Professional Experience & Training
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight"
          >
            Remote Internship & <span className="text-cyan-400">Practical Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base"
          >
            Applied data analytics internship curriculum covering end-to-end business intelligence, customer segmentation, predictive modeling, and pipeline automation.
          </motion.p>
        </div>

        {/* Top Feature: Internship Overview 3D Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <TiltCard maxTilt={4} className="rounded-3xl">
            <div className="glass-panel rounded-3xl p-6 sm:p-10 border-cyan-500/30 relative overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/95 to-cyan-950/40">
              {/* Ambient Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Left Column: Role, Company & Responsibilities */}
                <div className="lg:col-span-8 space-y-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 text-xs text-cyan-400 font-mono mb-3">
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
                        <Calendar className="w-3.5 h-3.5" /> {internshipData.duration}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300">
                        <MapPin className="w-3.5 h-3.5 text-rose-400" /> {internshipData.location}
                      </span>
                      <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 font-medium">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Completed 4 Tasks
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                      {internshipData.role}
                    </h3>
                    <p className="text-lg font-semibold text-cyan-300 mt-1">
                      {internshipData.company}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {internshipData.summary}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-2.5 pt-1">
                    <h4 className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider mb-2">
                      Core Internship Accomplishments
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {internshipData.bulletPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools Strip */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="text-xs font-mono uppercase text-slate-400 font-bold mr-1">Tools:</span>
                    {internshipData.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-cyan-300 border border-slate-800"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Certificate Card with Direct Upload */}
                <div className="lg:col-span-4 flex flex-col items-center justify-center">
                  <div className="w-full glass-panel rounded-2xl p-6 border-cyan-500/30 text-center relative group bg-slate-900/80 hover:border-cyan-400/50 transition-all shadow-xl">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-sky-500/20 to-indigo-500/20 border border-cyan-500/40 flex items-center justify-center mx-auto mb-4 text-cyan-400 shadow-lg shadow-cyan-500/10 group-hover:scale-110 transition-transform">
                      <Award className="w-8 h-8 text-yellow-400" />
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                      {hasCustomCert ? 'Custom Certificate Loaded' : 'Verified Credential'}
                    </span>
                    <h4 className="text-base font-bold text-slate-100 mb-1">
                      {internshipData.certificatePlaceholder.title}
                    </h4>
                    <p className="text-xs text-slate-400 mb-4">
                      {internshipData.certificatePlaceholder.issuer}
                    </p>

                    <div className="space-y-2">
                      <button
                        onClick={() => onOpenModal(internshipData, 'internship')}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-cyan-600/30 hover:scale-[1.02] transition-all cursor-pointer"
                      >
                        <FileText className="w-4 h-4" /> View Certificate
                      </button>

                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        <Upload className="w-3.5 h-3.5 text-cyan-400" /> Upload / Replace File
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-400 mt-2.5 font-mono">
                      ID: {internshipData.certificatePlaceholder.credentialId}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Sub-Heading: 4 Practical Projects Showcase */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <h3 className="text-2xl font-bold text-slate-100">
                Internship Practical Projects
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              All 4 assigned training tasks completed and shared on LinkedIn with analytical outcomes.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 bg-cyan-950/60 px-3 py-1.5 rounded-lg border border-cyan-500/30">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>4 of 4 Projects Completed</span>
          </div>
        </div>

        {/* 4 Interactive Project Cards Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {internshipData.projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <TiltCard maxTilt={6} className="h-full rounded-2xl">
                <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between border-cyan-500/20 hover:border-cyan-500/40 relative overflow-hidden group bg-slate-900/70">
                  {/* Card Glow Corner */}
                  <div className="absolute -top-12 -right-12 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-colors pointer-events-none"></div>

                  <div>
                    {/* Header Pill Strip: Number, Completed Date, Status */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-xs font-mono font-bold text-cyan-300">
                          {proj.number}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono font-semibold flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-emerald-400" /> {proj.status}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 text-xs font-mono text-slate-400 bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800">
                        <Calendar className="w-3 h-3 text-cyan-400" />
                        <span>Completed: {proj.completedDate}</span>
                      </div>
                    </div>

                    {/* Focus Area Pill */}
                    <div className="mb-2">
                      <span className="text-xs font-mono font-medium text-cyan-400 bg-cyan-950/50 px-2.5 py-0.5 rounded border border-cyan-500/20">
                        Focus: {proj.focus}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h4 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-300 transition-colors">
                      {proj.title}
                    </h4>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {proj.shortDescription}
                    </p>

                    {/* Data Sources Pill */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-4 bg-slate-950/50 p-2 rounded-lg border border-slate-800/80">
                      <Database className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span className="font-mono text-[11px]"><strong className="text-slate-300">Data Sources:</strong> {proj.dataSources}</span>
                    </div>

                    {/* Key Work Completed List */}
                    <div className="space-y-2 mb-4">
                      <span className="text-[11px] font-mono uppercase text-slate-400 font-bold tracking-wider block">
                        Key Work Completed:
                      </span>
                      <ul className="space-y-1.5">
                        {proj.keyWork.map((item, kIdx) => (
                          <li key={kIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools / Skills Badges */}
                    <div className="mb-4">
                      <span className="text-[11px] font-mono uppercase text-slate-400 font-bold tracking-wider block mb-1.5">
                        Tools & Skills:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {proj.tools.map((tool, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-cyan-300 border border-slate-800"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Outcome Highlight Box */}
                    <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/20 mb-6">
                      <div className="flex items-start gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[11px] font-mono font-bold text-cyan-300 uppercase block">Practical Outcome</span>
                          <p className="text-xs text-slate-300 mt-0.5">{proj.outcome}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons: Preview & LinkedIn */}
                  <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                    <button
                      onClick={() => onOpenModal(proj, 'internship_project')}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 border border-cyan-500/40 text-xs font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-md hover:shadow-cyan-950/50 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" /> View Output Preview
                    </button>

                    {proj.linkedinUrl && (
                      <a
                        href={proj.linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0 cursor-pointer"
                        title="View Work Shared on LinkedIn"
                      >
                        <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
                        <span>LinkedIn Post</span>
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer Note (Accurate representation) */}
        <div className="text-center p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 max-w-2xl mx-auto">
          <p className="text-xs text-slate-400 font-mono">
            📌 <strong className="text-slate-300">Note:</strong> These projects represent practical curriculum assignments completed during the remote data analytics internship. Main independent GitHub projects are showcased in the Projects section.
          </p>
        </div>

      </div>
    </section>
  );
}
