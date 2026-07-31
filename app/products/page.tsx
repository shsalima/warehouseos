import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import Link from "next/link";

export default async function ProductsPage() {
  await connectDB();

  const products = await Product.find();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Products
        </h1>

        <Link
          href="/products/create"
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Add Product
        </Link>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">SKU</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Stock</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product._id.toString()}>
              <td className="border p-2">
                {product.name}
              </td>

              <td className="border p-2">
                {product.sku}
              </td>

              <td className="border p-2">
                {product.category}
              </td>

              <td className="border p-2">
                {product.price} MAD
              </td>

              <td className="border p-2">
                {product.quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}