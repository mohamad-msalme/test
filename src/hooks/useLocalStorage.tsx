import React from "react";

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
