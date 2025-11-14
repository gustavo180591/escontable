export default function Proceso() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Cómo trabajamos</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
              1
            </div>
            <h3 className="text-xl font-bold mb-4">Diagnosticamos</h3>
            <p className="text-gray-600">
              Entendemos tu situación fiscal, necesidades y objetivos. Sin compromisos, consultamos sin obligación.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
              2
            </div>
            <h3 className="text-xl font-bold mb-4">Ordenamos tu fiscalidad</h3>
            <p className="text-gray-600">
              Implementamos sistemas, trámites y soluciones. Te explicamos cada paso sin jerga innecesaria.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
              3
            </div>
            <h3 className="text-xl font-bold mb-4">Te acompañamos mes a mes</h3>
            <p className="text-gray-600">
              Seguimiento permanente, recordatorios de vencimientos y asesoramiento contínuo para tu tranquilidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
