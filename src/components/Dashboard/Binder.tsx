// components
import Card from "../../components/Card";
import SearchBar from './SearchBar';
import FilterDropdown from "./FilterDropdown";

// data
import { pokemoncards } from "../../data/pokemoncards";
import { useMemo, useState } from "react";

export default function Binder() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({ types: [] as string[], rarities: [] as string[] });

  const handleSearchSubmit = (searchTerm: string) => {
    setQuery(searchTerm);
  };

  function handleResetFilters() {
    setFilters({ types: [], rarities: [] });
  }

  // Simple client-side filtering — adapt field names to your card object shape
  const visibleCards = useMemo(() => {
    return pokemoncards.filter((card) => {
      // 1) text search (name)
      if (query.trim()) {
        const name = (card.name || "").toLowerCase();
        if (!name.includes(query.toLowerCase())) return false;
      }

      // 2) type filter (if any)
      if (filters.types.length > 0) {
        // adapt `card.type` if your data uses arrays or multiple type fields
        if (!filters.types.includes(card.cardType)) return false;
      }

      // 3) rarity filter
      if (filters.rarities.length > 0) {
        if (!filters.rarities.includes(card.rarity)) return false;
      }

      return true;
    });
  }, [pokemoncards, query, filters]);

  return (
    <div className="lg:col-span-8 flex flex-col gap-6">
      <SearchBar onSearch={handleSearchSubmit} />
      {/* Filter row under the search bar */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <FilterDropdown
            availableTypes={["Pokemon", "Supporter", "Item"]}
            availableRarities={["MUR", "SAR", "SR", "R", "C"]}
            initial={filters}
            onChange={(f) => setFilters(f)}
            onReset={handleResetFilters}
          />
          <button
            onClick={handleResetFilters}
            className="text-sm text-gray-500 hover:underline"
          >
            Reset Filter
          </button>
        </div>

        {/* small results count (optional) */}
        <div className="text-sm text-gray-500">
          {visibleCards.length} cards
        </div>
      </div>

      <div className="flex gap-4 border-b border-gray-200 pb-2">
        <button className="text-blue-600 font-medium border-b-2 border-blue-600 pb-2">Cards</button>
        <button className="text-gray-400 hover:text-gray-600 pb-2">Collections</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {visibleCards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
