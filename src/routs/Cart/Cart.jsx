import React, { useContext } from 'react';
import { ShopContext } from '../../ContextApi/Context';

const Cart = () => {
    const { clickCounts, characters, handleButtonPlusClick, handleButtonDecreaseClick } = useContext(ShopContext);
    console.log(clickCounts)
    console.log(characters)

    return (
        <div className="cart-page p-4">
            <h1 className="text-2xl font-bold mb-4">Your Carts</h1>
            <ul>
                {Object.keys(clickCounts).map(id => {
                    const character = characters.find(c => c.id === parseInt(id));
                    return (
                        <li key={id} className="mb-2">
                            <h2 className="text-xl">{character.name}</h2>
                            <p>Count: {clickCounts[id]}</p>
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
                        </li>

                    );
                })}
            </ul>
        </div>
    );
};

export default Cart;
