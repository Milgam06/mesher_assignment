import { getPrice } from "@/api";

export interface GetCoinPriceProps {
  coinId: string;
}

export const useCoinPrice = () => {
  const getCoinPrice = async ({ coinId }: GetCoinPriceProps) => {
    try {
      const response = await getPrice(coinId);
      if (response !== undefined) {
        return response[coinId].usd;
      }
    } catch (error) {
      console.error("Failed to fetch coin price:", error);
    }
  };

  return { getCoinPrice };
};
