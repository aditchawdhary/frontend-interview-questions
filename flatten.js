/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value) {
  // Add a return to the next line
  // to pass the tests!
  let arr = [];

  function process(arg) {
    if (Array.isArray(arg)) {
      arg.forEach(process);
    } else {
      arr.push(arg);
    }
  }

  value.forEach(process);
  return arr;
}
