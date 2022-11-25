const promiseAll = (promises: Promise<any>[]) => {

  const outputs: any[] = [];
  let counter = 0;

  return new Promise((resolve, reject) => {
    promises.forEach(async (promise, index) => {
      try {
        const res = await promise;
        outputs[index] = res;
        counter++;
        if (counter === promises.length) {
          resolve(outputs);
        }
      } catch (error) {
        reject(error);
      }
    });
  });

};

const promises = [
  Promise.resolve(2),
  Promise.resolve('value'),
  Promise.reject('error'),
  new Promise((res, reject) => {
    setTimeout(() => res('time'), 1000)
  })
];

console.log(promiseAll(promises).then(console.log).catch(console.log));
console.log(Promise.all(promises).then(console.log).catch(console.log));

