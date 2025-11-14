// CONFIGURACIÓN GENERAL
const WHATSAPP_NUMBER = "+5493704000000"; // <-- EDITA AQUÍ TU NÚMERO DE WHATSAPP

// Menú mobile toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

    // Cerrar menú al hacer click en un link
    document.querySelectorAll("#mobile-menu a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
        });
    });
}

// Scroll suave para anclas
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", (e) => {
        const href = anchor.getAttribute("href");
        if (href !== "#") {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});

// Acordeones FAQ
document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector(".accordion-icon");
        
        // Cerrar otros acordeones
        document.querySelectorAll(".accordion-content").forEach(el => {
            if (el !== content) {
                el.classList.add("hidden");
                el.previousElementSibling.querySelector(".accordion-icon").textContent = "+";
            }
        });
        
        // Toggle actual
        content.classList.toggle("hidden");
        icon.textContent = content.classList.contains("hidden") ? "+" : "−";
    });
});

// Validación ligera del formulario
const contactForm = document.querySelector("form[name='contacto']");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        const campos = ["nombre", "email", "telefono", "contribuyente", "servicio"];
        let valido = true;

        campos.forEach(campo => {
            const input = document.getElementById(campo);
            if (!input.value.trim()) {
                input.classList.add("ring-2", "ring-red-500");
                valido = false;
            } else {
                input.classList.remove("ring-2", "ring-red-500");
            }
        });

        if (!valido) {
            e.preventDefault();
            alert("Por favor completa todos los campos requeridos.");
        }
    });
}

// Mostrar mensaje de éxito (Netlify Forms)
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    if (params.has("success") || window.location.pathname.includes("success")) {
        const successMsg = document.getElementById("success-message");
        if (successMsg) {
            successMsg.classList.remove("hidden");
            setTimeout(() => {
                successMsg.classList.add("hidden");
            }, 5000);
        }
    }
});
