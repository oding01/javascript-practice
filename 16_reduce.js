const carts = [
  {
    quantity: 2,
    product: {
      category: 'Graphic Card',
      name: 'GeForce RTX 4090',
      price: 400000,
      soldout: true,
    },
  },
  {
    quantity: 1,
    product: {
      category: 'Shoes',
      name: 'Nike Air Max 97 Triple White',
      price: 200000,
      soldout: true,
    },
  },
  {
    quantity: 3,
    product: {
      category: 'Notebook',
      name: 'MacBook Air 15 M3, 16GB',
      price: 2200000,
      soldout: false,
    },
  },
  {
    quantity: 10,
    product: {
      category: 'Food',
      name: 'Cavendish & Harvey Sour Cherry',
      price: 5000,
      soldout: false,
    },
  },
];

const cartSum = carts.reduce((accumulator, currentObject) => {
  return accumulator + currentObject.quantity * currentObject.product.price;
}, 0);

console.log(`결제할 총 금액은 다음과 같습니다 = ${cartSum}`);
