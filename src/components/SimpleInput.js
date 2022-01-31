import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  //name
  const {
    enteredInput: enteredName,
    validInput: enteredNameIsValid,
    inputError: errorEnteredName,
    inputChangeHandler: nameInputChangeHandler,
    inputOnBlurHandler: nameOnBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  //email

  const {
    enteredInput: enteredEmail,
    validInput: enteredEmailIsValid,
    inputError: emailError,
    inputChangeHandler: emailChangeHandler,
    inputOnBlurHandler: emailOnBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmition = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      console.log("error");
      return;
    }
    console.log(enteredName);
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClass = errorEnteredName
    ? "form-control invalid"
    : "form-control";

  const emailInputClass = emailError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmition}>
      <div className={nameInputClass}>
        {errorEnteredName && <p className="error-text"> it can't be empty</p>}
        <label htmlFor="name">Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameOnBlurHandler}
        />
      </div>
      <div className={emailInputClass}>
        {emailError && <p> must be a valid email</p>}
        <label htmlFor="email">E-mail</label>
        <input
          value={enteredEmail}
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailOnBlurHandler}
        ></input>
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
