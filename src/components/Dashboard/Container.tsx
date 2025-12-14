export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F6F8FC]-50 text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </div>
  );
}
