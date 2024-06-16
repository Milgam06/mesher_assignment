import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { CenterContainer, SpaceBetweenContainer } from "@/components";

export const TokenModalContainer = styled(SpaceBetweenContainer)`
  flex-direction: column;
  gap: 1.2rem;
  /* border: 1px solid #fff; */
`;

export const TokenModalLogo = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

export const TokenModalHeader = styled(SpaceBetweenContainer)`
  width: 100%;
  padding: 0 0.2rem;
`;

export const TokenSearchInputContainer = styled(CenterContainer)`
  width: 100%;
  text-align: center;
  padding: 0.6rem;
  border: 1px solid #65676d;
  border-radius: 1rem;
  z-index: 999;
  :focus-within {
    border: 1px solid #627eea;
  }
`;

export const TokenModalSearchHistoryContainer = styled.div`
  width: 30rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const TokenModalSearchHistoryElement = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.4rem;
  border: 1px solid #65676d;
  border-radius: 1rem;
  cursor: pointer;
  padding: 0.4rem;
`;

export const TokenListContainer = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  border-top: 1px solid #65676d;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const TokenListLoadingContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  letter-spacing: 0.2rem;
`;

export const TokenListElement = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  letter-spacing: 0.08rem;
`;
