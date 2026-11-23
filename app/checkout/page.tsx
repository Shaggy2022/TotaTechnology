"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {

const { carrito, vaciarCarrito } = useCart();

const total = carrito.reduce(
  (sum, item) => sum + item.precio,
  0
);

const [nombre, setNombre] = useState("");
const [correo, setCorreo] = useState("");
const [telefono, setTelefono] = useState("");
const [direccion, setDireccion] = useState("");

const [archivo, setArchivo] = useState<File | null>(null);
const [urlComprobante, setUrlComprobante] = useState("");
const [subiendo, setSubiendo] = useState(false);

const subirComprobante = async () => {
  if (!archivo) {
    toast.error("❌ Debes seleccionar un comprobante");
    return null;
  }

  try {
    setSubiendo(true);

    const formData = new FormData();
    formData.append("archivo", archivo);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    setSubiendo(false);

    if (!data.success) {
      toast.error("❌ Error al subir el comprobante");
      return null;
    }

    return data.url;
  } catch (error) {
    console.error(error);

    setSubiendo(false);

    toast.error("❌ No fue posible conectar con el servidor");

    return null;
  }
};

const crearPedido = async (
  comprobanteUrl: string
) => {

  const productosAgrupados = Object.values(
    carrito.reduce((acc: any, producto) => {

      if (!acc[producto.id]) {
        acc[producto.id] = {
          id: producto.id,
          precio: producto.precio,
          cantidad: 1,
        };
      } else {
        acc[producto.id].cantidad++;
      }

      return acc;

    }, {})
  );

  const response = await fetch("/api/pedidos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre,
      correo,
      telefono,
      direccion,
      total,
      comprobante: comprobanteUrl,
      productos: productosAgrupados,
    }),
  });

  return await response.json();
};

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl text-center font-bold text-blue-400 mb-10">
        Finaliza tu Compra - Ingresa los datos en el siguiente formulario:
      </h1>

      <div className="max-w-3xl mx-auto bg-[#091226] border border-blue-900 rounded-xl p-8">

        <div className="grid gap-4">

          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="p-3 rounded-lg bg-black border border-blue-900"
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className="p-3 rounded-lg bg-black border border-blue-900"
          />

          <input
            type="text"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="p-3 rounded-lg bg-black border border-blue-900"
          />

          <input
            type="text"
            placeholder="Dirección"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            className="p-3 rounded-lg bg-black border border-blue-900"
          />

          <h2 className="text-50 font-bold text-blue-200 mb-1">
            Adjunta el comprobante de pago acá para empezar a preparar tu pedido:
          </h2>

          <div className="mt-6">
            <label className="block mb-2 text-blue-400 font-semibold">
              Comprobante de Pago
            </label>

            <input
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  setArchivo(e.target.files[0]);
                }
              }}
              className="w-full p-3 rounded-lg bg-black border border-blue-900"
            />

            {archivo && (
              <p className="text-green-400 mt-2">
                ✅ Archivo seleccionado: {archivo.name}
              </p>
            )}

            <p className="text-gray-400 text-sm mt-2">
              Adjunta el comprobante de tu transferencia o pago.
            </p>
          </div>

        </div>

      </div>

        <div className="mt-8 bg-[#091226] border border-blue-900 rounded-xl p-8">

              <h2 className="text-3xl font-bold text-center text-blue-400 mb-5 mt-10">
                  Métodos de Pago
              </h2>

              <div className="space-y-4 text-center">

                  <p>
                      📱 Nequi: 3001234567
                  </p>

                  <p>
                      💳 Daviplata: 3001234567
                  </p>

                  <p>
                      🏦 Bancolombia: 123456789
                  </p>

              </div>

              <div className="mt-8">
                <button
                  onClick={async () => {
                    if (
                      !nombre.trim() ||
                      !correo.trim() ||
                      !telefono.trim() ||
                      !direccion.trim()
                    ) {
                      toast.error("❌ Debes completar todos los campos del formulario");
                      return;
                    }

                    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
 
                    if (!emailRegex.test(correo)) {
                      toast.error("❌ Ingresa un correo electrónico válido");
                      return;
                    }
                    const url = await subirComprobante();

                    if (url) {
                      toast.success("✅ Comprobante cargado correctamente");
                    }

                    if (!url) {
                      return;
                    }

                    const pedido = await crearPedido(url);

                    if (!pedido.success) {
                      toast.error("❌ Error al registrar el pedido");
                      return;
                    }

                    vaciarCarrito();

                    toast.success(
                      "✅ Compra realizada con éxito. Tu pedido ya está siendo preparado."
                    );

                    const mensaje = `
                    *NUEVO PEDIDO TOTA TECHNOLOGY*

                    *Pedido:* #${pedido.pedidoId
                    .toString()
                    .padStart(6, "0")}

                    *Cliente:* ${nombre}
                    *Correo:* ${correo}
                    *Teléfono:* ${telefono}
                    *Dirección:* ${direccion}

                    *Total:* $${total.toLocaleString("es-CO")}

                    El cliente adjuntó el comprobante de pago correctamente.`;

                    window.open(
                      `https://wa.me/573213769387?text=${encodeURIComponent(mensaje)}`,
                      "_blank"
                    );

                    setNombre("");
                    setCorreo("");
                    setTelefono("");
                    setDireccion("");
                    setArchivo(null);
                  }}
                  disabled={subiendo}
                  className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-bold text-lg
                  transition-all disabled:bg-gray-700">
                  {subiendo ? "Subiendo comprobante..." : "Finalizar Compra"}
                </button>
              </div>

        </div>

    </main>
  );
}