const filter = (object) => {
  return object.age > 19 && object.specialty === 'backend';
};
const users = [
  { name: 'Aaron', age: 10, specialty: 'frontend' },
  { name: 'Baron', age: 20, specialty: 'backend' },
  { name: 'Caron', age: 30, specialty: 'engineer' },
];
const filtered = [];
for (var user of users) {
  if (filter(user)) {
    filtered.push(user);
  }
}
console.log(filtered);
