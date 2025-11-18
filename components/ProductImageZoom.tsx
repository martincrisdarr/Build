"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImageZoomProps {
  src: string;
  alt: string;
}

export function ProductImageZoom({ src, alt }: ProductImageZoomProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg bg-gray-100">
      <div
        className={`relative w-full h-[400px] sm:h-[500px] lg:h-[600px] cursor-zoom-in transition-transform duration-300 ${
          isZoomed ? "scale-150" : "scale-100"
        }`}
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onClick={() => setIsZoomed(!isZoomed)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          priority
        />
      </div>
      {!isZoomed && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full">
          Haz clic o pasa el mouse para ampliar
        </div>
      )}
    </div>
  );
}
