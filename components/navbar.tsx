'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-primary">Estudio Contable Andar</a>
        
        <div className="hidden md:flex gap-8 items-center text-sm font-medium">
          <a href="#servicios" className="hover:text-accent transition">Servicios</a>
          <a href="#planes" className="hover:text-accent transition">Planes</a>
          <a href="#clientes" className="hover:text-accent transition">Clientes</a>
          <a href="#faq" className="hover:text-accent transition">Preguntas</a>
          <a href="#contacto" className="hover:text-accent transition">Contacto</a>
        </div>
        
        <a href="https://wa.me/5493704000000?text=Hola%20quiero%20consultar" 
           className="hidden md:inline-block bg-accent text-white px-6 py-2 rounded-lg hover:bg-red-600 transition font-medium text-sm">
          WhatsApp
        </a>
        
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-light transition">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-light">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#servicios" onClick={() => setMenuOpen(false)} className="hover:text-accent transition">Servicios</a>
            <a href="#planes" onClick={() => setMenuOpen(false)} className="hover:text-accent transition">Planes</a>
            <a href="#clientes" onClick={() => setMenuOpen(false)} className="hover:text-accent transition">Clientes</a>
            <a href="#faq" onClick={() => setMenuOpen(false)} className="hover:text-accent transition">Preguntas</a>
            <a href="#contacto" onClick={() => setMenuOpen(false)} className="hover:text-accent transition">Contacto</a>
            <a href="https://wa.me/5493704000000?text=Hola%20quiero%20consultar" 
               className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-red-600 transition font-medium text-center">
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
