const users = [
  { name: 'Aaron', age: 10, specialty: 'frontend' },
  { name: 'Baron', age: 20, specialty: 'backend' },
  { name: 'Caron', age: 30, specialty: 'engineer' },
];

for (let index in users) {
  console.log(users[index].name);
}

for (let user of users) {
  console.log(user.name);
}
