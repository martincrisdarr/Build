// components/Hero.tsx
import React from "react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[70vh] bg-stone-900 text-white"
    >
      {/* Background image placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url(/images/hero-spc.jpg)" }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/70 to-stone-900/60" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col justify-center px-4 pb-20 pt-28 lg:flex-row lg:items-center lg:gap-16">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Placas SPC &amp; Revestimientos
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Diseño interior con{" "}
            <span className="text-emerald-300">
              placas SPC de alto desempeño
            </span>
          </h1>
          <p className="mt-5 text-sm text-stone-200 sm:text-base">
            Acompañamos proyectos residenciales y comerciales con soluciones de
            revestimiento durables, resistentes al agua y listas para instalar
            con mínima intervención.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <WhatsAppButton
              label="Consultar Ahora"
              message="Hola, quiero asesoramiento sobre placas SPC para mi proyecto."
            />
            <a
              href="/products"
              className="text-sm font-medium text-emerald-200 underline-offset-4 hover:underline"
            >
              Ver catálogo de productos
            </a>
          </div>
        </div>

        <div className="mt-10 hidden flex-1 justify-end lg:flex">
          <div className="rounded-2xl border border-stone-700/50 bg-stone-900/60 p-5 shadow-xl backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-300">
              Ambientes imaginados
            </p>
            <p className="mt-3 text-sm text-stone-200">
              Living, locales, oficinas y dormitorios con una misma base: una
              placa SPC estable, fácil de limpiar y con terminaciones
              contemporáneas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
