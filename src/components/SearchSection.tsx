
import React from 'react';
import { Search } from 'lucide-react';

const SearchSection = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 mb-8">
      <h3 className="text-xl font-bold mb-4 text-green-900">Search Our Knowledge Base</h3>
      <div className="relative">
        <input 
          type="text" 
          placeholder="Search for articles..." 
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 pl-10"
        />
        <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
        <button className="bg-green-800 hover:bg-green-900 text-white absolute right-2 top-2 px-4 py-1.5 rounded-md text-sm transition-colors">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchSection;
