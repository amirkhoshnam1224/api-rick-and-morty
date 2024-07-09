import React from "react";
function LocationFilter({ typeFilter, setTypeFilter, nameFilter, setNameFilter }) {
    return (
        <div className="">
            <input
                className="p-3 rounded-md		"
                type="text"
                placeholder="Filter by name"
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
            />
            <input
                className="p-3 ml-2 rounded-md"
                type="text"
                placeholder="Filter by type"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
            />
        </div>
    );
}

export default LocationFilter;