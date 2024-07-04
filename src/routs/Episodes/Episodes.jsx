import React, { useEffect, useState } from 'react';
import { getEpisodes } from '../../Api/Api'
import CardEpisode from '../../components/CardEpisode/CardEpisode';
const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    getEpisodes()
      .then(data => setEpisodes(data))
      .catch(error => console.log(error))
  }, []);

  return (
    <div>
      <h1>Episodes Page</h1>
      <ul className="mt-9 grid grid-cols-3 gap-9 md:grid-cols-4 lg:grid-cols-6 flex justify-center items-center">
        {episodes.map((episode) => (
          <CardEpisode
            key={episode.id}
            name={episode.name}
            air_date={episode.air_date}
            episode={episode.episode}
            characters={episode.characters}
          />
        ))}
      </ul>
    </div>
  );
}

export default Episodes;
