# ✅ Checklist MVP - Página Rápida de Productos SPC

**Objetivo:** Lanzar una página rápida para mostrar productos y redirigir consultas a WhatsApp.

---

## 🧩 Fase 0 – Definición Rápida (1-2 horas)

- [ ] Definir nombre de marca y dominio (aunque sea tentativo)

- [ ] Definir número de WhatsApp para consultas

  - [ ] Formato: código de país + número (ej: "+5491123456789")

- [ ] Listar mínimo 5-10 modelos de SPC para mostrar
  - [ ] Para cada modelo anotar:
    - [ ] Nombre / colección
    - [ ] Código
    - [ ] Color / tono (ej: "Roble claro", "Cemento gris")
    - [ ] Formato (ej: 1220 x 180 mm)
    - [ ] Espesor total y capa de uso
    - [ ] Uso recomendado (hogar / comercial)
    - [ ] 3-5 bullets de beneficios (fácil limpieza, resistente al agua, etc.)
    - [ ] Fotos (aunque sean provisionales, con nombre de archivo claro)

**Tip:** Todo esto lo podés meter en un Excel/Google Sheet que después se transforma en `/data/products.ts`

---

## 🛠️ Fase 1 – Setup Técnico (Ya completado ✅)

- [x] Crear proyecto Next.js con TypeScript y Tailwind
- [x] Configurar Tailwind (globals.css, etc.)
- [x] Crear estructura de carpetas: `/app`, `/components`, `/data`, `/public/images/products`
- [x] Crear archivo de datos de productos (`/data/products.ts`)

- [ ] Instalar dependencias del proyecto

  ```bash
  npm install
  ```

- [ ] Probar que el proyecto levante en local

  ```bash
  npm run dev
  ```

- [ ] Verificar que compile sin errores
  ```bash
  npm run build
  ```

---

## 📱 Fase 2 – Configurar WhatsApp (CRÍTICO)

- [ ] Actualizar número de WhatsApp en `components/WhatsAppButton.tsx`

  - [ ] Reemplazar `WHATSAPP_PHONE = "+1234567890"` con el número real
  - [ ] Formato: código de país + número (ej: "+5491123456789")

- [ ] Personalizar mensajes de WhatsApp
  - [ ] Mensaje por defecto en `components/Hero.tsx`
  - [ ] Mensajes personalizados en `components/ProductCard.tsx` (debe incluir nombre y código del producto)

---

## 📦 Fase 3 – Datos de Productos

- [ ] Revisar y actualizar datos en `data/products.ts`

  - [ ] Agregar todos los productos (mínimo 5-10)
  - [ ] Verificar códigos de productos
  - [ ] Actualizar descripciones
  - [ ] Revisar especificaciones técnicas (formato, espesor, etc.)
  - [ ] Agregar 3-5 bullets de beneficios en `details[]`

- [ ] Verificar que todos los productos tengan:
  - [ ] ID único
  - [ ] Nombre descriptivo
  - [ ] Código de producto
  - [ ] Descripción corta
  - [ ] Imagen asociada (ruta correcta)

---

## 🖼️ Fase 4 – Imágenes de Productos

- [ ] Agregar imágenes de productos en `public/images/products/`

  - [ ] Una imagen por cada producto listado
  - [ ] Nombres de archivo claros (ej: `spc-classic-oak.jpg`)
  - [ ] Verificar que las rutas en `data/products.ts` coincidan con los archivos

- [ ] Optimizar imágenes (rápido)
  - [ ] Comprimir si están muy pesadas (> 500KB)
  - [ ] Verificar que se vean bien en mobile y desktop

---

## 🎨 Fase 5 – Personalización Básica

- [ ] Actualizar textos y contenido

  - [ ] Nombre de la empresa en `components/Header.tsx`
  - [ ] Textos en `components/Hero.tsx`
  - [ ] Textos en `app/page.tsx` (beneficios, proceso)
  - [ ] Información básica en `components/Footer.tsx`

- [ ] Revisar colores en `tailwind.config.js` (opcional, solo si querés cambiar)
  - [ ] `accent-green`
  - [ ] `accent-blue`
  - [ ] `accent-charcoal`

---

## 🔍 Fase 6 – SEO Básico

- [ ] Revisar metadata en `app/layout.tsx`

  - [ ] Título (debe incluir "placas SPC" + ciudad/país)
  - [ ] Descripción (breve, con palabras clave)

- [ ] Revisar metadata en `app/products/page.tsx`

  - [ ] Título
  - [ ] Descripción

- [ ] Agregar favicon (opcional pero recomendado)
  - [ ] Crear `app/favicon.ico` o `app/icon.png`

---

## 🧪 Fase 7 – Testing Rápido (ANTES DE DEPLOY)

- [ ] Probar navegación

  - [ ] Inicio → Productos
  - [ ] Productos → Inicio

- [ ] Probar TODOS los botones de WhatsApp

  - [ ] Botón en Hero (página inicio)
  - [ ] Botones en cada ProductCard
  - [ ] Botón final en página de inicio
  - [ ] Verificar que se abren en nueva pestaña
  - [ ] Verificar que el mensaje se pre-llena correctamente
  - [ ] Probar desde mobile (WhatsApp debe abrir la app)

- [ ] Probar responsive design

  - [ ] Mobile (< 768px) - usar Chrome DevTools
  - [ ] Desktop (> 1024px)

- [ ] Verificar que las imágenes se cargan
  - [ ] Todas las imágenes de productos se ven
  - [ ] No hay errores en consola

---

## 🚀 Fase 8 – Deploy (Vercel - Recomendado)

- [ ] Crear cuenta en Vercel (si no tenés)

- [ ] Conectar repositorio GitHub

  - [ ] Crear repo en GitHub
  - [ ] Subir código
  - [ ] Conectar repo a Vercel

- [ ] Hacer primer deploy

  - [ ] Vercel detecta Next.js automáticamente
  - [ ] Esperar a que termine el build

- [ ] Probar en producción

  - [ ] Abrir la URL de Vercel
  - [ ] Probar navegación
  - [ ] Probar TODOS los botones de WhatsApp desde mobile y desktop
  - [ ] Verificar que las imágenes cargan

- [ ] Configurar dominio personalizado (opcional)
  - [ ] Agregar dominio en Vercel
  - [ ] Configurar DNS

---

## ✅ Checklist Pre-Deploy (Revisar antes de lanzar)

- [ ] ✅ Número de WhatsApp actualizado y probado
- [ ] ✅ Todos los productos tienen datos completos
- [ ] ✅ Todas las imágenes están en la carpeta correcta
- [ ] ✅ Todos los botones de WhatsApp funcionan
- [ ] ✅ La página se ve bien en mobile
- [ ] ✅ La página se ve bien en desktop
- [ ] ✅ No hay errores en consola del navegador
- [ ] ✅ El build de producción funciona (`npm run build`)

---

## 📝 Mejoras Futuras (NO HACER AHORA - Solo anotar ideas)

- [ ] Botón flotante de WhatsApp fijo (opcional, para después)
- [ ] Filtros en página de productos (por tono, uso, etc.)
- [ ] Página de contacto (opcional)
- [ ] Sección de proyectos realizados
- [ ] Testimonios de clientes
- [ ] Blog o notas informativas

---

## 📌 Notas Importantes

- **Prioridad:** Completar Fases 0-8 en orden
- **MVP significa:** Lo mínimo para funcionar. No te preocupes por perfección ahora.
- **WhatsApp es crítico:** Probá todos los botones antes de deploy
- **Imágenes:** Aunque sean provisionales, que estén. Después las mejorás.
- **Marca cada tarea con `[x]` cuando la completes**

---

## 🎯 Meta: Lanzar en 1-2 días

Si seguís este checklist, deberías poder tener la página online en 1-2 días de trabajo enfocado.
