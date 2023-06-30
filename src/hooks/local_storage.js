import { useEffect, useState } from 'react'

export function useLocalStorage(key, fallbackValue) {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem(key);
    setValue(stored ? JSON.parse(stored) : fallbackValue);
  }, [key, fallbackValue]);

  useEffect(() => {
    if (value !== null) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}
