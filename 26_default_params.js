class Database {
  constructor() {
    this.data = [];
  }

  save({
    name = 'Unnamed',
    email = 'empty',
    age = 1,
    job = 'Between Jobs',
    specialty = 'Not Determined',
  }) {
    return (this.data = [...this.data, { name, email, age, job, specialty }]);
  }
}

const users = new Database();
const json = [
  {
    name: 'Aaron',
    email: 'aaron@gmail.com',
    age: 10,
    job: 'Developer',
    specialty: 'Backend',
  },
  {
    name: 'Baron',
    email: 'baron@gmail.com',
    age: 20,
    job: 'Designer',
  },
  {
    name: 'Caron',
    email: 'caron@gmail.com',
    age: 30,
  },
  {
    name: 'Daron',
    age: 40,
  },
];
json.map((each) => users.save(each));
console.log(users.data);
