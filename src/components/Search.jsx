import React, { useState } from 'react';
import { Divider, Input } from 'antd';

function Search({ searchString, setSearchString }) {
  const handleSearch = (e) => {
    setSearchString(e.target.value);
  };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchString} type="text" onChange={handleSearch} />
    </>
  );
}

export default Search;
