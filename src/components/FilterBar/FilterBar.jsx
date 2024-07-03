function FilterBar({setStatusFilter,setSpeciesFilter,setGenderFilter}) {
    return (
        <>
            <select className='px-4 py-2 bg-blue-500 text-white rounded-md mr-2' onChange={(e) => setStatusFilter(e.target.value)}>STATUS
                <option value="all">All</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>

            <select className='px-4 py-2 bg-blue-500 text-white rounded-md mr-2' onChange={(e) => setSpeciesFilter(e.target.value)}>SPECIES
                <option value="all">All</option>
                <option value="human">Human</option>
                <option value="alien">Alien</option>
                <option value="unknown">Unknown</option>

            </select>

            <select className='px-4 py-2 bg-blue-500 text-white rounded-md' onChange={(e) => setGenderFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="male">Men</option>
                <option value="female">Famel</option>
                <option value="unknown">Unknown</option>
            </select>
        </>
    );
}

export default FilterBar ;