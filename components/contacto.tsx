'use client';

import { FormEvent, useState } from 'react';

export default function Contacto() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Contacto</h2>
        <p className="text-center text-gray-600 mb-12">
          Completa el formulario o escribe directamente por WhatsApp. Te responderemos en la mayor brevedad.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nombre" className="block font-semibold mb-2">Nombre completo *</label>
            <input type="text" id="nombre" name="nombre" required 
                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" 
                   placeholder="Tu nombre" />
          </div>
          
          <div>
            <label htmlFor="email" className="block font-semibold mb-2">Email *</label>
            <input type="email" id="email" name="email" required 
                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" 
                   placeholder="tu@email.com" />
          </div>
          
          <div>
            <label htmlFor="telefono" className="block font-semibold mb-2">Teléfono *</label>
            <input type="tel" id="telefono" name="telefono" required 
                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" 
                   placeholder="+54 9 3704 000000" />
          </div>
          
          <div>
            <label htmlFor="contribuyente" className="block font-semibold mb-2">Tipo de contribuyente *</label>
            <select id="contribuyente" name="contribuyente" required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
              <option value="">Selecciona una opción</option>
              <option value="Monotributista">Monotributista</option>
              <option value="Responsable Inscripto">Responsable Inscripto</option>
              <option value="Pyme (SRL/SA/SAS)">Pyme (SRL/SA/SAS)</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="servicio" className="block font-semibold mb-2">Servicio de interés *</label>
            <select id="servicio" name="servicio" required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
              <option value="">Selecciona un servicio</option>
              <option value="Alta de Monotributo / Recategorización">Alta de Monotributo / Recategorización</option>
              <option value="DDJJ y Régimen de Información">DDJJ y Régimen de Información</option>
              <option value="Facturación electrónica">Facturación electrónica</option>
              <option value="Ingresos Brutos">Ingresos Brutos</option>
              <option value="IVA / Ganancias">IVA / Ganancias</option>
              <option value="Empleadores y Sueldos">Empleadores y Sueldos</option>
              <option value="Balance y Estados Contables">Balance y Estados Contables</option>
              <option value="Constitución de Sociedades">Constitución de Sociedades</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="mensaje" className="block font-semibold mb-2">Mensaje</label>
            <textarea id="mensaje" name="mensaje" rows={5} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" 
                      placeholder="Cuéntanos en qué podemos ayudarte..."></textarea>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button type="submit" className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-red-600 transition font-semibold flex-1">
              Enviar consulta
            </button>
            <a href="https://wa.me/5493704000000?text=Hola%20quiero%20consultar" 
               className="border-2 border-accent text-accent px-8 py-3 rounded-lg hover:bg-light transition font-semibold flex-1 text-center">
              Prefiero WhatsApp
            </a>
          </div>
          
          {submitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
              ¡Gracias! Tu mensaje fue enviado correctamente. Te responderemos pronto.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
