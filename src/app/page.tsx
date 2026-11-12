import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ThreeOfficePipeline from '@/components/ThreeOfficePipeline';
import ServicesMatrix from '@/components/ServicesMatrix';
import ProjectEstimator from '@/components/ProjectEstimator';
import CompletedProjects from '@/components/CompletedProjects';
import TeamShowcase from '@/components/TeamShowcase';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <Hero />
      <ThreeOfficePipeline />
      <ServicesMatrix />
      <ProjectEstimator />
      <CompletedProjects />
      <TeamShowcase />
      <ContactSection />
      <Footer />
    </main>
  );
}
