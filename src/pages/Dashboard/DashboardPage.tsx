import Card from "../../components/Card";
import { pokemoncards } from "../../data/pokemoncards";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#ffffff]-50 text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* HEADER */}
        <header className="flex justify-between items-center bg-white rounded-2xl shadow-sm p-4 mb-6">
          <div className="font-bold text-xl text-pokebinder-red">PokeBinder</div>
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div> {/* Placeholder Avatar */}
        </header>

        {/* STATS & ACTIONS SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          
          {/* Stats (Left) */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm p-6 flex justify-around items-center">
            <div className="flex-1 text-center border-r border-gray-100 last:border-r-0">
              <div className="text-2xl font-bold">128</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">Total Cards</div>
            </div>
            <div className="flex-1 text-center border-r border-gray-100 last:border-r-0">
              <div className="text-2xl font-bold">12</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">Sets Collected</div>
            </div>
            <div className="flex-1 text-center border-r border-gray-100 last:border-r-0">
              <div className="text-2xl font-bold">67%</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">Completion</div>
            </div>
            <div className="flex-1 text-center">
              <div className="text-2xl font-bold">$ 4010</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">Value</div>
            </div>
          </div>

          {/* Actions (Right) */}
          <div className="lg:col-span-1 flex gap-4">
            <button className="flex-1 bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors rounded-2xl flex flex-col items-center justify-center p-4">
              <span className="font-semibold">Scan Card</span>
            </button>
            <button className="flex-1 bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors rounded-2xl flex flex-col items-center justify-center p-4">
               <span className="font-semibold">Add Card</span>
            </button>
          </div>
        </section>

        {/* MAIN CONTENT SPLIT */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: BINDER CONTENT */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Search Bar */}
            <div className="bg-white rounded-xl p-2 shadow-sm flex">
                <input 
                  type="text" 
                  placeholder="Search cards..." 
                  className="w-full bg-transparent p-2 outline-none text-gray-600"
                />
            </div>

            {/* Tabs */}
            <div className="flex gap-4 border-b border-gray-200 pb-2">
                <button className="text-blue-600 font-medium border-b-2 border-blue-600 pb-2">Cards</button>
                <button className="text-gray-400 hover:text-gray-600 pb-2">Collections</button>
            </div>

            {/* Card Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {
                pokemoncards.map((card) => (
                  <Card key={card.id} card={card} />
                ))
              }
            </div>
          </div>

          {/* RIGHT: INSPECTOR PANEL (Sticky) */}
          <aside className="lg:col-span-4">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-6">
              
              {/* Large Card Preview */}
              <div className="w-3/4 mx-auto aspect-[2.5/3.5] bg-gray-200 rounded-lg mb-6 shadow-inner"></div>
              
              <h2 className="text-xl font-bold text-center mb-1">Umbreon EX</h2>
              <div className="text-center mb-6">
                <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">Dark</span>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-400">Illustrator</span>
                  <span className="font-medium">Yashiro Nanaco</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-400">Set</span>
                  <span className="font-medium">Terastal Festival</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-400">Rarity</span>
                  <span className="font-medium">SAR</span>
                </div>
                 <div className="flex justify-between py-2">
                  <span className="text-gray-400">Price</span>
                  <span className="font-medium text-green-600">$175.00</span>
                </div>
              </div>

            </div>
          </aside>
        </main>

      </div>
    </div>
  );
}
