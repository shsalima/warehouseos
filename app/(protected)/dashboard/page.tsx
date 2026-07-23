import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";

import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import StatsCard from "@/components/dashboard/StatsCard";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Header />

        <main className="p-8">

          <h1 className="text-4xl font-bold">
            Welcome, {session.user?.name}!
          </h1>

          <p className="text-gray-500 mt-2">
            System Status: Operational
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

            <div className="bg-white rounded-lg shadow p-6">

              <h2 className="text-xl font-bold mb-4">
                User Profile
              </h2>

              <p>
                <strong>Name :</strong> {session.user?.name}
              </p>

              <p className="mt-2">
                <strong>Email :</strong> {session.user?.email}
              </p>

              <p className="mt-2">
                <strong>Last Access :</strong>{" "}
                {new Date().toLocaleString()}
              </p>

            </div>

<Image
  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
  alt="Warehouse"
  width={700}
  height={400}
  className="rounded-lg shadow w-full h-full object-cover"
/>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <StatsCard
              title="Items Processed Today"
              value="1284"
            />

            <StatsCard
              title="Average Pick Time"
              value="4m 12s"
            />

            <StatsCard
              title="Pending Audits"
              value="02"
            />

          </div>

        </main>

      </div>

    </div>
  );
}