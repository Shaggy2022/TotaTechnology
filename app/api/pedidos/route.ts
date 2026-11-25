import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      nombre,
      correo,
      telefono,
      direccion,
      total,
      comprobante,
      productos,
    } = body;

    const pedido = await prisma.pedido.create({
      data: {
        nombre,
        correo,
        telefono,
        direccion,
        total,
        comprobante,
        estado: "Pendiente",
      },
    });

    for (const producto of productos) {
      await prisma.detallePedido.create({
        data: {
          pedidoId: pedido.id,
          productoId: producto.id,
          cantidad: producto.cantidad,
          precio: producto.precio,
        },
      });
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: "jose.mayorga1475@gmail.com",
      subject: `Nuevo Pedido #${pedido.id}`,
      html: `
        <h2>🛒 Nuevo pedido recibido para Tota Technology</h2>
        <p><strong>Pedido:</strong> #${pedido.id}</p>
        <p><strong>Cliente:</strong> ${nombre}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Dirección:</strong> ${direccion}</p>
        <p><strong>Total:</strong> $${total.toLocaleString("es-CO")}</p>
        <p><strong>Estado:</strong> Pendiente</p>
        <h3>Nota: Validar el siguiente comprobante adjuntado por el cliente para validar que el pago haya sido exitoso.</h3>
        <p><strong>Comprobante: </strong>
        <a href = "${comprobante}" >
        Abrir comprobante</a></p>
        <hr>
        <p>Ingresa al panel de administración para revisar el pedido.</p>`,
    });

    return NextResponse.json({
      success: true,
      pedidoId: pedido.id,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Error al crear pedido",
      },
      {
        status: 500,
      }
    );
  }
}