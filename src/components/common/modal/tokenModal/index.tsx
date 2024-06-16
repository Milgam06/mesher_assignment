import { Text, Input } from "@/components";
import { getList } from "@/api";

import * as S from "./styled";

export const TokenModal: React.FC = () => {
  const response = getList();
  console.log(response);
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
        <S.TokenModalSearchHistoryContainer>
          {response.map((item, i) => {
            return (
              <S.TokenModalSearchHistoryElement key={i}>
                <Text size={1.2} weight={400} colors="#fff">
                  {item}
                </Text>
              </S.TokenModalSearchHistoryElement>
            );
          })}
        </S.TokenModalSearchHistoryContainer>
        <S.TokenListContainer>
          <S.TokenListElement>
            <Text size={1.2} weight={400} colors="#fff">
              BTC
            </Text>
          </S.TokenListElement>
          <S.TokenListElement>
            <Text size={1.2} weight={400} colors="#fff">
              BTC
            </Text>
          </S.TokenListElement>
          <S.TokenListElement>
            <Text size={1.2} weight={400} colors="#fff">
              BTC
            </Text>
          </S.TokenListElement>
          <S.TokenListElement>
            <Text size={1.2} weight={400} colors="#fff">
              BTC
            </Text>
          </S.TokenListElement>
          <S.TokenListElement>
            <Text size={1.2} weight={400} colors="#fff">
              BTC
            </Text>
          </S.TokenListElement>
          <S.TokenListElement>
            <Text size={1.2} weight={400} colors="#fff">
              BTC
            </Text>
          </S.TokenListElement>
          <S.TokenListElement>
            <Text size={1.2} weight={400} colors="#fff">
              BTC
            </Text>
          </S.TokenListElement>
          <S.TokenListElement>
            <Text size={1.2} weight={400} colors="#fff">
              BTC
            </Text>
          </S.TokenListElement>
          <S.TokenListElement>
            <Text size={1.2} weight={400} colors="#fff">
              BTC
            </Text>
          </S.TokenListElement>
          <S.TokenListElement>
            <Text size={1.2} weight={400} colors="#fff">
              BTC
            </Text>
          </S.TokenListElement>
          <S.TokenListElement>
            <Text size={1.2} weight={400} colors="#fff">
              BTC
            </Text>
          </S.TokenListElement>
          <S.TokenListElement>
            <Text size={1.2} weight={400} colors="#fff">
              BTC
            </Text>
          </S.TokenListElement>
          <S.TokenListElement>
            <Text size={1.2} weight={400} colors="#fff">
              BTC
            </Text>
          </S.TokenListElement>
          <S.TokenListElement>
            <Text size={1.2} weight={400} colors="#fff">
              BTC
            </Text>
          </S.TokenListElement>
        </S.TokenListContainer>
      </S.TokenModalContainer>
    </>
  );
};
