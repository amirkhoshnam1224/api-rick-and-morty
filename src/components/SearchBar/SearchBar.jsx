import React from "react";

function SearchBar ({search,setSearch}){
    return(
      <input
      type="text"
      placeholder="SEARCH"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      className="p-2 rounded-md border-2 border-gray-300"

      />
    )
}
export default SearchBar;