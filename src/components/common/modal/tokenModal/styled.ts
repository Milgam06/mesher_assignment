import styled from "@emotion/styled";

import { CenterContainer, SpaceBetweenContainer } from "@/components";

export const TokenModalContainer = styled(SpaceBetweenContainer)`
  flex-direction: column;
  gap: 0.8rem;
  /* border: 1px solid #fff; */
`;

export const TokenModalHeader = styled(SpaceBetweenContainer)`
  width: 100%;
  padding: 0 0.2rem;
`;

export const TokenSearchInputContainer = styled(CenterContainer)`
  width: 100%;
  padding: 0.6rem;
  background-color: #65676d;
  border-radius: 1rem;
  z-index: 999;
`;

export const TokenModalSearchHistoryContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const TokenModalSearchHistoryElement = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  /* border: 1px solid #fff; */
  border-radius: 1rem;
  cursor: pointer;
`;

export const TokenListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow-y: auto;
`;

export const TokenListElement = styled(SpaceBetweenContainer)`
  padding: 1rem;
`;
