import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Category from "@/models/Category";
import { categorySchema } from "@/schemas/category.schema";

export async function GET() {
  try {
    await connectDB();

    const categories = await Category.find({
      archived: false,
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Erreur serveur",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = categorySchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          errors: validation.error.flatten(),
        },
        {
          status: 400,
        }
      );
    }

    await connectDB();

    const existingCategory = await Category.findOne({
      name: body.name,
    });

    if (existingCategory) {
      return NextResponse.json(
        {
          message: "Cette catégorie existe déjà",
        },
        {
          status: 409,
        }
      );
    }

    const category = await Category.create({
      name: body.name,
      description: body.description,
    });

    return NextResponse.json(
      {
        message: "Catégorie créée avec succès",
        category,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Erreur serveur",
      },
      {
        status: 500,
      }
    );
  }
}