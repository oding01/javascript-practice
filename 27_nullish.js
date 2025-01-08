const students = [
  {
    name: 'Aaron',
    korean: 84,
    mathematics: 81,
    english: 50,
    science: 42,
  },
  {
    name: 'Baron',
    korean: 0,
    mathematics: 100,
    science: 68,
  },
  {
    name: 'Caron',
    korean: 0,
    mathematics: 25,
    english: 0,
    science: 100,
  },
  {
    name: 'Daron',
    korean: 79,
    english: 24,
    science: null,
  },
];

const result = students.map((student) => {
  console.log(`> ${student.name}
        - 국어 : ${student.korean ?? '응시하지 않음'}
        - 수학 : ${student.mathematics ?? '응시하지 않음'}
        - 영어 : ${student.english ?? '응시하지 않음'}
        - 과학 : ${student.science ?? '응시하지 않음'}`);
});
