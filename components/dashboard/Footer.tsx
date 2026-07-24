export default function Footer() {
  return (
    <footer className="bg-white border-t py-4 text-center text-gray-500">
      <p>
        © {new Date().getFullYear()} WarehouseOS. All rights reserved.
      </p>
    </footer>
  );
}