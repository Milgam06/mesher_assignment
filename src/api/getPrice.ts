import { AxiosResponse } from "axios";
import { API_SUFFIX, instance, CoinPriceProps } from ".";

export const getPrice = async (
  id: string
): Promise<CoinPriceProps | undefined> => {
  try {
    const response: AxiosResponse<CoinPriceProps> = await instance.get(
      API_SUFFIX.PRICE + id
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
