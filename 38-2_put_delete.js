// 2. 유저 1명의 정보를 수정하고 나머지 유저는 삭제한 뒤 유저 반환 API 를 호출하라
const api = require('./mock-api/test-tools/api');

async function main() {
  const getUser = await api.get('/users');
  const putUser = await api.put('/users/1', {
    name: '이어진변경2',
    email: 'eojinChange@naver.com',
    age: 25,
  });

  const promises = getUser
    .filter((user) => user.id !== 1)
    .map(async (user) => await api.delete(user.id));
  await Promise.all(promises);

  // for (const user of getUser) {
  //   if (user.id !== 1) {
  //     await api.delete(`/users/${user.id}`);
  //   }
  // }
  const getRestUser = await api.get('/users');
  console.log(getRestUser);
}

main();
