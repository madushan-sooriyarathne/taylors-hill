import { InputWrapper, Input, TextArea, Label } from "./InputFieldStyles";

const InputField = ({
  name,
  type,
  value,
  onChange,
  pattern,
  required,
  textArea,
}) => {
  return (
    <InputWrapper>
      {textArea ? (
        <TextArea
          placeholder={`${name} ${required ? "(Required)" : ""}`}
          name={name}
          id={name.toLowerCase().replace(" ", "")}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
        />
      ) : (
        <Input
          placeholder={`${name} ${required ? "(Required)" : ""}`}
          name={name}
          id={name.toLowerCase()}
          type={type}
          pattern={pattern}
          required={required}
          value={value}
          onChange={onChange}
        />
      )}
      <Label htmlFor={name.toLowerCase().replace(" ", "")}>{`${name} ${
        required ? "(Required)" : ""
      }`}</Label>
    </InputWrapper>
  );
};

export default InputField;
