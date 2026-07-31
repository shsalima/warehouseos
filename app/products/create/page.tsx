"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CreateProductPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    description: "",
    category: "",
    price: "",
    quantity: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          price: Number(formData.price),
          quantity: Number(formData.quantity),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Erreur");
        setLoading(false);
        return;
      }

      router.push("/products");
    } catch (error) {
      console.log("fffffffffff");

      setError("Erreur serveur");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/products"
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <ArrowLeft size={22} />
          </Link>

          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Add New Product
            </h1>

            <p className="text-gray-500">
              Create a new product for your warehouse.
            </p>
          </div>
        </div>

        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">Product Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">SKU</label>

            <input
              type="text"
              name="sku"
              placeholder="LOG-KB-001"
              value={formData.sku}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Description</label>

            <textarea
              name="description"
              rows={4}
              placeholder="Product description..."
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Category</label>

            <input
              type="text"
              name="category"
              placeholder="Accessories"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block mb-2 font-medium">Price (MAD)</label>

              <input
                type="number"
                name="price"
                placeholder="350"
                value={formData.price}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Initial Quantity</label>

              <input
                type="number"
                name="quantity"
                placeholder="20"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <Link
              href="/products"
              className="border px-5 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Cancel
            </Link>

            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
            >
              {loading ? "Saving..." : "Save Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
