import { useEffect, useState } from "react";

export type ApiFn<R, A extends any[] = []> = (...args: A) => Promise<R>;

export interface UseFetchOutput<ResShape> {
  response: ResShape | undefined;
  error: any | undefined;
}

// interface Temp {
//   value1: string;
// }
export interface ResponseFn<T> {
  (url: string, options: RequestInit): UseFetchOutput<T>;
}

export const useFetch = <R, R2>(url: string, options: RequestInit = {}): UseFetchOutput<R> => {
  const [response, setResponse] = useState<R>();
  const [error, setError] = useState<Error>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  });
  return { response, error };
};
