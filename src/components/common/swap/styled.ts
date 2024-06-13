import { CenterContainer, SpaceBetweenContainer } from "@/components/styles";

import styled from "@emotion/styled";

export const SwapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #191b1f;
  border: none;
  border-radius: 2rem;
  padding: 1.4rem;
`;

export const SwapContentContainer = styled(CenterContainer)`
  flex-direction: column;
  /* border: 1px solid red; */
  gap: 1.4rem;
  padding: 1rem;
`;

export const SwapContentHeader = styled(SpaceBetweenContainer)`
  width: 100%;
  padding: 0 1rem;
`;

export const TokenContentContainer = styled(SpaceBetweenContainer)`
  flex-direction: column;
  gap: 0.4rem;
  /* border: 1px solid blue; */
`;

export const SwapChangingTokenContainer = styled(SpaceBetweenContainer)`
  flex-direction: column;
  background-color: #222429;
  padding: 1rem 1.4rem;
  border-radius: 2rem;
  gap: 0.6rem;
  /* border: 1px solid #fff; */
`;
//Token you want to change

export const SwapChangingTokenInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SwapChangingTokenDollarValueContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 0.6rem;
`;
