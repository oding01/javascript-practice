const jobs = {
  DEVELOPER: {
    name: '개발자',
    salary: 250,
  },
  PRODUCT_OWNER: {
    name: '기획자',
    salary: 200,
  },
  PRODUCT_MANAGER: {
    name: '관리자',
    salary: 300,
  },
  DESIGNER: {
    name: '디자이너',
    salary: 180,
  },
};

const user = {
  name: 'Aaron',
  age: 10,
  job: 'Developer',
  address: {
    location: 'Earth',
  },
};

function toString(specificUser) {
  const { name, age, job } = specificUser;
  const jobName = findJob(job);
  return `해당 유저의 이름은 ${name}이고, 나이는 ${age}살 이며, 직업은 ${jobName}입니다.`;
}

function findJob(userJob) {
  for (let job in jobs) {
    if (userJob.toUpperCase() === job) return jobs[job].name;
  }
}

console.log(toString(user));
