import React, { useEffect, useState } from 'react';
import { getEpisodes } from '../../Api/Api'
import SearchBar from '../..//components/SearchBar/SearchBar';
import EpisodeButton from '../../components/Episode/EpisodeButton/EpisodeButton';
import EpisodeList from '../../components/Episode/EpisodeList/EpisodeList';

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [search, setSearch] = useState('');
  const [seasonFilter, setSeasonFilter] = useState('all');


  useEffect(() => {
    getEpisodes()
      .then(data => setEpisodes(data))
      .catch(error => console.log(error))
  }, []);

  const filteredEpisodes = episodes.filter((episode) => {
    const episodeSeason = episode.episode.split('E')[0];
    const seasonMatch = seasonFilter === 'all' || episodeSeason === seasonFilter;
    const nameMatch = episode.name.toLowerCase().includes(search.toLowerCase());
    return seasonMatch && nameMatch;
  });

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>Episodes Page</h1>
      <SearchBar search={search} setSearch={setSearch} />

      <EpisodeButton
        setSeasonFilter={setSeasonFilter}
      />
<EpisodeList
filteredEpisodes={filteredEpisodes}
/>
 
    </div>
  );
}

export default Episodes;
