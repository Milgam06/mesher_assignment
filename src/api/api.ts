import axios from "axios";

export interface Coin {
  id: string;
  symbol: string;
  name: string;
}

export const API_SUFFIX = {
  BASEURL: import.meta.env.VITE_APIURL,
  LIST: "/coins/list",
  PRICE: "/simple/price?vs_currencies=USD&ids=",
};

export const instance = axios.create({
  baseURL: API_SUFFIX.BASEURL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": "true",
  },
});

export type APIResponseStatusType = "SUCCESS" | "FAILED";

export interface APIResponse<T = unknown> {
  status: APIResponseStatusType;
  message: string;
  result: T;
}
