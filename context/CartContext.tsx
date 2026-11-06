"use client";

import { createContext, useContext, useState, useEffect, } from "react";

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
  vaciarCarrito: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [carrito, setCarrito] = useState<Producto[]>(() => {

    if (typeof window === "undefined") {
      return [];
    }

    const carritoGuardado =
      localStorage.getItem("carrito");

    return carritoGuardado
      ? JSON.parse(carritoGuardado)
      : [];

  });

  useEffect(() => {
    localStorage.setItem(
      "carrito",
      JSON.stringify(carrito)
    );
  }, [carrito]);

  const agregarProducto = (producto: Producto) => {
    setCarrito((prev) => [...prev, producto]);
  };

  const eliminarProducto = (index: number) => {
  setCarrito((prev) =>
    prev.filter((_, i) => i !== index));
  };

  const vaciarCarrito = () => {
  setCarrito([]);
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito,
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