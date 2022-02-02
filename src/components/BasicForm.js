import useBasicForm from "../hooks/use-basicform";

const BasicForm = () => {
  const {
    enteredInput: enteredNameInput,
    inputIsValid: nameInputIsValid,
    inputHasError: nameInputHasError,
    enteredInputHandler: enteredNameInputHandler,
    inputIsOnBlurHandler: nameInputIsOnBlurHandler,
    reset: resetInputName,
  } = useBasicForm((value) => value.trim() !== "");


  let formIsValid = false;
  if (nameInputIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();
    
    console.log(enteredNameInput);
    resetInputName();
  };

  const nameErrorClass = nameInputHasError ? "form-control invalid"
  : "form-control";

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={nameErrorClass}>
          <label htmlFor="name">First Name</label>
          <input
            value={enteredNameInput}
            type="text"
            id="name"
            onChange={enteredNameInputHandler}
            onBlur={nameInputIsOnBlurHandler}
          />
          {nameInputHasError && <p>First name can't be empty</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
