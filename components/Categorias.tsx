export default function Categorias() {
  const categorias = [
    { icono: "💻", nombre: "Portátiles" },
    { icono: "📱", nombre: "Celulares" },
    { icono: "🎮", nombre: "Gaming" },
    { icono: "🎧", nombre: "Audio" },
    { icono: "⌚", nombre: "Smartwatch" },
    { icono: "🔌", nombre: "Accesorios" },
  ];

  return (
    <section className="bg-[#050B18] py-12">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-10">
        Categorías Destacadas
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-6">
        {categorias.map((categoria) => (
          <div
            key={categoria.nombre}
            className="bg-[#0D1528] border border-blue-800 rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="text-5xl mb-3">{categoria.icono}</div>

            <h3 className="text-white font-semibold">
              {categoria.nombre}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}