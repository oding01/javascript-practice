const promise = new Promise((resolve, reject) => {
  reject({ success: false });
});
promise.catch((failled_data) => {
  console.log(failled_data);
});

// const promise = Promise.reject({ success: false })
// promise.catch((failled_data) => {
// 	console.log(failled_data)
// })

// 실패 Rejected 상태의 Promise 객체는 실제로 이 자바스크립트 코드와 정확히 동일하다!
