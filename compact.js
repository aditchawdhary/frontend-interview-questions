/*
Compact (Official solution)
/**
 * @param {Array} array: The array to compact.
 * @return {Array} Returns the new array of filtered values.
 */
export default function compact(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const value = array[i];

    // Skip falsey values
    if (value) {
      result.push(value);
    }
  }

  return result;
}
Here's a simpler solution that leverages Array.prototype.filter.


Open files in workspace

/**
 * @param {Array} array: The array to compact.
 * @return {Array} Returns the new array of filtered values.
 */
export default function compact(array) {
  return array.filter(Boolean);
}
Edge cases
Empty arrays and objects are not considered falsey.
Resources
Lodash _.compact
*/

/**
 * @param {Array} array: The array to compact.
 * @return {Array} Returns the new array of filtered values.
 */
export default function compact(array) {
  /**The key confusion here is about how .filter() works — it doesn't use the return value as the new element, 
   * it uses it as a truthy/falsy test to decide whether to keep or drop the original element.
   * So when you write:
   * val ? val : ""
   * .filter() evaluates that as a condition. The result is either val (truthy) or "" (falsy). 
   * In both cases, filter asks "is this result truthy?" — if yes, keep the original val, if no, drop it.
   * Since "" is falsy, any value that would have returned "" gets dropped entirely — filter never puts "" into the array.
 */
  
  return array.filter((val) => val ? val : "");
}
