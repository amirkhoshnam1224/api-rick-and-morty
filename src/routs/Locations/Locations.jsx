import React, { useEffect, useState } from 'react';
import { getLocation } from '../../Api/Api'
import CardLocation from '../../components/CardLocation/CardLocation';
const Location = () => {
  const [Location, setLocation] = useState([]);
  useEffect(() => {
    getLocation()
      .then(data => setLocation(data))
      .catch(error => console.log(error))
  }, []);

  return (
    <div>
      <h1>location Page</h1>
      <ul className="mt-9 grid grid-cols-4 gap-9 md:grid-cols-6 lg:grid-cols-8 flex justify-center items-center">
        {Location.map((location) => (
          <CardLocation
            key={location.id}
            name={location.name}
            type={location.type}
            dimension={location.dimension}
            residents={location.residents}
          />
        ))}
      </ul>
    </div>
  );
}

export default Location;