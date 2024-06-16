import { AxiosResponse } from "axios";
import { API_SUFFIX, CoinProps, instance } from ".";

export const getList = async (): Promise<CoinProps[] | undefined> => {
  try {
    const response: AxiosResponse<CoinProps[]> = await instance.get(
      API_SUFFIX.LIST
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
