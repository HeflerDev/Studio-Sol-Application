/**
 * Just the minimum necessary to control application state
 */

const store = {};

/**
 * Stash a value into the store object.
 * @param { String } key : The Object key label
 * @param { Any } value : The value linked to the key label.
 * @return { Object } : Object with the key and value
 */
export const stash = (key, value) =>  {
  store[key] = value;
  return store;
}
/**
 * Retrieve the value of a key label.
 * @param { String } : The key label name.
 * @return { Object } : The value corresponding the key
 */
export const read = (key) => store[key];
