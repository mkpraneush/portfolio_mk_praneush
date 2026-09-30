import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Internship from './components/Internship';
import Certifications from './components/Certifications';
import IndustrialExposure from './components/IndustrialExposure';
import ContactFooter from './components/ContactFooter';
import CertificateModal from './components/CertificateModal';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [modalData, setModalData] = useState(null);
  const [modalType, setModalType] = useState('project'); // 'project' | 'certificate' | 'internship'
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Synchronize document theme class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenModal = (data, type) => {
    setModalData(data);
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      {/* Fixed Header Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Sections in exact specified order */}
      <main>
        {/* 1. Hero Section */}
        <Hero theme={theme} />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Skills Section */}
        <Skills />

        {/* 4. Projects Section (Highest visual priority) */}
        <Projects onOpenModal={handleOpenModal} />

        {/* Achievements Section */}
        <Achievements />

        {/* 5. Internship Section */}
        <Internship onOpenModal={handleOpenModal} />

        {/* 6. Certifications Section */}
        <Certifications onOpenModal={handleOpenModal} />

        {/* 7. Industrial Exposure Section (Compact strip) */}
        <IndustrialExposure />
      </main>

      {/* 8. Contact & Footer Section */}
      <ContactFooter />

      {/* Interactive Modal for Dashboard & Certificate previews */}
      <CertificateModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        data={modalData}
        type={modalType}
      />
    </div>
  );
}
