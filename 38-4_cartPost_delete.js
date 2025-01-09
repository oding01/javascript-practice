// 4. 앞서 장바구니에 담았던 상품의 수량을 수정하고, 아예 삭제해버리자

const api = require('./mock-api/test-tools/api');

async function main() {
  const cartItem = await api.post('/cart', {
    productId: 2,
    quantity: 3,
  });

  await api.put('/cart/1', {
    productId: cartItem.productId,
    quantity: 1,
  });

  await api.delete('/cart/1');
}

main();