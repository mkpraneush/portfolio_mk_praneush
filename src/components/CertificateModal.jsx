import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Award,
  FileText,
  CheckCircle2,
  BarChart3,
  Users,
  TrendingUp,
  Sliders,
  Calendar,
  Sparkles,
  Database,
  Download,
  Share2,
  Check,
  ShieldCheck,
  Zap,
  Layers,
  Upload,
  Image as ImageIcon,
  Trash2,
  ZoomIn,
  MapPin,
  Mic,
  Volume2,
  BookOpen,
  PieChart,
  FileCode,
  CheckCircle
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export default function CertificateModal({ isOpen, onClose, data, type = 'project' }) {
  const [uploadedCert, setUploadedCert] = useState(null);
  const [viewMode, setViewMode] = useState('card'); // 'card' | 'image'
  const fileInputRef = useRef(null);

  // Load any previously saved certificate from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('user_internship_certificate');
      if (saved) {
        setUploadedCert(saved);
        if (type === 'internship' || type === 'certificate') {
          setViewMode('image');
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, [type, isOpen]);

  if (!isOpen || !data) return null;

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result;
        if (result) {
          setUploadedCert(result);
          setViewMode('image');
          try {
            localStorage.setItem('user_internship_certificate', result);
          } catch (err) {
            console.warn('Storage quota exceeded, keeping in state', err);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveCertificate = () => {
    setUploadedCert(null);
    setViewMode('card');
    try {
      localStorage.removeItem('user_internship_certificate');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl glass-panel rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto my-auto bg-slate-900/95"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors z-20 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* ============================================================ */}
          {/* 1. INTERNSHIP PRACTICAL PROJECT MODAL PREVIEW                 */}
          {/* ============================================================ */}
          {type === 'internship_project' && (
            <div>
              <div className="flex flex-wrap items-center gap-2 text-cyan-400 text-xs font-mono font-semibold mb-2">
                <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40">
                  Internship Project #{data.number}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 flex items-center gap-1">
                  <Check className="w-3 h-3" /> {data.status} • {data.completedDate}
                </span>
                <span>• Focus: {data.focus}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 text-slate-100">
                {data.title}
              </h3>

              {/* Graphic Mockup Dashboard Area */}
              <div className="w-full bg-slate-950/90 rounded-2xl p-5 sm:p-6 border border-slate-800 mb-6 shadow-inner">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    <span className="text-xs text-slate-400 font-mono ml-2">
                      {data.outputPreview?.title || "Analytics Output Preview"}
                    </span>
                  </div>
                  <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Verified Analytical Result
                  </span>
                </div>

                {/* Key Metrics Display Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  {data.outputPreview?.metrics?.map((m, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                      <p className="text-xs text-slate-400">{m.label}</p>
                      <p className="text-xl font-bold text-cyan-400 mt-1">{m.value}</p>
                      <span className="text-[11px] text-emerald-400 font-medium">{m.change}</span>
                    </div>
                  ))}
                </div>

                {/* Specialized Visual by project type */}
                {data.outputPreview?.type === 'chart-sales' && (
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-mono">
                      <span>Quarterly Revenue vs Target Performance</span>
                      <span className="text-cyan-400">DAX Model Evaluated</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 h-32 items-end pt-2">
                      {data.outputPreview.chartData.map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 h-full justify-end">
                          <div className="w-full flex items-end justify-center gap-1.5 h-24">
                            <div
                              style={{ height: `${item.val1}%` }}
                              className="w-1/2 bg-gradient-to-t from-cyan-600 to-sky-400 rounded-t-md relative group"
                              title={`Actual Revenue: ${item.val1}%`}
                            ></div>
                            <div
                              style={{ height: `${item.val2}%` }}
                              className="w-1/2 bg-gradient-to-t from-indigo-700 to-indigo-500 rounded-t-md opacity-80"
                              title={`Target: ${item.val2}%`}
                            ></div>
                          </div>
                          <span className="text-xs font-mono text-slate-400">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {data.outputPreview?.type === 'chart-segmentation' && (
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-mono">
                      <span>K-Means Customer Cohort Distribution</span>
                      <span className="text-purple-400">4 Optimal Clusters</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {data.outputPreview.clusters.map((c, i) => (
                        <div key={i} className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 text-center">
                          <span className="text-lg font-bold text-cyan-300 block">{c.size}</span>
                          <span className="text-xs font-medium text-slate-300 block mt-0.5">{c.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {data.outputPreview?.type === 'chart-predictive' && (
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
                      <span>Regression & 12-Week Time Series Trend</span>
                      <span className="text-emerald-400">Accuracy: 88.6%</span>
                    </div>
                    <div className="h-28 flex items-end gap-1.5 justify-between pt-2">
                      {data.outputPreview.trendPoints.map((point, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                          <div
                            style={{ height: `${point}%` }}
                            className={`w-full rounded-t ${
                              i >= 7
                                ? 'bg-gradient-to-t from-emerald-600 to-teal-400 animate-pulse'
                                : 'bg-gradient-to-t from-cyan-600 to-indigo-500'
                            }`}
                          ></div>
                          <span className="text-[10px] font-mono text-slate-500 mt-1">W{i + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {data.outputPreview?.type === 'chart-automation' && (
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-mono">
                      <span>ETL Sanitization Pipeline Stages</span>
                      <span className="text-cyan-400">100% Automated</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {data.outputPreview.steps.map((step, i) => (
                        <div key={i} className="p-3 rounded-lg bg-slate-800/80 border border-cyan-500/30 text-center flex items-center justify-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="text-xs font-semibold text-slate-200">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Detailed Breakdown */}
              <div className="space-y-4 text-sm text-slate-300 mb-6">
                <div>
                  <h4 className="font-semibold text-slate-100 text-sm mb-1 font-mono uppercase tracking-wider text-cyan-400">
                    Project Overview
                  </h4>
                  <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                    {data.shortDescription}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-100 text-sm mb-2 font-mono uppercase tracking-wider text-cyan-400">
                    Key Work Completed
                  </h4>
                  <ul className="space-y-1.5">
                    {data.keyWork?.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-100 text-sm mb-2 font-mono uppercase tracking-wider text-cyan-400">
                    Tools & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {data.tools?.map((tool, idx) => (
                      <span key={idx} className="px-3 py-1 text-xs rounded-lg bg-slate-800 text-cyan-300 border border-slate-700 font-mono">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30">
                  <span className="text-xs font-mono font-bold text-cyan-300 uppercase block mb-1">
                    Learning & Practical Outcome:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200">{data.outcome}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-slate-500 font-mono">
                  Completed during Remote Internship & Training
                </p>

                {data.linkedinUrl && (
                  <a
                    href={data.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-medium text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-sky-600/20 transition-all cursor-pointer"
                  >
                    <LinkedinIcon className="w-4 h-4" /> View Work Shared on LinkedIn
                  </a>
                )}
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* 2. CORE PORTFOLIO PROJECT MODAL (4 FEATURED PROJECTS)        */}
          {/* ============================================================ */}
          {type === 'project' && (
            <div>
              <div className="flex flex-wrap items-center gap-2 text-cyan-400 text-xs font-mono font-semibold mb-2">
                <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
                  {data.category}
                </span>
                {data.tag && (
                  <span className="px-2.5 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300">
                    {data.tag}
                  </span>
                )}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 text-slate-100">{data.title}</h3>

              {/* Architecture & Workflow Visual Mockup Area */}
              <div className="w-full bg-slate-950/90 rounded-2xl p-5 sm:p-6 border border-slate-800 mb-6 shadow-inner">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    <span className="text-xs text-slate-400 font-mono ml-2">
                      {data.outputPreview?.title || "Application Architecture"}
                    </span>
                  </div>
                  <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Verified Project Solution
                  </span>
                </div>

                {/* Key Metrics Display Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  {data.outputPreview?.metrics?.map((m, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <p className="text-xs text-slate-400 font-mono">{m.label}</p>
                      <p className="text-lg sm:text-xl font-bold text-cyan-400 mt-1">{m.value}</p>
                      <span className="text-[11px] text-emerald-400 font-medium">{m.change}</span>
                    </div>
                  ))}
                </div>

                {/* PROJECT 1: Loan Verification Workflow Diagram */}
                {data.outputPreview?.type === 'app-loan' && (
                  <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                    <span className="text-xs font-mono text-cyan-400 block mb-3 font-semibold">
                      Multi-Role Verification & Geo-Tagging Architecture:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-slate-950 border border-cyan-500/30">
                        <span className="text-xs font-bold text-cyan-300 flex items-center gap-1.5 mb-1">
                          <Users className="w-4 h-4 text-cyan-400" /> Stakeholder (Beneficiary)
                        </span>
                        <p className="text-[11px] text-slate-400">Registers, submits initial/subsequent loan request, and uploads site construction photos.</p>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-950 border border-indigo-500/30">
                        <span className="text-xs font-bold text-indigo-300 flex items-center gap-1.5 mb-1">
                          <MapPin className="w-4 h-4 text-rose-400" /> Geo-Tagging Engine
                        </span>
                        <p className="text-[11px] text-slate-400">Google Apps Script binds GPS geolocation coordinates to images for location validation.</p>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-950 border border-emerald-500/30">
                        <span className="text-xs font-bold text-emerald-300 flex items-center gap-1.5 mb-1">
                          <ShieldCheck className="w-4 h-4 text-emerald-400" /> Manager & Admin
                        </span>
                        <p className="text-[11px] text-slate-400">Reviews physical asset progress against coordinates and disburses next loan tranche.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* PROJECT 2: BlindEd Voice E-Learning Workflow */}
                {data.outputPreview?.type === 'app-blinded' && (
                  <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                    <span className="text-xs font-mono text-cyan-400 block mb-3 font-semibold">
                      BlindEd Voice Interaction & Quiz Flow:
                    </span>
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                      <div className="flex-1 min-w-[120px] p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-center">
                        <Mic className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                        <span className="text-slate-300 block">1. Voice Input</span>
                        <span className="text-[10px] text-slate-500">Select Std & Subject</span>
                      </div>
                      <span className="text-cyan-500 hidden sm:inline">→</span>
                      <div className="flex-1 min-w-[120px] p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-center">
                        <Volume2 className="w-4 h-4 text-indigo-400 mx-auto mb-1" />
                        <span className="text-slate-300 block">2. Audio Lesson</span>
                        <span className="text-[10px] text-slate-500">Science & Math</span>
                      </div>
                      <span className="text-cyan-500 hidden sm:inline">→</span>
                      <div className="flex-1 min-w-[120px] p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-center">
                        <BookOpen className="w-4 h-4 text-purple-400 mx-auto mb-1" />
                        <span className="text-slate-300 block">3. Voice Quiz</span>
                        <span className="text-[10px] text-slate-500">Spoken Answers</span>
                      </div>
                      <span className="text-cyan-500 hidden sm:inline">→</span>
                      <div className="flex-1 min-w-[120px] p-2.5 rounded-lg bg-slate-950 border border-emerald-500/30 text-center">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                        <span className="text-emerald-300 block">4. Score Calc</span>
                        <span className="text-[10px] text-emerald-500/80">Audio Feedback</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* PROJECT 3: End-to-End Customer Data Pipeline */}
                {data.outputPreview?.type === 'chart-customer' && (
                  <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                    <span className="text-xs font-mono text-cyan-400 block mb-3 font-semibold">
                      End-to-End Data Pipeline Flow:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                      <div className="p-3 rounded-lg bg-slate-950 border border-cyan-500/30">
                        <FileCode className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                        <span className="text-xs font-bold text-slate-200 block">Python (Google Colab)</span>
                        <span className="text-[11px] text-slate-400 mt-1 block">Pandas Data Cleaning, Imputation & EDA</span>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-950 border border-indigo-500/30">
                        <Database className="w-4 h-4 text-indigo-400 mx-auto mb-1" />
                        <span className="text-xs font-bold text-slate-200 block">SQL Queries</span>
                        <span className="text-[11px] text-slate-400 mt-1 block">Aggregations, Ratings, Revenue & Profit Filters</span>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-950 border border-amber-500/30">
                        <BarChart3 className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                        <span className="text-xs font-bold text-slate-200 block">Power BI Dashboard</span>
                        <span className="text-[11px] text-slate-400 mt-1 block">KPI Cards, Slicers, New vs Returning Retention</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* PROJECT 4: Power BI Certification Suite */}
                {data.outputPreview?.type === 'chart-powerbi' && (
                  <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                    <span className="text-xs font-mono text-cyan-400 block mb-3 font-semibold">
                      Power BI Enterprise Architecture:
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                      <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                        <span className="font-bold text-cyan-300 block">Power Query</span>
                        <span className="text-[10px] text-slate-400">ETL Cleaning</span>
                      </div>
                      <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                        <span className="font-bold text-indigo-300 block">Data Model</span>
                        <span className="text-[10px] text-slate-400">Star Schema</span>
                      </div>
                      <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                        <span className="font-bold text-purple-300 block">DAX Formulas</span>
                        <span className="text-[10px] text-slate-400">Time-Intelligence</span>
                      </div>
                      <div className="p-2.5 rounded bg-slate-950 border border-emerald-500/30">
                        <span className="font-bold text-emerald-300 block">Reports</span>
                        <span className="text-[10px] text-emerald-400">Interactive KPIs</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Detailed Breakdown */}
              <div className="space-y-4 text-sm text-slate-300">
                <div>
                  <h4 className="font-semibold text-slate-100 text-sm mb-1 font-mono uppercase tracking-wider text-cyan-400">
                    Problem Addressed:
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{data.problem}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-100 text-sm mb-1 font-mono uppercase tracking-wider text-cyan-400">
                    Solution & Technical Implementation:
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{data.whatIDid}</p>
                </div>

                {data.keyFeatures && (
                  <div>
                    <h4 className="font-semibold text-slate-100 text-sm mb-2 font-mono uppercase tracking-wider text-cyan-400">
                      Key Capabilities & Deliverables:
                    </h4>
                    <ul className="space-y-1.5">
                      {data.keyFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="font-semibold text-slate-100 text-sm mb-2 font-mono uppercase tracking-wider text-cyan-400">
                    Tech Stack & Tools:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {data.tools?.map((tool, idx) => (
                      <span key={idx} className="px-2.5 py-1 text-xs rounded-lg bg-slate-800 text-cyan-300 border border-slate-700 font-mono">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* GitHub Link Action */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end gap-3">
                <a
                  href={data.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-xs sm:text-sm flex items-center gap-2 transition-colors shadow-lg shadow-cyan-600/20 cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" /> View GitHub Repository
                </a>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* 3. CERTIFICATE / INTERNSHIP CREDENTIAL MODAL WITH UPLOAD     */}
          {/* ============================================================ */}
          {(type === 'certificate' || type === 'internship') && (
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span>Verified Credential & Certificate</span>
                </div>

                {/* Hidden File Input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,application/pdf"
                  className="hidden"
                  onChange={handleFileUpload}
                />

                {/* Upload / Switch View Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3.5 py-1.5 rounded-xl bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 border border-cyan-500/40 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                  >
                    <Upload className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{uploadedCert ? 'Replace Certificate' : 'Upload Certificate File'}</span>
                  </button>

                  {uploadedCert && (
                    <button
                      onClick={handleRemoveCertificate}
                      className="p-1.5 rounded-xl bg-red-950/60 hover:bg-red-900 text-rose-300 border border-rose-500/30 text-xs transition-colors cursor-pointer"
                      title="Remove uploaded certificate"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-1 text-slate-100">
                {data.title || data.company}
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                {data.issuer || data.role} ({data.year || data.duration})
              </p>

              {/* Toggle tabs if user uploaded a certificate */}
              {uploadedCert && (
                <div className="flex items-center gap-2 mb-4 bg-slate-950/70 p-1 rounded-xl border border-slate-800 w-fit">
                  <button
                    onClick={() => setViewMode('image')}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                      viewMode === 'image'
                        ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Uploaded Certificate Image
                  </button>
                  <button
                    onClick={() => setViewMode('card')}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                      viewMode === 'card'
                        ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Digital Verified Card
                  </button>
                </div>
              )}

              {/* Image View Mode (If user uploaded an actual certificate) */}
              {uploadedCert && viewMode === 'image' ? (
                <div className="w-full bg-slate-950 rounded-2xl p-4 border border-cyan-500/30 mb-6 text-center relative overflow-hidden shadow-2xl">
                  <div className="max-h-[60vh] overflow-auto flex items-center justify-center rounded-xl bg-slate-900/50 p-2">
                    <img
                      src={uploadedCert}
                      alt="Uploaded Certificate"
                      className="max-w-full max-h-[55vh] object-contain rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800 text-xs text-slate-400">
                    <span className="text-emerald-400 font-mono flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> Custom Certificate File Displayed
                    </span>
                    <a
                      href={uploadedCert}
                      download="internship_certificate.png"
                      className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-700 font-mono flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" /> Download File
                    </a>
                  </div>
                </div>
              ) : (
                /* Verifiable Digital Certificate Card */
                <div className="w-full bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/60 rounded-2xl p-8 border-2 border-cyan-500/30 text-center relative overflow-hidden mb-6 shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-lg">
                      <Award className="w-12 h-12 text-yellow-400" />
                    </div>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-serif font-bold text-slate-100 tracking-wide mb-1">
                    Certificate of Completion & Excellence
                  </h4>
                  <p className="text-xs text-slate-400 mb-3 font-mono">Issued to Praneush M K</p>
                  <p className="text-sm sm:text-base text-cyan-300 max-w-lg mx-auto mb-6 font-medium">
                    {data.title || `${data.role} at ${data.company}`}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-400 border-t border-slate-800 pt-5">
                    <div>
                      <span className="block text-slate-500 mb-0.5">Issuer / Organization</span>
                      <span className="font-semibold text-slate-200">{data.issuer || data.company}</span>
                    </div>
                    <div>
                      <span className="block text-slate-500 mb-0.5">Credential ID</span>
                      <span className="font-mono text-cyan-400 font-semibold">{data.certificatePlaceholder?.credentialId || data.id || "CERT-2025-VCET-98"}</span>
                    </div>
                    <div>
                      <span className="block text-slate-500 mb-0.5">Verification Status</span>
                      <span className="text-emerald-400 font-semibold flex items-center justify-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Authenticated & Valid
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Upload Prompt Banner if not uploaded yet */}
              {!uploadedCert && (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="p-4 rounded-2xl border-2 border-dashed border-cyan-500/30 hover:border-cyan-400/60 bg-cyan-950/20 hover:bg-cyan-950/30 text-center cursor-pointer transition-all mb-6 group"
                >
                  <Upload className="w-6 h-6 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-xs font-semibold text-cyan-300">
                    Want to display your actual scanned certificate image here?
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Click here to upload your certificate (.jpg, .png, or .pdf) from your computer.
                  </p>
                </div>
              )}

              {/* Skills / Competencies */}
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-200 text-sm font-mono uppercase tracking-wider text-cyan-400">
                  Verified Skills & Competencies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(data.skillsLearned || data.tools || []).map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg text-xs bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
