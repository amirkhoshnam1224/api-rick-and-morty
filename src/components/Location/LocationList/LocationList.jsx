import React from "react";
import CardLocation from "../CardLocation/CardLocation";
function LocationList({filteredLocations}) {
    return (
        <>
            <ul className="mt-9 grid grid-cols-4 gap-9 md:grid-cols-6 lg:grid-cols-8 flex justify-center items-center">
                {filteredLocations.map((location) => (
                    <CardLocation
                        key={location.id}
                        name={location.name}
                        type={location.type}
                        dimension={location.dimension}
                        residents={location.residents}
                    />
                ))}
            </ul>
        </>);
}

export default LocationList;