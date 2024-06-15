import * as S from "./styled";

export interface ModalProps {
  children: React.ReactNode;
}

export interface ModalOverlayProps {
  children?: React.ReactNode;
  onCloseClick?: () => void;
}

export const ModalComponent: React.FC<ModalProps> = ({ children }) => {
  return (
    <>
      <S.ModalContainer>{children}</S.ModalContainer>
    </>
  );
};

export const ModalOverlay: React.FC<ModalOverlayProps> = ({
  children,
  onCloseClick,
}) => {
  return (
    <>
      <S.ModalOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <S.ModalCloseContainer onClick={onCloseClick} />
        {children}
      </S.ModalOverlay>
    </>
  );
};

export const Modal = Object.assign(ModalComponent, { Overlay: ModalOverlay });
