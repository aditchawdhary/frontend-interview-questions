/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
export default function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
      const results = new Array(iterable.length);
      let unresolved = iterable.length;
      if (unresolved === 0) {
        return resolve(results);;
      }

      iterable.forEach( async(item, index) => {
        try {
          const value = await item;
          results[index] = value;
          unresolved -= 1;

          if (unresolved === 0) {
            return resolve(results);
          }

        } catch (err) {
          return reject(err);
        }
      });
  });
}
