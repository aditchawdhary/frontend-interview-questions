/*
Promise.reject
The Promise.reject() static method returns a Promise object that is rejected with a given reason.

Source: Promise.reject() - JavaScript | MDN

Unlike Promise.resolve(), Promise.reject() always wraps reason in a new Promise object, even when reason is already a Promise.

Implement the Promise.reject() function as promiseReject. You can ignore the case where this is referenced within the implemented function.

Examples

try {
  promiseReject('Mayday!');
} catch (err) {
  console.log(err); // Mayday!
}
*/

/**
 * @param {*} reason
 * @returns Promise
 */
export default function promiseReject(reason) {
  return new Promise((_, reject) => {
    reject(reason);
  })
}
