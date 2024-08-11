import React, { useState, useEffect } from 'react';
import './Characters.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterBar from '../../components/FilterBar/FilterBar';
import CharacterList from '../../components/Character/CharacterList/CharacterList';
import axios from 'axios';
import Pagination from '../../components/Pagination/Pagination';

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [speciesFilter, setSpeciesFilter] = useState('all');
  const [genderFilter, setGenderFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const PageSize = 8;

  const fetchCharacters = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character', {
        params: {
          name: search,
          status: statusFilter !== 'all' ? statusFilter : undefined,
          species: speciesFilter !== 'all' ? speciesFilter : undefined,
          gender: genderFilter !== 'all' ? genderFilter : undefined,
          page: currentPage,
        },
      });
      setCharacters(response.data.results);
      setPageCount(response.data.info.pages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [search, statusFilter, speciesFilter, genderFilter, currentPage]);

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className='p-4 w-screen flex flex-col justify-center items-center bg-customBlack'>
      <SearchBar search={search} setSearch={setSearch} />
      <div className='flex gap-6 text-customgreen'>
        <h1 className='px-4 py-2 text-customgreen rounded-md mr-2'>STATUS</h1>
        <h1 className='px-4 py-2 text-customgreen rounded-md mr-2'>SPECIES</h1>
        <h1 className='px-4 py-2 text-customgreen rounded-md mr-2'>GENDER</h1>
      </div>
      <div className="">
        <FilterBar setStatusFilter={setStatusFilter} setSpeciesFilter={setSpeciesFilter} setGenderFilter={setGenderFilter} />
      </div>
      <CharacterList filteredCharacters={characters} />
      <Pagination currentPage={currentPage} pageCount={pageCount} onPageChange={changePage} />
    </div>
  );
}

export default Characters;
