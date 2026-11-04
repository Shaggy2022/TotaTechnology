"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CarritoPage() {
  const {carrito, eliminarProducto,} = useCart();

  const total = carrito.reduce(
    (sum, item) => sum + item.precio,
    0
  );

  return (
    <main className="min-h-screen bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-5xl font-bold text-blue-400 mb-10">
          🛒 Mi Carrito
        </h1>

        {carrito.length === 0 ? (
          <div className="bg-[#091226] border border-blue-900 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-semibold">
              Tu carrito está vacío
            </h2>

            <p className="text-gray-400 mt-3">
              Agrega algunos productos para comenzar tu compra.
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Productos */}
            <div className="lg:col-span-2 space-y-6">

              {carrito.map((producto, index) => (
                <div
                  key={`${producto.id}-${index}`}
                  className="
                    bg-[#091226]
                    border
                    border-blue-900
                    rounded-xl
                    p-5
                    flex
                    items-center
                    gap-5
                  "
                >
                  <div className="relative w-32 h-32 bg-gray-900 rounded-lg overflow-hidden">

                    <Image
                      src={producto.imagen}
                      alt={producto.nombre}
                      fill
                      sizes="128px"
                      className="object-contain"
                    />

                  </div>

                  <div className="flex-1">

                    <h3 className="text-2xl font-bold">
                      {producto.nombre}
                    </h3>

                    <p className="text-gray-400 mt-2">
                      Producto agregado al carrito
                    </p>

                    <p className="text-blue-400 text-2xl font-bold mt-4">
                      ${producto.precio.toLocaleString("es-CO")}
                    </p>

                    <button
                      onClick={() => eliminarProducto(index)}
                      className="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-all"
                    >
                      🗑️ Eliminar
                    </button>

                  </div>
                </div>
              ))}

            </div>

            {/* Resumen */}
            <div>

              <div
                className="
                  bg-[#091226]
                  border
                  border-blue-900
                  rounded-xl
                  p-6
                  sticky
                  top-6
                "
              >
                <h2 className="text-3xl font-bold mb-6">
                  Resumen
                </h2>

                <div className="flex justify-between text-gray-300 mb-4">

                  <span>Productos</span>

                  <span>{carrito.length}</span>

                </div>

                <div className="border-t border-blue-900 my-4"></div>

                <div className="flex justify-between items-center">

                  <span className="text-xl">
                    Total
                  </span>

                  <span className="text-3xl font-bold text-blue-400">
                    ${total.toLocaleString("es-CO")}
                  </span>

                </div>

                <button
                  className="
                    mt-8
                    w-full
                    bg-blue-600
                    hover:bg-blue-700
                    py-4
                    rounded-xl
                    font-bold
                    text-lg
                    transition-all
                  "
                >
                  Finalizar Compra
                </button>

              </div>

            </div>

          </div>
        )}

      </div>

    </main>
  );
}