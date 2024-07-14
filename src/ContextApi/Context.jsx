import React, { createContext, useState } from 'react';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [speciesFilter, setSpeciesFilter] = useState('all');
  const [genderFilter, setGenderFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [clickCounts, setClickCounts] = useState({});

  const handleButtonPlusClick = (characterId) => {
    setClickCounts(prevClickCounts => ({
      ...prevClickCounts,
      [characterId]: (prevClickCounts[characterId] || 0) + 1
    }));
  };
  const handleButtonDecreaseClick = (characterId) => {
    setClickCounts(prevClickCounts => ({
      ...prevClickCounts,
      [characterId]: (prevClickCounts[characterId] || 0) - 1
    }));
  };
  console.log("in contex.jsx",clickCounts)
  return (
    <ShopContext.Provider
      value={{
        characters, setCharacters, search, setSearch, statusFilter, 
        setStatusFilter,speciesFilter, setSpeciesFilter, genderFilter,
         setGenderFilter, currentPage, setCurrentPage, clickCounts,
         handleButtonPlusClick,handleButtonDecreaseClick
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
