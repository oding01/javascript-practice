// 1. 유저 2명을 추가한 뒤 유저 반환 API 를 호출하라

const api = require('./mock-api/test-tools/api');

async function main() {
  const promise_1 = await api.post('/users', {
    name: '이어진',
    email: 'eojin@naver.com',
    age: 25,
  });
  const promise_2 = await api.post('/users', {
    name: '이어진2',
    email: 'eojin2@naver.com',
    age: 25,
  });

  Promise.all([promise_1, promise_2]);
  // const getUser = api.get('/users');
  // console.log(getUser);

  // const promise = new Promise((resolve, reject) => {
  //   resolve([
  //     {
  //       name: '이어진',
  //       email: 'eojin@naver.com',
  //       age: 25,
  //     },
  //     { name: '이어진2', email: 'eojin2@naver.com', age: 25 },
  //   ]);
  // });

  // const getUser = await promise; // promise.then((result) => console.log(result));
  // console.log(getUser);
}

main();
