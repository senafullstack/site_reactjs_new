import Axios from "axios";
import { apiUrl, rootUrl } from "./App";
export const Http = Axios.create({
  baseURL: rootUrl,
});

// criar autenticação com bearer
export const HttpAuth = Axios.create({
  baseURL: apiUrl,
});

HttpAuth.interceptors.request.use(async (config) => {
  config.headers.authorization =
    "Bearer " + (await localStorage.getItem("access_token"));
  return config;
});

HttpAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.removeItem("access_token");
        window.location.replace("login");
      }
    }
  }
);
