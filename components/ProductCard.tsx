import Image from "next/image";

type Props = {
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
};

export default function ProductCard({
  nombre,
  descripcion,
  precio,
  imagen
}: Props) {
  return (
    <div className="bg-[#0B1020] rounded-xl border border-blue-900 p-5">

      <div className="relative h-56 mb-4">
        <Image
          src={imagen}
          alt={nombre}
          fill
          className="object-contain rounded-lg"
        />
      </div>

      <h3 className="text-xl font-bold text-white">
        {nombre}
      </h3>

      <p className="text-gray-400 text-sm mt-2">
        {descripcion}
      </p>

      <p className="text-blue-400 text-2xl font-bold mt-4">
        ${precio.toLocaleString("es-CO")}
      </p>

      <button className="w-full mt-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
        Comprar Ahora
      </button>

    </div>
  );
}