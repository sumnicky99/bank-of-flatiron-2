import React, { useState } from 'react';

function SearchBar({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    handleSearch(term);
  };

  return (
   <div className='searchField'>
     <input className='search'
      type="text"
      placeholder="Search your recent transaction"
      value={searchTerm}
      onChange={handleChange}
    />    
   </div>
  );
}

export default SearchBar;
