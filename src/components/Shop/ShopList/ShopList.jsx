import React, { useContext } from 'react';
import ShopCard from '../../Shop/ShopCard/ShopCard';
import { ShopContext } from '../../../ContextApi/Context';

function ShopList({ filteredCharacters }) {
  const { handleButtonClick, clickCounts } = useContext(ShopContext);
  return (
    <ul className="mt-9 grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-4 flex justify-center items-center">
      {filteredCharacters.map(character => (
        <ShopCard
          key={character.id}
          character={character}
          handleButtonClick={handleButtonClick}
          clickCount={clickCounts[character.id] || 0}
          
        />
      ))}
    </ul>
  );
}

export default ShopList;
