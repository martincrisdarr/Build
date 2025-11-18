import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {product.image && (
        <div className="relative w-full h-48 bg-gray-200">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-accent-charcoal mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-2">Código: {product.code}</p>
        {product.shortDescription && (
          <p className="text-gray-700 mb-4">{product.shortDescription}</p>
        )}
        <div className="space-y-2 mb-4">
          {product.collection && (
            <p className="text-sm">
              <span className="font-medium">Colección:</span>{" "}
              {product.collection}
            </p>
          )}
          {product.tone && (
            <p className="text-sm">
              <span className="font-medium">Tono:</span> {product.tone}
            </p>
          )}
          {product.format && (
            <p className="text-sm">
              <span className="font-medium">Formato:</span> {product.format}
            </p>
          )}
          {product.thickness && (
            <p className="text-sm">
              <span className="font-medium">Espesor:</span> {product.thickness}
            </p>
          )}
          {product.usage && (
            <p className="text-sm">
              <span className="font-medium">Uso:</span>{" "}
              {product.usage === "both"
                ? "Residencial y Comercial"
                : product.usage === "residential"
                ? "Residencial"
                : "Comercial"}
            </p>
          )}
        </div>
        {product.details && product.details.length > 0 && (
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            {product.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
        <Link
          href={`/products/${product.id}`}
          className="inline-flex items-center justify-center w-full rounded-md bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          Ver producto
        </Link>
      </div>
    </article>
  );
}
