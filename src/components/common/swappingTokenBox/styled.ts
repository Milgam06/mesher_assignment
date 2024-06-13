import { SpaceBetweenContainer } from "@/components/styles";

import styled from "@emotion/styled";

export const SwappingTokenContainer = styled(SpaceBetweenContainer)`
  flex-direction: column;
  background-color: #222429;
  padding: 1rem 1.4rem;
  border-radius: 2rem;
  gap: 0.4rem;
  /* border: 1px solid #fff; */
`;
//Token you want to change

export const SwappingTokenInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;

export const SwappingTokenDollarValueContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 0.6rem;
`;
