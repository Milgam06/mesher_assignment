import axios from "axios";

export interface CoinProps {
  id: string;
  symbol: string;
  name: string;
}

export interface CoinPriceProps {
  [id: string]: {
    usd: number;
    usd_market_cap: number;
    usd_24h_vol: number;
    usd_24h_change: number;
    last_updated_at: number;
  };
}

export const API_SUFFIX = {
  BASEURL: import.meta.env.VITE_APIURL,
  LIST: "/coins/list",
  PRICE: "/simple/price?vs_currencies=USD&ids=",
  POPULAR: "/coins/top_gainers_losers",
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
