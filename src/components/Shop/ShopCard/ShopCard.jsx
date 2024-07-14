import React, { useContext, useState } from 'react';
import { ShopContext } from '../../../ContextApi/Context';

function ShopCard({ character }) {
  const { handleButtonPlusClick, handleButtonDecreaseClick, clickCounts } = useContext(ShopContext);
  const [showButtons, setShowButtons] = useState(false);

  const handleAddClick = () => {
    setShowButtons(true);
    handleButtonPlusClick(character.id);
  };

  return (
    <div className="character-card p-4 border rounded-md shadow-lg">
      <img src={character.image} alt={character.name} className="w-full h-48 object-cover mb-4 rounded-md" />
      <h2 className="text-xl font-bold">{character.name}</h2>
      <p className="text-gray-600">{character.status}</p>
      <p className="text-gray-600">{character.species}</p>
      <p className="text-gray-600">{character.gender}</p>

      {!showButtons ? (
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          onClick={handleAddClick}
        >
          Add
        </button>
      ) : (
        <div className="flex mt-2">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
            onClick={() => handleButtonPlusClick(character.id)}
          >
            +
          </button>
          <span className="px-4 py-2 text-gray-600">{clickCounts[character.id] || 0}</span>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
            onClick={() => handleButtonDecreaseClick(character.id)}
          >
            -
          </button>
        </div>
      )}
    </div>
  );
}

export default ShopCard;
