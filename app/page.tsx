import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProductosDestacados from "@/components/ProductosDestacados";
import { obtenerProductos } from "@/lib/productos";

export default async function Home() {
  const productos = await obtenerProductos();

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Banner Principal */}
      <section id="inicio">
        <Image
          src="/images/hero-banner.jpg"
          alt="Banner Principal"
          width={1600}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
      </section>

      {/* Productos */}
      <section id="productos" className="pb-24">
        <ProductosDestacados productos={productos} />
      </section>

      {/* Ofertas */}
      <section
        id="ofertas"
        className="py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-400">
            🔥 Ofertas Especiales
          </h2>

          <p className="text-center mt-4 text-gray-300">
            Próximamente encontrarás promociones exclusivas.
          </p>
        </div>
      </section>

      {/* Contacto */}
      <section
        id="contacto"
        className="py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-400">
            Contacto
          </h2>

          <div className="mt-8 text-center space-y-3">
            <p>📱 WhatsApp: 321 376 9387</p>
            <p>📧 ventas@totatechnology.com</p>
            <p>📍 Bogotá, Colombia</p>
          </div>
        </div>
      </section>
    </main>
  );
}