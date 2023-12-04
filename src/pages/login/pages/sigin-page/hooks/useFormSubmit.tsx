import React from "react";
import { TFormState } from "./useFormState";

export const useFormSubmit = (isDirty: boolean) => {
  const [errorMsg, setErrorMsg] = React.useState({
    email: "",
    password: "",
  });

  const isError = React.useMemo(
    () => Boolean(errorMsg.email) || Boolean(errorMsg.password),
    [errorMsg],
  );

  const validateForm = (values: TFormState): boolean => {
    const { email, password } = values;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);

    // Validate password length
    const isPasswordValid = password.length >= 6;

    if (!isEmailValid)
      setErrorMsg((prev) => ({ ...prev, email: "Invalid Email" }));
    if (!isPasswordValid)
      setErrorMsg((prev) => ({
        ...prev,
        password: "Invalid Password Should be greater than 6 char",
      }));
    if (isEmailValid && isPasswordValid)
      setErrorMsg(() => ({ email: "", password: "" }));
    // Return true if both email and password are valid
    return isEmailValid && isPasswordValid;
  };

  const handleSubmit = (
    values: TFormState,
    defaultFormValue: React.MutableRefObject<TFormState>,
  ) => {
    if (!isDirty) return;
    if (validateForm(values)) {
      console.log(values);
      defaultFormValue.current = values;
    } else {
      console.error("Form validation failed");
    }
  };

  return {
    handleSubmit,
    isError,
    errorMsg: errorMsg,
  };
};
