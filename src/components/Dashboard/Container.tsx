import greyPokeball from '@/assets/images/grey-pokeball-img.svg';

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#F6F8FC]-50 text-gray-800 font-sans">
      <img
        src={greyPokeball}
        className="
          absolute
          -top-10
          -left-20
          w-[420px]
          z-0
          pointer-events-none
        "
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {children}
      </div>
    </div>
  );
}
