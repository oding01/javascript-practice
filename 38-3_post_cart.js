// 3. 상품 2개를 추가한 뒤 상품 1개를 수정하고, 수정한 상품을 장바구니에 담자

const api = require('./mock-api/test-tools/api');

async function main() {
  const addProduct_1 = await api.post('/products', {
    name: '아이폰',
    price: 1800000,
    description: '아주 비쌉니다. 중고 방어 최고!',
  });
  const addProduct_2 = await api.post('/products', {
    name: 'RTX 5090',
    price: 400000,
    description: '사장님이 미쳤어요',
  });

  Promise.all([addProduct_1, addProduct_2]);

  const putProduct = await api.put('/products/2', {
    name: 'RTX 5090',
    price: 4000000,
    description: '잠깐 해킹 당했습니다',
  });

  const postCart = await api.post('/cart', {
    productId: putProduct.id,
    quantity: 3,
  });

  console.log(postCart);
}

main();
