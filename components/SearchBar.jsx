"use client"

import { useState } from "react";

const SearchBar = ({ data, setFilteredData }) => {

    const [searchTerm, setSearchTerm] = useState('');


    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
      };

      const onSearch = (searchTerm) => {
        const filtered = data.filter((item) => {
            const nameMatch = item.company.name.toLowerCase().includes(searchTerm.toLowerCase());
            const typeMatch = item.company.type.toLowerCase().includes(searchTerm.toLowerCase());
            return nameMatch || typeMatch;
          });
          setFilteredData(filtered);
      }
  
    return (
      <div className="flex items-center justify-between text-white gap-3">
        <input
          type="text"
          className="w-64 px-4 py-1 rounded-full bg-white focus:outline-none text-black"
          value={searchTerm}
            onChange={handleInputChange}
            placeholder="Enter a company or type..."
        />
        <button
          className="ml-2 px-4 py-1 rounded-full bg-lightgreen text-white"
        >
          Search
        </button>
      </div>
    );
  };
  
  export default SearchBar;