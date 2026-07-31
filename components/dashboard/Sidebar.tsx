"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  FolderTree,
  ArrowLeftRight,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 min-h-screen bg-black text-white">

      <div className="p-6 border-b border-gray-800">
        <h2 className="text-2xl font-bold">
          WarehouseOS
        </h2>

        <p className="text-sm text-gray-400">
          Warehouse Management
        </p>
      </div>

      <nav className="flex flex-col mt-6">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 px-6 py-3 hover:bg-orange-500"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          href="/products"
          className="flex items-center gap-3 px-6 py-3 hover:bg-orange-500"
        >
          <Package size={20} />
          Products
        </Link>

        <Link
          href="/categories"
          className="flex items-center gap-3 px-6 py-3 hover:bg-orange-500"
        >
          <FolderTree size={20} />
          Categories
        </Link>

        <Link
          href="/stock/movements"
          className="flex items-center gap-3 px-6 py-3 hover:bg-orange-500"
        >
          <ArrowLeftRight size={20} />
          Stock Movements
        </Link>
      </nav>

    </aside>
  );
}