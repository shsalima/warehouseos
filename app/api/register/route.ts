import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { registerSchema } from "@/schemas/user.schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = registerSchema.safeParse(body);

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

    const existingUser = await User.findOne({email: body.email});

    if (existingUser) {
      return NextResponse.json(
        {
          message: "Email déjà utilisé",
        },
        {
          // 409=> Conflict
          status: 409,
        }
      );
    }
    // Salt Rounds
    const hashedPassword = await bcrypt.hash(body.password, 10);

    const user = await User.create({
      name: body.name,
      email: body.email,
      password: hashedPassword,
    });

    return NextResponse.json(
      {
        message: "Utilisateur créé avec succès",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
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