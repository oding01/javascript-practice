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

function summaryProduct(product) {
  const { product_id, name, category, option, price } = product;
  const { category_id, ...newCategory } = category; // console.log(newCategory) => { name : ... }

  const newProduct = {
    product_id: product_id, // || '' < 이렇게 해준다면 비구조 할당의 문제점이 좀 나아질듯. 대신 product.product_id라고 해야겠지...
    name: name,
    category: newCategory.name,
    option: option[0] ? option[0] : undefined,
    price: price,
  };

  return newProduct;
}

const productItem = detail_products.map((product) => {
  return summaryProduct(product);
});
console.log(productItem);
productItem.forEach((item, index) => {
  console.log(
    `상품 ${index + 1}: ${item.name} | 대표옵션: ${item.option.name} / ${
      item.option.additional_price
    }원 | 가격: ${item.price}`
  );
});
