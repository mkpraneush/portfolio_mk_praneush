import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, Send, MapPin, GraduationCap, CheckCircle2, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function ContactFooter() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitting(true);
      
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            // REPLACE THIS KEY WITH YOUR OWN FROM WEB3FORMS
            access_key: "04c15083-10ba-4227-99d2-a37f38be763b", 
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });

        const result = await response.json();
        
        if (result.success) {
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => {
            setSubmitted(false);
          }, 5000);
        } else {
          alert("Something went wrong! Please try again.");
        }
      } catch (error) {
        alert("Something went wrong! Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative z-10 border-t border-slate-800 bg-slate-950 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3"
          >
            <Mail className="w-3.5 h-3.5" /> Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight"
          >
            Let's Connect & <span className="text-cyan-400">Collaborate</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-slate-400 max-w-lg mx-auto text-sm sm:text-base"
          >
            Open for Data Analyst, BI Engineer, and Data Analytics Internship/Full-Time opportunities.
          </motion.p>
        </div>

        {/* Main Grid: Contact Info + Quick Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">

          {/* Left Column: Direct Links & Profile Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border-cyan-500/20">
              <h3 className="text-xl font-bold text-slate-100">Contact Information</h3>
              
              <div className="space-y-4">
                {/* Email link */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-slate-200 hover:text-cyan-300 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Direct Email</span>
                    <span className="text-sm font-semibold truncate">{personalInfo.email}</span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200">
                  <div className="p-2.5 rounded-lg bg-rose-500/10 text-rose-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Location</span>
                    <span className="text-sm font-semibold">{personalInfo.location}</span>
                  </div>
                </div>

                {/* College */}
                <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Institution</span>
                    <span className="text-xs font-semibold">{personalInfo.college}</span>
                  </div>
                </div>
              </div>

              {/* Social Media Links Bar */}
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 font-bold block mb-3">
                  Professional Profiles & Code Repositories
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 transition-all hover:scale-105"
                    title="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 transition-all hover:scale-105"
                    title="GitHub Profile"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500 text-slate-300 hover:text-amber-400 transition-all hover:scale-105"
                    title="LeetCode Profile"
                  >
                    <LeetcodeIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Resume Download Repeated */}
              <div className="pt-2">
                <a
                  href={personalInfo.resumeUrl}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-600/20 transition-all"
                >
                  <Download className="w-4 h-4" /> Download Resume (PDF)
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-100 mb-2">Send a Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                Have a job inquiry or project discussion? Fill out the form below to reach out directly.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-lg font-bold text-emerald-300">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out. Praneush will get back to you shortly at your email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Smith"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Message / Project Inquiry</label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Praneush, I came across your portfolio and would like to connect regarding a Data Analyst opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:bg-cyan-800 disabled:cursor-not-allowed text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-600/20"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Praneush M K. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>B.Tech IT • Velalar College of Engineering and Technology</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
