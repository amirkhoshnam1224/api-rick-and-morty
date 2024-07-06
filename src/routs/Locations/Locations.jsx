
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationFilter from '../../components/Location/LocationFilters/LocationFilter';
import LocationList from '../../components/Location/LocationList/LocationList';
const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');


  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location')
      .then(response => setLocations(response.data.results))
      .catch(error => console.error(error));
  }, []);

  const filteredLocations = locations.filter(location => {
    return (
      (nameFilter === '' || location.name.toLowerCase().includes(nameFilter.toLowerCase())) &&
      (typeFilter === '' || location.type.toLowerCase().includes(typeFilter.toLowerCase()))
    )
  });

  return (
    <div>
      <h1>Locations Page</h1>
      <LocationFilter
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        nameFilter={nameFilter}
        setNameFilter={setNameFilter}
      />

      <LocationList
        filteredLocations={filteredLocations}
      />
    </div>
  );
}

export default Locations;












