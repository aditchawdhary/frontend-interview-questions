/*
Promisify II
Premium
Completed
Languages
Difficulty
Medium
Recommended duration to spend during interviews
15 mins
Users completed
823 done
Note: This is an advanced version of Promisify, which you should complete first before attempting this question.

In Promisify, the promisify function returns a promise for a function following the common callback-last error-first callback style, i.e. taking a (err, value) => ... callback as the last argument. However, promisify does not work for functions that do not follow that exact signature.

In Node.js, using the util.promisify.custom symbol, one can override the return value of util.promisify(), which is useful for cases where the original function does not follow the standard format of taking an error-first callback as the last argument. This is especially useful for functions with a legacy format that's incompatible with util.promisify's callback-last convention.


// Example usage in Node.js.
const util = require('node:util');

function doSomething(callback, foo) {
  // ...
}

doSomething[util.promisify.custom] = (foo) => {
  return getPromiseSomehow();
};

const promisified = util.promisify(doSomething);
console.log(promisified === doSomething[util.promisify.custom]);
// prints 'true'
Implement a promisify function that has support for custom return values. Use the symbol Symbol.for('util.promisify.custom') as the key for the overridden value.

Examples

// Example function with callback as the first argument.
// The callback has the signature `(err, value) => any`.
function foo(callback, url, options) {
  apiCall(url, options)
    .then((data) => callback(null, data))
    .catch((err) => callback(err));
}

foo[Symbol.for('util.promisify.custom')] = (url, options) => {
  return new Promise((resolve, reject) => {
    foo(
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      },
      url,
      options,
    );
  });
};

const promisifiedFoo = foo[Symbol.for('util.promisify.custom')]; // true
const data = await promisifiedFoo('example.com', { foo: 1 });
*/

/**
 * @callback func
 * @returns Function
 */
export default function promisify(func) {
  if (func[Symbol.for('util.promisify.custom')]) {
    return func[Symbol.for('util.promisify.custom')];
  }
  
  return function(...args) {
    return new Promise((resolve, reject) => {
      return func.apply(this, [...args, (err, value) => 
        err ? reject(err) : resolve(value)]);
    });
  };
}
