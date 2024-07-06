import React from "react";
import CardEpisode from "../../Episode/CardEpisode/CardEpisode";
function EpisodeList({filteredEpisodes}) {
    return ( 
    <>
         <ul className="mt-9 grid grid-cols-2 gap-9 md:grid-cols-4 lg:grid-cols-6 flex justify-center items-center">
        {filteredEpisodes.map((episode) => (
          <CardEpisode
            key={episode.id}
            name={episode.name}
            air_date={episode.air_date}
            episode={episode.episode}
            characters={episode.characters}
          />
        ))}
      </ul>
    </> );
}

export default EpisodeList;