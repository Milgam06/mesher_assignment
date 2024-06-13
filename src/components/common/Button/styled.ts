import styled from "@emotion/styled";

import { CenterContainer } from "@/components/styles";

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4770d6;
  color: #fff;
  border: none;
  border-radius: 2rem;
  padding: 1.6rem 7.6rem;
  cursor: pointer;
  :disabled {
    color: #65676d;
    background-color: #222429;
  }
`;

export const ButtonContentWrapper = styled(CenterContainer)`
  width: 20rem;
`;
