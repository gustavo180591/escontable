# Estudio Contable Andar - Landing Page

Landing page estática, moderna y optimizada para monotributistas y pymes. 100% HTML + Tailwind CDN + JavaScript vanilla, sin frameworks ni bundlers.

## 📋 Estructura

\`\`\`
.
├── public/
│   ├── index.html           # Landing page principal
│   ├── 404.html             # Página de error
│   ├── assets/
│   │   └── main.js          # JavaScript vanilla
│   └── images/              # Imágenes (WebP + JPG)
├── netlify.toml             # Configuración Netlify
└── README.md                # Este archivo
\`\`\`

## ⚙️ Configuración Rápida

### 1. Cambiar WhatsApp
Edita `/public/assets/main.js` línea 2:
\`\`\`js
const WHATSAPP_PHONE = '5493704000000'; // Tu número sin + ni espacios
\`\`\`

### 2. Cambiar datos de contacto
En `index.html`, busca y reemplaza:
- `Estudio Contable Andar` → Tu nombre
- `Posadas, Misiones` → Tu ubicación
- `info@estudiocontableandar.com` → Tu email
- `Av. Principales 123` → Tu dirección

### 3. Cambiar precios
Sección "Planes y Precios" en `index.html`:
- **Monotributo**: $ 4.999,00
- **Responsable Inscripto**: $ 7.999,00
- **Pyme**: $ 12.999,00

### 4. Personalizar testimonios
Sección "Clientes" en `index.html` - Reemplaza nombre, rubro y ciudad.

### 5. Reemplazar imágenes
Crea carpeta `public/images/` y reemplaza:
- `placeholder.svg?query=oficina-contable.jpg` → Tu imagen hero

## 🎨 Colores (personalizables en `index.html`)

\`\`\`js
colors: {
    primary: '#111827',    // Gris oscuro
    accent: '#EF4444',     // Rojo
    light: '#F3F4F6',      // Gris claro
    white: '#FFFFFF'
}
\`\`\`

## 📝 Editar secciones

### Agregar/quitar servicios
Busca `<!-- Service Cards -->` en `index.html` y agrega/edita `<div class="service-card">`.

### Agregar/quitar preguntas FAQ
Busca `<!-- FAQ Section -->` en `index.html` y agrega acordeones.

### Personalizar proceso
Sección "Nuestro Proceso" - edita los 3 pasos.

## 🚀 Deploy en Netlify

### Opción 1: Drag & Drop
1. Ve a [netlify.com](https://netlify.com)
2. Haz drag & drop de la carpeta `public/`
3. ¡Listo!

### Opción 2: Git (Recomendado)
\`\`\`bash
# 1. Pushea el proyecto a GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/tu-usuario/estudio-contable.git
git push -u origin main

# 2. Conecta en Netlify
# - Ve a netlify.com y conecta tu repo
# - Deploy directory: "/" (raíz del proyecto)
# - Publish directory: "/" 
\`\`\`

## 📧 Formulario de contacto

Los formularios se envían automáticamente a Netlify Forms. Ve a:
- **Netlify Dashboard** → Tu site → **Forms** → Verás las submissions

## ✅ Performance

- ✨ 100% estático (sin servidor)
- 🚀 Carga <2s en conexión 4G
- 📱 Totalmente responsive
- ♿ Accesible (WCAG AA)
- 🔐 Headers de seguridad incluidos
- 📊 JSON-LD para SEO

## 📱 Características incluidas

- ✅ Navbar sticky con menú mobile
- ✅ 8 servicios con WhatsApp integration
- ✅ Tabla de planes responsive
- ✅ 3 testimonios reales
- ✅ FAQ con acordeones
- ✅ Formulario Netlify Forms
- ✅ Footer completo
- ✅ Scroll suave a anclas
- ✅ Validación de formulario

## 🔍 SEO

Incluye:
- Meta tags (description, OG, Twitter Card)
- JSON-LD (LocalBusiness + AccountingService)
- Sitemap (editable en netlify.toml)
- Preload de imágenes
- Alt text en todas las imágenes

## 🛠️ Mantenimiento

### Ver formularios
1. Netlify Dashboard
2. Tu site
3. Forms → "contacto"

### Cambiar horarios
Edita en secciones "Footer" e "JSON-LD".

### Actualizar precios mensuales
Tabla en sección "Planes y Precios".

## 📄 Archivos opcionales (crear si necesitas)

- **robots.txt** - Control de indexación
- **sitemap.xml** - Mapa del sitio
- **.gitignore** - Archivos a ignorar en Git

## 📞 Soporte

Para dudas sobre Netlify:
- 📖 [Netlify Docs](https://docs.netlify.com)
- 🆘 [Netlify Support](https://netlify.com/support)

---

**Última actualización**: Noviembre 2024
**Versión**: 1.0
