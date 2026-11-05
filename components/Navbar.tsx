import Image from "next/image";
import CartIcon from "./CartIcon";

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

          <a href="#inicio" className="text-white font-medium transition-all duration-300
          hover:text-blue-400 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]
          active:scale-95">
            Inicio
          </a>

          <a href="#productos" className="text-white font-medium transition-all duration-300
          hover:text-blue-400 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]
          active:scale-95"
          >
            Productos
          </a>

          <div className="relative group">

            <button className="text-white hover:text-blue-400 transition-all duration-300"
            >
              Categorías ▼
            </button>

            <div
              className="absolute hidden group-hover:block bg-[#091226] border border-blue-900
              rounded-lg mt-2 min-w-[220px] shadow-xl z-50"
            >

              <a
                href="#productos" className="block px-4 py-3 text-white hover:bg-blue-600"
              >
                🎧 Audífonos
              </a>
  </div>

</div>

          <a href="#ofertas" className="text-white font-medium transition-all duration-300
          hover:text-blue-400 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]
          active:scale-95"
          >
            Ofertas
          </a>

          <a href="#contacto" className="text-white font-medium transition-all duration-300
          hover:text-blue-400 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]
          active:scale-95"
          >
            Contacto
          </a>

          <div className="flex items-center gap-4">
            <CartIcon />
          </div>

        </nav>

      </div>

    </header>
  );
}