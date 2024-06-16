import { CoinProps } from "@/api";
import { create } from "zustand";

export interface TokenStoreProps {
  tokenList: CoinProps[] | undefined;
  isLoading: boolean;
  setTokenList: (responseTokenList: CoinProps[] | undefined) => void;
  switchLoading: (loadingState: boolean) => void;
}

export const useTokenStore = create<TokenStoreProps>((set) => ({
  tokenList: [],
  isLoading: true,
  setTokenList: (responseTokenList) => set({ tokenList: responseTokenList }),
  switchLoading: (loadingState) => set({ isLoading: loadingState }),
}));
