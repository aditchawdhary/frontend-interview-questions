/*
Promise.withResolvers
The Promise.withResolvers() static method returns an object containing a new Promise object and two functions to resolve or reject it, corresponding to the two parameters passed to the executor of the Promise() constructor.

Source: Promise.withResolvers() - JavaScript | MDN

Such usage can improve code readability and make it easier to manage asynchronous operations, especially when you need to resolve or reject the Promise from different parts of your code.

Here's an example of how it can be used:


function delayedGreeting(name) {
  const { promise, resolve, reject } = Promise.withResolvers();

  setTimeout(() => {
    if (name) {
      resolve(`Hello, ${name}!`);
    } else {
      reject(new Error('Name is required.'));
    }
  }, 1000);

  return promise;
}

delayedGreeting('Alice')
  .then((message) => console.log(message)) // Output: Hello, Alice!
  .catch((error) => console.error(error));

delayedGreeting()
  .then((message) => console.log(message))
  .catch((error) => console.error(error)); // Output: Error: Name is required.
Requirement
Implement the Promise.withResolvers function as promiseWithResolvers, a standalone utility function.

Examples
Success case:

const { promise, resolve, reject } = promiseWithResolvers();
// Later in your code
resolve('Success!');
promise.then((result) => console.log(result)); // Output: Success!
Implementing a timeout:

function timeoutPromise(duration) {
  const { promise, resolve, reject } = promiseWithResolvers();
  setTimeout(() => reject(new Error('Timeout')), duration);
  return promise;
}

timeoutPromise(2000).catch((error) => console.error(error.message)); // Output after 2 seconds: Timeout

*/

/**
 * @returns { promise: Promise, resolve: Function, reject: Function }
 */
export default function promiseWithResolvers() {
  
  function resolve (...args) {resolve(...args)};
  function reject (...args) {reject(...args)};
  const promise = new Promise((res, rej) => {
      // resolve and reject are undefined at this point!
      // the only way to (resolve/ reject) this promise is with res/ rej, so we need to make a copy of those references
      
      resolve = res;
      reject = rej;
  });

  return { promise: promise, resolve: resolve, reject: reject };
}
