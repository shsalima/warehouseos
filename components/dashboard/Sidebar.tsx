"use client";

import Link from "next/link";
import {
  Package,
  ShoppingCart,
  Truck,
  BarChart3,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-black text-white">

      <div className="p-6 border-b border-gray-800">
        <h2 className="text-2xl font-bold">WarehouseOS</h2>
        <p className="text-sm text-gray-400">
          Admin Terminal
        </p>
      </div>

      <nav className="mt-6">

        <Link
          href="/dashboard"
          className="flex items-center gap-3 px-6 py-3 hover:bg-orange-500 transition"
        >
          <Package size={20} />
          <span>Inventory</span>
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 px-6 py-3 hover:bg-orange-500 transition"
        >
          <ShoppingCart size={20} />
          <span>Orders</span>
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 px-6 py-3 hover:bg-orange-500 transition"
        >
          <Truck size={20} />
          <span>Shipments</span>
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 px-6 py-3 hover:bg-orange-500 transition"
        >
          <BarChart3 size={20} />
          <span>Reports</span>
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 px-6 py-3 hover:bg-orange-500 transition"
        >
          <Settings size={20} />
          <span>Settings</span>
        </Link>

      </nav>

    </aside>
  );
}