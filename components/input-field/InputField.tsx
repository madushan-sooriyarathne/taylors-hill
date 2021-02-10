import { ChangeEvent } from "react";
import { InputWrapper, Input, TextArea, Label } from "./InputFieldStyles";

interface Props {
  name: string;
  type: "email" | "text" | "password" | "date" | "tel";
  value: string;
  onChange: (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  required?: boolean;
  pattern?: string;
  textArea?: boolean;
}

const InputField: React.FC<Props> = ({
  name,
  type,
  value,
  onChange,
  pattern,
  required,
  textArea,
}: Props): JSX.Element => {
  return (
    <InputWrapper>
      {textArea ? (
        <TextArea
          placeholder={`${name} ${required ? "(Required)" : ""}`}
          name={name}
          id={name.toLowerCase().replace(" ", "")}
          value={value}
          onChange={onChange}
          required={required}
        />
      ) : (
        <Input
          placeholder={`${name} ${required ? "(Required)" : ""}`}
          name={name}
          id={name.toLowerCase()}
          type={type}
          value={value}
          onChange={onChange}
          pattern={pattern}
          required={required}
        />
      )}
      <Label htmlFor={name.toLowerCase().replace(" ", "")}>{`${name} ${
        required ? "(Required)" : ""
      }`}</Label>
    </InputWrapper>
  );
};

export default InputField;
