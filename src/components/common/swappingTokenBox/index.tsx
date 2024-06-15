import * as S from "./styled";

export interface SwappingTokenBoxProps {
  children: React.ReactNode;
}

export const SwappingTokenOverlay: React.FC<SwappingTokenBoxProps> = ({
  children,
}) => {
  return (
    <>
      <S.SwappingTokenContainer>{children}</S.SwappingTokenContainer>
    </>
  );
};

export const SwappingTokenBox = Object.assign(SwappingTokenOverlay, {
  TokenInput: S.SwappingTokenInputContainer,
  TokenDollarValue: S.SwappingTokenDollarValueContainer,
});
