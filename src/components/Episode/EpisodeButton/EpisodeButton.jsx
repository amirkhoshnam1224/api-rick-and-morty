import React from "react";
function EpisodeButton({setSeasonFilter}) {
    return (
    <>
        <div className="flex gap-2  justyfy-center align-center">
            <button onClick={() => setSeasonFilter('all')} className="pl-6 pr-6 bg-blue-500 text-white rounded-md">All</button>
            <button onClick={() => setSeasonFilter('S01')} className="h-10 pl-4 pr-4 bg-blue-500 text-white rounded-md">Season 1</button>
            <button onClick={() => setSeasonFilter('S02')} className="h-10 pl-4 pr-4 bg-blue-500 text-white rounded-md">Season 2</button>
            <button onClick={() => setSeasonFilter('S03')} className="h-10 pl-4 pr-4 bg-blue-500 text-white rounded-md">Season 3</button>
            <button onClick={() => setSeasonFilter('S04')} className="h-10 pl-4 pr-4 bg-blue-500 text-white rounded-md">Season 4</button>
            <button onClick={() => setSeasonFilter('S05')} className="h-10 pl-4 pr-4 bg-blue-500 text-white rounded-md">Season 5</button>
        </div>
    </>);
}

export default EpisodeButton;