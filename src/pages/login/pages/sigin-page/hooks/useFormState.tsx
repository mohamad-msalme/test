import React from "react";
import { useFormDirty } from "./useFormDirty";

export type TFormState = {
  password: string;
  email: string;
  remember: boolean;
};

const DEFAULT_VALUES: TFormState = {
  password: "",
  email: "",
  remember: false,
};

export const useFormState = () => {
  const valuesRef = React.useRef(DEFAULT_VALUES);
  const [values, setValues] = React.useState(DEFAULT_VALUES);

  const handleChange = <T extends keyof TFormState>(
    key: T,
    value: TFormState[T],
  ) =>
    setValues((prev) => ({
      ...prev,
      [key]: value,
    }));

  const isDirty = useFormDirty(values, valuesRef.current);

  return {
    values,
    handleChange,
    isDirty,
    valuesRef,
  };
};
