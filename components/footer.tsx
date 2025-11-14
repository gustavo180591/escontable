export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">Estudio Contable Andar</h4>
            <p className="text-gray-400 text-sm">
              Contabilidad simple, confiable y para todos. Tu partner fiscal de confianza.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="https://wa.me/5493704000000" className="hover:text-accent transition">WhatsApp</a></li>
              <li><a href="mailto:info@estudioandar.com.ar" className="hover:text-accent transition">info@estudioandar.com.ar</a></li>
              <li>Posadas, Misiones</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Horarios</h4>
            <ul className="text-gray-400 text-sm">
              <li>Lunes a Viernes</li>
              <li>09:00 - 18:00 hs</li>
              <li>WhatsApp 24/7</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-accent transition">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-accent transition">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-accent transition">Aviso Legal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Estudio Contable Andar. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
