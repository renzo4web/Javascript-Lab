// Array of objects
const priceRange = [
  { toltip: 'Inexpensive', priceMax: 0, priceMin: 10, label: '$' },
  { toltip: 'Normal', priceMax: 11, priceMin: 25, label: '$$' },
  { toltip: 'Pricey', priceMax: 26, priceMin: 50, label: '$$$' },
];

const restaurants = [
  { restaNAme: 'Yikers', averagePrice: 15 },
  { restaNAme: 'Solo', averagePrice: 100 },
  { restaNAme: 'Mac', averagePrice: 27 },
];

const filterRestaurantByPrice = (restaurant, price) => {
  return restaurant.filter((rest) => rest.averagePrice <= price);
  
};

console.log(filterRestaurantByPrice(restaurants, 25));
