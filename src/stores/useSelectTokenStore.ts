import { create } from "zustand";

import { CoinProps } from "@/api";

export interface SelectTokenStoreProps {
  selectedToken: CoinProps[];
  setSelectedFirstToken: (token: CoinProps) => void;
  setSelectedSecondToken: (token: CoinProps) => void;
}

export const useSelectTokenStore = create<SelectTokenStoreProps>((set) => ({
  selectedToken: [
    { id: "dai", symbol: "dai", name: "Dai" },
    { id: "tether", symbol: "usdt", name: "Tether" },
  ],
  setSelectedFirstToken: (token: CoinProps) =>
    set((state) => {
      const updateToken = [token, ...state.selectedToken.slice(1)];
      return { selectedToken: updateToken };
    }),
  setSelectedSecondToken: (token: CoinProps) =>
    set((state) => {
      const updateToken = [
        state.selectedToken[0],
        token,
        ...state.selectedToken.slice(2),
      ];
      return { selectedToken: updateToken };
    }),
}));
