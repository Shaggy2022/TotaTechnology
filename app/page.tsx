import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProductosDestacados from "@/components/ProductosDestacados";
import { prisma } from "@/lib/prisma";
import { obtenerProductos } from "@/lib/productos";

export default async function Home() {
  const productos = await obtenerProductos();

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      <section>
        <Image
          src="/images/hero-banner.jpg"
          alt="Banner Principal"
          width={1600}
          height={600}
          className="w-full"
          priority
        />
      </section>

      <ProductosDestacados productos={productos} />
    </main>
  );
}