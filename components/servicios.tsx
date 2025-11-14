const servicios = [
  {
    titulo: "Alta de Monotributo / Recategorización",
    descripcion: "Trámites de alta, cambio de actividad y recategorización ante AFIP con asesoramiento integral.",
    whatsapp: "Alta%20de%20Monotributo"
  },
  {
    titulo: "DDJJ y Régimen de Información",
    descripcion: "Declaraciones juradas, régimen de información y actualización de datos ante organismos fiscales.",
    whatsapp: "DDJJ%20y%20R%C3%A9gimen%20de%20Informaci%C3%B3n"
  },
  {
    titulo: "Facturación electrónica / Punto de venta",
    descripcion: "Configuración e implementación de sistemas de facturación electrónica (RG 4620) y puntos de venta.",
    whatsapp: "Facturaci%C3%B3n%20electr%C3%B3nica"
  },
  {
    titulo: "Ingresos Brutos (ARBA/AGIP/DGR)",
    descripcion: "Registración, declaraciones juradas y asesoramiento en ingresos brutos provincial y municipal.",
    whatsapp: "Ingresos%20Brutos"
  },
  {
    titulo: "IVA / Ganancias / Autónomos",
    descripcion: "Determinación, liquidación y presentación de obligaciones fiscales mensuales y anuales.",
    whatsapp: "IVA%20Ganancias%20Aut%C3%B3nomos"
  },
  {
    titulo: "Empleadores y Sueldos",
    descripcion: "Gestión integral de nómina, contribuciones sindicales, aportes AFIP y cargas sociales.",
    whatsapp: "Empleadores%20y%20Sueldos"
  },
  {
    titulo: "Balance y Estados Contables",
    descripcion: "Confección de balance, estados contables y asesoramiento contable para SRL, SA y SAS.",
    whatsapp: "Balance%20y%20Estados%20Contables"
  },
  {
    titulo: "Constitución de Sociedades y Convenios",
    descripcion: "Asesoramiento en constitución, modificación estatutaria y tramitación de convenios comerciales.",
    whatsapp: "Constituci%C3%B3n%20de%20Sociedades"
  }
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nuestros Servicios</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Cobertura completa de soluciones contables y fiscales para tu negocio
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((servicio, idx) => (
            <div key={idx} className="bg-light rounded-2xl p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-bold mb-3">{servicio.titulo}</h3>
              <p className="text-gray-600 text-sm mb-6">{servicio.descripcion}</p>
              <a href={`https://wa.me/5493704000000?text=Hola%20quiero%20consultar%20por%20${servicio.whatsapp}`} 
                 className="text-accent font-semibold hover:underline text-sm">
                Consultar este servicio →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
