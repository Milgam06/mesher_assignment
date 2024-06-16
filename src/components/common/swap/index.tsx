import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import {
  Button,
  Text,
  Input,
  SwappingTokenBox,
  ChoiceTokenButton,
  TokenModal,
  TokenModalProps,
} from "@/components";
import { useModal } from "@/providers";
import { useSelectTokenStore, useTokenPriceStore } from "@/stores";
import { useCoinPrice } from "@/hooks";

import * as S from "./styled";

export interface TokenChangeProps {
  event: React.ChangeEvent<HTMLInputElement>;
}

export const SwapComponent: React.FC = () => {
  const { open } = useModal();
  const { getCoinPrice } = useCoinPrice();
  const { selectedToken } = useSelectTokenStore();
  const { tokenPrice, secondTokenPrice, setTokenPrice, setSecondTokenPrice } =
    useTokenPriceStore();
  const [TokenChange, setTokenChange] = useState<boolean>(false);
  const [firstTokenPrice, setFirstTokenPrice] = useState<number>(0);
  const [firstTokenValue, setFirstTokenValue] = useState<string>("");
  const [secondTokenValue, setSecondTokenValue] = useState<string>("");

  const onClick = () => {
    console.log("Swap clicked");
  };

  const openTokenModal = ({ isFirstToken }: TokenModalProps) => {
    open({ children: <TokenModal isFirstToken={isFirstToken} /> });
    console.log("Token Modal Opened");
  };

  useEffect(() => {
    const fetchTokenPrice = async () => {
      const firstPrice = await getCoinPrice({ coinId: selectedToken[0].id });
      const secondPrice = await getCoinPrice({ coinId: selectedToken[1].id });
      if (firstPrice !== undefined && secondPrice !== undefined) {
        setTokenPrice(firstPrice);
        setSecondTokenPrice(secondPrice);
      }
    };
    fetchTokenPrice();
  }, [selectedToken]);

  // useEffect(() => {
  //   if (firstTokenValue !== "") {
  //     const newFirstTokenPrice = Number(firstTokenValue) * tokenPrice;
  //     setFirstTokenPrice(newFirstTokenPrice);
  //     const newSecondTokenValue =
  //       (Number(firstTokenValue) * tokenPrice) / secondTokenPrice;
  //     setSecondTokenValue(newSecondTokenValue.toFixed(6)); // 소수점 6자리까지 표시
  //   } else {
  //     setFirstTokenPrice(0);
  //     setSecondTokenValue("0.0");
  //   }
  // }, [firstTokenValue, tokenPrice, secondTokenPrice]);

  const onTokenChange = ({ event }: TokenChangeProps) => {
    const value = event.target.value;
    if (event.target.value !== "") {
      //     setTokenChange(true),
      //       setFirstTokenPrice(Number((Number(value) * tokenPrice).toFixed(10)));
      //     setFirstTokenValue(
      //       Number(value).toFixed(10)
      //         ? value.split(".")[1].slice(0, 10)
      //         : value.toString()
      //     );
      //     setSecondTokenValue(
      //       (tokenPrice / secondTokenPrice).toFixed(10).toString()
      //     );
      //     console.log(firstTokenValue, secondTokenValue);
      //   } else {
      //     setTokenChange(false);
      //     setFirstTokenPrice(0);
      //   }
      // }; if (value !== "") {
      // 입력값이 숫자이고 소수점 이하 10자리 이내인지 확인
      const isValidInput = /^\d*\.?\d{0,10}$/.test(value);
      if (isValidInput) {
        setTokenChange(true);
        setFirstTokenPrice(Number((Number(value) * tokenPrice).toFixed(10)));
        setFirstTokenValue(value); // 소수점 10자리 이하로만 설정
        setSecondTokenValue(
          ((Number(value) * tokenPrice) / secondTokenPrice)
            .toFixed(10)
            .toString()
        );
        console.log(firstTokenValue, secondTokenValue);
      }
    } else {
      setTokenChange(false);
      setFirstTokenPrice(0);
      setFirstTokenValue("");
      setSecondTokenValue("0.0");
    }
  };

  const onSettingClick = () => {
    alert("준비 중입니다!");
  };
  useEffect(() => {
    console.log(TokenChange);
  }, [TokenChange]);
  return (
    <>
      <S.SwapContainer>
        <S.SwapContentContainer>
          <S.SwapContentHeader>
            <Text size={1.4} weight={300} colors="#fff">
              스왑
            </Text>

            <FontAwesomeIcon
              icon={faGear}
              color="#fff"
              style={{ width: "1.4rem", height: "1.4rem", cursor: "pointer" }}
              onClick={onSettingClick}
            />
          </S.SwapContentHeader>

          <S.TokenContentContainer>
            <SwappingTokenBox>
              <SwappingTokenBox.TokenInput>
                <Input
                  placeholder="0.0"
                  width="22rem"
                  height="4rem"
                  isFontLarge={true}
                  inputType="number"
                  value={firstTokenValue}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    onTokenChange({ event })
                  }
                />
                <ChoiceTokenButton
                  onClick={() => openTokenModal({ isFirstToken: true })}
                  selectTokenId={selectedToken[0].symbol.toUpperCase()}
                />
              </SwappingTokenBox.TokenInput>
              <SwappingTokenBox.TokenDollarValue>
                <Text size={1} weight={300} colors="#B2B9D0">
                  $ {firstTokenPrice}
                </Text>
              </SwappingTokenBox.TokenDollarValue>
            </SwappingTokenBox>

            <SwappingTokenBox>
              <SwappingTokenBox.TokenInput>
                <Input
                  placeholder={
                    firstTokenValue !== ""
                      ? (firstTokenPrice / secondTokenPrice).toFixed(10)
                      : // setSecondTokenValue(""))
                        "0.0"
                  }
                  width="22rem"
                  height="4rem"
                  isFontLarge={true}
                  inputType="number"
                  value={secondTokenValue}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    onTokenChange({ event })
                  }
                />
                <ChoiceTokenButton
                  onClick={() => openTokenModal({ isFirstToken: false })}
                  selectTokenId={selectedToken[1].symbol.toUpperCase()}
                />
              </SwappingTokenBox.TokenInput>
              <SwappingTokenBox.TokenDollarValue>
                <Text size={1} weight={300} colors="#B2B9D0">
                  $ {firstTokenPrice}
                </Text>
              </SwappingTokenBox.TokenDollarValue>
            </SwappingTokenBox>
          </S.TokenContentContainer>

          <Button onClickHandler={onClick} disable={!TokenChange}>
            <Text
              size={1.6}
              weight={400}
              colors={TokenChange ? "#fff" : "#5E5E5E"}
            >
              {TokenChange ? "스왑" : "금액을 입력하세요."}
            </Text>
          </Button>
        </S.SwapContentContainer>
      </S.SwapContainer>
    </>
  );
};
