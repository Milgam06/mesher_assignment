import styled from "@emotion/styled";

export interface InputStyleProps {
  width: string;
  height: string;
  isFontLarge?: boolean;
}

export const InputWrapper = styled.input<InputStyleProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: none;
  background-color: transparent;
  font-size: ${(props) => (props.isFontLarge ? "3rem" : "1.2rem")};
  color: #fff;
  letter-spacing: 0.01rem;
  ::placeholder {
    color: #b2b9d0;
  }
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
