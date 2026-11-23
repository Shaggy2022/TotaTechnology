import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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