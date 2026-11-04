"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";

type Props = {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
};

export default function ProductCard({
  id,
  nombre,
  descripcion,
  precio,
  imagen
}: Props) {
  const { agregarProducto } = useCart();
  const [agregado, setAgregado] = useState(false);

  const handleAgregar = () => {
    agregarProducto({
      id,
      nombre,
      precio,
      imagen,
    });

    // Toast que aparece arriba
    toast.success(`${nombre} agregado al carrito`);

    // Cambia temporalmente el botón
    setAgregado(true);

    setTimeout(() => {
      setAgregado(false);
    }, 2000);
  };

  return (
    <div className="bg-[#0B1020] rounded-xl border border-blue-900 p-5">

      <div className="relative h-56 mb-4">
        <Image
          src={imagen}
          alt={nombre}
          fill
          className="object-contain rounded-lg"
        />
      </div>

      <h3 className="text-xl font-bold text-white">
        {nombre}
      </h3>

      <p className="text-gray-400 text-sm mt-2">
        {descripcion}
      </p>

      <p className="text-blue-400 text-2xl font-bold mt-4">
        ${precio.toLocaleString("es-CO")}
      </p>

      <button
        onClick={handleAgregar}
        className={`w-full mt-4 py-3 rounded-xl font-bold transition-all duration-200
        hover:scale-105 active:scale-95 active:translate-y-1 shadow-lg
        ${agregado
            ? "bg-green-600 hover:bg-green-700"
            : "bg-blue-600 hover:bg-blue-700"
          }`}
      >
        {agregado
          ? "✅ Agregado"
          : "🛒 Comprar Ahora"}
      </button>

    </div>
  );
}