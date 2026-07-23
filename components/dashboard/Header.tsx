"use client";

import { useSession, signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">

      
      <div className="flex items-center gap-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
     </div>

      <div className="flex items-center gap-6">

        <div className="text-right">
          <p className="font-semibold">
            {session?.user?.name}
          </p>

          <p className="text-sm text-gray-500">
            {session?.user?.email}
          </p>
        </div>

        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
        >
          <LogOut size={18} />
          Déconnexion
        </button>

      </div>

    </header>
  );
}