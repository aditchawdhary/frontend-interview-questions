/**
 * @template T
 * @param { (value: T, index: number, array: Array<T>) => boolean } callbackFn
 * @param {any} [thisArg]
 * @return {Array<T>}
 */
Array.prototype.myFilter = function (callbackFn, thisArg) {
  const len = this.length;
  const results = [];

  for (let i=0; i<len; i++) {
    const cur_val = this[i];
    /*
    callbackFn
    A function to execute for each element in the array. 
    It should return a truthy value to keep the element in the resulting array, 
    and a falsy value otherwise. The function is called with the following arguments:

    element
    The current element being processed in the array.

    index
    The index of the current element being processed in the array.

    array
    The array filter() was called upon.

    thisArg Optional
    A value to use as this when executing callbackFn. See iterative methods.


    */
    if (Object.hasOwn(this, i) && callbackFn.call(thisArg, cur_val, i, this)) {
      results.push(cur_val);
    }
  }
  return results;
};
