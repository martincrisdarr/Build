import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { ProductGrid } from "@/components/ProductGrid";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Catálogo de Productos - BUILD",
  description:
    "Explora nuestra gama de productos de diseño interior. Actualmente ofrecemos placas SPC, con más opciones de revestimiento y construcción próximamente.",
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <Section className="bg-gray-50 pt-20">
          <h1 className="text-4xl font-bold text-accent-charcoal mb-8 text-center">
            Catálogo de Productos
          </h1>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            Descubre nuestra selección de productos para diseño interior y
            desarrollo de propiedades. Actualmente ofrecemos placas SPC de alta
            calidad, con más opciones de revestimiento y construcción en
            desarrollo.
          </p>
          <ProductGrid products={products} />
        </Section>
      </main>
      <Footer />
    </>
  );
}
