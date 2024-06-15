import { Global } from "@emotion/react";
import { globalStyle } from "@/styles";
import { ModalProvider } from "./providers";

import { Router } from "./router";

export const App: React.FC = () => {
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
