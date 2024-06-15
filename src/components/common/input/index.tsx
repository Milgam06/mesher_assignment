import { HTMLInputTypeAttribute } from "react";
import * as S from "./styled";

export interface InputProps {
  placeholder: string;
  inputType: HTMLInputTypeAttribute;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ placeholder, inputType }) => {
  return (
    <>
      <S.InputWrapper
        placeholder={placeholder}
        type={inputType}
        pattern={inputType === "number" ? "^d+(.d{1,10})?$" : undefined}
        onWheel={(event) => (event.target as HTMLElement).blur()}
        step={inputType === "number" ? "0.0000000001" : undefined}
      />
    </>
  );
};
