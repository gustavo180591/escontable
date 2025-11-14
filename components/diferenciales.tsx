export default function Diferenciales() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">¿Por qué elegir Estudio Andar?</h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold mb-2">Atención por WhatsApp</h3>
            <p className="text-gray-600 text-sm">Consultas rápidas y respuestas en tiempo real para tu tranquilidad.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-12C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg>
            </div>
            <h3 className="font-bold mb-2">Honorarios Claros</h3>
            <p className="text-gray-600 text-sm">Sin sorpresas. Planes transparentes y ajustados a tu perfil.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h3 className="font-bold mb-2">Recordatorios de Vencimientos</h3>
            <p className="text-gray-600 text-sm">Nunca olvides un plazo. Te avisamos antes de cada obligación.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
            </div>
            <h3 className="font-bold mb-2">Cobertura Nacional</h3>
            <p className="text-gray-600 text-sm">Asesoramiento fiscal integral en AFIP, provinciales y municipales.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
