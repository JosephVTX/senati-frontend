import axios from "@/libs/axios";
import {
  useQuery,
  UseQueryResult,
  QueryKey,
  UseQueryOptions,
} from "@tanstack/react-query";
import { AxiosRequestConfig, Method } from "axios";

type FetchOptions<T> = {
  method?: Method;
  data?: any;
  config?: AxiosRequestConfig;
} & Omit<UseQueryOptions<T>, "queryKey" | "queryFn">;

export const useFetch = <T = unknown,>(
  path: string,
  options: FetchOptions<T> = {}
): UseQueryResult<T> => {
  const { method = "GET", data, config, ...queryOptions } = options;

  const queryKey: QueryKey = [path, method, JSON.stringify(data)];

  return useQuery<T>({
    queryKey,
    queryFn: () =>
      axios({
        url: path,
        method,
        data,
        ...config,
      }).then((res) => res.data),
    refetchOnWindowFocus: false,
    refetchInterval: 1000 * 60 * 15,
    ...queryOptions,
  });
};
