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

      <section id="inicio">
        <Image
          src="/images/hero-banner.jpg"
          alt="Banner Principal"
          width={1600}
          height={600}
          className="w-full"
          priority
        />
      </section>

      <section id="productos">
        <ProductosDestacados productos={productos} />
      </section>

      <section id="ofertas" className="bg-[#050b18] py-20">
        <h2 className="text-5xl font-bold text-center text-blue-400">
          🔥 Ofertas Especiales
        </h2>

        <p className="text-center mt-6 text-gray-300">
          Próximamente encontrarás promociones exclusivas.
        </p>
      </section>

      <section id="contacto" className="bg-black py-20">
        <h2 className="text-5xl text-center font-bold text-blue-400">
          Contacto
        </h2>

        <div className="mt-10 text-center">

          <p>📱 WhatsApp: 321 376 9387</p>

          <p>📧 ventas@totatechnology.com</p>

          <p>📍 Bogotá, Colombia</p>

        </div>
      </section>

    </main>
  );
}