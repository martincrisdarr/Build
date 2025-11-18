// app/page.tsx
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DefaultBenefitsSection } from "@/components/BenefitsSection";
import { DefaultProcessSection } from "@/components/ProcessSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Section } from "@/components/Section";
import { ProductGrid } from "@/components/ProductGrid";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "BUILD | Placas SPC para interiores",
  description:
    "Placas SPC y soluciones de revestimiento para proyectos residenciales y comerciales. Asesoramiento personalizado y productos de alto desempeño.",
};

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen bg-stone-900 text-stone-900">
      <Header />
      <main className="bg-stone-50">
        <Hero />
        <Section
          title="Beneficios de nuestras Placas SPC"
          subtitle="Soluciones de revestimiento diseñadas para combinar elegancia, durabilidad y practicidad en cada espacio."
          className="bg-stone-50"
        >
          <DefaultBenefitsSection />
        </Section>

        <Section
          title="Productos Destacados"
          subtitle="Conoce algunos de nuestros modelos más populares de placas SPC."
          className="bg-stone-100"
        >
          <ProductGrid products={featuredProducts} />
        </Section>

        <Section title="Nuestro Proceso" className="bg-stone-50">
          <DefaultProcessSection />
        </Section>

        {/* CTA final simple */}
        <section className="py-20 bg-stone-900 text-white">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              ¿Listo para conversar tu próximo proyecto?
            </h2>
            <p className="mt-3 text-sm text-stone-300">
              Contanos qué ambiente querés transformar y te ayudamos a elegir el
              modelo de SPC que mejor se adapte a tu espacio.
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsAppButton
                label="Escribir por WhatsApp"
                message="Hola, me gustaría hablar sobre placas SPC para mi proyecto."
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
