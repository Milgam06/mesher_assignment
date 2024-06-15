import { Text, Input } from "@/components";

import * as S from "./styled";

export const TokenModal: React.FC = () => {
  return (
    <>
      <S.TokenModalContainer>
        <S.TokenModalHeader>
          <Text size={1} weight={300} colors="#fff">
            토큰 선택
          </Text>
        </S.TokenModalHeader>
        <S.TokenSearchInputContainer>
          <Input
            placeholder="이름 검색 또는 주소 붙여 넣기"
            width="100%"
            height="2rem"
            inputType="string"
          />
        </S.TokenSearchInputContainer>
        <S.TokenModalSearchHistoryContainer></S.TokenModalSearchHistoryContainer>
      </S.TokenModalContainer>
    </>
  );
};
