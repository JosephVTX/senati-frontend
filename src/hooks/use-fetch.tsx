import axios from "@/libs/axios";
import { useSearchParams } from "react-router";
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
  includeSearchParams?: boolean;
} & Omit<UseQueryOptions<T>, "queryKey" | "queryFn">;

export const useFetch = <T = unknown,>(
  path: string,
  options: FetchOptions<T> = {}
): UseQueryResult<T> => {
  const [searchParams] = useSearchParams();
  const {
    method = "GET",
    data,
    config,
    includeSearchParams = true,
    ...queryOptions
  } = options;

  // Si se deben incluir los parámetros de búsqueda en la solicitud, se añaden a `params`
  const axiosConfig: AxiosRequestConfig = {
    url: path,
    method,
    data,
    ...config,
  };

  if (includeSearchParams && searchParams.toString()) {
    axiosConfig.params = {
      ...axiosConfig.params,
      ...Object.fromEntries(searchParams.entries()),
    };
  }

  const queryKey: QueryKey = [path, method, JSON.stringify(data), searchParams.toString()];

  return useQuery<T>({
    queryKey,
    queryFn: () =>
      axios(axiosConfig).then((res) => res.data),
    refetchOnWindowFocus: false,
    refetchInterval: 1000 * 60 * 15,
    ...queryOptions,
  });
};
