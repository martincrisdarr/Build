import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { ProductImageZoom } from "@/components/ProductImageZoom";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getProductById } from "@/data/products";

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const product = getProductById(params.id);

  if (!product) {
    return {
      title: "Producto no encontrado",
    };
  }

  return {
    title: `${product.name} - ${product.code} | Revestimientos & Diseño`,
    description:
      product.shortDescription || `Detalles del producto ${product.name}`,
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  const whatsappMessage = `Hola, me interesa el modelo ${product.name} (${product.code}). ¿Podrían darme más información?`;

  return (
    <>
      <Header />
      <main>
        <Section className="bg-gray-50 pt-20">
          <div className="mb-6">
            <Link
              href="/products"
              className="text-emerald-600 hover:text-emerald-700 text-sm font-medium inline-flex items-center gap-1"
            >
              ← Volver al catálogo
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Imagen con zoom */}
            <div>
              {product.image ? (
                <ProductImageZoom src={product.image} alt={product.name} />
              ) : (
                <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Imagen no disponible</p>
                </div>
              )}
            </div>

            {/* Información del producto */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-accent-charcoal mb-2">
                  {product.name}
                </h1>
                <p className="text-lg text-gray-600">Código: {product.code}</p>
              </div>

              {product.shortDescription && (
                <p className="text-gray-700 text-lg leading-relaxed">
                  {product.shortDescription}
                </p>
              )}

              {/* Especificaciones */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h2 className="text-xl font-semibold text-accent-charcoal mb-4">
                  Especificaciones
                </h2>
                <div className="space-y-3">
                  {product.collection && (
                    <div className="flex justify-between items-start">
                      <span className="font-medium text-gray-700">
                        Colección:
                      </span>
                      <span className="text-gray-900 text-right">
                        {product.collection}
                      </span>
                    </div>
                  )}
                  {product.tone && (
                    <div className="flex justify-between items-start">
                      <span className="font-medium text-gray-700">Tono:</span>
                      <span className="text-gray-900 text-right">
                        {product.tone}
                      </span>
                    </div>
                  )}
                  {product.format && (
                    <div className="flex justify-between items-start">
                      <span className="font-medium text-gray-700">
                        Formato:
                      </span>
                      <span className="text-gray-900 text-right">
                        {product.format}
                      </span>
                    </div>
                  )}
                  {product.thickness && (
                    <div className="flex justify-between items-start">
                      <span className="font-medium text-gray-700">
                        Espesor:
                      </span>
                      <span className="text-gray-900 text-right">
                        {product.thickness}
                      </span>
                    </div>
                  )}
                  {product.usage && (
                    <div className="flex justify-between items-start">
                      <span className="font-medium text-gray-700">Uso:</span>
                      <span className="text-gray-900 text-right">
                        {product.usage === "both"
                          ? "Residencial y Comercial"
                          : product.usage === "residential"
                          ? "Residencial"
                          : "Comercial"}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Detalles */}
              {product.details && product.details.length > 0 && (
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h2 className="text-xl font-semibold text-accent-charcoal mb-4">
                    Características
                  </h2>
                  <ul className="space-y-2">
                    {product.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-1">•</span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Botón de WhatsApp */}
              <div className="pt-4">
                <WhatsAppButton
                  message={whatsappMessage}
                  label="Consultar por WhatsApp"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
