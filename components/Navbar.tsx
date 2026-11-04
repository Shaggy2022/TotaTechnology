import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-[#050B18] border-b border-blue-600">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        <div className="flex items-center gap-3">

          <Image
            src="/images/logo-tota.png"
            alt="Tota Technology"
            width={55}
            height={55}
          />

          <div>
            <h1 className="text-xl font-bold text-blue-400">
              TOTA TECHNOLOGY
            </h1>

            <p className="text-xs text-gray-400">
              Tecnología que te conecta
            </p>
          </div>

        </div>

        <nav className="flex gap-8 text-white">

          <a href="#">Inicio</a>

          <a href="#">Productos</a>

          <a href="#">Categorías</a>

          <a href="#">Ofertas</a>

          <a href="#">Contacto</a>

        </nav>

      </div>

    </header>
  );
}