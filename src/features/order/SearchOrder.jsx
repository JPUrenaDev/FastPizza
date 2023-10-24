import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchOrder = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/order/${query}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search"
      ></input>
    </form>
  );
};
