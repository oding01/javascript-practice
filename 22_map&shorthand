function convert({ name, age, address, job }) {
  const converted_user = {};
  const copyUser = {
    name: name,
    age: age,
    address: address || { location: '입력없음' },
    job: job || '직장없음',
  };
  Object.assign(converted_user, copyUser);
  return converted_user;
}

const result = {
  success: false,
  body: [
    {
      name: 'Aaron',
      age: 10,
      address: null,
    },
    {
      name: 'Baron',
      age: 20,
      address: {
        location: 'Earth',
      },
    },
    {
      name: 'Caron',
      age: 30,
      address: null,
      job: 'Developer',
    },
  ],
};

const converted = result.body.map((item) => convert(item));
console.log(converted);
