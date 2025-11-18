import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "SPC Classic Oak",
    code: "SPC-001",
    collection: "Classic",
    tone: "Natural Oak",
    format: "1220x200mm",
    thickness: "4mm",
    usage: "both",
    shortDescription:
      "Piso SPC con acabado en roble natural, ideal para cualquier ambiente.",
    details: [
      "Resistente al agua",
      "Fácil instalación",
      "Mantenimiento mínimo",
    ],
    image: "/images/products/spc-classic-oak.jpg",
  },
  {
    id: "2",
    name: "SPC Modern Gray",
    code: "SPC-002",
    collection: "Modern",
    tone: "Gris Moderno",
    format: "1220x200mm",
    thickness: "5mm",
    usage: "commercial",
    shortDescription:
      "Diseño contemporáneo en tonos grises, perfecto para espacios comerciales.",
    details: [
      "Alta resistencia al tráfico",
      "Acabado mate antideslizante",
      "Ideal para oficinas y locales",
    ],
    image: "/images/products/spc-modern-gray.jpg",
  },
  {
    id: "3",
    name: "SPC Premium Walnut",
    code: "SPC-003",
    collection: "Premium",
    tone: "Nogal",
    format: "1220x200mm",
    thickness: "6mm",
    usage: "residential",
    shortDescription:
      "Lujo y elegancia con acabado en nogal, para interiores residenciales de alto nivel.",
    details: [
      "Mayor grosor para mayor confort",
      "Acabado premium",
      "Ideal para salas y dormitorios",
    ],
    image: "/images/products/spc-premium-walnut.jpg",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
