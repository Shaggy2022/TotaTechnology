import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const archivo = formData.get("archivo") as File;

    if (!archivo) {
      return NextResponse.json(
        { error: "No se recibió ningún archivo" },
        { status: 400 }
      );
    }

    const bytes = await archivo.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const nombreArchivo = `${Date.now()}-${archivo.name}`;

    const ruta = path.join(
      process.cwd(),
      "public",
      "comprobantes",
      nombreArchivo
    );

    await writeFile(ruta, buffer);

    return NextResponse.json({
      success: true,
      url: `/comprobantes/${nombreArchivo}`,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Error al subir archivo" },
      { status: 500 }
    );
  }
}