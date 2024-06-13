import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Text } from "@/components";

import * as S from "./styled";

export const ChoiceTokenButton: React.FC = () => {
  return (
    <>
      <S.ChoiceTokenButtonContainer>
        <S.ChoiceTokenLogo src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" />
        <Text size={1.6} weight={400} colors="white">
          BTC
        </Text>
        <FontAwesomeIcon
          icon={faBars}
          color="#B2B9D0"
          style={{ width: "1.4rem", height: "1.4rem" }}
        />
      </S.ChoiceTokenButtonContainer>
    </>
  );
};
