"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import {
  Package,
  ShoppingCart,
  Truck,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="relative flex flex-col w-64 min-h-screen bg-black text-white">

      <div className="p-6 border-b border-gray-800">
        <h2 className="text-2xl font-bold">WarehouseOS</h2>
        <p className="text-sm text-gray-400">
          Admin Terminal
        </p>
      </div>

      
      <nav className="flex-1 mt-6">

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

     
      <div className="p-4 border-t border-gray-800">
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 transition text-white py-3 rounded-lg"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

    </aside>
  );
}