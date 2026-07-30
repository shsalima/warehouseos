import { z } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(3, "Le nom doit contenir au moins 3 caractères"),

  sku: z
    .string()
    .min(1, "Le SKU est obligatoire"),

  description: z
    .string()
    .min(1, "La description est obligatoire"),

  category: z
    .string()
    .min(1, "La catégorie est obligatoire"),

  price: z
    .number()
    .positive("Le prix doit être positif"),

  quantity: z
    .number()
    .int("La quantité doit être un entier")
    .min(0, "La quantité ne peut pas être négative"),
});