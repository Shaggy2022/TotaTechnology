import ProductCard from "./ProductCard";

type Producto = {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
};

interface Props {
  productos: Producto[];
}

export default function ProductosDestacados({
  productos,
}: Props) {
  return (
    <section className="bg-black py-16">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-10">
        🎧 Audífonos Destacados
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {productos.map((producto) => (
          <ProductCard
            key={producto.id}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            precio={producto.precio}
            imagen={producto.imagen}
          />
        ))}
      </div>
    </section>
  );
}