//all helper functions

export const filteredRestaurantList = (searchInput, cards) => {
  const filteredRestaurantListData = cards.filter((card) =>
    card.data.name.includes(searchInput)
  );
  return filteredRestaurantListData;
};
