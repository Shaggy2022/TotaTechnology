"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CartIcon() {
  const { carrito } = useCart();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
  return null;
  }

  return (
    <Link href="/carrito" className="flex items-center text-lg gap-2 bg-blue-600 hover:bg-blue-700
    px-5 py-3 rounded-xl font-semibold transition-all"
    >
      🛒
      <span>Carrito</span>

      <span className="bg-white text-blue-700 px-2 rounded-full">
        {carrito.length}
      </span>
    </Link>
  );
}
