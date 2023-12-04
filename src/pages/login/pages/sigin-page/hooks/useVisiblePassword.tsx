/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from "react";
import { EyeIcon } from "../../../../../icons/EyeIcon";
import { EeySlashIcon } from "../../../../../icons/EeySlashIcon";

export type TPassword = "text" | "password";

export const useVisiblePassword = () => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(true);

  const togglePassVisib = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const passwordType: TPassword = isPasswordVisible ? "password" : "text";
  const passwordIcon = React.useMemo(
    () => (isPasswordVisible ? EyeIcon : EeySlashIcon),
    [isPasswordVisible],
  );

  return {
    togglePassVisib,
    passwordType,
    passwordIcon,
  };
};
