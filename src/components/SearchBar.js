import { useState } from "react";
import { filteredRestaurantList } from "../helper/helper";

const SearchBar = ({ cards, setFilterRestaurantList }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="text-center mt-3 outline-none ">
      <input
        type="text "
        placeholder="Search Food"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="bg-green-100 px-3 py-2 "
      />

      <button
        className="bg-green-200 px-3 py-2"
        onClick={() => {
          const filteredRestaurantListData = filteredRestaurantList(
            searchInput,
            cards
          );
          setFilterRestaurantList(filteredRestaurantListData);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
