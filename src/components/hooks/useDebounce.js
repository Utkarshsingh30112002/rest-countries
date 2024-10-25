import { useEffect, useState } from "react";

const useDebounce = (value) => {
  const [debouncedValue, setDebounsedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounsedValue(value);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  });
  return debouncedValue;
};

export default useDebounce;
