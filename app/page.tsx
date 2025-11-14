'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Servicios from '@/components/servicios';
import Diferenciales from '@/components/diferenciales';
import Planes from '@/components/planes';
import Clientes from '@/components/clientes';
import Proceso from '@/components/proceso';
import FAQ from '@/components/faq';
import Contacto from '@/components/contacto';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Servicios />
      <Diferenciales />
      <Planes />
      <Clientes />
      <Proceso />
      <FAQ />
      <Contacto />
      <Footer />
    </main>
  );
}
