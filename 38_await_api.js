const api = require('./mock-api/test-tools/api');

async function main() {
  const getUser = await api.get('/users');
  const putUser = await api.put('/users/1', {
    name: '이어진변경2',
    email: 'eojinChange@naver.com',
    age: 25,
  });

  for (const user of getUser) {
    if (user.id !== 1) {
      await api.delete(`/users/${user.id}`);
    }
  }
  const getRestUser = await api.get('/users');
  console.log(getRestUser);
}

main();

// - 유저 1명의 정보를 수정하고 나머지 유저는 삭제한 뒤 유저 반환 API 를 호출하라
// - 상품 2개를 추가한 뒤 상품 1개를 수정하고, 수정한 상품을 장바구니에 담자
// - 앞서 장바구니에 담았단 상품의 수량을 수정하고, 아예 삭제해버리자

// - 유저 2명을 추가한 뒤 유저 반환 API 를 호출하라
/*
  //   const promise = await api.post('/users', {
  //     name: '이어진',
  //     email: 'eojin@naver.com',
  //     age: 25,
  //   });
  //   await api.post('/users', {
  //     name: '이어진2',
  //     email: 'eojin2@naver.com',
  //     age: 25,
  //   });
  //   const getUser = api.get('/users');
  //   console.log(getUser);

  const promise = new Promise((resolve, reject) => {
    resolve([
      {
        name: '이어진',
        email: 'eojin@naver.com',
        age: 25,
      },
      { name: '이어진2', email: 'eojin2@naver.com', age: 25 },
    ]);
  });

  const getUser = await promise; // promise.then((result) => console.log(result));
  console.log(getUser);
 */
