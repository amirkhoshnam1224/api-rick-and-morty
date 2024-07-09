// src/components/Pagination/Pagination.jsx
import React from 'react';
import PropTypes from 'prop-types';

function Pagination({ currentPage, pageCount, onPageChange }) {
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <ul className="flex space-x-2 mt-4">
      {pages.map(page => (
        <li 
          key={page}
          className={`cursor-pointer px-4 py-2 rounded-md ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`} 
          onClick={() => onPageChange(page)}
        >
          {page}
        </li>
      ))}
    </ul>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
