import { AxiosResponse } from "axios";
import { API_SUFFIX, Coin, instance } from "./api";

export const getList = async (): Promise<Coin[] | undefined> => {
  try {
    const response: AxiosResponse<Coin[]> = await instance.get(API_SUFFIX.LIST);
    console.log(response.data);
    console.log(API_SUFFIX.BASEURL, "adsfs");
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
