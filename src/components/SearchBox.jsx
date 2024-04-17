import React from "react";
import { ImSearch } from "react-icons/im";
import { createQueryObject } from "../helpers/helper";

function SearchBox({search , setSearch , setQuery}) {
  const searchHndler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };


  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
      <button onClick={searchHndler}>
        <ImSearch />
      </button>
    </div>
  );
}

export default SearchBox;
