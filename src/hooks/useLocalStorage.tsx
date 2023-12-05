/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from "react";

/**
 * The `useLocalStorage` function is a custom React hook that allows you to store and retrieve values
 * in the browser's local storage.
 * @param {string} key - The `key` parameter is a string that represents the key under which the value
 * will be stored in the localStorage. It is used to retrieve and update the value associated with that
 * key.
 * @param {T} [initialValue] - The `initialValue` parameter is an optional parameter that represents
 * the initial value to be used if there is no stored value in the localStorage for the given key. It
 * is of type `T`, which is a generic type that can be any type.
 * @returns The `useLocalStorage` function returns an object with three properties: `value`,
 * `setValue`, and `removeValue`.
 */
const useLocalStorage = <T,>(key: string, initialValue?: T) => {
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  const [value, setValue] = React.useState<T>(initial);

  const updateValue = (newValue: T | ((val: T) => T)) => {
    const newVal = newValue instanceof Function ? newValue(value) : newValue;
    setValue(newVal);
    localStorage.setItem(key, JSON.stringify(newVal));
  };

  const removeValue = () => {
    localStorage.removeItem(key);
    setValue(initialValue as T);
  };

  return React.useMemo(
    () => ({
      value,
      setValue: updateValue,
      removeValue,
    }),
    [value, key],
  );
};

export default useLocalStorage;
