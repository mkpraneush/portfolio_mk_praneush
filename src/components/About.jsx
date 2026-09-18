import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  MapPin,
  Award,
  Target,
  BookOpen,
  Sparkles,
  CheckCircle,
  Users,
  Camera,
  Upload,
  Image as ImageIcon,
  Trash2,
  ZoomIn,
  X,
  Heart
} from 'lucide-react';
import { personalInfo, aboutInfo, aboutPhotos } from '../data/portfolioData';
import TiltCard from './3d/TiltCard';

export default function About() {
  const [photos, setPhotos] = useState({});
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const fileInputRefs = useRef({});

  // Load custom uploaded photos from localStorage if available
  useEffect(() => {
    try {
      const stored = localStorage.getItem('user_about_photos');
      if (stored) {
        setPhotos(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handlePhotoUpload = (photoId, e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result;
        if (result) {
          const updated = { ...photos, [photoId]: result };
          setPhotos(updated);
          try {
            localStorage.setItem('user_about_photos', JSON.stringify(updated));
          } catch (err) {
            console.warn('Storage quota limit reached', err);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = (photoId, e) => {
    e.stopPropagation();
    const updated = { ...photos };
    delete updated[photoId];
    setPhotos(updated);
    try {
      localStorage.setItem('user_about_photos', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="about" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3 shadow-md shadow-cyan-950/50"
          >
            <BookOpen className="w-3.5 h-3.5" /> Background & Vision
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight"
          >
            About <span className="text-cyan-400">Me</span>
          </motion.h2>
        </div>

        {/* 2-Column Grid: Education Profile & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Left Column: Education & Academic Specs Card with 3D Tilt */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <TiltCard maxTilt={6} className="h-full rounded-2xl">
              <div className="glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden border-cyan-500/30 h-full flex flex-col justify-between bg-slate-900/80 shadow-xl">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 via-sky-500 to-indigo-600 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-cyan-500/30">
                      PMK
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-100">{personalInfo.name}</h3>
                      <p className="text-xs text-cyan-400 font-mono flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5" /> {personalInfo.location}
                      </p>
                    </div>
                  </div>

                  {/* Academic Specs List */}
                  <div className="space-y-4 pt-4 border-t border-slate-800">
                    <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <div className="p-2 rounded-lg bg-slate-900 text-cyan-400 border border-slate-800 mt-0.5">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 block font-mono">Institution</span>
                        <span className="text-sm font-semibold text-slate-200">{personalInfo.college}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <div className="p-2 rounded-lg bg-slate-900 text-indigo-400 border border-slate-800 mt-0.5">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 block font-mono">Degree</span>
                        <span className="text-sm font-semibold text-slate-200">{personalInfo.degree}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <div className="p-2 rounded-lg bg-slate-900 text-amber-400 border border-slate-800 mt-0.5">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 block font-mono">Cumulative CGPA</span>
                        <span className="text-base font-bold text-amber-400">{personalInfo.cgpa} / 10.0</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80">
                  <span className="text-[11px] font-mono text-cyan-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span> Open for Data Analyst & BI Opportunities
                  </span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Right Column: Bio & Career Target */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 flex flex-col justify-between"
          >
            {/* Short Bio Block */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 bg-slate-900/80 border-slate-800/90 shadow-lg">
              <h3 className="text-lg font-bold text-slate-100 mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" /> Analytical Mindset & Creative UX
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {aboutInfo.bio}
              </p>
            </div>

            {/* Career Target Statement */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border-indigo-500/30 bg-indigo-950/20 shadow-lg">
              <h3 className="text-lg font-bold text-indigo-300 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-indigo-400" /> Career Objective
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {aboutInfo.careerTarget}
              </p>
            </div>

            {/* Core Competencies Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">Power BI DAX & Data Modeling</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">Advanced SQL Query Optimization</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">Python Pandas Data Wrangling</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">Accessibility-First UI/UX</span>
              </div>
            </div>

          </motion.div>
        </div>

        {/* 4 Photos Gallery: Me & Friends / Campus Life */}
        <div className="mt-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-cyan-400" />
                <h3 className="text-2xl font-bold text-slate-100">
                  Moments & Campus Journey
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Snapshots of personal journey, team hackathons, campus collaborations, and tech symposiums.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 bg-cyan-950/60 px-3 py-1.5 rounded-lg border border-cyan-500/30">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>4 Featured Gallery Cards</span>
            </div>
          </div>

          {/* 4 Photo Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutPhotos.map((item, idx) => {
              const imageSrc = photos[item.id] || item.src;
              const isCustom = Boolean(photos[item.id]);

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  {/* Hidden Input for this photo */}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    ref={(el) => (fileInputRefs.current[item.id] = el)}
                    onChange={(e) => handlePhotoUpload(item.id, e)}
                  />

                  <TiltCard maxTilt={7} className="h-full rounded-2xl">
                    <div className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between h-full bg-slate-900/80 border-slate-800 hover:border-cyan-500/40 shadow-lg group">
                      
                      {/* Photo Thumbnail Container */}
                      <div
                        onClick={() => setSelectedPhoto({ ...item, currentSrc: imageSrc })}
                        className="relative h-56 w-full bg-slate-950 overflow-hidden cursor-pointer flex items-center justify-center group/img"
                      >
                        <img
                          src={imageSrc}
                          alt={item.title}
                          onError={(e) => {
                            // Fallback if local file not yet in public/
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                          }}
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                        />

                        {/* Fallback Graphic Placeholder when image is not yet on disk */}
                        <div className="hidden absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/50 p-6 flex-col items-center justify-center text-center">
                          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3 shadow-inner">
                            <ImageIcon className="w-7 h-7" />
                          </div>
                          <span className="text-xs font-mono font-bold text-slate-300 block mb-1">
                            {item.title}
                          </span>
                          <span className="text-[11px] font-mono text-cyan-400 block mb-2">
                            {item.fileKey}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              fileInputRefs.current[item.id]?.click();
                            }}
                            className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-[11px] font-medium flex items-center gap-1.5 transition-all shadow cursor-pointer"
                          >
                            <Upload className="w-3.5 h-3.5" /> Upload Photo
                          </button>
                        </div>

                        {/* Hover Overlay with Zoom Icon */}
                        <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 pointer-events-none">
                          <span className="p-2.5 rounded-full bg-cyan-950/90 border border-cyan-500/40 text-cyan-300 shadow-lg flex items-center gap-1.5 text-xs font-mono">
                            <ZoomIn className="w-4 h-4" /> View Full
                          </span>
                        </div>

                        {/* Top Category Badge */}
                        <div className="absolute top-3 left-3 z-10">
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-cyan-300 shadow">
                            {item.tag}
                          </span>
                        </div>

                        {/* Top Right Upload / Trash controls */}
                        <div className="absolute top-3 right-3 z-10 flex items-center gap-1">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              fileInputRefs.current[item.id]?.click();
                            }}
                            title="Upload/Replace this photo"
                            className="p-1.5 rounded-lg bg-slate-950/80 hover:bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer shadow"
                          >
                            <Upload className="w-3.5 h-3.5" />
                          </button>
                          {isCustom && (
                            <button
                              type="button"
                              onClick={(e) => handleRemovePhoto(item.id, e)}
                              title="Remove custom photo"
                              className="p-1.5 rounded-lg bg-red-950/80 hover:bg-red-900 border border-rose-500/40 text-rose-300 transition-colors cursor-pointer shadow"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Photo Description & Name */}
                      <div className="p-5 flex flex-col justify-between flex-1 bg-slate-900/90">
                        <div>
                          <h4 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-1">
                            {item.title}
                          </h4>
                          <p className="text-xs font-mono text-cyan-400 mb-2">
                            {item.subtitle}
                          </p>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                          <span>{item.fileKey}</span>
                          <button
                            type="button"
                            onClick={() => fileInputRefs.current[item.id]?.click()}
                            className="text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer"
                          >
                            {isCustom ? 'Replace' : 'Upload'}
                          </button>
                        </div>
                      </div>

                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>

          {/* Quick upload guide banner */}
          <div className="mt-6 p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>
                <strong>Tip:</strong> Click <strong>Upload</strong> on any card to select your photo directly, or place your files in <code className="text-cyan-300">public/images/about/</code> (named <code className="text-cyan-300">photo-1.jpg</code> to <code className="text-cyan-300">photo-4.jpg</code>).
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full glass-panel rounded-3xl overflow-hidden border border-cyan-500/30 p-4 sm:p-6 bg-slate-900/95 shadow-2xl"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors z-20 cursor-pointer"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="rounded-2xl overflow-hidden bg-slate-950 mb-4 flex items-center justify-center max-h-[65vh]">
                <img
                  src={selectedPhoto.currentSrc}
                  alt={selectedPhoto.title}
                  className="max-h-[60vh] max-w-full object-contain rounded-xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden p-12 text-center">
                  <ImageIcon className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                  <p className="text-sm text-slate-300 font-mono">
                    Place image at <code>public/images/about/{selectedPhoto.fileKey}</code> or use the upload button.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-slate-800 pt-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/30 mb-1 inline-block">
                    {selectedPhoto.tag}
                  </span>
                  <h4 className="text-lg font-bold text-slate-100">{selectedPhoto.title}</h4>
                  <p className="text-xs text-slate-400">{selectedPhoto.description}</p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const id = selectedPhoto.id;
                    setSelectedPhoto(null);
                    fileInputRefs.current[id]?.click();
                  }}
                  className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
                >
                  <Upload className="w-3.5 h-3.5" /> Upload / Replace
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
