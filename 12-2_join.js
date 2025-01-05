// 장바구니 문자열 배열에서 해당 유저가 어떤 상품을 몇개 담았는지 join을 사용하여 출력

const carts = [
  {
    quantity: 2,
    product: {
      category: 'Graphic Card',
      name: 'GeForce RTX 4090',
    },
  },
  {
    quantity: 1,
    product: {
      category: 'Shoes',
      name: 'Nike Air Max 97 Triple White',
    },
  },
  {
    quantity: 3,
    product: {
      category: 'Notebook',
      name: 'MacBook Air 15 M3, 16GB',
    },
  },
];

const productList = [];
function joinProduct(item) {
  const { product, quantity } = item;
  const productName = product.name;
  const productQuantity = quantity;
  const products = productName + ` ${productQuantity}개`;

  return products;
}

for (let item of carts) {
  const products = joinProduct(item);
  productList.push(products);
}
const product = productList.join(', ');

console.log(product);
