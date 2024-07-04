import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = async (url: string, options?: AxiosRequestConfig<any>) => {
  const response = await instance.get(url, options);
  return response.data;
};

export const post = async (
  url: string,
  data: any,
  options?: AxiosRequestConfig<any>,
) => {
  const response = await instance.post(url, data, options);
  return response.data;
};

export default instance;
