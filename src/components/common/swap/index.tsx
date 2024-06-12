import { Input } from "../input";

import * as S from "./styled";

export const SwapComponent: React.FC = () => {
  return (
    <>
      <S.SwapContainer>
        <S.SwapContentContainer>
          <S.SwapTokenContainer>
            <S.SwapChangingTokenContainer>
              <Input />
            </S.SwapChangingTokenContainer>
          </S.SwapTokenContainer>
        </S.SwapContentContainer>
      </S.SwapContainer>
    </>
  );
};
