"use client";

import Image from "next/image";
import CartIcon from "./CartIcon";
import { useState } from "react";

export default function Navbar() {
  const [mostrarCategorias, setMostrarCategorias] = useState(false);

  return (
    <header className="bg-[#050B18] border-b border-blue-600">
      
      <div
  className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-4 gap-4">

        <div className="flex items-center gap-3">

          <Image
            src="/images/logo-tota.png"
            alt="Tota Technology"
            width={55}
            height={55}
          />

          <div>
            <h1 className="text-lg md:text-xl font-bold text-blue-400">
              TOTA TECHNOLOGY
            </h1>

            <p className="text-xs text-gray-400">
              Tecnología que te conecta
            </p>
          </div>

        </div>

        <nav className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-2 md:gap-4 lg:gap-6 text-white">

          <a href="#inicio" className="px-3 py-2 text-sm md:text-base lg:text-lg lg:px-5 lg:py-3 rounded-xl bg-[#091226] border border-blue-800
            text-white font-semibold transition-all duration-300 hover:bg-blue-600 hover:border-blue-400
            hover:scale-105 active:scale-95">
            Inicio
          </a>

          <a href="#productos" className="px-3 py-2 text-sm md:text-base lg:text-lg lg:px-5 lg:py-3 rounded-xl bg-[#091226] border border-blue-800
            text-white font-semibold transition-all duration-300 hover:bg-blue-600 hover:border-blue-400
            hover:scale-105 active:scale-95">
            Productos
          </a>

          <div className="relative">
            <button
              onClick={() => setMostrarCategorias(!mostrarCategorias)}
              className="px-3 py-2 text-sm md:text-base lg:text-lg lg:px-5 lg:py-3 rounded-xl bg-[#091226] border border-blue-800
              text-white font-semibold hover:bg-blue-600 hover:border-blue-400 hover:scale-105
              active:scale-95 transition-all duration-300"
            >
              Categorías {mostrarCategorias ? "▲" : "▼"}
            </button>

            {mostrarCategorias && (
              <div
                className="absolute top-full left-0 mt-2 w-full md:min-w-[250px] bg-[#091226] border border-blue-700
                rounded-xl shadow-xl z-50"
              >
                <div className="relative group">
                  <a
                    href="#productos"
                    className="block px-5 py-4 text-white hover:bg-blue-600 rounded-t-xl"
                  >
                    🎧 Audífonos ▸
                  </a>

                  <div
                    className="hidden group-hover:block absolute left-full top-0 min-w-[220px]
                    bg-[#091226] border border-blue-700 rounded-xl"
                  >
                    <a
                      href="#productos"
                      className="block px-5 py-4 text-white hover:bg-blue-600"
                    >
                      🎧 Audífonos Disney
                    </a>

                    <a
                      href="#productos"
                      className="block px-5 py-4 text-white hover:bg-blue-600"
                    >
                      🎧 Audífonos de cuello
                    </a>

                    <a
                      href="#productos"
                      className="block px-5 py-4 text-white hover:bg-blue-600"
                    >
                      🎧 Audífonos Tipo Deadema
                    </a>
                  </div>
                </div>

                <div className="relative group">
                  <a
                    href="#productos"
                    className="block px-5 py-4 text-white hover:bg-blue-600 rounded-t-xl"
                  >
                    🔋 Power Bank
                  </a>
                </div>
              </div>
            )}
          </div>

          <a href="#ofertas" className="px-3 py-2 text-sm md:text-base lg:text-lg lg:px-5 lg:py-3 rounded-xl bg-[#091226] border border-blue-800
            text-white font-semibold transition-all duration-300 hover:bg-blue-600 hover:border-blue-400
            hover:scale-105 active:scale-95">
            Ofertas
          </a>

          <a href="#contacto" className="px-3 py-2 text-sm md:text-base lg:text-lg lg:px-5 lg:py-3 rounded-xl bg-[#091226] border border-blue-800
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