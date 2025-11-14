import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-gray-900 text-white py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-accent rounded-full blur-3xl -top-20 -right-20"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Contabilidad simple para monotributistas y pymes
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Alta, recategorización, sueldos, impuestos y más. Asesoramiento fiscal completo sin complicaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#servicios" className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-red-600 transition font-semibold text-center">
                Ver servicios
              </a>
              <a href="https://wa.me/5493704000000?text=Hola%20quiero%20consultar" 
                 className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary transition font-semibold text-center">
                Escribir por WhatsApp
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_umkShhuBdcNTLJ34v1d3TMJ4Z9cN/fluSePmrrikgGf0F_nlr_T/public/contador-trabajando-oficina-contabilidad.jpg" 
              alt="Contador trabajando en la oficina" 
              className="w-full h-auto rounded-2xl shadow-2xl" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
