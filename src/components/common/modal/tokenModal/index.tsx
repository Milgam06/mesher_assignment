import { useEffect, useState } from "react";

import { Text, Input } from "@/components";
import { getList, Coin } from "@/api";

import * as S from "./styled";

export const TokenModal: React.FC = () => {
  const [tokenList, setTokenList] = useState<Coin[] | undefined>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTokenList = async () => {
      try {
        const response = await getList();
        setTokenList(response);
      } catch (error) {
        console.error("Failed to fetch token list:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTokenList();
  }, []);

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
          {!tokenList !== undefined ? (
            // tokenList.map((item) => (
            //   <S.TokenModalSearchHistoryElement>
            //     <Text size={1.2} weight={400} colors="#fff">
            //       {item.symbol}
            //     </Text>
            //   </S.TokenModalSearchHistoryElement>
            // ))
            <></>
          ) : (
            <Text size={2} weight={400}>
              Loading..
            </Text>
          )}
        </S.TokenModalSearchHistoryContainer>
        <S.TokenListContainer>
          {!loading && tokenList !== undefined ? (
            tokenList.map((item, key) => (
              <S.TokenListElement
                key={key}
                whileHover={{
                  backgroundColor: "#65676d",
                  transition: { duration: 0.1 },
                }}
              >
                <Text size={1.4} weight={400} colors="#fff">
                  {item.symbol.toUpperCase()}
                </Text>
              </S.TokenListElement>
            ))
          ) : (
            <S.TokenListLoadingContainer
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.6 }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              <Text size={1.8} weight={500} colors="#fff">
                Loading...
              </Text>
            </S.TokenListLoadingContainer>
          )}
        </S.TokenListContainer>
      </S.TokenModalContainer>
    </>
  );
};
