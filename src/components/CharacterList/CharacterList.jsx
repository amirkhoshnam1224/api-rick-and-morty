import React from "react";
import CustomCard from '../Card/Card'
function CharacterList({filteredCharacters }) {
    return (
        <>
            <ul className="mt-9 grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-4 flex justify-center items-center">
                {filteredCharacters .map(character => (
                    <CustomCard
                        key={character.id}
                        name={character.name}
                        gender={character.gender}
                        image={character.image}
                        status={character.status}
                        species={character.species}
                        type={character.type}
                        origin={character.origin}
                        location={character.location}
                    />
                ))}
            </ul>
        </>
    );
}

export default CharacterList;