const promise = new Promise((resolve, reject) => {
  reject({ success: false });
});
console.log(promise);

const promises = Promise.reject({ success: false });
console.log(promises);
