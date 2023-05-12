import { useState } from "react";

const SearchBar = ({ cards, setNewRestaurant }) => {
  const [searchInput, setSearchInput] = useState("");
  const filteredRestaurantList = () => {
    const filteredRestaurantListData = cards.filter((card) =>
      card.data.name.includes(searchInput)
    );
    return filteredRestaurantListData;
  };
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
          //filter the restaurant list
          const filteredRestaurantListData = filteredRestaurantList(
            searchInput,
            cards
          );
          //console.log(filteredRestaurantListData);
          //set the new restaurant data which gets rendered
          setNewRestaurant(filteredRestaurantListData);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
