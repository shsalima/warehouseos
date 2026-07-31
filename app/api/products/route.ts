import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import { productSchema } from "@/schemas/product.schema";

export async function GET() {
  try {
    await connectDB();

    const products = await Product.find();

    return NextResponse.json(products, {
      status: 200,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Erreur serveur",
      },
      {
        status: 500,
      },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("BODY =>", body);

    const validation = productSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          errors: validation.error.flatten(),
        },
        {
          status: 400,
        },
      );
    }

    await connectDB();

    const existingProduct = await Product.findOne({
      sku: body.sku,
    });

    if (existingProduct) {
      return NextResponse.json(
        {
          message: "Ce SKU existe déjà",
        },
        {
          status: 409,
        },
      );
    }
    console.log("CREATE =>", {
  name: body.name,
  sku: body.sku,
  description: body.description,
  category: body.category,
  price: body.price,
  quantity: body.quantity,
});

    const product = await Product.create({
      name: body.name,
      sku: body.sku,
      description: body.description,
      category: body.category,
      price: body.price,
      quantity: body.quantity,
    });

    return NextResponse.json(
      {
        message: "Produit créé avec succès",
        product,
      },
      {
        status: 201,
      },
    );
 } catch (error: any) {
  console.error("ERROR =>", error);

  return NextResponse.json(
    {
      message: error.message,
     stack: error.stack,
    },
    {
      status: 500,
    }
  );
}
}
