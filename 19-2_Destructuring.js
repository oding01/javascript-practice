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

const locations = {
  EARTH: {
    name: '지구',
    resource: '동식물',
  },
  MOON: {
    name: '달나라',
    resource: '철광석',
  },
  MARS: {
    name: '화성',
    resource: '적색토',
  },
};

const users = [
  {
    name: 'Aaron',
    age: 10,
    job: 'Developer',
    address: {
      location: 'Earth',
    },
  },
  {
    name: 'Baron',
    age: 20,
    job: 'Product Owner',
  },
  {
    name: 'Caron',
    age: 30,
    job: null,
    address: {
      location: 'Moon',
    },
  },
];

function toString(specificUser) {
  const { name, age, job, address } = specificUser;
  const jobName = findJob(job);
  const location = findLocation(address?.location);
  return `해당 유저의 이름은 ${name}이고, 나이는 ${age}살 이며, 직업은 ${jobName}(이)고, ${location}에 삽니다.`;
}

function findJob(userJob) {
  if (!userJob) return '무직';
  const replaceJob = userJob.replace(' ', '_');
  for (let job in jobs) {
    if (replaceJob.toUpperCase() === job) return jobs[job].name;
  }
}

function findLocation(userLocation) {
  if (!userLocation) return '어딘가';
  for (let location in locations) {
    if (userLocation.toUpperCase() === location)
      return locations[location].name;
  }
}

for (let user of users) {
  console.log(toString(user));
}
