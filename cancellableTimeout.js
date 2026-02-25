/*
Cancellable Timeout
Implement a function setCancellableTimeout, that acts like setTimeout but instead of returning a timer ID, it returns a function that when called, cancels the pending callback function. 
The setCancellableTimeout function should have the exact same signature as setTimeout:


setCancellableTimeout(callback);
setCancellableTimeout(callback, delay);
setCancellableTimeout(callback, delay, param1);
setCancellableTimeout(callback, delay, param1, param2);
setCancellableTimeout(callback, delay, param1, param2, /* … ,*/ paramN);
You are recommended to read up on for setTimeout on MDN Docs if you are unfamiliar.

Examples

let i = 0;
// t = 0:
const cancel = setCancellableTimeout(() => {
  i++;
}, 100);
// t = 50:
cancel();
// t = 100: i is still 0 because cancel() was called.
*/


/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {Function}
 */
export default function setCancellableTimeout(callback, delay, ...args) {
  let timeout = undefined;

  
  timeout = setTimeout(() => {callback(...args), delay});

  return function cancel() {
    clearTimeout(timeout);
    timeout = undefined;
  }
}
