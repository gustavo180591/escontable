export default function Clientes() {
  return (
    <section id="clientes" className="py-20 bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Qué dicen nuestros clientes</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-accent">★</span>
              ))}
            </div>
            <p className="text-gray-700 mb-6">
              "Desde que trabajo con Estudio Andar no tengo estrés con AFIP. Todo está al día y los honorarios son justos."
            </p>
            <p className="font-bold">Gustavo Fernández</p>
            <p className="text-gray-600 text-sm">Contador independiente, Posadas</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-accent">★</span>
              ))}
            </div>
            <p className="text-gray-700 mb-6">
              "Excelente atención por WhatsApp. Responden rápido y aclaran todas mis dudas. Muy recomendado."
            </p>
            <p className="font-bold">Mariana López</p>
            <p className="text-gray-600 text-sm">Dueña de dietética, Puerto Iguazú</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-accent">★</span>
              ))}
            </div>
            <p className="text-gray-700 mb-6">
              "Nos ayudaron a organizar la facturación y sueldos. Ahora todo es mucho más simple. Gracias."
            </p>
            <p className="font-bold">Diego Martínez</p>
            <p className="text-gray-600 text-sm">Gerente de pyme constructora, Eldorado</p>
          </div>
        </div>
      </div>
    </section>
  );
}
