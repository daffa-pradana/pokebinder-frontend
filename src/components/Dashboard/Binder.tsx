// components
import Card from "../../components/Card";
import SearchBar from './SearchBar';

// data
import { pokemoncards } from "../../data/pokemoncards";

export default function Binder() {
  const handleSearchSubmit = (searchTerm: string) => {
    console.log("TypeScript search for:", searchTerm);
    // Fetch logic goes here
  };

  return (
    <div className="lg:col-span-8 flex flex-col gap-6">
      <SearchBar onSearch={handleSearchSubmit} />
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
