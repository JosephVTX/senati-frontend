import { useState } from "react";
import { AxiosResponse } from "axios";
import axios from "@/libs/axios";

type FormData = Record<string, any>;
type Errors = Record<string, string | string[]>;

interface SubmitOptions {
  onSuccess?: (response: AxiosResponse) => void;
  onError?: (error: any) => void;
  onFinish?: () => void;
}

interface UseFormReturn<T> {
  data: T;
  setData: (
    key: keyof T | Partial<T> | ((prev: T) => Partial<T>),
    value?: any
  ) => void;
  reset: (...fields: (keyof T)[]) => void;
  post: (url: string, options?: SubmitOptions) => Promise<void>;
  put: (url: string, options?: SubmitOptions) => Promise<void>;
  patch: (url: string, options?: SubmitOptions) => Promise<void>;
  delete: (url: string, options?: SubmitOptions) => Promise<void>;
  errors: Errors;
  processing: boolean;
}

const useForm = <T extends FormData>(initialData: T): UseFormReturn<T> => {
  const [errors, setErrors] = useState<Errors>({});
  const [processing, setProcessing] = useState(false);

  // Use a Set to track changes without re-rendering
  const dataStore = new Map<keyof T, any>(Object.entries(initialData));

  const setData = (
    key: keyof T | Partial<T> | ((prev: T) => Partial<T>),
    value?: any
  ) => {
    if (typeof key === "string") {
      dataStore.set(key, value);
    } else if (typeof key === "function") {
      const prevData = Object.fromEntries(dataStore);
      const updatedData = key(prevData as T);
      Object.entries(updatedData).forEach(([k, v]) =>
        dataStore.set(k as keyof T, v)
      );
    } else {
      Object.entries(key).forEach(([k, v]) => dataStore.set(k as keyof T, v));
    }
  };

  const reset = (...fields: (keyof T)[]) => {
    if (fields.length === 0) {
      dataStore.clear();
      Object.entries(initialData).forEach(([k, v]) =>
        dataStore.set(k as keyof T, v)
      );
    } else {
      fields.forEach((field) => {
        if (initialData[field] !== undefined) {
          dataStore.set(field, initialData[field]);
        }
      });
    }
    setErrors({});
  };

  const submit = async (
    method: "post" | "put" | "patch" | "delete",
    url: string,
    options: SubmitOptions = {}
  ) => {
    setProcessing(true);
    setErrors({});
    try {
      const response = await axios({
        method,
        url,
        data: Object.fromEntries(dataStore),
      });

      options.onSuccess?.(response);
    } catch (error: any) {
      if (error.response?.data.errors) {
        setErrors(error.response.data.errors);
      }
      options.onError?.(error);
    } finally {
      setProcessing(false);
      options.onFinish?.();
    }
  };

  return {
    get data() {
      return Object.fromEntries(dataStore) as T;
    },
    setData,
    reset,
    post: (url: string, options?: SubmitOptions) =>
      submit("post", url, options),
    put: (url: string, options?: SubmitOptions) => submit("put", url, options),
    patch: (url: string, options?: SubmitOptions) =>
      submit("patch", url, options),
    delete: (url: string, options?: SubmitOptions) =>
      submit("delete", url, options),
    errors,
    processing,
  };
};

export default useForm;
