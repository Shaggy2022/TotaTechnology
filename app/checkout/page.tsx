"use client";

export default function CheckoutPage() {
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
            className="p-3 rounded-lg bg-black border border-blue-900"
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            className="p-3 rounded-lg bg-black border border-blue-900"
          />

          <input
            type="text"
            placeholder="Teléfono"
            className="p-3 rounded-lg bg-black border border-blue-900"
          />

          <input
            type="text"
            placeholder="Dirección"
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
              className="w-full p-3 rounded-lg bg-black border border-blue-900"
            />

            <p className="text-gray-400 text-sm mt-2">
              Adjunta el comprobante de tu transferencia o pago.
            </p>
          </div>

        </div>

      </div>

        <div className="mt-8 bg-[#091226] border border-blue-900 rounded-xl p-8">

              <div className="mt-8">
                <button
                  className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-bold text-lg transition-all">
                  Finalizar Compra
                </button>
              </div>

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

        </div>

    </main>
  );
}