const promise = new Promise((resolve, reject) => {
  resolve({ success: true });
});
console.log(promise);

const promises = Promise.resolve({ success: true });
console.log(promises);
