const promise = new Promise((resolve, reject) => {
  resolve({ success: true });
});
promise.then((success_data) => {
  console.log(success_data);
});

// const promise = Promise.resolve({ success: true })
// promise.then((success_data) => {
// 	console.log(success_data)
// })

//성공 Fulfilled 상태의 Promise 객체는 실제로 이 자바스크립트 코드와 정확히 동일하다!