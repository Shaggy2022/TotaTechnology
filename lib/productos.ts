import { prisma } from "@/lib/prisma";

export async function obtenerProductos() {
  "use cache";

  return prisma.producto.findMany();
}