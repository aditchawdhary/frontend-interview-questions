/*
Map Async
By now you'd be familiar with mapping of elements in an array. If you aren't, please first do the Array.prototype.map question first.

What if the mapping function is not a synchronous function i.e. it returns a promise? Array.prototype.map assumes the mapping function is synchronous and will fail to work properly.

Implement a function mapAsync that accepts an array of items and maps each element with an asynchronous mapping function. The function should return a Promise which resolves to the mapped results.

Examples

const asyncDouble = (x: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * 2);
    }, 10);
  });

const doubled = await mapAsync([1, 2], asyncDouble);
console.log(doubled); // [2, 4]
*/

/**
 * @param {Array<any>} iterable
 * @param {Function} callbackFn
 *
 * @return {Promise}
 */
export default function mapAsync(iterable, callbackFn) {
  return new Promise((resolve, reject) => {
    let iterableLength = iterable.length;
    let promiseArr = new Array(iterableLength);
    if (iterableLength == 0) {
      return resolve(promiseArr);
    }

    iterable.forEach((item, index) => {
      callbackFn(item)
        .then((value) => {
          promiseArr[index] = value;
          iterableLength -= 1;

          if (iterableLength == 0) {
            resolve(promiseArr)
          }
        })
        .catch((err) => reject(err));
    });
  });
}
