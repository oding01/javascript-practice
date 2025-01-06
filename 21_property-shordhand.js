const detail_products = [
  {
    product_id: 1,
    name: 'GeForce RTX 4090',
    category: {
      category_id: 23,
      name: 'Graphic Card',
    },
    option: [
      {
        option_id: 12,
        name: '256GB',
        additional_price: 0,
      },
      {
        option_id: 13,
        name: '512GB',
        additional_price: 100000,
      },
    ],
    price: 400000,
  },
  {
    product_id: 2,
    name: 'Nike Air Max 97',
    category: {
      category_id: 108,
      name: 'Shoes',
    },
    option: [
      {
        option_id: 201,
        name: 'Triple White',
        additional_price: 20000,
      },
      {
        option_id: 202,
        name: 'Triple Black',
        additional_price: 40000,
      },
    ],
    price: 200000,
  },
  {
    product_id: 3,
    name: 'MacBook Air 15 M3, 16GB',
    category: {
      category_id: 49,
      name: 'Notebook',
    },
    option: [
      {
        option_id: 495,
        name: '16GB',
        additional_price: 0,
      },
      {
        option_id: 496,
        name: '32GB',
        additional_price: 320000,
      },
    ],
    price: 2200000,
  },
];

function summaryProduct({ product_id, name, category, option, price }) {
  //   const { category_id, ...newCategory } = category; // console.log(newCategory) => { name : ... }
  //   const representative = option[0] || '옵션 존재하지 않음';
  //   const { option_id, ...newOption } = representative;
  const representative = option[0]
    ? {
        name: option[0].name,
        additional_price: option[0].additional_price,
      }
    : '옵션 존재하지 않음';

  const newProduct = {
    product_id: product_id,
    name: name,
    category: category.name,
    option: representative,
    price: price,
  };

  return newProduct;
}

const productItem = detail_products.map((product) => {
  const products = summaryProduct(product);
  console.log(products);
});
