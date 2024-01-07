import React from 'react'

const SearchBox = ({ searchInput, setSearchInput }) => {
  return (
    <div className="my-6 w-fit mx-auto">
      <input
        type="text"
        placeholder="Search here..."
        className="input input-primary"
        value={searchInput}
        onChange={(e)=>setSearchInput(e.target.value)}
      />
    </div>
  );
};

export default SearchBox