import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Text } from "@/components";

import * as S from "./styled";

export interface ChoiceTokenButtonProps {
  selectTokenId: string;
  onClick: () => void;
}

export const ChoiceTokenButton: React.FC<ChoiceTokenButtonProps> = ({
  selectTokenId,
  onClick,
}) => {
  return (
    <>
      <S.ChoiceTokenButtonContainer
        onClick={onClick}
        whileHover={{
          backgroundColor: "#2d2f34",
        }}
      >
        <Text size={1.6} weight={400} colors="white">
          {selectTokenId}
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
