import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import { SwappingTokenContainer, Button, Text } from "@/components";

import * as S from "./styled";

export const SwapComponent: React.FC = () => {
  const onClick = () => {
    console.log("Swap clicked");
  };

  const onSettingClick = () => {
    alert("준비 중입니다!");
  };
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
            <SwappingTokenContainer />
            <SwappingTokenContainer />
          </S.TokenContentContainer>
          <Button onClickHandler={onClick} disable={false}>
            <Text size={1.6} weight={400} colors="#fff">
              스왑
            </Text>
          </Button>
        </S.SwapContentContainer>
      </S.SwapContainer>
    </>
  );
};
