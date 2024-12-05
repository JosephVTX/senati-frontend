import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router";

type UseQueryReturn = [string, (value: string) => void];

export default function useQuery(
  key: string,
  debounceDelay = 600
): UseQueryReturn {
  const [searchParams, setSearchParams] = useSearchParams();

  // Local state to manage query value
  const [queryValue, setQueryValue] = useState(searchParams.get(key) || "");

  // Timeout reference
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear previous timeout
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    // Set new timeout to update parameters
    debounceRef.current = setTimeout(() => {
      const newParams = new URLSearchParams(searchParams);

      // Omit 'page' parameter
      newParams.delete("page");

      if (queryValue) {
        newParams.set(key, queryValue);
      } else {
        newParams.delete(key); // Remove parameter if empty
      }

      setSearchParams(newParams);
    }, debounceDelay);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [queryValue]);

  return [queryValue, setQueryValue];
}
