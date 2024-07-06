import React from "react";
function EpisodeButton({setSeasonFilter}) {
    return (
    <>
        <div className="flex gap-2 mb-4 justyfy-center align-center">
            <button onClick={() => setSeasonFilter('all')} className="p-4 bg-blue-500 text-white rounded-md">All</button>
            <button onClick={() => setSeasonFilter('S01')} className="p-4 py-2 bg-blue-500 text-white rounded-md">Season 1</button>
            <button onClick={() => setSeasonFilter('S02')} className="p-4 bg-blue-500 text-white rounded-md">Season 2</button>
            <button onClick={() => setSeasonFilter('S03')} className="p-4 py-2 bg-blue-500 text-white rounded-md">Season 3</button>
            <button onClick={() => setSeasonFilter('S04')} className="p-4 py-2 bg-blue-500 text-white rounded-md">Season 4</button>
            <button onClick={() => setSeasonFilter('S05')} className="p-4 py-2 bg-blue-500 text-white rounded-md">Season 5</button>
            <button onClick={() => setSeasonFilter('S06')} className="p-4 py-2 bg-blue-500 text-white rounded-md">Season 6</button>
        </div>
    </>);
}

export default EpisodeButton;