import { create } from "zustand";

export interface TokenPriceStoreProps {
  tokenPrice: number;
  secondTokenPrice: number;
  setTokenPrice: (price: number) => void;
  setSecondTokenPrice: (price: number) => void;
}

export const useTokenPriceStore = create<TokenPriceStoreProps>((set) => ({
  tokenPrice: 0,
  secondTokenPrice: 0,
  setTokenPrice: (price: number) => set({ tokenPrice: price }),
  setSecondTokenPrice: (price: number) => set({ secondTokenPrice: price }),
}));
