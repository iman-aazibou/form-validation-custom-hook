import { useState } from "react";

const useBasicForm = (isAValidInput) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputIsValid = isAValidInput(enteredInput);
  const inputHasError = !inputIsValid && inputIsTouched;


  const enteredInputHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  const inputIsOnBlurHandler= () => {
    setInputIsTouched(true)
  }

  const reset =()=> {
      setEnteredInput('');
      setInputIsTouched(false)
  }

  return {
      enteredInput,
      inputIsValid,
      inputHasError,
      enteredInputHandler,
      inputIsOnBlurHandler,
      reset,

  }
};
export default useBasicForm;
