const api = require('./mock-api/test-tools/api');

async function main() {
  const promise = api.post('/users', {
    name: 'Aaron',
    email: 'aaron@gmail.com',
    age: 10,
  });
  promise.catch((error) => {
    console.log(error);
  });
}

main();
