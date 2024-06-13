import * as S from "./styled";

export interface ButtonProps {
  children: React.ReactNode;
  onClickHandler: () => void;
  disable?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClickHandler,
  disable,
}) => {
  return (
    <>
      <S.ButtonContainer onClick={onClickHandler} disabled={disable}>
        <S.ButtonContentWrapper>{children}</S.ButtonContentWrapper>
      </S.ButtonContainer>
    </>
  );
};
