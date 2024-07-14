import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../../ContextApi/Context';
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterBar from '../../components/FilterBar/FilterBar';
import ShopList from '../../components/Shop/ShopList/ShopList';
import { getCharacters } from '../../Api/Api';
import Pagination from '../../components/Pagination/Pagination';


function ShopToken() {
    const { characters, setCharacters, search, setSearch, statusFilter, setStatusFilter, speciesFilter, setSpeciesFilter, genderFilter, setGenderFilter, currentPage, setCurrentPage, clickCounts, handleButtonClick } = useContext(ShopContext);


    const PageSize = 8;

    useEffect(() => {
        getCharacters()
            .then(data => setCharacters(data))
            .catch(error => console.error(error))
    }, []);

    const filteredCharacters = characters
        .filter(character => {
            const resultStatus = statusFilter === 'all' || character.status.toLowerCase() === statusFilter;
            const resultSpecies = speciesFilter === 'all' || character.species.toLowerCase() === speciesFilter;
            const resultGender = genderFilter === 'all' || character.gender.toLowerCase() === genderFilter;
            return resultStatus && resultSpecies && resultGender;
        })
        .filter(character => character.name.toLowerCase().includes(search.toLowerCase()));

    const pageCount = Math.ceil(filteredCharacters.length / PageSize);
    const currentCharacters = filteredCharacters.slice((currentPage - 1) * PageSize, currentPage * PageSize);


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
            <ShopList filteredCharacters={currentCharacters} />
            <Pagination currentPage={currentPage} pageCount={pageCount} onPageChange={changePage} />

        </div>
    );
}

export default ShopToken;
