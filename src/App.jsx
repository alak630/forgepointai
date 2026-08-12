import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BeforeAfter from './components/BeforeAfter';
import Playbook from './components/Playbook';
import Industries from './components/Industries';
import TechStack from './components/TechStack';
import AcquisitionCalculator from './components/AcquisitionCalculator';
import MissionValues from './components/MissionValues';
import Footer from './components/Footer';
import DealSubmissionModal from './components/DealSubmissionModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-['Plus_Jakarta_Sans'] selection:bg-[#ff5500] selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenModal={handleOpenModal} />
        <BeforeAfter />
        <Playbook />
        <Industries onOpenModal={handleOpenModal} />
        <TechStack />
        <AcquisitionCalculator onOpenModal={handleOpenModal} />
        <MissionValues />
      </main>

      {/* Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Deal Submission Modal */}
      <DealSubmissionModal isOpen={modalOpen} onClose={handleCloseModal} />
    </div>
  );
}
