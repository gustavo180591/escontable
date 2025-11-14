'use client';

import { useState } from 'react';

const faqs = [
  {
    pregunta: "¿Qué incluye el plan de monotributo?",
    respuesta: "El plan incluye: DDJJ informativas, asesoramiento sobre cambios de categoría, cálculo de aportes, asistencia en trámites AFIP y recordatorios de vencimientos."
  },
  {
    pregunta: "¿Hacen recategorizaciones y cambios de actividad?",
    respuesta: "Sí, asesoramos y realizamos todos los trámites necesarios para cambios de categoría, recategorizaciones y modificaciones de actividad ante AFIP."
  },
  {
    pregunta: "¿Trabajan con AFIP + ARBA/AGIP/DGR?",
    respuesta: "Absolutamente. Cobertura integral con AFIP nacional y organismos provinciales como ARBA, AGIP y DGR. Asesoramiento completo en ingresos brutos."
  },
  {
    pregunta: "¿Pueden llevar sueldos y cargas sociales?",
    respuesta: "Sí, disponemos de servicio completo de nómina y gestión de cargas sociales (aportes AFIP, contribuciones sindicales, etc.). Consulta costos."
  },
  {
    pregunta: "¿Cómo manejan los vencimientos?",
    respuesta: "Te enviamos recordatorios por WhatsApp antes de cada obligación fiscal. Nunca perderás un plazo."
  },
  {
    pregunta: "¿Emiten factura A/B/C y preparan libros?",
    respuesta: "Sí, asesoramos en facturación electrónica (RG 4620), confección de libros contables y diarios según categoría fiscal."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-light">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Preguntas Frecuentes</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 text-left font-bold flex justify-between items-center hover:bg-light transition">
                <span>{faq.pregunta}</span>
                <span className="text-xl">{openIndex === idx ? '−' : '+'}</span>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600">{faq.respuesta}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
