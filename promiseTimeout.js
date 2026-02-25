/*
Promise Timeout
When fetching data or performing other async operations, it is sometimes useful to set a timeout duration, i.e. enforce that a response is received before the timeout, otherwise deem the request a failed one.

Implement a promiseTimeout function that accepts a promise and a timeout duration (in milliseconds) and returns a Promise. If the promise argument is settled within the timeout period, 
the returned promise is settled with the promise argument's settled value, which can be both resolved/rejected values. Otherwise, the returned promise will reject with the string "Promise timeout".


function fakeFetch(latency) {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation that resolves after `latency`.
    setTimeout(() => {
      resolve('Data successfully fetched!');
    }, latency);
  });
}

const response = await promiseTimeout(fakeFetch(1000), 2000);
console.log(response); // Data successfully fetched!

await promiseTimeout(fakeFetch(5000), 2000);
// "Promise timeout" thrown.

*/

/**
 * @template T
 * @param {Promise<T>} promise
 * @param {number} duration
 * @return {Promise<T>}
 */
export default function promiseTimeout(promise, duration) {
    // const timeout = new Promise((_, reject) => {
    //   setTimeout(() => {
    //     reject("Promise timeout");
    //   }, duration);
    // })
    // return Promise.race([promise, timeout]);

    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
          reject('Promise timeout');
        }, duration);
  
        promise
          .then((val) => resolve(val))
          .catch((err) => reject(err))
          .finally(() => {
            clearInterval(timeoutId);
          });
    });
}
