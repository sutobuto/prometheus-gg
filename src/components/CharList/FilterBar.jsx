import React from "react";
import ValkData from "./ValkData";

const FilterBar = ({ setSearch, search }) => {
  const handleSearch = (text) => {
    setSearch(text);
  };
  return (
    <div>
      <input
        onChange={(text) => {
          setSearch(text.target.value);
        }}
        placeholder='Search valks here...'
      />
    </div>
  );
};

export default FilterBar;
