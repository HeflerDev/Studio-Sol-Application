/**
 * Just the minimum necessary to control application state
 */

const store = {};

export const stash = (key, value) => {
  store[key] = value;
};

export const read = (key) => store[key];

export const readStash = () => store;
