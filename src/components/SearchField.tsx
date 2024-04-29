import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFilterText } from '@/store/comments.slice';

const SearchField: React.FC = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  //debounce the search term
  useEffect(() => {
    const timerId = setTimeout(() => {
      dispatch(setFilterText(searchTerm));
    }, 200);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form
      className="searchfield inline-block"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className=" text-red-900 border-2 border-solid border-gray-400"
        type="search"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Filter comments..."
      />
    </form>
  );
};

export default SearchField;
