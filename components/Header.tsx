// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { CartDropdown } from "./CartDropdown";

export const Header: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

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
          <div className="relative">
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative p-2 hover:text-emerald-300 transition-colors"
              aria-label="Carrito de compras"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
            <CartDropdown
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
            />
          </div>
        </nav>
      </div>
    </header>
  );
};
