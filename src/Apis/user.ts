import { AxiosResponse, AxiosRequestConfig } from "axios";
import history from "../history";
import api from "./base";
export const makePostRequest = <TRequest, TResponse>(
  url: string,
  data: TRequest,
  options: AxiosRequestConfig = {}
) =>
  new Promise<AxiosResponse<TResponse>>((resolve, reject) => {
    api
      .post<TRequest, AxiosResponse<TResponse>>(url, data, {
        headers: {
          ...(options.headers || {}),
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        method: "POST",
      })
      .then((response) => resolve(response))
      .catch((err) => {
        if (err.response.status === 401) {
          history.push("/login");
          reject(new Error(err.response.data.message));
        }
        reject(new Error(err.response.data.message));
      });
  });

export const makeGetRequest = <TResponse>(url: string) =>
  new Promise<AxiosResponse<TResponse>>((resolve, reject) => {
    return api
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => resolve(response))
      .catch((err) => {
        if (err.response.status === 401) {
          history.push("/login");
        }

        reject(new Error(err.response.data.message));
      });
  });
