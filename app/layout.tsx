import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BUILD - Soluciones para Espacios Interiores",
  description:
    "Especialistas en diseño interior y desarrollo de propiedades. Ofrecemos revestimientos de alta calidad, incluyendo placas SPC, para transformar tus espacios residenciales y comerciales.",
  icons: {
    icon: "/images/logoTop.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
