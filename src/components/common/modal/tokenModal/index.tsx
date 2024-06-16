import { useEffect, useState } from "react";

import { Text, Input } from "@/components";
import { CoinProps } from "@/api";
import { useModal } from "@/providers";
import { useSearchToken, useCoinPrice } from "@/hooks";
import { useTokenStore, useSelectTokenStore } from "@/stores";

import * as S from "./styled";

export interface TokenModalProps {
  isFirstToken: boolean;
}

export const TokenModal: React.FC<TokenModalProps> = ({ isFirstToken }) => {
  const { getCoinPrice } = useCoinPrice();
  const [searchedTokens, setSearchedTokens] = useState<CoinProps[] | undefined>(
    []
  );
  const [searchHistory, setSearchHistory] = useState<CoinProps[]>([]);
  const { tokenList, isLoading } = useTokenStore();
  const { setSelectedFirstToken, setSelectedSecondToken } =
    useSelectTokenStore();
  const { close } = useModal();
  const { searchingToken } = useSearchToken();

  const onClick = () => {
    alert("준비 중입니다.");
  };

  useEffect(() => {
    const storedHistory = localStorage.getItem("searchHistory");
    if (storedHistory === null) {
      localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    } else {
      setSearchHistory(JSON.parse(storedHistory));
    }
  }, []);

  const shownTokenList = tokenList?.slice(0, 30);

  const onSearchToken = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = searchingToken({ searchValue: e.target.value });
    setSearchedTokens(result);
  };
  const onTokenClick = (token: CoinProps) => {
    isFirstToken
      ? (setSelectedFirstToken(token), getCoinPrice({ coinId: token.id }))
      : setSelectedSecondToken(token);
    const isTokenInHistory = searchHistory.some(
      (historyToken) => historyToken.id === token.id
    );
    if (!isTokenInHistory) {
      const updatedHistory = [token, ...searchHistory].slice(0, 7);
      setSearchHistory(updatedHistory);
      localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
    }
    console.log(token);
    close();
  };
  console.log(shownTokenList, isLoading);
  console.log(localStorage.getItem("searchHistory"));

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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onSearchToken(e)
            }
          />
        </S.TokenSearchInputContainer>
        <S.TokenModalSearchHistoryContainer>
          {searchHistory.map((item) => {
            return (
              <S.TokenModalSearchHistoryElement
                whileHover={{
                  backgroundColor: "#65676d",
                  transition: { duration: 0.2 },
                }}
                onClick={() => onTokenClick(item)}
              >
                <Text size={1.6} weight={400} colors="#fff">
                  {item.name}
                </Text>
              </S.TokenModalSearchHistoryElement>
            );
          })}
        </S.TokenModalSearchHistoryContainer>
        <S.TokenListContainer>
          {isLoading && shownTokenList !== undefined ? (
            searchedTokens !== undefined && searchedTokens.length > 0 ? (
              searchedTokens.map((item, key) => (
                <S.TokenListElement
                  key={key}
                  whileHover={{
                    backgroundColor: "#65676d",
                    transition: { duration: 0.1 },
                  }}
                  onClick={() => onTokenClick(item)}
                >
                  <Text size={1.4} weight={400} colors="#fff">
                    {item.symbol.toUpperCase()}
                  </Text>
                  <Text size={0.8} weight={200} colors="#fff">
                    {item.name}
                  </Text>
                </S.TokenListElement>
              ))
            ) : (
              shownTokenList.map((item, key) => (
                <S.TokenListElement
                  key={key}
                  whileHover={{
                    backgroundColor: "#65676d",
                    transition: { duration: 0.1 },
                  }}
                  onClick={() => onTokenClick(item)}
                >
                  <Text size={1.4} weight={400} colors="#fff">
                    {item.name.toUpperCase()}
                  </Text>
                  <Text size={0.8} weight={200} colors="#fff">
                    {item.name}
                  </Text>
                </S.TokenListElement>
              ))
            )
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
      <S.TokenModalFooter onClick={onClick}>
        <Text size={2} weight={300} colors="#4770d6">
          토큰 목록 관리
        </Text>
      </S.TokenModalFooter>
    </>
  );
};
