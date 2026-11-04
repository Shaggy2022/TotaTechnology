"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartIcon() {
  const { carrito } = useCart();

  return (
    <Link href="/carrito" className=" flex items-center gap-2 bg-blue-600 hover:bg-blue-700
    px-4 py-2 rounded-xl font-semibold transition-all"
    >
      🛒
      <span>Carrito</span>

      <span className="bg-white text-blue-700 px-2 rounded-full">
        {carrito.length}
      </span>
    </Link>
  );
}
