import { FormEvent, useState } from "react";

const useInputState = (
  initialState: string = ""
): [
  string,
  (event: FormEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
  () => void
] => {
  const [value, setValue] = useState<string>(initialState);

  const updateValue = (
    event: FormEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    setValue((event.target as HTMLTextAreaElement | HTMLInputElement).value);
  };

  const resetValue = (): void => {
    setValue("");
  };

  return [value, updateValue, resetValue];
};

export default useInputState;
