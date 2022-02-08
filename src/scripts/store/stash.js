/**
 * Just the minimum necessary to control application state
 */

const store = {};

/**
 * Stash a value into the store object.
 * @param { string } key : The Object key label
 * @param { any } value : The value linked to the key label.
 */
export const stash = (key, value) => {
  store[key] = value;
};

/**
 * Retrieve the value of a key label.
 * @param { string } : The key label name.
 */
export const read = (key) => store[key];
