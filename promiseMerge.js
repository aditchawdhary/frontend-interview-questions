/*
Promise Merge
Implement a function that accepts two promises and returns a single Promise. This returned promise fulfills when both input promises fulfill, 
with a single value according to the order and types of the fulfillment values:

Numbers should be added together.
Strings should be concatenated.
Arrays should be combined into a single array.
Plain objects should be merged into a single object.
Other types aren't supported.
The return promise can also be rejected if one of the following happens:

The types of the fulfilled results do not match, reject with the string 'Unsupported data types'.
One of the promises fail, reject with the rejected promise's reason.
Examples

await promiseMerge(Promise.resolve(1), Promise.resolve(2)); // 3
await promiseMerge(Promise.resolve('abc'), Promise.resolve('def')); // 'abcdef'
await promiseMerge(Promise.resolve([1, 2, 3]), Promise.resolve([4, 5, 6])); // [1, 2, 3, 4, 5, 6]
await promiseMerge(Promise.resolve({ foo: 1 }), Promise.resolve({ bar: 2 })); // { foo: 1, bar: 2}

await promiseMerge(Promise.resolve(1), Promise.resolve([])); // Rejected with 'Unsupported data types'
await promiseMerge(Promise.reject(1), Promise.resolve(2)); // Rejected with 1
*/

/**
 * @param {Promise} p1
 * @param {Promise} p2
 * @return {Promise<any>}
 */
export default function promiseMerge(p1, p2) {
  return Promise.all([p1, p2]).then(([val1, val2]) => {
      if(typeof(val1) == "number" && typeof(val2) == "number") {
        return val1 + val2;
      } else if(typeof(val1) == "string" && typeof(val2) == "string") {
        return val1 + val2
      } else if(Array.isArray(val1) && Array.isArray(val2)) {
        return [...val1, ...val2];
      } else if((Object.getPrototypeOf(val1) == Object.prototype) && (Object.getPrototypeOf(val2) == Object.prototype)) {
        return {...val1, ...val2};
      }
      throw 'Unsupported data types';
  });   
}
