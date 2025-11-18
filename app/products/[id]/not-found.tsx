import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";

export default function ProductNotFound() {
  return (
    <>
      <Header />
      <main>
        <Section className="bg-gray-50 pt-20 min-h-[60vh] flex items-center">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-accent-charcoal mb-4">
              Producto no encontrado
            </h1>
            <p className="text-gray-600 mb-8">
              Lo sentimos, el producto que buscas no existe o ha sido eliminado.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Volver al catálogo
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
