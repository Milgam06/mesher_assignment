import { Input, ChoiceTokenButton, Text } from "@/components";

import * as S from "./styled";

export const SwappingTokenContainer: React.FC = () => {
  return (
    <>
      <S.SwappingTokenContainer>
        <S.SwappingTokenInputContainer>
          <Input placeholder="0.0" inputType="number" />
          <ChoiceTokenButton />
        </S.SwappingTokenInputContainer>
        <S.SwappingTokenDollarValueContainer>
          <Text size={1} weight={300} colors="#B2B9D0">
            asdf
          </Text>
        </S.SwappingTokenDollarValueContainer>
      </S.SwappingTokenContainer>
    </>
  );
};
