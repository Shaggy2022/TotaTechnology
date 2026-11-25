import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const archivo = formData.get("archivo") as File;

    if (!archivo) {
      return NextResponse.json(
        {
          success: false,
          error: "No se recibió archivo",
        },
        {
          status: 400,
        }
      );
    }

    const bytes = await archivo.arrayBuffer();

    const buffer = Buffer.from(bytes);

    const base64 = `data:${archivo.type};base64,${buffer.toString(
      "base64"
    )}`;

    const resultado = await cloudinary.uploader.upload(
      base64,
      {
        folder: "tota-technology/comprobantes",
        resource_type: "auto",
      }
    );

    console.log(resultado);

    return NextResponse.json({
      success: true,
      url: resultado.secure_url,
      resourceType: resultado.resource_type,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Error al subir archivo",
      },
      {
        status: 500,
      }
    );
  }
}