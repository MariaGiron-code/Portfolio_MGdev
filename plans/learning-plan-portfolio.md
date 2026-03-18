# Plan de Aprendizaje: Portfolio MGdev

## Descripción General del Proyecto

Este es un **Portfolio profesional** construido con Next.js que sirve como carta de presentación para Ana Martínez, una desarrolladora Full-Stack especializada en arquitectura de APIs. El proyecto actualmente es **totalmente estático** (hardcoded) y necesita un backend para gestionar datos dinámicos.

---

## 1. Estructura de Carpetas del Proyecto

```
c:/Portfolio_MGdev/
├── app/                          # Next.js App Router
│   ├── layout.js                 # Root layout con providers
│   ├── page.js                   # Componente principal (Home)
│   └── globals.css               # Estilos globales + Tailwind
│
├── components/                   # Componentes React
│   ├── Atoms/                    # Componentes reutilizables pequeños
│   │   ├── Badge.jsx             # Etiquetas/badges
│   │   ├── Card.jsx              # Tarjetas base
│   │   ├── KPIBlock.jsx          # Bloques de métricas
│   │   ├── ProficiencyDot.jsx    # Puntos de proficiencia
│   │   ├── ProjectCard.jsx       # Tarjetas de proyectos
│   │   ├── SkillCard.jsx         # Tarjetas de habilidades
│   │   ├── TabButton.jsx         # Botones de tabs
│   │   └── index.js              # Exportaciones
│   │
│   ├── Navigation/              # Componentes de navegación
│   │   ├── Header.jsx            # Barra de navegación
│   │   ├── LanguageSwitch.jsx   # Selector de idioma
│   │   └── ThemeToggle.jsx       # Cambio de tema claro/oscuro
│   │
│   ├── Sections/                 # Secciones principales de la página
│   │   ├── Hero.jsx              # Sección principal (presentación)
│   │   ├── Skills.jsx            # Habilidades técnicas
│   │   ├── Experience.jsx        # Experiencia laboral
│   │   ├── Projects.jsx          # Proyectos destacados
│   │   ├── QRGenerator.jsx      # Herramienta generadora de QR
│   │   └── Contact.jsx           # Formulario de contacto
│   │
│   ├── Footer.jsx                # Pie de página
│   └── Providers.jsx             # Context providers (MUI + Theme)
│
├── i18n/                         # Configuración de internacionalización
│   └── config.js                 # i18next con traducciones ES/EN
│
├── theme/                        # Configuración de temas
│   └── mui-theme.js              # Tema de Material UI
│
├── public/                       # Archivos estáticos
│   └── *.svg                     # Iconos SVG
│
├── package.json                  # Dependencias del proyecto
├── next.config.mjs               # Configuración de Next.js
├── jsconfig.json                 # Alias de rutas (@/*)
└── postcss.config.mjs            # Configuración de PostCSS/Tailwind
```

### Convenciones de Naming

- **Archivos de componentes**: PascalCase (`Header.jsx`, `SkillCard.jsx`)
- **Exportaciones**: Named exports (`export function Header() {}`)
- **Alias de rutas**: `@/` apunta a la raíz del proyecto

---

## 2. Stack Tecnológico

### Framework y Lenguaje

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **Next.js** | 16.1.6 | Framework React con App Router |
| **React** | 19.2.3 | Biblioteca de UI |
| **JavaScript** | - | Lenguaje (sin TypeScript en frontend) |

### UI Libraries y Estilos

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **@mui/material** | 7.3.9 | Componentes de Material UI |
| **@mui/icons-material** | 7.3.9 | Iconos de Material Icons |
| **@mui/x-charts** | 8.27.4 | Gráficos (reservado para futuro) |
| **@mui/x-data-grid** | 8.27.4 | Tablas de datos (reservado) |
| **Tailwind CSS** | 4.2.1 | Utilidades de CSS |
| **next-themes** | 0.4.6 | Gestión de temas claro/oscuro |

### Internacionalización

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **i18next** | 25.8.17 | Framework de traducciones |
| **react-i18next** | 16.5.6 | Integración React |
| **next-i18next** | 15.4.3 | Integración Next.js |
| **i18next-resources-to-backend** | 1.2.1 | Carga de recursos |

### Utilidades

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **qrcode** | 1.5.4 | Generación de QR (Node) |
| **react-qr-code** | 2.0.18 | Componente QR para React |

### Herramientas de Desarrollo

| Tecnología | Uso |
|------------|-----|
| **ESLint** | Linting de código |
| **Turbopack** | Bundler rápido de Next.js |

---

## 3. Flujo de Datos Entre Componentes

### Diagrama de Arquitectura General

![Diagrama de Arquitectura](../diagrams/project-structure.png)

### Flujo de Datos por Sección

![Flujo de Datos](../diagrams/data-flow.png)

---

## 4. Análisis Detallado de Componentes

### 4.1 Providers - Proveedores de Contexto

**Archivo**: [`components/Providers.jsx`](components/Providers.jsx)

```javascript
// Funcionalidad principal:
// 1. Espera a que el componente se monte (useLayoutEffect)
// 2. Obtiene el tema actual de next-themes (dark/light)
// 3. Crea un tema MUI basado en la configuración
// 4. Aplica CssBaseline para estilos base

// Estados:
// - mounted: boolean - previene hydration mismatch
// - themeMode: 'dark' | 'light' - modo actual del tema

// Dependencias:
// - next-themes: useTheme()
// - @mui/material: ThemeProvider, createTheme
// - theme/mui-theme.js: configuración del tema
```

### 4.2 Header - Navegación Principal

**Archivo**: [`components/Navigation/Header.jsx`](components/Navigation/Header.jsx)

```javascript
// Funcionalidad:
// 1. Barra de navegación sticky
// 2. Menú responsive con Drawer para móvil
// 3. Links a secciones (scroll suave)
// 4. Integración con ThemeToggle y LanguageSwitch

// Estados:
// - mobileOpen: boolean - controla Drawer móvil

// Funciones:
// - handleDrawerToggle(): abre/cierra menú móvil
// - scrollToSection(id): navegación suave

// Datos (hardcoded):
// menuItems = [
//   { label: t('nav.home'), href: '#home' },
//   { label: t('nav.experience'), href: '#experience' },
//   { label: t('nav.skills'), href: '#skills' },
//   { label: t('nav.projects'), href: '#projects' },
//   { label: t('nav.qr'), href: '#qr' },
//   { label: t('nav.contact'), href: '#contact' },
// ]
```

### 4.3 Hero - Sección Principal

**Archivo**: [`components/Sections/Hero.jsx`](components/Sections/Hero.jsx)

```javascript
// Funcionalidad:
// 1. Presentación personal con foto
// 2. Información de disponibilidad
// 3. Botones CTA (Contáctame, Descargar CV)
// 4. KPIs (años experiencia, proyectos, clientes)
// 5. Links a redes sociales
// 6. Indicador de scroll

// Datos (hardcoded - REQUIEREN BACKEND):
// - title: "Ana Martínez"
// - role: "API Architect"  
// - description: texto personalizado
// - experience: "+5 años"
// - projects: "30+"
// - clients: "12+"
// - imagen: picsum.photos (placeholder)

// Funciones:
// - scrollToSection(sectionId): navegación suave
```

### 4.4 Skills - Habilidades Técnicas

**Archivo**: [`components/Sections/Skills.jsx`](components/Sections/Skills.jsx)

```javascript
// Funcionalidad:
// 1. Tabs para filtrar categorías de skills
// 2. Grid de SkillCards por categoría
// 3. 5 categorías: Frontend, Backend, Database, DevOps, Tools

// Estados:
// - activeTab: string - categoría seleccionada

// Datos (hardcoded - REQUIEREN BACKEND):
const skillsData = {
  frontend: [
    { name: 'React', icon: ReactIcon },
    { name: 'TypeScript', icon: TypeScriptIcon },
    { name: 'Next.js', icon: CodeIcon },
    // ...más skills
  ],
  backend: [...],
  database: [...],
  devops: [...],
  tools: [...]
}

// Categorías disponibles:
// - frontend, backend, database, devops, tools
```

### 4.5 Experience - Experiencia Laboral

**Archivo**: [`components/Sections/Experience.jsx`](components/Sections/Experience.jsx)

```javascript
// Componentes internos:
// - ExperienceCard: tarjeta individual de experiencia

// Funcionalidad:
// 1. Timeline visual de experiencia
// 2. Tarjetas expandibles con logros
// 3. Tags de tecnologías por trabajo
// 4. Información de ubicación y período

// Datos (hardcoded - REQUIEREN BACKEND):
const experienceData = [
  {
    position: 'Senior Full Stack Developer',
    company: 'TechHub MX',
    period: 'Jan 2022 – Present',
    location: 'Ciudad de México, MX',
    type: 'Full-time',
    description: '...',
    technologies: ['React', 'TypeScript', 'Node.js', ...],
    achievements: [
      'Reduced API latency by 45%...',
      'Led monolith-to-microservices...',
      // ...más logros
    ]
  },
  // ...más experiencias
]
```

### 4.6 Projects - Proyectos Destacados

**Archivo**: [`components/Sections/Projects.jsx`](components/Sections/Projects.jsx)

```javascript
// Funcionalidad:
// 1. Filtro por categoría (All, Full Stack, Frontend, Backend)
// 2. Grid de ProjectCards
// 3. Modal o links a demo/código

// Estados:
// - activeFilter: string - filtro activo

// Datos (hardcoded - REQUIEREN BACKEND):
const projectsData = [
  {
    title: 'DataStream API',
    description: 'Real-time data streaming platform...',
    image: 'https://picsum.photos/...',
    technologies: ['Node.js', 'Kafka', 'ClickHouse', ...],
    demo: '#',
    code: '#',
    category: 'fullstack',
    featured: true
  },
  // ...más proyectos
]

// Filtros disponibles:
// - all, fullstack, frontend, backend
```

### 4.7 QRGenerator - Generador de QR

**Archivo**: [`components/Sections/QRGenerator.jsx`](components/Sections/QRGenerator.jsx)

```javascript
// Funcionalidad:
// 1. Input de URL/texto
// 2. Validación de URL
// 3. Generación de código QR
// 4. Descarga del QR como imagen PNG

// Estados:
// - url: string - input del usuario
// - qrValue: string - valor del QR generado
// - error: string - mensaje de error

// Funciones:
// - isValidUrl(string): valida formato URL
// - handleGenerateQR(): genera el QR
// - handleDownloadQR(): descarga como PNG
// - handleKeyPress(e): genera al presionar Enter

// Librería usada:
// - react-qr-code: componente <QRCode />

// Configuración actual:
// - Size: 256x256 px
// - Format: PNG
// - Error Correction: Level H (30%)
```

### 4.8 Contact - Formulario de Contacto

**Archivo**: [`components/Sections/Contact.jsx`](components/Sections/Contact.jsx)

```javascript
// Funcionalidad:
// 1. Información de contacto (email, ubicación)
// 2. Links a redes sociales
// 3. Formulario con validación
// 4. Estados de envío (loading, success, error)

// Estados:
// - formData: { name, email, subject, message }
// - submitStatus: 'success' | 'error' | null
// - loading: boolean

// Funciones:
// - handleChange(e): actualiza formData
// - handleSubmit(e): envía formulario (SIMULADO)

// Datos (hardcoded - REQUIEREN BACKEND):
// - Email: ana.martinez@example.com
// - Ubicación: Ciudad de México
// - Redes: GitHub, LinkedIn, WhatsApp

// IMPORTANTE: 
// El envío actualmente es SIMULADO (setTimeout 1s)
// NECESITA backend real para funcionar
```

### 4.9 Footer - Pie de Página

**Archivo**: [`components/Footer.jsx`](components/Footer.jsx)

```javascript
// Funcionalidad:
// 1. Logo y bio
// 2. Links de navegación
// 3. Links a redes sociales
// 4. Copyright y tecnologías usadas

// Datos (hardcoded):
// - Logo: "MG" / "ana.dev"
// - Bio: "Full Stack Developer..."
// - navLinks: links a secciones
// - socialLinks: GitHub, LinkedIn, Email
```

---

## 5. Sistema de Internacionalización (i18n)

### Archivo de Configuración

**Archivo**: [`i18n/config.js`](i18n/config.js)

```javascript
// Configuración de i18next:
// - Idioma por defecto: español ('es')
// - Idioma fallback: inglés ('en')
// - Interpolación: escapeValue = false

// Recursos de traducción (inline):
const resources = {
  es: { translation: { nav: {...}, hero: {...}, ... } },
  en: { translation: { nav: {...}, hero: {...}, ... } }
}

// Uso en componentes:
// const { t } = useTranslation();
// t('nav.home') // returns: 'Inicio' o 'Home'

// Keys principales:
// - nav: elementos de navegación
// - hero: sección principal
// - skills: habilidades
// - experience: experiencia
// - projects: proyectos
// - qr: generador QR
// - contact: contacto
// - footer: pie de página
```

### Cambio de Idioma

**Archivo**: [`components/Navigation/LanguageSwitch.jsx`](components/Navigation/LanguageSwitch.jsx)

```javascript
// Funcionalidad:
// 1. Menú dropdown con opciones ES/EN
// 2. Cambio de idioma via i18next
// 3. Indicador visual del idioma actual

// Estados:
// - anchorEl: control del menú dropdown

// Funciones:
// - handleClick(): abre menú
// - handleClose(): cierra menú
// - handleLanguageChange(lang): cambia idioma
// - getLanguageName(): retorna 'ES' o 'EN'
```

---

## 6. Sistema de Temas

### Configuración MUI

**Archivo**: [`theme/mui-theme.js`](theme/mui-theme.js)

```javascript
// Tema con soporte para light/dark mode:

// Paleta de colores (Primary: #A34BE2 - Violeta):
// - light: #c084fc
// - dark: #9333ea

// Background:
// - Dark: #0f0f14 (default), #1a1a1f (paper)
// - Light: #f5f3f0 (default), #ffffff (paper)

// Typography:
// - Font: Inter
// - Headings: h1=3.5rem, h2=2.5rem, h3=1.5rem

// Shape:
// - borderRadius: 8px
```

### Toggle de Tema

**Archivo**: [`components/Navigation/ThemeToggle.jsx`](components/Navigation/ThemeToggle.jsx)

```javascript
// Funcionalidad:
// 1. Botón para alternar tema
// 2. Icono según tema actual (sol/luna)
// 3. Persistencia en localStorage

// Estados:
// - mounted: evita hydration mismatch
// - theme: 'dark' | 'light' (de next-themes)

// Funciones:
// - setTheme(isDark ? 'light' : 'dark')
```

---

## 7. Datos que Requieren Backend

### 7.1 Datos del Perfil (Hero)

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `name` | string | Nombre completo |
| `role` | string | Rol/título profesional |
| `description` | string | Biografía breve |
| `email` | string | Email de contacto |
| `location` | string | Ubicación geográfica |
| `avatarUrl` | string | URL de foto de perfil |
| `cvUrl` | string | URL del CV (PDF) |
| `githubUrl` | string | URL de GitHub |
| `linkedinUrl` | string | URL de LinkedIn |
| `whatsapp` | string | Número de WhatsApp |

### 7.2 Habilidades (Skills)

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `category` | string | Categoría (frontend, backend, etc.) |
| `name` | string | Nombre de la habilidad |
| `icon` | string | Identificador del icono |
| `proficiency` | number | Nivel (1-10) |

### 7.3 Experiencia (Experience)

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `position` | string | Cargo/puesto |
| `company` | string | Nombre de empresa |
| `period` | string | Período (ej: "2022 - Presente") |
| `location` | string | Ubicación |
| `type` | string | Tipo (Full-time, Contract, etc.) |
| `description` | string | Descripción del rol |
| `technologies` | string[] | Tecnologías usadas |
| `achievements` | string[] | Logros conseguidos |

### 7.4 Proyectos (Projects)

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `title` | string | Título del proyecto |
| `description` | string | Descripción detallada |
| `image` | string | URL de imagen |
| `technologies` | string[] | Tecnologías usadas |
| `demoUrl` | string | URL del demo |
| `codeUrl` | string | URL del código |
| `category` | string | Categoría (fullstack, frontend, backend) |
| `featured` | boolean | Si es destacado |

### 7.5 Mensajes de Contacto (Contact)

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `name` | string | Nombre del remitente |
| `email` | string | Email del remitente |
| `subject` | string | Asunto |
| `message` | string | Mensaje |
| `createdAt` | timestamp | Fecha de envío |

---

## 8. Requisitos de API para Backend

### Endpoints Sugeridos

![Datos que necesitan Backend](../diagrams/backend-data.png)

### Endpoints Recomendados

| Método | Endpoint | Descripción | Body |
|--------|----------|-------------|------|
| `GET` | `/api/profile` | Datos del perfil | - |
| `GET` | `/api/skills` | Todas las habilidades | - |
| `GET` | `/api/skills/:category` | Habilidades por categoría | - |
| `GET` | `/api/experience` | Experiencia laboral | - |
| `GET` | `/api/projects` | Todos los proyectos | - |
| `GET` | `/api/projects/:category` | Proyectos por categoría | - |
| `POST` | `/api/contact` | Enviar mensaje de contacto | `{ name, email, subject, message }` |

---

## 9. Resumen para Implementación de Backend

### Lo que Necesitas Construir

1. **API REST** o **GraphQL** para servir datos
2. **Base de datos** para almacenar:
   - Perfil profesional
   - Habilidades
   - Experiencia
   - Proyectos
   - Mensajes de contacto
3. **Servicio de email** para formulario de contacto
4. **Autenticación** (opcional) para admin panel

### Tecnologías Sugeridas para Backend

- **Node.js + Express** o **Next.js API Routes**
- **PostgreSQL** o **MongoDB** para base de datos
- **Prisma** como ORM
- **Nodemailer** o servicio como SendGrid/Resend para emails

### Pasos de Implementación

1. Crear endpoints de API
2. Conectar con base de datos
3. Reemplazar datos hardcoded en componentes
4. Implementar envío de emails
5. Agregar validación y sanitización

---

## 10. Comandos Útiles

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar en producción
npm start

# Linting
npm run lint
```

---

*Documento creado para facilitar la implementación del backend en el proyecto Portfolio MGdev.*
