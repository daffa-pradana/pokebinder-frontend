// components
import Card from "../../components/Card";

// data
import { pokemoncards } from "../../data/pokemoncards";

export default function Binder() {
  return (
    <div className="lg:col-span-8 flex flex-col gap-6">
      <div className="bg-white rounded-xl p-2 shadow-sm flex">
          <input 
            type="text" 
            placeholder="Search cards..." 
            className="w-full bg-transparent p-2 outline-none text-gray-600"
          />
      </div>
      <div className="flex gap-4 border-b border-gray-200 pb-2">
          <button className="text-blue-600 font-medium border-b-2 border-blue-600 pb-2">Cards</button>
          <button className="text-gray-400 hover:text-gray-600 pb-2">Collections</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {
          pokemoncards.map((card) => (
            <Card key={card.id} card={card} />
          ))
        }
      </div>
    </div>
  );
}
