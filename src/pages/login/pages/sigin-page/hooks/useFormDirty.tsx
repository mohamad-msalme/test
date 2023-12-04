import React from "react";
import { TFormState } from ".";

export const useFormDirty = (
  formState: TFormState,
  defaultFormState: TFormState,
) =>
  React.useMemo(() => {
    return Object.keys(defaultFormState).some(
      (key) =>
        formState[key as keyof TFormState] !==
        defaultFormState[key as keyof TFormState],
    );
  }, [formState, defaultFormState]);
