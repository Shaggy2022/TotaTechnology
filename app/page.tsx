import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProductosDestacados from "@/components/ProductosDestacados";
import { obtenerProductos } from "@/lib/productos";
import {FaFacebook,FaInstagram,FaWhatsapp,} from "react-icons/fa";
import Footer from "@/components/Footer";

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

          <div className="flex justify-center gap-8 mt-10 text-5xl">
            <a
              href="https://www.facebook.com/profile.php?id=100067072517072"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:scale-110 transition-transform"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/totatechnology"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/573124285234"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:scale-110 transition-transform"
            >
              <FaWhatsapp />
            </a>

          </div>
          <div className="text-center mt-6 text-gray-400">
            Síguenos en nuestras redes sociales oficiales
          </div>
          <div className="text-center mt-8 text-sm text-gray-500 border-t border-blue-900 pt-4">
            © <Footer /> Tota Technology. Todos los derechos reservados.
          </div>
        </div>
      </section>
    </main>
  );
}