import { useQuery } from "react-query";
import { Global } from "@emotion/react";
import { globalStyle } from "@/styles";
import { ModalProvider } from "@/providers";
import { getList } from "@/api";
import { useTokenStore } from "@/stores";

import { Router } from "./router";

export const App: React.FC = () => {
  const { setTokenList } = useTokenStore();
  useQuery("tokenList", getList, {
    onSuccess: (data) => {
      setTokenList(data);
    },
    onError: (error) => {
      console.error("Failed to fetch token list:", error);
    },
  });
  return (
    <>
      <Global styles={globalStyle} />
      <ModalProvider>
        <Router />
      </ModalProvider>
    </>
  );
};
export default App;
