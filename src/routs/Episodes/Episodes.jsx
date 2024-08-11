import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import EpisodeButton from '../../components/Episode/EpisodeButton/EpisodeButton';
import EpisodeList from '../../components/Episode/EpisodeList/EpisodeList';
import Pagination from '../../components/Pagination/Pagination';
import axios from 'axios';

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [search, setSearch] = useState('');
  const [seasonFilter, setSeasonFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const PageSize = 12;

  const fetchAllEpisodes = async () => {
    let allEpisodes = [];
    let page = 1;
    let hasMorePages = true;
    try {
      while (hasMorePages) {
        const response = await axios.get('https://rickandmortyapi.com/api/episode', {
          params: {
            page: page,
            episode: seasonFilter !== 'all' ? `${seasonFilter}` : undefined,
          },
        });
        allEpisodes = [...allEpisodes, ...response.data.results];
        if (!response.data.info.next) {
          hasMorePages = false;
        } else {
          page += 1;
        }
      }
      setEpisodes(allEpisodes);
    } catch (error) {
      console.error('Error fetching episodes:', error);
    }
  };

  const fetchEpisodesBySearch = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/episode', {
        params: {
          name: search,
        },
      });
      setEpisodes(response.data.results);
    } catch (error) {
      console.error('Error fetching search episodes:', error);
    }
  };

  useEffect(() => {
      fetchAllEpisodes();
  }, [seasonFilter]);

  useEffect(() => {
      fetchEpisodesBySearch();
  }, [search]);

  const filteredEpisodes = episodes.filter((episode) => {
    return episode.name.toLowerCase().includes(search.toLowerCase());
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
