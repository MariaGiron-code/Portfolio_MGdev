'use client';

import { Header } from '@/components/Navigation/Header';
import { Hero } from '@/components/Sections/Hero';
import { Skills } from '@/components/Sections/Skills';
import { Experience } from '@/components/Sections/Experience';
import { Projects } from '@/components/Sections/Projects';
import { QRGenerator } from '@/components/Sections/QRGenerator';
import { Contact } from '@/components/Sections/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
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
