var object = {
  name: 'Aaron',
  age: 10,
  address: {
    location: 'Earth',
  },
  cars: ['Ford', 'Porche'],
};

function copy_object(object) {
  const copied = JSON.stringify(object);

  return copied;
}

var copied = JSON.parse(copy_object(object));

copied.name = 'Baron';
copied.address.location = 'Moon';
copied.cars.push('Aston Martin');
object === copied;
console.log(object);
console.log(copied);
