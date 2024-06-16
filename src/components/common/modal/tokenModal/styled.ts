import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { CenterContainer, SpaceBetweenContainer } from "@/components";

export const TokenModalContainer = styled(SpaceBetweenContainer)`
  flex-direction: column;
  gap: 1.2rem;
  margin: 1rem;
  margin-bottom: 0;
  /* border: 1px solid #fff; */
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
  border: 1px solid #65676d;
  border-radius: 1rem;
  cursor: pointer;
  padding: 0.4rem 0.6rem;
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
  justify-content: space-between;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0.8rem 1rem;
  cursor: pointer;
  letter-spacing: 0.08rem;
`;

export const TokenModalFooter = styled(CenterContainer)`
  width: 100%;
  background-color: #3e3e3f;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  padding: 0.8rem;
`;
