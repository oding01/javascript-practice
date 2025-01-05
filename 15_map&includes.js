const budget = 23000;
const favorites = ['chicken', 'pizza'];
const foods = [
  {
    category: 'chicken',
    name: 'Hosik',
    price: 20000,
  },
  {
    category: 'chicken',
    name: 'Kentucky',
    price: 16000,
  },
  {
    category: 'chicken',
    name: 'BHC',
    price: 26000,
  },
  {
    category: 'pizza',
    name: 'Mr.Pizza',
    price: 26000,
  },
  {
    category: 'pizza',
    name: 'Pizza Hut',
    price: 30000,
  },
  {
    category: 'meat',
    name: 'MyeongRyun Jinsa',
    price: 15000,
  },
  {
    category: 'meat',
    name: 'Daedo Sikdang',
    price: 55000,
  },
];

foods.map((food) => {
  if (favorites.includes(food.category) && food.price <= 23000)
    console.log(food.name);
});
