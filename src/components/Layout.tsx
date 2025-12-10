import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Top Navbar */}
      <header className="bg-red-600 text-white p-4 shadow-md">
        <h1 className="text-xl font-bold">PokéBinder</h1>
      </header>

      {/* Page content */}
      <main className="max-w-4xl mx-auto p-4">{children}</main>
    </div>
  );
}
