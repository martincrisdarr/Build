# BUILD - Sitio Web de Marketing y Catálogo

Sitio web de marketing y catálogo especializado en diseño interior y desarrollo de propiedades. Actualmente ofrece placas SPC (Stone Plastic Composite) con planes de expansión hacia otros productos de revestimiento y construcción. Construido con Next.js, TypeScript y Tailwind CSS.

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build de Producción

```bash
npm run build
npm start
```

## 📁 Estructura del Proyecto

```
├── app/
│   ├── layout.tsx          # Layout global
│   ├── page.tsx            # Página de inicio
│   ├── products/
│   │   └── page.tsx        # Catálogo de productos
│   └── globals.css         # Estilos globales
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Section.tsx
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   └── WhatsAppButton.tsx
├── data/
│   └── products.ts         # Datos de productos
├── types/
│   └── product.ts          # Tipos TypeScript
└── public/
    └── images/
        └── products/       # Imágenes de productos
```

## 🛠️ Tecnologías

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## 📝 Notas

- Actualizar el número de WhatsApp en `components/WhatsAppButton.tsx`
- Agregar imágenes de productos en `public/images/products/`
- Personalizar colores en `tailwind.config.js` si es necesario
