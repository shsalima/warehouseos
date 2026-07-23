import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">

        <h1 className="text-6xl font-bold text-black mb-4">
          WarehouseOS
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Smart Warehouse Management System
        </p>

        <p className="text-gray-500 leading-7 max-w-2xl mx-auto mb-10">
          Manage your inventory, monitor warehouse operations, track shipments,
          and optimize stock management through a secure and modern platform
          built with Next.js.
        </p>

        <div className="flex justify-center gap-6">

          <Link
            href="/login"
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="border-2 border-black text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition"
          >
            Register
          </Link>

        </div>

      </div>
    </main>
  );
}