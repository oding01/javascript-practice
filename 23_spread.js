const user = {
  id: 1,
  name: 'Aaron',
  age: 10,
  address: 'Earth',
  job: 'Developer',
  specialty: 'Backend',
};

function handleChange(user, property, value) {
  const updatedUser = { ...user, [property]: value };
  return updatedUser;
}

const updated = handleChange(user, 'job', 'Designer');
console.log(updated);
