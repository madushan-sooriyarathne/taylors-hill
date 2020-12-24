import { useState } from "react";

const useInputState = (initialState = "") => {
  const [value, setValue] = useState(initialState);

  const updateValue = (event) => {
    setValue(event.target.value);
  };

  const resetValue = () => {
    setValue("");
  };

  return [value, updateValue, resetValue];
};

export default useInputState;
