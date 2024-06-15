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
} from "@/components";
import { useModal } from "@/providers";

import * as S from "./styled";

export const SwapComponent: React.FC = () => {
  const { open } = useModal();
  const [TokenChange, setTokenChange] = useState<boolean>(false);
  const onClick = () => {
    console.log("Swap clicked");
  };

  const openTokenModal = () => {
    open({ children: <TokenModal /> });
  };
  const onTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== "") {
      setTokenChange(true);
      console.log(e.target.value);
    } else {
      setTokenChange(false);
      console.log(e.target.value);
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
                  onChange={onTokenChange}
                />
                <ChoiceTokenButton onClick={openTokenModal} />
              </SwappingTokenBox.TokenInput>
              <SwappingTokenBox.TokenDollarValue>
                <Text size={1} weight={300} colors="#B2B9D0">
                  asdf
                </Text>
              </SwappingTokenBox.TokenDollarValue>
            </SwappingTokenBox>

            <SwappingTokenBox>
              <SwappingTokenBox.TokenInput>
                <Input
                  placeholder="0.0"
                  width="22rem"
                  height="4rem"
                  isFontLarge={true}
                  inputType="number"
                  onChange={onTokenChange}
                />
                <ChoiceTokenButton onClick={openTokenModal} />
              </SwappingTokenBox.TokenInput>
              <SwappingTokenBox.TokenDollarValue>
                <Text size={1} weight={300} colors="#B2B9D0">
                  asdf
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
