import React, { useEffect, useState } from 'react';
import { getEpisodes } from '../../Api/Api';
import SearchBar from '../../components/SearchBar/SearchBar';
import EpisodeButton from '../../components/Episode/EpisodeButton/EpisodeButton';
import EpisodeList from '../../components/Episode/EpisodeList/EpisodeList';
import  Pagination  from '../../components/Pagination/Pagination';

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [search, setSearch] = useState('');
  const [seasonFilter, setSeasonFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const PageSize = 12;

  useEffect(() => {
    getEpisodes()
      .then(data => setEpisodes(data))
      .catch(error => console.log(error));
  }, []);

  const filteredEpisodes = episodes.filter((episode) => {
    const episodeSeason = episode.episode.split('E')[0];
    const seasonMatch = seasonFilter === 'all' || episodeSeason === seasonFilter;
    const nameMatch = episode.name.toLowerCase().includes(search.toLowerCase());
    return seasonMatch && nameMatch;
  });

  const pageCount = Math.ceil(filteredEpisodes.length / PageSize);
  const currentEpisodes = filteredEpisodes.slice((currentPage - 1) * PageSize, currentPage * PageSize);

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className='flex flex-col justify-center items-center bg-customBlack p-4'>
      <SearchBar search={search} setSearch={setSearch} />
      <h1 className="text-customgreen p-2"> Episodes </h1>
      <EpisodeButton setSeasonFilter={setSeasonFilter} />
      <EpisodeList filteredEpisodes={currentEpisodes} />
      
      <Pagination
        currentPage={currentPage}
        pageCount={pageCount}
        onPageChange={changePage} 
      />
    </div>
  );
};

export default Episodes;
