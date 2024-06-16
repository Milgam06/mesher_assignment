import styled from "@emotion/styled";

import { CenterContainer } from "@/components/styles";

export const ButtonContainer = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4770d6;
  color: #fff;
  border: none;
  border-radius: 2rem;
  padding: 1.6rem 0;
  cursor: pointer;
  :disabled {
    color: #65676d;
    background-color: #222429;
  }
`;

export const ButtonContentWrapper = styled(CenterContainer)`
  max-width: 24rem;
`;
