"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateCategoryPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const response = await fetch("/api/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.message || "Erreur");
      setLoading(false);
      return;
    }

    router.push("/categories");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-5">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-8">

        <h1 className="text-3xl font-bold mb-6">
          Ajouter une catégorie
        </h1>

        {error && (
          <p className="bg-red-100 text-red-600 p-3 rounded mb-4">
            {error}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            rows={4}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white rounded-lg p-3"
          >
            {loading ? "Loading..." : "Ajouter"}
          </button>

        </form>

      </div>
    </div>
  );
}