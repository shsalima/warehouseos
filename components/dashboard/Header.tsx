"use client";

import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <div className="flex items-center gap-8">
        <h1 className="text-2xl font-bold">WarehouseOS</h1>

        <p className="font-medium">Dashboard</p>
      </div>

      <div className="text-right">
        <p className="font-semibold">
          {session?.user?.name}
        </p>

        <p className="text-sm text-gray-500">
          {session?.user?.email}
        </p>
      </div>
    </header>
  );
}