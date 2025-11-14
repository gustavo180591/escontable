// Configuración - editar aquí para cambiar WhatsApp y otros datos
const WHATSAPP_PHONE = '5493704000000'; // Sin + ni espacios

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  
  // Cerrar menú al hacer click en un link
  document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// Smooth scroll (ya viene con HTML por scroll-behavior: smooth)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Accordion FAQ
document.querySelectorAll('.accordion-button').forEach((button, index) => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const isOpen = content.classList.contains('show');
    
    // Cerrar todos
    document.querySelectorAll('.accordion-content').forEach(c => {
      c.classList.remove('show');
    });
    document.querySelectorAll('.accordion-button').forEach(b => {
      b.classList.remove('active');
    });
    
    // Abrir seleccionado
    if (!isOpen) {
      content.classList.add('show');
      button.classList.add('active');
    }
  });
});

// Form submission handling
const form = document.querySelector('form[name="contacto"]');
if (form) {
  form.addEventListener('submit', (e) => {
    // Validación básica
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const tipo = document.getElementById('tipo').value;
    const servicio = document.getElementById('servicio').value;
    
    if (!nombre || !email || !telefono || !tipo || !servicio) {
      e.preventDefault();
      alert('Por favor, completa todos los campos obligatorios');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      e.preventDefault();
      alert('Por favor, ingresa un email válido');
      return;
    }
  });
  
  // Mostrar mensaje de éxito después de submit (Netlify redirige automáticamente)
  if (new URLSearchParams(window.location.search).has('success')) {
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
      successMessage.classList.remove('hidden');
    }
  }
}

// Fade-in animation en scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
  observer.observe(card);
});
