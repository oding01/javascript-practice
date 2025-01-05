const todo_list = [
  '[공부] 2025-01-20 : React Hook 종류에 대해 공부하하기',
  '[약속] 2025-02-08 : Backend 개발자 친구와 강남역에서 만나기',
  '[정기] 2025-03-21 : 분기별 목표 정리 및 3개원간 평균 가계부 작성',
  '[운동] 2025-04-01 : 수영 등록하고, 바로 첫 수업 듣기',
  '[공부] 2025-05-08 : Next.js Tutorial 하면서 개인 문서 정리하기',
  '[독서] 2025-06-17 : 레이 달리오의 Principle 원칙 책 10% 읽기',
];

function sliceTodoList(todo) {
  const splitArray = todo.split(' ');
  const splitType = splitArray[0].slice(1, 3);
  const type = splitType;
  const date = splitArray[1];

  return { type, date };
}

for (const [index, each] of todo_list.entries()) {
  const { type, date } = sliceTodoList(each);
  console.log(`${index}: TODO 타입은 ${type}, 날짜는 ${date}`);
}
