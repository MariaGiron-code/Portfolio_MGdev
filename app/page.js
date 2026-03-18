'use client';

import { useEffect } from 'react';
import i18next from '@/i18n/config';
import { Header } from '@/components/Navigation/Header';
import { Hero } from '@/components/Sections/Hero';
import { Skills } from '@/components/Sections/Skills';
import { Experience } from '@/components/Sections/Experience';
import { Projects } from '@/components/Sections/Projects';
import { QRGenerator } from '@/components/Sections/QRGenerator';
import { Contact } from '@/components/Sections/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Initialize i18next if not already initialized
    if (!i18next.isInitialized) {
      i18next.init();
    }
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <QRGenerator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
