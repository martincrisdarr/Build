// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-stone-800/40 bg-stone-900/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logoTop.png"
            alt="BUILD"
            width={120}
            height={30}
            className="h-8 w-7"
            priority
          />
          <h1 className="text-3xl font-bold text-white leading-none pt-2">
            BUILD
          </h1>
        </Link>

        <nav className="flex items-center gap-6 text-sm text-stone-200 pt-2">
          <Link href="/" className="hover:text-emerald-300">
            Inicio
          </Link>
          <Link href="/products" className="hover:text-emerald-300">
            Productos
          </Link>
        </nav>
      </div>
    </header>
  );
};
