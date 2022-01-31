import { useState } from "react";

const useInput = (validEnteredInput) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const validInput = validEnteredInput(enteredInput);
  const inputError = !validInput && inputIsTouched;

  const inputChangeHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  const inputOnBlurHandler = () => {
    setInputIsTouched(true);
  };

  const reset = () => {
    setEnteredInput("");
    setInputIsTouched(false)
  }
  return {
    enteredInput,
    validInput,
    inputError,
    inputChangeHandler,
    inputOnBlurHandler,
    reset,
  };
};

export default useInput;
