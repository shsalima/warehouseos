import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WarehouseOS",
  description: "Warehouse Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}