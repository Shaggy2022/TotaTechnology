"use client";

import Image from "next/image";
import CartIcon from "./CartIcon";
import { useState } from "react";

export default function Navbar() {
  const [mostrarCategorias, setMostrarCategorias] = useState(false);

  return (
    <header className="bg-[#050B18] border-b border-blue-600">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        <div className="flex items-center gap-3">

          <Image
            src="/images/logo-tota.png"
            alt="Tota Technology"
            width={55}
            height={55}
          />

          <div>
            <h1 className="text-xl font-bold text-blue-400">
              TOTA TECHNOLOGY
            </h1>

            <p className="text-xs text-gray-400">
              Tecnología que te conecta
            </p>
          </div>

        </div>

        <nav className="flex gap-8 text-white">

          <a href="#inicio" className="px-5 py-3 text-lg rounded-xl bg-[#091226] border border-blue-800
            text-white font-semibold transition-all duration-300 hover:bg-blue-600 hover:border-blue-400
            hover:scale-105 active:scale-95">
            Inicio
          </a>

          <a href="#productos" className="px-5 py-3 text-lg rounded-xl bg-[#091226] border border-blue-800
            text-white font-semibold transition-all duration-300 hover:bg-blue-600 hover:border-blue-400
            hover:scale-105 active:scale-95">
            Productos
          </a>

          <div className="relative">
            <button
              onClick={() => setMostrarCategorias(!mostrarCategorias)}
              className="px-5 py-3 text-lg rounded-xl bg-[#091226] border border-blue-800
              text-white font-semibold hover:bg-blue-600 hover:border-blue-400 hover:scale-105
              active:scale-95 transition-all duration-300"
            >
              Categorías {mostrarCategorias ? "▲" : "▼"}
            </button>

            {mostrarCategorias && (
              <div
                className="absolute top-full left-0 mt-2 min-w-[250px] bg-[#091226] border border-blue-700
                rounded-xl shadow-xl z-50"
              >
                <a
                  href="#productos"
                  className="block px-5 py-4 text-white hover:bg-blue-600 rounded-t-xl"
                >
                  🎧 Audífonos
                </a>
              </div>
            )}
          </div>

          <a href="#ofertas" className="px-5 py-3 text-lg rounded-xl bg-[#091226] border border-blue-800
            text-white font-semibold transition-all duration-300 hover:bg-blue-600 hover:border-blue-400
            hover:scale-105 active:scale-95">
            Ofertas
          </a>

          <a href="#contacto" className="px-5 py-3 text-lg rounded-xl bg-[#091226] border border-blue-800
            text-white font-semibold transition-all duration-300 hover:bg-blue-600 hover:border-blue-400
            hover:scale-105 active:scale-95">
            Contacto
          </a>

          <div className="flex items-center gap-4">
            <CartIcon />
          </div>

        </nav>

      </div>

    </header>
  );
}