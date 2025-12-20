import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import Pokeball from '@/assets/images/white-pokeball-img.svg?react';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);
  };

  const handleSearchClick = (): void => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  };

  <div className="bg-white rounded-xl p-2 shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.1)] flex">
      <input 
        type="text" 
        placeholder="Search cards..." 
        className="w-full bg-transparent p-2 outline-none text-gray-600"
      />
  </div>

  return (
    /* Container: flexbox, rounded pill shape, white bg, and a soft shadow */
    <div className="bg-white rounded-xl p-2 shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.1)] flex">
      
      {/* Input: no border, expands to fill space, removes the blue focus ring */}
      <input
        type="text"
        className="w-full bg-transparent p-2 outline-none text-gray-600"
        placeholder="Search Pokémon..."
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />

      {/* Button: red background, circular, centers the icon */}
      <button
        onClick={handleSearchClick}
        type="button"
        className="w-12 h-12 bg-[#ff5350] hover:bg-[#e0413e] transition-transform duration-150 rounded-xl flex items-center justify-center p-0 shadow-md active:scale-95 cursor-pointer"
      >
        <Pokeball className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default SearchBar;