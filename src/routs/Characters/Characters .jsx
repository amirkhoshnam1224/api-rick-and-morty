import React, { useState, useEffect } from 'react';
import './Characters.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterBar from '../../components/FilterBar/FilterBar';
import CharacterList from '../../components/CharacterList/CharacterList';
import {getCharacters} from '../../Api/Api'
function Characters() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [speciesFilter, setSpeciesFilter] = useState('all');
  const [genderFilter, setGenderFilter] = useState('all');

  useEffect(() => {
     getCharacters()
     .then(data => setCharacters(data))
     .catch(error => console.error(error))
  }, []);

  const filteredCharacters = characters.filter(character => {
    const resultStatus = statusFilter === 'all' || character.status.toLowerCase() === statusFilter;
    const resultSpecies = speciesFilter === 'all' || character.species.toLowerCase() === speciesFilter;
    const resultGender = genderFilter === 'all' || character.gender.toLowerCase() === genderFilter;
    return resultStatus && resultSpecies && resultGender;
  }).filter(character =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='bg-black p-4 w-screen flex flex-col justify-center items-center'>

      <SearchBar search={search} setSearch={setSearch}/>
      
      <div className='flex gap-6'>
        <h1 className='px-4 py-2  text-white rounded-md mr-2'>STATUS</h1>
        <h1 className='px-4 py-2  text-white rounded-md mr-2'>SPECIES</h1>
        <h1 className='px-4 py-2  text-white rounded-md mr-2'>GENDER</h1>
      </div>

      <div className="">
        <FilterBar
        setStatusFilter={setStatusFilter}
        setSpeciesFilter={setSpeciesFilter}
        setGenderFilter={setGenderFilter}
        />
      </div>
      
      <CharacterList filteredCharacters={filteredCharacters} />

    </div>
  );
}
export default Characters;
