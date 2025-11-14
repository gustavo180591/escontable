export default function Planes() {
  return (
    <section id="planes" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Planes y Precios</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Precios orientativos en ARS. Pueden variar por volumen y complejidad. Consulta sin obligación.
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="border-b-2 border-primary">
                <th className="text-left py-4 px-6 font-bold text-lg">Perfil</th>
                <th className="py-4 px-6 font-bold text-lg">Monotributo</th>
                <th className="py-4 px-6 font-bold text-lg">Responsable Inscripto</th>
                <th className="py-4 px-6 font-bold text-lg">Pyme (SRL/SA/SAS)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="text-left py-6 px-6 font-semibold">Tarifa Mensual</td>
                <td className="py-6 px-6 text-2xl font-bold text-accent">desde $ 3.999,00</td>
                <td className="py-6 px-6 text-2xl font-bold text-accent">desde $ 7.999,00</td>
                <td className="py-6 px-6 text-2xl font-bold text-accent">desde $ 12.999,00</td>
              </tr>
              <tr className="border-b border-gray-200 bg-light">
                <td className="text-left py-4 px-6 font-semibold text-sm">DDJJ e Impuestos</td>
                <td className="py-4 px-6">✓ Informativas</td>
                <td className="py-4 px-6">✓ IVA + Ingresos Brutos</td>
                <td className="py-4 px-6">✓ Completas + Ganancias</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="text-left py-4 px-6 font-semibold text-sm">Asesoramiento</td>
                <td className="py-4 px-6">✓ Básico</td>
                <td className="py-4 px-6">✓ Integral</td>
                <td className="py-4 px-6">✓ Premium + Sueldos*</td>
              </tr>
              <tr className="border-b border-gray-200 bg-light">
                <td className="text-left py-4 px-6 font-semibold text-sm">Facturación</td>
                <td className="py-4 px-6">✓ Opcional</td>
                <td className="py-4 px-6">✓ Configurada</td>
                <td className="py-4 px-6">✓ + Punto de Venta</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="text-left py-4 px-6 font-semibold text-sm">Seguimiento Mensual</td>
                <td className="py-4 px-6">✓ Mínimo</td>
                <td className="py-4 px-6">✓ Completo</td>
                <td className="py-4 px-6">✓ A medida</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-center text-gray-600 text-sm mt-8">
          *Sueldos y cargas sociales con costo adicional. Contacta para presupuesto personalizado.
        </p>
      </div>
    </section>
  );
}
