import AXIOS from "axios";
import { useAuthStore } from "@/store/auth-store";

const axios = AXIOS.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${
    useAuthStore.getState().auth?.access_token
  }`;
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      useAuthStore.getState().setAuth(null);
    }

    return Promise.reject(error);
  }
);

export default axios;
