import styled from "@emotion/styled";

export const SwapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #191b1f;
  border: none;
  border-radius: 2rem;
  padding: 1.4rem;
`;

export const SwapContentContainer = styled.div`
  width: 40rem;
  height: 20rem;
  border: 1px solid red;
`;

export const SwapTokenContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border: 1px solid blue;
`;

export const SwapChangingTokenContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #fff;
`;
//Token you want to change

export const SwapTargetTokenContainer = styled.div``;
//Token you want to get
