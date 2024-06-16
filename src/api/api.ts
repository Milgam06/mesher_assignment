import axios from "axios";

export interface Coin {
  id: string;
  symbol: string;
  name: string;
  platforms: {
    [key: string]: string;
  };
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
  },
});
