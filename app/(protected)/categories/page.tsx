"use client";
import { FolderOpen, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Category {
  _id: string;
  name: string;
  description: string;
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    const response = await fetch("/api/categories");
    const data = await response.json();

    setCategories(data);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

     <div className="flex justify-between items-center mb-8">

  <div className="flex items-center gap-3">
    <FolderOpen className="w-8 h-8 text-gray-700" />

    <h1 className="text-3xl font-bold">
      Catégories
    </h1>
  </div>

  <Link
    href="/categories/create"
    className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition"
  >
    <Plus className="w-5 h-5" />
    Ajouter
  </Link>

</div>

      <div className="bg-white rounded-xl shadow">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="text-left p-4">
                Nom
              </th>

              <th className="text-left p-4">
                Description
              </th>

            </tr>

          </thead>

          <tbody>

            {categories.map((category) => (

              <tr
                key={category._id}
                className="border-t"
              >

                <td className="p-4">
                  {category.name}
                </td>

                <td className="p-4">
                  {category.description}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}