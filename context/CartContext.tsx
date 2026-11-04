"use client";

import { createContext, useContext, useState } from "react";

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
}

interface CartContextType {
  carrito: Producto[];
  agregarProducto: (producto: Producto) => void;
  eliminarProducto: (index: number) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [carrito, setCarrito] = useState<Producto[]>([]);

  const agregarProducto = (producto: Producto) => {
    setCarrito((prev) => [...prev, producto]);
  };

  const eliminarProducto = (index: number) => {
  setCarrito((prev) =>
    prev.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarProducto,
        eliminarProducto,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe usarse dentro de CartProvider");
  }

  return context;
}