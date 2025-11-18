export interface Product {
  id: string;
  name: string;
  code: string;
  collection?: string;
  tone?: string;
  format?: string;
  thickness?: string;
  usage?: "residential" | "commercial" | "both";
  shortDescription?: string;
  details?: string[];
  image?: string;
}
