import { HTMLInputTypeAttribute } from "react";
import * as S from "./styled";

export interface InputProps extends S.InputStyleProps {
  placeholder: string | number;
  inputType: HTMLInputTypeAttribute;
  value?: string;
  ref?: React.RefObject<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  inputType,
  width,
  height,
  ref,
  isFontLarge,

  onChange,
}) => {
  return (
    <>
      <S.InputWrapper
        placeholder={placeholder}
        width={width}
        height={height}
        isFontLarge={isFontLarge}
        type={inputType}
        pattern={inputType === "number" ? "^d+(.d{1,10})?$" : undefined}
        onChange={onChange}
        onWheel={(event) => (event.target as HTMLElement).blur()}
        ref={ref}
        step={inputType === "number" ? "0.0000000001" : undefined}
      />
    </>
  );
};
